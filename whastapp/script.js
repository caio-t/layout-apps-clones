// Function to handle message sending
document.getElementById("sendButton").addEventListener("click", function () {
    const messageInput = document.getElementById("messageInput");
    const messageText = messageInput.value.trim();

    if (messageText) {
        // Create a new message element
        const newMessage = document.createElement("div");
        newMessage.classList.add("message", "sent");
        newMessage.innerHTML = `<p>${messageText}</p>`;

        // Append the message to the message container
        document.getElementById("messages-container").appendChild(newMessage);

        // Scroll to the latest message
        document.getElementById("messages-container").scrollTop = document.getElementById("messages-container").scrollHeight;

        // Clear the input field after sending
        messageInput.value = "";
    }
});

// Optional: Make pressing "Enter" send the message
document.getElementById("messageInput").addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        document.getElementById("sendButton").click();
    }
});

// Handle the Preview button to show message in WhatsApp layout
document.getElementById("previewButton").addEventListener("click", function () {
    const messageText = document.getElementById("messageField").value.trim();

    if (messageText) {
        // Create a new message element for preview
        const previewMessage = document.createElement("div");
        previewMessage.classList.add("message", "sent");
        previewMessage.innerHTML = `<p>${messageText}</p>`;

        // Append the preview message to the message container
        document.getElementById("messages-container").appendChild(previewMessage);

        // Scroll to the latest message
        document.getElementById("messages-container").scrollTop = document.getElementById("messages-container").scrollHeight;

        // Clear the textarea after preview
        document.getElementById("messageField").value = "";
    }
});