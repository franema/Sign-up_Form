const $password = document.querySelector("#password")
const $confirmPassword = document.querySelector("#confirm-password")
const $inputs = document.querySelectorAll("input")

function checkMatch() {
    const $password = document.querySelector("#password")
    const $confirmPassword = document.querySelector("#confirm-password")
    if ($password.value !== $confirmPassword.value) {
        const message = document.querySelector(".password p")
        message.style.opacity = "1"
        $confirmPassword.setCustomValidity("Passwords must match")
    }
    if ($password.value === $confirmPassword.value) {
        const message = document.querySelector(".password p")
        message.style.opacity = "0"
        $confirmPassword.setCustomValidity("")
    }
}

function showInvalidInput () {
    this.classList.add('invalid')
}

function removeInvalidStyle () {
    this.classList.remove('invalid')
}


$inputs.forEach((input) => {
    input.addEventListener("focus", showInvalidInput)
})

$inputs.forEach((input) => {
    input.addEventListener("input", removeInvalidStyle)
})


$password.addEventListener("input", checkMatch)
$confirmPassword.addEventListener("input", checkMatch)

