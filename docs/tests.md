# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Realizar cadastro**
 :--------------: | ------------
**Procedimento**  | 1) Acessar a tela de cadastro. <br> 2) Preencher os campos do formulário. <br> 3) Confirmar o cadastro.
**Requisitos associados** | RF - 01
**Resultado esperado** | Usuário cadastrado.
**Dados de entrada** | Inserção de dados válidos.
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - Fazer login e logout**
 :--------------: | ------------
**Procedimento**  | 1) Acessar a tela de login. <br> 2) Informar e-mail e senha. <br> 3) Confirmar acesso. <br> 4) Acessar o perfil. <br> 5) Clicar em "sair". <br>
**Requisitos associados** | RF - 02
**Resultado esperado** | Usuário logado/deslogado.
**Dados de entrada** | Credenciais válidas.
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT03 - Publicar uma roupa**
 :--------------: | ------------
**Procedimento**  | 1) Acessar cadastro de roupas. <br> 2) Preencher os campos do formulário. <br> 3) Confirmar o cadastro. <br>
**Requisitos associados** | RF - 03
**Resultado esperado** | Roupa publicada.
**Dados de entrada** | Informações sobre a roupa.
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT04 - Cadastrar vendedor**
 :--------------: | ------------
**Procedimento**  | 1) Clicar no ícone do perfil. <br> 2) Selecionar "começar a vender".  <br> 3) Preencher os campos do formulário. <br> 4) Salvar alterações. <br>
**Requisitos associados** | RF - 04
**Resultado esperado** | Cadastro realizado.
**Dados de entrada** | Inserção de dados válidos.
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT05 - Inserir informações adicionais**
 :--------------: | ------------
**Procedimento**  | 1) Clicar no ícone do perfil. <br> 2) Clicar em "minhas peças". <br> 3) Selecionar a roupa desejada. <br> 4) Selecionar editar. <br> 5) Preencher os campos do formulário. <br> 6) Salvar alterações. <br>
**Requisitos associados** | RF - 05
**Resultado esperado** | Informações adicionadas.
**Dados de entrada** | Informações adicionais sobre a roupa.
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT06 - Pesuisar com barra de busca**
 :--------------: | ------------
**Procedimento**  | 1) Acessar a tela inicial. <br> 2) Filtrar pela barra de busca. <br>
**Requisitos associados** | RF - 06
**Resultado esperado** | Roupas exibidas.
**Dados de entrada** | Informações sobre a roupa.
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT07 - Contatar o vendedor**
 :--------------: | ------------
**Procedimento**  | 1) Acessar a roupa desejada. <br> 2) Clicar em "tenho interesse". <br>
**Requisitos associados** | RF - 07
**Resultado esperado** | Contato realizado.
**Dados de entrada** | Botão tenho interesse.
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT08 - Excluir publicações**
 :--------------: | ------------
**Procedimento**  | 1) Clicar no ícone do perfil. <br> 2) Clicar em "minhas peças". <br> 3) Selecionar a peça desejada. <br> 4) Excluir publicação. <br>
**Requisitos associados** | RF - 08
**Resultado esperado** | Publicação excluída.
**Dados de entrada** | Botão excluir.
**Resultado obtido** | Sucesso


## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*CT01 - Realizar cadastro*                                         |
|---|---|
|Requisito Associado | RF-01 - O sistema deve permitir que o usuário faça o cadastro.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/c/c6925907656eb377/IQAod4a0n8g6Q7mrEZ3tuJPAAcgYdcVy_YC2LNj-VsuWxos?e=vsWvn3 | 

|*Caso de Teste*                                 |*CT02 - Login e logout*                                        |
|---|---|
|Requisito Associado | RF-02 - O sistema deve permitir ao usuário conseguir fazer login e logout.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/c/c6925907656eb377/IQCNY8j8wNu3RaMDA8eGV2B-AXDGIhcdg9Sw1upDOHk7ofM?e=bTCRFb | 

|*Caso de Teste*                                 |*CT03 - Publicar uma roupa*                                         |
|---|---|
|Requisito Associado | RF-03 - O sistema deve permitir ao usuário publicar uma roupa para desapego.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/c/c6925907656eb377/IQAvbMBO8jD-SaOBYH9qS3fEAU7lLnt20dBV4ud5TqKXcV8?e=2ifPr9 | 

|*Caso de Teste*                                 |*CT04 - Cadastrar vendedor*                                         |
|---|---|
|Requisito Associado | RF-04 - O sistema deve permitir ao usuário realizar o cadastro de vendedor.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/c/c6925907656eb377/IQCiFqZ64UbTQJAbHl6XZCE8ASol2BkLgPnLl2Gr2yw0JYs?e=bcRMBn |

