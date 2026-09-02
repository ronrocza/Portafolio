document.addEventListener("DOMContentLoaded", () => {

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    const cards = document.querySelectorAll(".portal-card");

    cards.forEach(card => {

        card.addEventListener("mousemove", event => {

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -4;
            const rotateY = ((x - centerX) / centerX) * 4;

            card.style.transform = `
                translateY(-15px)
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
            `;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });

        card.addEventListener("click", () => {
            console.log(`Accediendo a: ${card.dataset.service}`);
        });
    });
});
