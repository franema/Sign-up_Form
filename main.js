const checkValidity = (() => {

    const errors = {
        "first-name": "error",
        "last-name": "error",
        "email": "error",
        "password": "error",
        "confirm-password": "error",
    }

    function showInvalidStyle(element) {
        element.classList.add('invalid')
    }

    function removeInvalidStyle(element) {
        element.classList.remove('invalid')
    }

    function manageErrors(element) {
        const $errorMessage = document.querySelector(`.${element.id}`)
        if (element.validity.valid) {
            $errorMessage.style.opacity = "0"
            removeInvalidStyle(element)
            errors[element.id] = ""
        } else {
            $errorMessage.textContent = errors[element.id]
            $errorMessage.style.opacity = "1"
            showInvalidStyle(element)
        }
    }

    return { errors, manageErrors, showInvalidStyle }

})()


const validateName = (() => {

    //DOM
    const $firstName = document.querySelector("#first-name")
    const $lastName = document.querySelector("#last-name")

    //Bind Events
    $firstName.addEventListener("input", showNameError)
    $lastName.addEventListener("input", showNameError)

    //Functions
    function showNameError(e) {
        if (e.target.validity.valueMissing) {
            checkValidity.errors[e.target.id] = "Enter your name"
        } else if (e.target.validity.patternMismatch) {
            checkValidity.errors[e.target.id] = "Your name can only contain alphabetic characters"
        } else if (e.target.validity.tooShort) {
            checkValidity.errors[e.target.id] = "Your name must contain at least 2 characters"
        } else if (e.target.validity.tooLong) {
            checkValidity.errors[e.target.id] = "Your name must have less than 16 characters"
        }

        checkValidity.manageErrors(e.target)
    }

})()

const validateEmail = (() => {

    //DOM
    const $email = document.querySelector("#email")

    //Bind Events
    $email.addEventListener("input", showEmailError)

    //Functions
    function showEmailError(e) {
        if (e.target.validity.valueMissing) {
            checkValidity.errors[e.target.id] = "Enter your email"
        } else if (e.target.validity.typeMismatch) {
            checkValidity.errors[e.target.id] = "Please enter a valid email"
        }

        checkValidity.manageErrors(e.target)
    }

})()

const validatePassword = (() => {

    //DOM
    const $password = document.querySelector("#password")
    const $confirmPassword = document.querySelector("#confirm-password")

    //Bind Events
    $password.addEventListener("input", showPasswordError)
    $confirmPassword.addEventListener("input", showConfirmPasswordError)

    //Functions
    function showPasswordError(e) {
        if (e.target.validity.valueMissing) {
            checkValidity.errors[e.target.id] = "Enter your password                              "
        } else if (e.target.validity.tooShort) {
            checkValidity.errors[e.target.id] = "Your password must contain at least 6 characters"
        } else if (e.target.validity.tooLong) {
            checkValidity.errors[e.target.id] = "Must be less than 16 characters"
        }

        checkValidity.manageErrors(e.target)
    }

    function showConfirmPasswordError(e) {
        if (e.target.validity.valueMissing) {
            checkValidity.errors[e.target.id] = "Please confirm your password"
        } else if ($password.value !== $confirmPassword.value) {
            $confirmPassword.setCustomValidity("Passwords do not match")
            checkValidity.errors[e.target.id] = "Passwords do not match"
        } else {
            $confirmPassword.setCustomValidity("")
        }
        checkValidity.manageErrors(e.target)
    }
})()

const validateForm = (() => {

    //DOM
    const $form = document.querySelector("form")
    const $formErrorMessage = document.querySelector(".invalid-form")
    const $inputs = document.querySelectorAll(".form-inputs input")

    //Bind Events
    $form.addEventListener("submit", checkErrors)

    //Functions
    function checkErrors(e) {
        if (checkValidity.errors["first-name"] !== "" ||
            checkValidity.errors["last-name"] !== "" ||
            checkValidity.errors["email"] !== "" ||
            checkValidity.errors["password"] !== "" ||
            checkValidity.errors["confirm-password"] !== ""
        ) {
            e.preventDefault()
            $formErrorMessage.style.opacity = "1"
            $inputs.forEach((input) => {
                if(input.value === "") {
                    checkValidity.showInvalidStyle(input)
                }
            })
        }

    }

})()