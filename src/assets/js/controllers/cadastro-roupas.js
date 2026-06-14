import {
    cadastrarRoupa,
    atualizarRoupa
} from "../services/cadastro-roupas.js";

import {
    getRoupaById
} from "../repository/cadastro-roupas.js";

import {
    get
} from "../repository/session.js";

const usuarioLogado = get();

if (!usuarioLogado) {

    alert(
        "Você precisa estar logado para cadastrar peças."
    );

    window.location.href =
        "../pages/login.html";

} else if (!usuarioLogado.vendedor) {

    alert(
        "Você precisa ser vendedor para cadastrar peças. " +
        "Acesse seu perfil e comece a vender."
    );

    window.location.href =
        "../pages/profile.html";
}

const form = document.getElementById(
    "clothes-form"
);

const errorElement = document.getElementById(
    "clothes-error"
);

const imageInput = document.getElementById(
    "imagem"
);

const imageName = document.getElementById(
    "image-name"
);

const imagePreview = document.getElementById(
    "image-preview"
);

const removeImageButton = document.getElementById(
    "remove-image"
);

const selectImagesButton = document.getElementById(
    "select-images"
);

const categoriaSelect = document.getElementById(
    "categoria"
);

const tamanhoSelect = document.getElementById(
    "tamanho"
);

const precoInput = document.getElementById(
    "preco"
);

const titulo = document.getElementById(
    "clothes-title"
);

const submitButton = document.getElementById(
    "clothes-submit"
);

let imagensSelecionadas = [];
let imagensExistentes = [];

const params = new URLSearchParams(window.location.search);
const editId = params.get("id");

const TAMANHOS_POR_CATEGORIA = {
    superior: ["PP", "P", "M", "G", "GG", "XG"],
    inferior: ["36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56"],
    calcados: ["33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50"],
    acessorios: ["Unico"]
};

