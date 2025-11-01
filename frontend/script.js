async function summarizeText() {
  const fileInput = document.getElementById("fileInput");
  let text = document.getElementById("inputText").value;

  // 🧾 If user uploads a file, read its content
  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = async function(event) {
      text = event.target.result;
      await sendToBackend(text);
    };

    // For .txt or .pdf (we'll handle PDF separately)
    if (file.name.endsWith(".txt")) {
      reader.readAsText(file);
    } else if (file.name.endsWith(".pdf")) {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://127.0.0.1:5000/upload", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      document.getElementById("summaryOutput").innerText = data.summary;
    }
  } else {
    await sendToBackend(text);
  }
}

async function sendToBackend(text) {
  const response = await fetch("http://127.0.0.1:5000/summarize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: text })
  });

  const data = await response.json();
  document.getElementById("summaryOutput").innerText = data.summary;
}
