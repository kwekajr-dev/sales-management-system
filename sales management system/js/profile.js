//hii n kwaajili ya ku-allow editing permission to user

document.addEventListener("DOMContentLoaded", function () {
  const editButton = document.getElementById("editButton");
  const saveButton = document.getElementById("saveButton");
  const fields = document.querySelectorAll(".field input");
  const genderRadios = document.querySelectorAll(".gender input");

  editButton.addEventListener("click", function () {
    fields.forEach((field) => field.removeAttribute("readonly"));
    genderRadios.forEach((radio) => radio.removeAttribute("disabled"));
    editButton.style.display = "none";
    saveButton.style.display = "inline-block";
  });

  saveButton.addEventListener("click", function () {
    fields.forEach((field) => field.setAttribute("readonly", true));
    genderRadios.forEach((radio) => radio.setAttribute("disabled", true));
    editButton.style.display = "inline-block";
    saveButton.style.display = "none";
  });
});
