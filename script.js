const enterButton = document.getElementById("enterBtn");
const statusContainer = document.getElementById("status-container");
enterButton.addEventListener("click", () => {
    statusContainer.innerHTML = '<h1 id="status">Entered Metaverse</h1>';
});