document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // mencegah reload halaman

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  // contoh validasi sederhana
  if (username === "admin" && password === "12345") {
    message.style.color = "green";
    message.textContent = "Login berhasil!";
  } else {
    message.style.color = "red";
    message.textContent = "Username atau password salah!";
  }
});
