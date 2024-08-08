// import modular from "./modujs";
// import * as modules from "./modules";
// import globals from "./globals";
// import { html } from "./utils/environment";

// const app = new modular({
//     modules: modules,
// });

window.addEventListener("load", () => {
    init();
});

function init() {
    // html.classList.remove("no-js");
    
    // globals();
    
    // app.init(app);

    // Menu toggler
    const MenuContainer = document.querySelector("[data-menu-container]");
    const MenuToggle = document.querySelector("[data-menu-toggle]");
    MenuToggle.addEventListener("click", () => {
        MenuContainer.classList.toggle("c-menu--closed");
        MenuToggle.classList.toggle("p-header__menu-toggle--active");
    });

};
