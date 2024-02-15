import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="./vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="./javascript.svg" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Hackers!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click this link <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest">here</a> to learn more abiut the Manifest file.
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
