import { module as BaseModule } from "./modujs";
import Lenis from "./lenis";
import { gsap } from "./gsap";
import { ScrollTrigger } from "./gsap/ScrollTrigger";
import { ScrollSmoother } from "./gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default class extends BaseModule {
    constructor(m) {
        super(m);
        
        this.scrollItems = this.el.querySelectorAll("[data-scroll]");
    };
    
    init() {
        console.log("Scroll init");
        
        const scroll = new Lenis();
        
        scroll.on("scroll", ScrollTrigger.update);
        window.addEventListener("resize", () => {
            scroll.resize();
        });
        
        gsap.ticker.add((time) => {
            scroll.raf(time * 1000);
        });
        
        gsap.ticker.lagSmoothing(0);
        window.lenis = scroll;
        
        ScrollSmoother.create({
            smooth: 0,
            effects: true,
        });
        
        gsap.fromTo(this.el.querySelector(".c-hero__scroll-icon"),
        {
            opacity: 1,
            ease: "none",
        },
        {
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: this.el.querySelector(".c-hero"),
                start: "bottom 75%",
                scrub: true,
                // markers: true
            },
        });
    };
};
