function validateLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorBox = document.getElementById("loginError");

  const akunTerdaftar = {
    username: "firza123",
    password: "sampahku"
  };

  if (username !== akunTerdaftar.username && password !== akunTerdaftar.password) {
    errorBox.textContent = "Email dan password salah";
    return false;
  }

  if (username !== akunTerdaftar.username) {
    errorBox.textContent = "Email salah";
    return false;
  }

  if (password !== akunTerdaftar.password) {
    errorBox.textContent = "Password salah";
    return false;
  }

  errorBox.textContent = "";
  alert("Login berhasil!");
  return true;
}
