const $password = document.querySelector("#password")
const $confirmPassword = document.querySelector("#confirm-password")

function checkMatch() {
    const $password = document.querySelector("#password")
    const $confirmPassword = document.querySelector("#confirm-password")
    if ($password.value !== $confirmPassword.value) {
        const message = document.querySelector(".password p")
        message.style.opacity = "1"
    }
    if ($password.value === $confirmPassword.value) {
        const message = document.querySelector(".password p")
        message.style.opacity = "0"
    }
}



$password.addEventListener("change", checkMatch)
$confirmPassword.addEventListener("change", checkMatch)