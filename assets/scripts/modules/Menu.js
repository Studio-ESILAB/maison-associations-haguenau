import { module as BaseModule } from "./modujs";

export default class extends BaseModule {
    constructor(m) {
        super(m);
        
        this.events = {
            click: {
                MenuToggle: "MenuToggle",
                MenuLink: "MenuToggle",
            },
        };
    };
    
    init() {
        console.log("Menu init");
    };
    
    MenuToggle() {
        this.$("HeaderContainer")[0].classList.toggle("c-header__container--active");
        this.$("MenuContainer")[0].classList.toggle("c-menu--active");
        this.$("MenuToggle")[0].classList.toggle("c-header__menu-toggle--active");
    };
};
