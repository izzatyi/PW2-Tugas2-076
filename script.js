const root = document.querySelector(".root");

window.onload = () => {
  alert("HALOO! Silakan isi data diri anda di bawah ini.\nCC-Izzati");
};

//header-start
const hWrapper = document.createElement("div");
hWrapper.classList.add("hWrapper");

const header = document.createElement("h1");
header.innerText = "Tugas-2 Praktikum Pemrograman Web";
header.classList.add("header");

hWrapper.append(header);
root.append(hWrapper);
// header-end

// main-content-start
const mainContent = document.createElement("div");
mainContent.classList.add("main-content")
root.appendChild(mainContent);

// form-start
const form = document.createElement("form");
const formContainer = document.createElement("div");

// input-username-start
const usernameWrp = document.createElement("div");

const usernameLabel = document.createElement("label");
usernameLabel.htmlFor = "usernameInput";
usernameLabel.innerText = "Username";

const usernameInput = document.createElement("input");
usernameInput.type = "text";
usernameInput.id = "usernameInput";
usernameInput.placeholder = "NUR ALIZA IZZATI";
usernameInput.required = "true"

usernameWrp.append(usernameLabel, usernameInput);
formContainer.appendChild(usernameWrp);
// input-username-end

// input-NIM-start
const nimWrp = document.createElement("div");

const nimLabel = document.createElement("label");
nimLabel.htmlFor = "nimInput";
nimLabel.innerText = "NIM";

const nimInput = document.createElement("input");
nimInput.type = "text";
nimInput.id = "nimInput";
nimInput.placeholder = "231401076";
nimInput.required = "true"

nimWrp.append(nimLabel, nimInput);
formContainer.appendChild(nimWrp);
// input-NIM-end

// input-KOM-start
const komWrp = document.createElement("div");

const komLabel = document.createElement("label");
komLabel.htmlFor = "komInput";
komLabel.innerText = "KOM";

const komInput = document.createElement("input");
komInput.type = "text";
komInput.id = "komInput";
komInput.placeholder = "A";
komInput.required = "true"

komWrp.append(komLabel, komInput);
formContainer.appendChild(komWrp);
// input-KOM-end

// input-photo-start
const photoWrp = document.createElement("div");

const photoLabel = document.createElement("label");
photoLabel.htmlFor = "photoInput";
photoLabel.innerText = "Upload Photo";

const photoInput = document.createElement("input");
photoInput.type = "file";
photoInput.id = "photoInput";
photoInput.accept = "image/png, image/jpeg";
photoInput.required = "true"

photoWrp.append(photoLabel, photoInput);
formContainer.appendChild(photoWrp);
// input-photo-end

const submit = document.createElement("input");
submit.type = "submit";

formContainer.append(submit);
form.append(formContainer);
mainContent.append(form);
// form-end

// card-start
const displayContainer = document.createElement("div");
displayContainer.classList.add("display-container");
mainContent.append(displayContainer);

displayContainer.style.display = "none";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const username = usernameInput.value;
  const nim = nimInput.value;
  const kom = komInput.value;
  const photo = photoInput.files[0];

  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = URL.createObjectURL(photo);
  img.alt = "User Photo";

  const usernameDisplay = document.createElement("p");
  usernameDisplay.innerText = `NAMA : ${username}`;

  const nimDisplay = document.createElement("p");
  nimDisplay.innerText =`NIM  : ${nim}`;

  const komDisplay = document.createElement("p");
  komDisplay.innerText =`KOM  :  ${kom}`;

  card.append(img, usernameDisplay, nimDisplay, komDisplay);

  displayContainer.innerHTML = "";
  displayContainer.append(card);

  displayContainer.style.display = "block";
  form.style.width = "370px";

  alert("Form berhasil disubmit!");
});
// card-end
// main-content-end
