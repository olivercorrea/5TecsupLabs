const form = document.getElementById("uploadForm");
const fileInfoDiv = document.getElementById("file-info");
const errorMessageDiv = document.getElementById("error-message");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const response = await fetch("/upload", {
    method: "POST",
    body: formData,
  });
  if (response.ok) {
    const filesInfo = await response.json();
    errorMessageDiv.textContent = "";
    fileInfoDiv.innerHTML = "";
    filesInfo.forEach((fileInfo) => {
      const p = document.createElement("p");
      p.innerHTML = `
        <strong>Nombre:</strong> ${fileInfo.originalname}<br>
        <strong>Tamaño:</strong> ${fileInfo.size} bytes<br>
        <strong>Tipo MIME:</strong> ${fileInfo.mimetype}`;
      fileInfoDiv.appendChild(p);
    });
  } else {
    const errorMessage = await response.text();
    errorMessageDiv.textContent = errorMessage;
    fileInfoDiv.innerHTML = "";
  }
});
