import lodash from 'lodash.throttle';

// Посилання на поля
const ref = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
} 

const key = "feedback-form-state"
const formData = {}

// Перевірка що є данні у сховищі. Додавання данних із сховища в інпут.
if(localStorage.getItem(key)) {
    ref.input.value = JSON.parse(localStorage.getItem(key)).email;
    ref.textarea.value = JSON.parse(localStorage.getItem(key)).message;
}

// Додавання слухача на input
    ref.form.addEventListener('input', lodash(addInLocalStore, 500))
   function addInLocalStore (e) {
        formData[e.target.name] = e.target.value;
        // console.log(formData)
        localStorage.setItem(key, JSON.stringify(formData))
    };

 // Додавання слухача на submit
ref.form.addEventListener('submit', onFormSubmit)
function onFormSubmit (e) {
    e.preventDefault(); /* заборона перезавантаження при submit */
    const object = JSON.parse(localStorage.getItem(key))
    console.log(object)
    
    localStorage.clear() /* очищення при submit */
}

