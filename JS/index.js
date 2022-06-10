
let checkEmail = () => {
    form.action = "";
    const email = document.getElementById("email");
    const emailValue = email.value;
    const errorBox = document.getElementById("error-message");

    if (emailValue == "") {
        setTimeout(hideAlert, 1000)
        function hideAlert() {
            errorBox.style.display = "none";
        }
        errorBox.style.display = "flex";
        return;
    } else {
        form.action = "/thank you page/thankyou.html";
    }
}
