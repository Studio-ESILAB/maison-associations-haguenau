import { html } from "./utils/environment";

export default function () {
    //   console.log("globals");
    
    // ==========================================================================
    // isMobile
    // ==========================================================================
    const isMobile =
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    ) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    
    window.isMobile = isMobile;
    
    if (window.isMobile) {
        html.classList.add("is-mobile");
    };
};
