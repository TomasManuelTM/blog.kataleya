let formNewUser = document.getElementById("form");

if(formNewUser){
formNewUser.addEventListener("submit", async(e) => {

e.preventDefault();

const dadosForm = new FormData(formNewUser);

dadosForm.get("assunto");
// console.log(dadosFor);

const dados = await fetch('http://127.0.0.1:5500/',{
method:"PUT",
headers: {'Content-Type': `multipart/form-data;`},
body: dadosForm
});
console.log(dados)
});
}