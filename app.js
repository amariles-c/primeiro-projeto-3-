document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const formMessage = document.getElementById('formMessage');

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function clearErrors() {
    emailError.textContent = '';
    passwordError.textContent = '';
    formMessage.textContent = '';
    formMessage.className = 'message';
  }

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    clearErrors();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    let isValid = true;


    if (!email) {
      emailError.textContent = 'O e-mail é obrigatório.';
      isValid = false;
    } else if (!isValidEmail(email)) {
      emailError.textContent = 'Insira um e-mail válido.';
      isValid = false;
    }

    if (!password) {
      passwordError.textContent = 'A senha é obrigatória.';
      isValid = false;
    } else if (password.length < 6) {
      passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
      isValid = false;
    }

    if (isValid) {
      formMessage.textContent = 'Login realizado com sucesso!';
      formMessage.classList.add('success');

      console.log('Dados de login enviados:', { email, password });

    
    }
  });
});