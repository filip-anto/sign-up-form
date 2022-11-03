document.getElementById("password").addEventListener("keyup", () => checker());
document.getElementById("repeat_password").addEventListener("keyup", () => checker());
function checker() {
    if (document.getElementById("password").value === document.getElementById("repeat_password").value) {
        document.getElementById("password").setCustomValidity("");
        document.getElementById("repeat_password").setCustomValidity("");
    }else{
        document.getElementById("password").setCustomValidity("Invalid field.");
        document.getElementById("repeat_password").setCustomValidity("Invalid field.");
    }
}