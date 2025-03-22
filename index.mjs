import { prompt } from "./dist/index.js";

(async() => {
    const name = await prompt("name> ", 500);
    console.log(name);
})();
