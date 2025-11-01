document.getElementById("summarizeBtn").addEventListener("click", async () => {
    const text = document.getElementById("inputText").value;
    const output = document.getElementById("outputText");
    output.innerText = "Summarizing... ⏳";

    try {
        const response = await fetch("http://127.0.0.1:5000/summarize", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text })
        });

        const data = await response.json();
        output.innerText = data.summary || "No summary generated.";
    } catch (error) {
        output.innerText = "Error connecting to backend 😕";
        console.error(error);
    }
});
