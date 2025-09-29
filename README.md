# Piano Simulator 🎹

Um simulador de piano interativo desenvolvido com tecnologias web fundamentais, que permite tocar notas musicais diretamente no navegador através do mouse ou teclado do computador.

## Sobre o Projeto

O Piano Simulator é uma aplicação web que reproduz a experiência de tocar piano com 17 teclas funcionais (brancas e pretas), oferecendo uma interface intuitiva e responsiva. O projeto foi desenvolvido utilizando apenas HTML, CSS e JavaScript vanilla, sem dependências de frameworks ou bibliotecas externas, demonstrando a capacidade das tecnologias web nativas para criar experiências interativas e imersivas.

## Funcionalidades

O simulador oferece interação através de cliques do mouse nas teclas virtuais ou utilizando o teclado do computador, com mapeamento específico de cada tecla para uma nota musical correspondente. O controle de volume permite ajustar a intensidade do som em tempo real através de um slider intuitivo. A aplicação também possibilita ocultar os indicadores das teclas para uma experiência visual mais limpa e realista. O feedback visual imediato é garantido através de animações CSS que destacam as teclas no momento em que são pressionadas, criando uma resposta tátil virtual. A interface responsiva se adapta a diferentes tamanhos de tela, e o design com gradientes e efeitos visuais simula a profundidade e o aspecto de um piano real.

## Tecnologias Utilizadas

- **HTML5**: Estruturação semântica da aplicação
- **CSS3**: Estilização, animações e efeitos visuais
- **JavaScript**: Lógica de interação, manipulação do DOM e reprodução de áudio
- **Web Audio API**: Reprodução de arquivos .wav para as notas musicais

## Como Usar

Para executar o projeto localmente, clone este repositório em sua máquina, abra o arquivo `index.html` em qualquer navegador moderno e comece a tocar usando o mouse ou as teclas mapeadas do teclado. As teclas do computador mapeadas são: a, w, s, e, d, f, t, g, y, h, u, j, k, o, l, p e ponto-e-vírgula (;), cada uma correspondendo a uma nota específica do piano.

## Estrutura do Projeto

```
Piano-simulator/
├── index.html          # Estrutura HTML principal
├── styles/
│   ├── reset.css      # Reset de estilos padrão
│   └── main.css       # Estilos principais da aplicação
├── script/
│   └── engine.js      # Lógica JavaScript do simulador
└── tunes/             # Arquivos de áudio (.wav) das notas
```

## Conceitos Técnicos Implementados

O projeto explora manipulação direta do DOM para captura e processamento de eventos do usuário, event listeners para interações de mouse e teclado, reprodução dinâmica de arquivos de áudio baseada em input do usuário, animações CSS com transições suaves para feedback visual, e controle de estado da aplicação através de JavaScript puro. A arquitetura é propositalmente minimalista, evidenciando que aplicações funcionais e agradáveis podem ser criadas sem a necessidade de frameworks complexos.

## Demonstração

Para experimentar o simulador, basta abrir o arquivo HTML em seu navegador e começar a tocar. O controle de volume está disponível no canto superior esquerdo, e você pode alternar a visibilidade das letras nas teclas usando o botão de alternância.

## Licença

Este projeto está disponível como código aberto para fins educacionais e de aprendizado.

---

Desenvolvido por [leolafa](https://github.com/leolafa)
