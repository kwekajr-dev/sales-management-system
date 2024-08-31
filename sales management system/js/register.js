//hii ni kwaajili ya kuvalidate register form
const form = document.querySelector("form");
const fullNameInput = document.querySelector("#fullName");
const addressInput = document.querySelector("#address");
const emailInput = document.querySelector("#Email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#new_password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  
  if (fullNameInput.value.trim() === "") {
    alert("Please enter your full name");
    return;
  }

  
  if (addressInput.value.trim() === "") {
    alert("Please enter your address");
    return;
  }

 
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailInput.value.match(emailRegex)) {
    alert("Please enter a valid email address");
    return;
  }

  
  if (passwordInput.value.trim() === "") {
    alert("Please enter a password");
    return;
  }

  
  if (confirmPasswordInput.value.trim() !== passwordInput.value) {
    alert("Passwords do not match");
    return;
  }

  
  form.submit();
});
