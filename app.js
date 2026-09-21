document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const formMessage = document.getElementById('formMessage');

  // Função para validar formato do e-mail usando RegEx
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Limpa mensagens de erro
  function clearErrors() {
    emailError.textContent = '';
    passwordError.textContent = '';
    formMessage.textContent = '';
    formMessage.className = 'message';
  }

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio do formulário
    clearErrors();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    let isValid = true;

    // Validação do E-mail
    if (!email) {
      emailError.textContent = 'O e-mail é obrigatório.';
      isValid = false;
    } else if (!isValidEmail(email)) {
      emailError.textContent = 'Insira um e-mail válido.';
      isValid = false;
    }

    // Validação da Senha
    if (!password) {
      passwordError.textContent = 'A senha é obrigatória.';
      isValid = false;
    } else if (password.length < 6) {
      passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
      isValid = false;
    }

    // Se tudo estiver válido
    if (isValid) {
      // Simulação de login bem-sucedido
      formMessage.textContent = 'Login realizado com sucesso!';
      formMessage.classList.add('success');

      console.log('Dados de login enviados:', { email, password });

      // Aqui você pode adicionar a chamada de API / Backend
      // Exemplo: fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) })
    }
  });
});