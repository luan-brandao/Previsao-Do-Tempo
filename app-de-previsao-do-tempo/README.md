🌤️ App de Previsão do Tempo — React Native (Expo)

Um aplicativo moderno de previsão do tempo desenvolvido com React Native + Expo, utilizando animações, componentes reutilizáveis e consumo de API em tempo real.
O usuário pode pesquisar qualquer cidade e visualizar informações climáticas atualizadas de forma rápida e intuitiva.

🚀 Tecnologias Utilizadas

React Native

Expo

Styled-Components

Axios

Lottie Animations

API de Previsão do Tempo (OpenWeatherMap ou similar)

📲 Funcionalidades

🔍 Busca por cidade

🌡️ Temperatura atual

☁️ Condições climáticas (céu limpo, chuva, nublado, etc.)

🎨 Interface moderna com tema personalizado

🎞️ Animações dinâmicas baseadas no clima

📍 Feedback visual instantâneo

📱 Layout responsivo para Android e iOS

🗂️ Estrutura do Projeto
app-de-previsao-do-tempo/
│── App.js
│── index.js
│── app.json
│── package.json
│
├── components/
│   ├── WeatherCard.js
│   ├── WeatherAnimations.js
│   └── SearchBar.js
│
├── hooks/
│   └── useWeather.js
│
├── styles/
│   └── globalStyles.js
│
├── theme/
│   └── theme.js
│
└── assets/
    ├── icon.png
    ├── splash-icon.png
    └── animações e ícones

⚙️ Como Executar o Projeto
1️⃣ Instale as dependências
npm install

2️⃣ Execute o aplicativo
npx expo start

3️⃣ Abra no seu dispositivo

Via app Expo Go

Ou no emulador Android/iOS

🔧 Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto:

API_KEY=SUA_CHAVE_AQUI

🧠 Principais Arquivos
🔹 useWeather.js

Responsável por buscar os dados na API e gerenciar estados.

🔹 WeatherCard.js

Exibe as informações do clima de forma estilizada.

🔹 WeatherAnimations.js

Renderiza animações conforme a condição climática.

🔹 SearchBar.js

Campo de pesquisa com debounce e UX refinado.
