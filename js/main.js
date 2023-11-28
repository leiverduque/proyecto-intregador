let slider = document.querySelector('.slider .slider__list');
let items = document.querySelectorAll('.slider .slider__list .slider__item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .slider__dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(() => { next.click() }, 5500);
function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';
    let last_active_dot = document.querySelector('.slider .slider__dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { next.click() }, 3000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    })
})

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.button--add').forEach(function (button) {
        button.addEventListener('click', function () {
            let cartCount = parseInt(document.querySelector('.cart h2').textContent);

            if (cartCount < 10) {
                cartCount += 1;
                document.querySelector('.cart h2').textContent = cartCount;
            } else {
                alert("¡Limite de productos!");
            }
        });
    });

    document.querySelectorAll('.button--remove').forEach(function (button) {
        button.addEventListener('click', function () {
            let cartCount = parseInt(document.querySelector('.cart h2').textContent);

            if (cartCount > 0) {
                cartCount -= 1;
                document.querySelector('.cart h2').textContent = cartCount;
            } else {
                alert("Agregar producto.");
            }
        });
    });
});
 
document.addEventListener('DOMContentLoaded', function () {
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const phoneNumberInput = document.getElementById("number");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const additionalDetailsInput = document.getElementById("additional-details");
    const submitButton = document.getElementById("validate");

    const regexName = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s']+$/;
    const regexPhoneNumber = /^[0-9]{10}$/;

    function validateFirstName() {
        if (!regexName.test(firstNameInput.value)) {
            firstNameInput.nextElementSibling.innerText = "Ingresa un nombre válido";
        } else {
            firstNameInput.nextElementSibling.innerText = "";
        }
    }

    function validateLastName() {
        if (!regexName.test(lastNameInput.value)) {
            lastNameInput.nextElementSibling.innerText = "Ingresa un apellido válido";
        } else {
            lastNameInput.nextElementSibling.innerText = "";
        }
    }

    function validatePhoneNumber() {
        if (!regexPhoneNumber.test(phoneNumberInput.value)) {
            phoneNumberInput.nextElementSibling.innerText = "Ingresa un número de teléfono válido";
        } else {
            phoneNumberInput.nextElementSibling.innerText = "";
        }
    }

    function validateEmail() {
        validateEmail();
    }

    function validateMessage() {
        if (messageInput.value.trim() === "") {o
            messageInput.nextElementSibling.innerText = "deja tu comentario";
        } else {
            messageInput.nextElementSibling.innerText = "";
        }
    }

    function validate() {
        validateFirstName();
        validateLastName();
        validatePhoneNumber();
        validateEmail();
        validateMessage();
    }

    submitButton.onclick = validate;
});
