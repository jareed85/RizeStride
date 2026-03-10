document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('regForm');
  const thanks = document.getElementById('thanks');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const grade = document.getElementById('grade').value;
    const email = document.getElementById('email').value;
    
    // Fake submit: log data
    console.log('Registered:', {name, grade, email});
    
    thanks.textContent = `✅ Thanks ${name}! Check your email for pledge sheet.`;
    thanks.style.display = 'block';
    form.style.display = 'none';
  });
});