|*Caso de Teste*                                 |*CT05 - Inserir informações adicionais*                                         |
|---|---|
|Requisito Associado | RF-05 - O sistema deve permitir ao usuário poder inserir informações adicionais (tamanho, cor, descrição).|
|Link do vídeo do teste realizado: | https://1drv.ms/v/c/c6925907656eb377/IQAnGTphvIXDSY3N1vWDihvWAVi2wNy_QFhMmUbeY6Bar58?e=kpJASk |

|*Caso de Teste*                                 |*CT06 - Realizar pesquisa por barra de busca*                                         |
|---|---|
|Requisito Associado | RF-06 - O sistema deve possuir uma barra de busca que permita pesquisa.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/c/c6925907656eb377/IQACfpZKc5baToTdmZuKihc4AY25iiV38SAUxj0PuW8td64?e=KtedDN |

|*Caso de Teste*                                 |*CT07 - Entrar em contato com o vendedor*                                         |
|---|---|
|Requisito Associado | RF-07 - O sistema deve permitir que o usuário possa entrar em contato com o vendedor (ex: WhatsApp).|
|Link do vídeo do teste realizado: | https://1drv.ms/v/c/c6925907656eb377/IQDq67W2xDeeRLd0qVHPmJWwAXCJA48ZlaO_vT45b4_LsAs |

|*Caso de Teste*                                 |*CT08 - Excluir publicações*                                         |
|---|---|
|Requisito Associado | RF-08 - O sistema deve permitir que o usuário exclua suas publicações.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/c/c6925907656eb377/IQDR5djRT1UjTpyvvlUR2tYGAd_jKM69cK_EKVjMwUYsOuA?e=YdYnuz |




## Avaliação dos Testes de Software

Os testes realizados permitiram verificar o funcionamento das principais funcionalidades da plataforma Desapego de Roupas. De modo geral, os resultados foram satisfatórios, uma vez que todas as funcionalidades avaliadas apresentaram comportamento adequado e atenderam aos requisitos definidos para o projeto.

Entre os pontos fortes identificados, destacam-se a facilidade de navegação, a simplicidade do processo de cadastro de anúncios, a eficiência da pesquisa de roupas e a visualização das informações dos produtos anunciados. Os usuários conseguiram realizar as tarefas propostas sem dificuldades significativas, demonstrando que a interface é intuitiva e adequada ao público-alvo.

Como pontos de melhoria, foram identificadas oportunidades relacionadas à experiência do usuário, como a inclusão de filtros mais avançados na pesquisa, melhorias visuais em alguns formulários e maior destaque para informações importantes, como dados de contato dos anunciantes. Além disso, observou-se que algumas tarefas demandaram mais tempo dos usuários quando comparadas ao tempo do especialista, indicando possibilidades de otimização da navegação.

Para as próximas iterações do projeto, o grupo pretende implementar melhorias na interface, adicionar novos filtros de busca, aprimorar a validação dos formulários e realizar novos ciclos de testes com usuários, buscando aumentar ainda mais a eficiência e a satisfação na utilização da plataforma.

## Testes de unidade automatizados (Opcional)

Devido ao escopo acadêmico do projeto e ao tempo disponível para desenvolvimento, não foram implementados testes de unidade automatizados. A validação das funcionalidades foi realizada por meio de testes manuais, contemplando os principais fluxos de uso da aplicação, como cadastro de anúncios, pesquisa de roupas, visualização de detalhes e acesso às informações de contato dos anunciantes.

Como trabalho futuro, o grupo considera a implementação de testes automatizados, permitindo verificar automaticamente o funcionamento das funções JavaScript responsáveis pelo gerenciamento dos anúncios, armazenamento de dados e mecanismos de pesquisa. A adoção de testes automatizados contribuirá para aumentar a confiabilidade da aplicação e facilitar a manutenção do código em versões futuras.

# Testes de Usabilidade

Os testes de usabilidade foram realizados com o objetivo de avaliar a facilidade de utilização da plataforma Desapego de Roupas, verificando se os usuários conseguem executar as principais funcionalidades propostas pelo sistema de forma intuitiva e eficiente.

Participaram dos testes quatro usuários com perfis compatíveis com o público-alvo definido no projeto, incluindo pessoas interessadas em comprar roupas usadas, desapegar de peças que não utilizam mais e usuários familiarizados com compras e vendas em plataformas digitais. 

