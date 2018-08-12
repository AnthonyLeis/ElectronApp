const Model = require("../../model/index.js");

window.onload = function () {
  loginButton.onclick = login;
}

function login() {
  let name = username.value;
  let pass = password.value;
  if (Model.validateCredentials(name, pass)) window.location = "blackjack.html";
  return;
}
