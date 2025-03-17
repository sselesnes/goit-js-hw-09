import '../css/styles.css';

const formData = { email: '', message: '' };
const formFeedback = document.querySelector('.feedback-form');

formFeedback.addEventListener('input', event => {
  const input = event.target.value;
  event.target.name === 'email'
    ? (formData.email = input)
    : (formData.message = input);
});

formFeedback.addEventListener('submit', event => {
  event.preventDefault();
});
