import '../css/styles.css';

const formData = { email: '', message: '' };
const formFeedback = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

formFeedback.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

formFeedback.addEventListener('submit', event => {
  event.preventDefault();
  console.log(localStorage.getItem(localStorageKey));
});
