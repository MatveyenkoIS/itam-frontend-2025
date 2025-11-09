// Подключение шрифтов и стилей главной страницы
import "./main.css";

// Подключение роутера
import './router';

import App from "./App";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = App;