As funcionalidades avaliadas foram selecionadas com base nas principais histórias de usuário e objetivos da aplicação, abrangendo a busca de roupas disponíveis, a visualização dos detalhes de anúncios, o contato com anunciantes e a publicação de novos anúncios na plataforma.

Para a execução dos testes foram utilizadas as seguintes técnicas e ferramentas de UX:

Observação direta dos participantes durante a realização das tarefas propostas;
Cronômetro digital para medição do tempo necessário para concluir cada cenário;
Registro manual dos resultados em planilha eletrônica;
Escala de satisfação subjetiva composta por cinco níveis: Péssimo, Ruim, Regular, Bom e Ótimo;
Comparação do tempo de execução dos usuários com o tempo obtido por um especialista (desenvolvedor da aplicação).

Os indicadores analisados foram a taxa de sucesso na execução das tarefas, a satisfação subjetiva dos participantes e o tempo necessário para a conclusão de cada cenário


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar uma roupa usada. Encontre uma peça disponível na plataforma e visualize suas informações. |
| 2             | Você é uma pessoa que procura uma roupa específica. Utilize a pesquisa para encontrar uma peça de seu interesse. |
| 3             | Você é uma pessoa interessada em negociar uma roupa anunciada. Encontre as informações de contato do anunciante. |
| 4             | Você é uma pessoa que possui roupas que não utiliza mais. Cadastre um novo anúncio na plataforma para disponibilizar uma peça para venda. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar uma roupa usada. Encontre uma peça disponível na plataforma e visualize suas informações.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 18,42 segundos                  |
| 2       | SIM             | 5                    | 22,15 segundos                  |
| 3       | SIM             | 4                    | 25,87 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 4,67                | 22,15 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 9,34 segundos |


    Comentários dos usuários: A página dos anúncios é fácil de entender. 
    Consegui encontrar rapidamente as informações da roupa.


Cenário 2: Você é uma pessoa que procura uma roupa específica. Utilize a pesquisa para encontrar uma peça de seu interesse.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 14,38 segundos                          |
| 2       | SIM             | 4                    | 20,14 segundos                          |
| 3       | SIM             | 5                    | 18,75 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 17,76 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 7,82 segundos |


    Comentários dos usuários: A pesquisa funciona de forma simples e rápida. Poderiam existir mais filtros para refinar os resultados.


Cenário 3: Você é uma pessoa interessada em negociar uma roupa anunciada. Encontre as informações de contato do anunciante.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 21,36 segundos                          |
| 2       | SIM             | 4                    | 26,44 segundos                          |
| 3       | SIM             | 5                    | 24,91 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 24,24 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 10,11 segundos |


    Comentários dos usuários: O contato do anunciante foi encontrado sem dificuldades. Seria interessante destacar mais o botão de contato.   
    

Cenário 4: Você é uma pessoa que possui roupas que não utiliza mais. Cadastre um novo anúncio na plataforma para disponibilizar uma peça para venda.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 42,33 segundos                          |
| 2       | SIM             | 5                    | 48,76 segundos                          |
| 3       | SIM             | 5                    | 44,18 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5                | 45,09 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 18,42 segundos |


    Comentários dos usuários: O cadastro do anúncio é intuitivo. Não obtive nenhuma dificuldade ao cadastrar.


## Avaliação dos Testes de Usabilidade

Com base nos resultados obtidos, verificou-se que a plataforma Desapego de Roupas apresentou desempenho satisfatório em todos os cenários avaliados. A taxa de sucesso foi de 100%, demonstrando que os participantes conseguiram concluir as tarefas propostas sem impedimentos.

A satisfação subjetiva também apresentou resultados positivos, com médias variando entre 4,67 e 5, indicando que os usuários consideraram a navegação simples, intuitiva e adequada aos objetivos da aplicação.

Em relação ao tempo de execução, observou-se que os participantes levaram mais tempo para concluir as tarefas quando comparados ao especialista. Essa diferença é considerada normal, pois o desenvolvedor possui conhecimento prévio da estrutura da aplicação e da localização dos recursos disponíveis.

Os comentários coletados durante os testes apontaram alguns aspectos que podem ser aprimorados, como a inclusão de filtros mais avançados na busca, maior destaque para as informações de contato dos anunciantes e melhorias visuais no formulário de cadastro de anúncios.

De forma geral, os resultados indicam que a plataforma atende aos requisitos básicos de usabilidade, permitindo que os usuários realizem as principais tarefas de compra e venda de roupas usadas de maneira eficiente e satisfatória.



