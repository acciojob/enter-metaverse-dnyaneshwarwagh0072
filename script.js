 const enterButton = document.getElementById("enterBtn");
        const statusParagraph = document.getElementById("status");
        enterButton.addEventListener("click", () => {
        statusParagraph.outerHTML = '<h1 id="status">Entered Metaverse</h1>';
        });