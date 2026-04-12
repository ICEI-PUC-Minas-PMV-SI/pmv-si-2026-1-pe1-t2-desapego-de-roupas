# Especificações do Projeto
## Perfeis de Usuários

|                  |         Perfil Anunciante                                                      
|------------------|------------------------------------------------------------------------|
| **Descrição** | Usuário que deseja anunciar roupas que não utiliza mais para vendê-las. |
| **Necessidades** | 1. Cadastro simples e rápido de anúncios; 2. Possibilidade de adicionar fotos, descrição, tamanho e estado da peça; 3. Gerenciamento dos próprios anúncios publicados; 4. Canal de comunicação com interessados; 5. Segurança nas interações e negociações. |

|                  |         Perfil Interessado                                                     
|------------------|------------------------------------------------------------------------|
| **Descrição** | Usuário que acessa a plataforma com o objetivo de encontrar roupas para a compra. |
| **Necessidades** | 1. Sistema de busca eficiente; 2. Filtros por categoria, tamanho, preço e tipo de negociação; 3. Visualização clara das informações dos produtos; 4. Facilidade para entrar em contato com anunciantes; 5. Interface simples e intuitiva. |

|                  |         Perfil Administrador do Sistema                                                    
|------------------|------------------------------------------------------------------------|
| **Descrição** | Responsável pela gestão da plataforma, monitorando usuários e anúncios para garantir o bom funcionamento do sistema. |
| **Necessidades** | 1. Painel administrativo para gestão do sistema; 2. Ferramentas de moderação de anúncios; 3. Gestão de usuários cadastrados; 4. Sistema de denúncias; 5. Relatórios de atividade da plataforma. |

## Histórias de Usuários

Com base na análise das personas, foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Anunciante/Interessado   | criar uma conta na plataforma   | acessar as funcionalidades do sistema|
|Anunciante/Interessado | fazer login na plataforma | visualizar e gerenciar minhas atividades |
|Anunciante/Interessado | realizar doações | incentivar a reutilização de roupas |
|Anunciante | publicar uma roupa para desapego | vender peças que não utilizo |
|Anunciante | adicionar informações como tamanho, cor e descrição | facilitar o entendimento dos interessados |
|Anunciante | editar ou excluir minhas publicações | manter meus anúncios atualizados |
|Interessado | pesquisar roupas na plataforma |encontrar peças do meu interesse |
|Interessado | filtrar roupas por categoria, tamanho ou preço | encontrar peças de acordo com minha necessidade |
|Interessado | entrar em contato com o anunciante | tirar dúvidas ou negociar a peça |
|Interessado | favoritar peças | adquirir peças por um valor acessível |
|Administrador do Sistema | remover anúncios inadequados | manter a plataforma organizada |
|Administrador do Sistema | gerenciar usuários | garantir o bom funcionamento do sistema |

## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF- 01| A aplicação deve permitir que o usuário gerencie suas tarefas. | ALTA |  
|RF- 02| A aplicação deve permitir a emissão de um relatório de tarefas realizadas no mês. | MÉDIA | 
|RF- 03| O sistema deve permitir ao usuário publicar uma roupa para desapego. | ALTA | 
|RF- 04| O sistema deve permitir ao usuário comprar uma peça. | ALTA |
|RF- 05| O sistema deve permitir ao usuário poder inserir informações adicionais (tamanho, cor, descrição). | ALTA |
|RF- 06| O sistema deve possuir uma barra de busca. | ALTA |
|RF- 07| O sistema deve permitir que o usuário possa entrar em contato com o vendedor (ex: WhatsApp). | ALTA |
|RF- 08| O sistema deve permitir que o administrador possa remover conteúdos inadequados. | ALTA |
|RF- 09| O sistema deve permitir que o usuário edite ou exclua suas publicações. | ALTA |
|RF- 10| O sistema deve permitir filtragem das peças. | MÉDIA |
|RF- 11| O sistema deve permitir ao usuário favoritar peças. | MÉDIA |
|RF- 12| O sistema deve permitir ao administrador gerenciar usuários. | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| A interface deve ser simples e intuitiva. | ALTA | 
|RNF-02| O sistema deve ser responsivo (funcionar em celular, tablet e computador). | ALTA |
|RNF-03| As páginas devem carregar em média 3 segundos. | MÉDIA |
|RNF-04| O sistema deve funcionar nos navegadores padrão. |ALTA |
|RNF-05| O sistema deve apresentar mensagens claras em caso de erro. | ALTA |
|RNF-06| O sistema deve permitir upload de imagens de até 5 MB. | ALTA | 
|RNF-07| O sistema deve estar disponível 24/7. | ALTA |
|RNF-08| O código deve ser organizado e documentado. | MÉDIA |
|RNF-09| O sistema deve suportar pelo menos 50 usuários simultâneos. | MÉDIA |
|RNF- 10| O sistema deve funcionar nos principais sistemas operacionais. | MÉDIA |
|RNF- 12| O sistema deve manter padrão visual em todas as páginas. | MÉDIA |

