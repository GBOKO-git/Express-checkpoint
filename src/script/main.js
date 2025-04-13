// dom

const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;


  if (!name || !email || !message) {
    alert("Vueillez reseigner tou les champ!")
  } else {
    alert(
      `Bienvenue Mr/Mme ${name}, merci de nous avoir contacter! \n Nous vous reviendrons bientot sur votre ${email}!`
    );
  }
  
});
