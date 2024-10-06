const ChangeVisibility = document.getElementById("Visible");
const ChangeInVisibility = document.getElementById("InVisible");
const text = document.getElementById("text");
  const password = document.getElementById("password");

ChangeVisibility.addEventListener("click", () => {
  Visible.style.display = "none";
  InVisible.style.display = "block";
  
 
 if (password.type === "text") {
   password.type = "password";
 } else {
   password.type = "text";
 }
  
});

ChangeInVisibility.addEventListener("click", () => {
  Visible.style.display = "block";
  InVisible.style.display = "none";
 
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
