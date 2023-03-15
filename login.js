// const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const handleBtnClick = () => {
    console.log(loginInput.value);
};

loginButton.addEventListener("click", handleBtnClick);