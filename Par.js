// Validación de inicio de sesión
document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'alumno' && password === '2024') {
      window.location.href = 'curso.html';
    } else {
      document.getElementById('login-error').textContent = 'Usuario o contraseña incorrectos.';
    }
  });
  
  // Evaluación del cuestionario
  document.getElementById('quiz-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    let score = 0;
  
    // Evaluar las respuestas
    score += form.get('q1') === '1' ? 1 : 0;
  
    // Manejo seguro de preguntas de opción múltiple
    const q2Answers = form.getAll('q2');
    if (q2Answers.length > 0) {
      score += q2Answers.reduce((sum, value) => sum + parseInt(value, 10), 0);
    }
  
    score += form.get('q3') === '1' ? 1 : 0;
    score += form.get('q4') === '1' ? 1 : 0;
    score += form.get('q5') === '1' ? 1 : 0;
  
    // Mostrar el resultado
    document.getElementById('quiz-result').textContent = `Tu calificación es: ${score}/5`;
  });
  