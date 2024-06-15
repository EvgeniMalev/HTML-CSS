function setupTextTruncation(containerClass) {
    document.querySelectorAll(`.${containerClass} p`).forEach(p => {
        const fullText = p.innerText;
        const truncatedText = fullText.split(' ').slice(0, 5).join(' ') + '...';
        p.setAttribute('data-full-text', fullText);
        p.innerText = truncatedText;
    });

    document.querySelectorAll(`.${containerClass} .see-more`).forEach(button => {
        button.addEventListener('click', () => {
            const p = button.previousElementSibling;
            if (button.innerText === "See More") {
                p.innerText = p.getAttribute('data-full-text');
                button.innerText = "See Less";
            } else {
                const truncatedText = p.getAttribute('data-full-text').split(' ').slice(0, 5).join(' ') + '...';
                p.innerText = truncatedText;
                button.innerText = "See More";
            }
        });
    });
}


setupTextTruncation('vehicles-container');
setupTextTruncation('astrounats-container');
