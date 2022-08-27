const toggleButton = document.querySelector('.toggle_button');
const navbarLinks = document.querySelector('.navbar_links');
const li = document.querySelector('.list_item');

const showLiItem = () => {
  navbarLinks.classList.toggle('active');
  toggleButton.classList.toggle('togglebutton1');
};
const closeMenu = () => {
  navbarLinks.classList.remove('active');
  toggleButton.classList.remove('togglebutton1');
};

toggleButton.addEventListener('click', showLiItem);
li.addEventListener('click', closeMenu);

const username = document.querySelector('#username');
const surname = document.querySelector('#surname');
const title = document.querySelector('#title');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup');

const showError = (input, msg) => {
  const formBox = input.parentElement;
  const errorMsg = formBox.querySelector('.error_text');
  formBox.classList.add('error');
  errorMsg.textContent = msg;
};

const clearError = (input) => {
  const formBox = input.parentElement;
  formBox.classList.remove('error');
};

const checkForm = (input) => {
  input.forEach((el) => {
    if (el.value === '') {
      showError(el, el.placeholder);
    } else {
      clearError(el);
    }
  });
};

const checkLength = (input, min) => {
  if (input.value.length < min) {
    showError(
      input,
      `${input.previousElementSibling.innerText.slice(
        0,
        -1,
      )} składa się z min. ${min} znaków.`,
    );
  }
};

const checkEmail = (email) => {
  //eslint-disable-next-line
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(email.value)) {
    clearError(email);
  } else {
    showError(email, 'E-mail jest niepoprawny');
  }
};

const checkErrors = () => {
  const allInputs = document.querySelectorAll('.form_box');
  let errorCount = 0;

  allInputs.forEach((el) => {
    if (el.classList.contains('error')) {
      errorCount++;
    }
  });

  if (errorCount === 0) {
    popup.classList.add('show-popup');
  }
};

sendBtn.addEventListener('click', (e) => {
  e.preventDefault();

  checkForm([username, surname, title, email, message]);
  checkLength(username, 3);
  checkLength(surname, 3);
  checkLength(message, 10);
  checkEmail(email);
  checkErrors();
});
clearBtn.addEventListener('click', (e) => {
  e.preventDefault()
  //eslint-disable-next-line
    [username, surname, title, email, message].forEach((el) => {
      el.value = '';
      clearError(el);
    });
});
