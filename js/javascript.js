const userName = prompt("Halo, masukkan nama kamu?");
  document.getElementById("welcome").innerText = `Halo ${userName}! Selamat datang di web kami`;

  function addMessage(event) {
    event.preventDefault();
    const name = document.getElementById("guest-name").value;
    const message = document.getElementById("guest-message").value;
    const messagesTable = document.getElementById("messages");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${name}</td><td>${message}</td>`;
    messagesTable.appendChild(newRow);
    document.getElementById("guest-name").value = "";
    document.getElementById("guest-message").value = "";
  }