function normalizar(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function atualizarTamanhos() {

    const tamanhos =
        TAMANHOS_POR_CATEGORIA[normalizar(categoriaSelect.value)];

    if (!tamanhos) {

        tamanhoSelect.innerHTML =
            "<option value=''>Selecione a categoria primeiro</option>";

        tamanhoSelect.disabled = true;

        return;
    }

    tamanhoSelect.innerHTML =
        "<option value=''>Selecione um tamanho</option>" +
        tamanhos
            .map(
                (t) => `<option value="${t}">${t}</option>`
            )
            .join("");

    tamanhoSelect.disabled = false;
}

categoriaSelect.addEventListener(
    "change",
    atualizarTamanhos
);

function formatarPreco(valor) {

    const digitos = valor.replace(/\D/g, "");

    if (!digitos) {
        return "";
    }

    return (Number(digitos) / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

precoInput.addEventListener("input", () => {
    precoInput.value = formatarPreco(precoInput.value);
});

function adicionarPreview(src) {

    const wrapper = document.createElement("div");

    wrapper.className = "image-preview__item";

    const img = document.createElement("img");

    img.src = src;

    img.style.width = "100px";

    img.style.height = "100px";

    img.style.objectFit = "cover";

    img.style.borderRadius = "8px";

    wrapper.appendChild(img);

    imagePreview.appendChild(wrapper);
}

function atualizarStatusImagens() {

    const total =
        imagensExistentes.length + imagensSelecionadas.length;

    if (total > 0) {

        imageName.textContent =
            `${total} imagem(ns) selecionada(s)`;

        removeImageButton.hidden = false;

    } else {

        imageName.textContent =
            "Nenhum arquivo selecionado";

        removeImageButton.hidden = true;
    }
}

// Modo edição: carrega a peça existente e preenche o formulário.
if (editId && usuarioLogado && usuarioLogado.vendedor) {

    const roupa = getRoupaById(editId);

    if (!roupa) {

        alert("Peça não encontrada.");

        window.location.href = "minhas-pecas.html";

    } else if (roupa.vendedorId !== usuarioLogado.id) {

        alert("Você só pode editar peças que cadastrou.");

        window.location.href = "minhas-pecas.html";

    } else {

        if (titulo) {
            titulo.textContent = "Editar peça";
        }

        if (submitButton) {
            submitButton.textContent = "Salvar alterações";
        }

        form.nome.value = roupa.nome;
        categoriaSelect.value = roupa.categoria;
        atualizarTamanhos();
        tamanhoSelect.value = roupa.tamanho;
        form.cor.value = roupa.cor;
        form.descricao.value = roupa.descricao;

        precoInput.value = Number(roupa.preco).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        imagensExistentes = [...(roupa.imagens ?? [])];

        imagensExistentes.forEach((src) => adicionarPreview(src));

        atualizarStatusImagens();
    }
}

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    errorElement.hidden = true;

    try {

        const imagensBase64 = [
            ...imagensExistentes,
            ...(await Promise.all(
                imagensSelecionadas.map((imagem) =>
                    converterImagem(imagem)
                )
            ))
        ];

        const precoNumerico =
            Number(form.preco.value.replace(/\D/g, "")) / 100;

        const roupa = {
            nome: form.nome.value.trim(),
            categoria: form.categoria.value.trim(),
            tamanho: form.tamanho.value.trim(),
            cor: form.cor.value.trim(),
            preco: precoNumerico,
            descricao: form.descricao.value.trim(),
            imagens: imagensBase64
        };

        if (editId) {

            atualizarRoupa({ ...roupa, id: editId });

            alert(
                "Peça atualizada com sucesso!"
            );

            window.location.href = "minhas-pecas.html";

            return;
        }

        cadastrarRoupa(roupa);

        alert(
            "Roupa cadastrada com sucesso!"
        );

        form.reset();

        atualizarTamanhos();

        imagensSelecionadas = [];

        imagePreview.innerHTML = "";

        atualizarStatusImagens();

    } catch (error) {

        errorElement.textContent =
            error.message;

        errorElement.hidden = false;
    }
});

const MAX_DIMENSAO = 800;

const QUALIDADE = 0.7;

function converterImagem(file) {

    return new Promise((resolve, reject) => {

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {

            const img = new Image();

            img.onload = () => {

                let { width, height } = img;

                if (width > height && width > MAX_DIMENSAO) {
                    height = Math.round(
                        (height * MAX_DIMENSAO) / width
                    );
                    width = MAX_DIMENSAO;
                } else if (height > MAX_DIMENSAO) {
                    width = Math.round(
                        (width * MAX_DIMENSAO) / height
                    );
                    height = MAX_DIMENSAO;
                }

                const canvas = document.createElement(
                    "canvas"
                );

                canvas.width = width;

                canvas.height = height;

                canvas
                    .getContext("2d")
                    .drawImage(img, 0, 0, width, height);

                resolve(
                    canvas.toDataURL("image/jpeg", QUALIDADE)
                );
            };

            img.onerror = () => {
                reject(
                    new Error("Erro ao processar imagem.")
                );
            };

            img.src = reader.result;
        };

        reader.onerror = () => {
            reject(
                new Error(
                    "Erro ao carregar imagem."
                )
            );
        };
    });
}

imageInput.addEventListener("change", () => {

    imagensSelecionadas = [
        ...imagensSelecionadas,
        ...Array.from(imageInput.files)
    ];

    Array.from(imageInput.files).forEach((file) => {

        const reader = new FileReader();

        reader.onload = (event) => {
            adicionarPreview(event.target.result);
        };

        reader.readAsDataURL(file);
    });

    atualizarStatusImagens();

    imageInput.value = "";
});

removeImageButton.addEventListener("click", () => {

    imagensSelecionadas = [];

    imagensExistentes = [];

    imageInput.value = "";

    imagePreview.innerHTML = "";

    atualizarStatusImagens();
});

selectImagesButton.addEventListener("click", () => {

    imageInput.click();
});
