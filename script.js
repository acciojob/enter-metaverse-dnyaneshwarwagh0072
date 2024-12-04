 const enterButton = document.getElementById("enterBtn");
        const statusParagraph = document.getElementById("status");

        // Add an event listener to the button
        enterButton.addEventListener("click", () => {
            // Update the paragraph to an <h1> element with the desired text
            statusParagraph.outerHTML = '<h1 id="status">Entered Metaverse</h1>';
        });