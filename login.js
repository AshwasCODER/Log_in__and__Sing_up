document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // Simulate login logic
  alert(`✅ Logged in successfully with email: ${email}`);
  document.getElementById('loginForm').reset();
});
