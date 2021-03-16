document.querySelector(".navbar__menu").addEventListener('click', () => {
    {
        if (document.querySelector(".header").classList.contains("open")) {
            document.querySelector(".header").classList.remove("open");
            document.querySelectorAll(".has-fade").forEach((el) => {
                el.classList.add("fade-out");
                el.classList.remove("fade-in")
            });
        
        } else {
            document.querySelector(".header").classList.add("open");
            document.querySelectorAll(".has-fade").forEach((el) => {
                el.classList.add("fade-in");
                el.classList.remove("fade-out")
            });
        }
    }
}) 