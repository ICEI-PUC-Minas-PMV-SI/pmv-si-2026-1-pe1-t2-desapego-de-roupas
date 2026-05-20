import {
    cadastrarRoupa
} from "../services/cadastro-roupas.js";

import {
    get
} from "../repository/session.js";

const usuarioLogado = get();

if (!usuarioLogado) {

    alert(
        "Você precisa estar logado para cadastrar roupas."
    );

    window.location.href =
        "../pages/login.html";
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

let imagensSelecionadas = [];

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    errorElement.hidden = true;

    try {

        const imagens = imagensSelecionadas;

        const imagensBase64 = await Promise.all(
            imagens.map((imagem) =>
                converterImagem(imagem)
            )
        );

        const roupa = {
            nome: form.nome.value.trim(),
            categoria: form.categoria.value.trim(),
            tamanho: form.tamanho.value.trim(),
            cor: form.cor.value.trim(),
            preco: form.preco.value.trim(),
            descricao: form.descricao.value.trim(),
            imagens: imagensBase64
        };

        cadastrarRoupa(roupa);

        alert(
            "Roupa cadastrada com sucesso!"
        );

        form.reset();

        imagensSelecionadas = [];

        imageName.textContent =
            "Nenhum arquivo selecionado";

        imagePreview.innerHTML = "";

    } catch (error) {

        errorElement.textContent =
            error.message;

        errorElement.hidden = false;
    }
});

function converterImagem(file) {

    return new Promise((resolve, reject) => {

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
            resolve(reader.result);
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

    if (imagensSelecionadas.length > 0) {

        imageName.textContent =
            `${imagensSelecionadas.length} imagem(ns) selecionada(s)`;

        Array.from(imageInput.files).forEach((file) => {

            const reader = new FileReader();

            reader.onload = (event) => {

                const img = document.createElement(
                    "img"
                );

                img.src = event.target.result;

                img.style.width = "100px";

                img.style.height = "100px";

                img.style.objectFit = "cover";

                img.style.borderRadius = "8px";

                img.style.marginTop = "10px";

                img.style.marginRight = "10px";

                imagePreview.appendChild(img);
            };

            reader.readAsDataURL(file);
        });

    } else {

        imageName.textContent =
            "Nenhum arquivo selecionado";
    }

    imageInput.value = "";
});

removeImageButton.addEventListener("click", () => {

    imagensSelecionadas = [];

    imageInput.value = "";

    imageName.textContent =
        "Nenhum arquivo selecionado";

    imagePreview.innerHTML = "";
});

selectImagesButton.addEventListener("click", () => {

    imageInput.click();
});