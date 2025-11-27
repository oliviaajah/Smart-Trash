function validateSignup() {
  const email = document.getElementById("email").value.trim();
  const errorBox = document.getElementById("signupError");

  const emailTerdaftar = "firza@email.com";

  if (email === emailTerdaftar) {
    errorBox.textContent = "Anda sudah memiliki akun";
    return false;
  }

  errorBox.textContent = "";
  alert("Pendaftaran berhasil!");
  return true;
}
