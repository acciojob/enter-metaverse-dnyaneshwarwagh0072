<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enter Metaverse</title>
</head>
<body>
    <p id="status">Enter the Metaverse</p>
    <button id="enterBtn">Enter</button>

    <script>
        // Select the button and paragraph elements
        const enterButton = document.getElementById("enterBtn");
        const statusParagraph = document.getElementById("status");

        // Add an event listener to the button
        enterButton.addEventListener("click", () => {
            // Update the paragraph to an <h1> element with the desired text
            statusParagraph.outerHTML = '<h1 id="status">Entered Metaverse</h1>';
        });
    </script>
</body>
</html>
