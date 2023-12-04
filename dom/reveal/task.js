(() => {
    const reveal = Array.from(document.querySelectorAll(".reveal"));
    const innerHeight = window.innerHeight;

    document.addEventListener("scroll", () => {
        for (const element of reveal) {
            const {top, height} = element.getBoundingClientRect();

            if ( (0 - height) < top && top < innerHeight ) {
                element.classList.add("reveal_active");
            } else {
                element.classList.remove("reveal_active");
            }
        }
    });
})();
