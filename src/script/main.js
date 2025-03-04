// dom

const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  alert(
    `Bienvenue Mr/Mme ${name}, merci de nous avoir contacter! \n Nous vous reviendrons bientot sur votre ${email}!`
  );
});
