const detailsForm = document.getElementById("destination_details_form");

detailsForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  //   get input elements from the input fields
  const destName = e.target.elements["name"].value;
  const destLocation = e.target.elements["location"].value;
  const destPhoto = e.target.elements["photo"].value;
  const destDesc = e.target.elements["description"].value;
  // clear out input fields
  for (let i = 0; i < detailsForm.length; i++) {
    detailsForm.elements[i].value = "";
  }
  // create destination card
  const destCard = createCard(destName, destLocation, destPhoto, destDesc);
  // display another header
  // const wishList = document.getElementById('h2')
  // if (wishList.length === 0){
  //     wishList.innerHTML = 'My Wish List';
  // }

  document.getElementById("destination_container").appendChild(destCard);
}

function createCard(name, location, description, photoURL) {
  const cardItem = document.createElement("div");
  cardItem.className = "card";

  const cardImg = document.createElement("img");
  cardImg.setAttribute("alt", name);
  let conImg = "images/tsavoeast.jpeg";
  if (photoURL.length === 0) {
    cardImg.setAttribute("src", conImg);
  } else {
    cardImg.setAttribute("src", photoURL);
  }
  cardItem.appendChild(cardImg);

  const cardBody = document.createElement("div");
  cardBody.className = "card_body";
  cardItem.appendChild(cardBody);

  const destName = document.createElement("h3");
  destName.innerHTML = name;
  cardItem.appendChild(destName);

  const destLoc = document.createElement("h4");
  destLoc.innerText = location;
  cardItem.appendChild(destLoc);

  if (description !== "") {
    const destDesc = document.createElement("p");
    destDesc.className = "card_text";
    destDesc.innerHTML = description;
    cardItem.appendChild(destDesc);
  }

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Remove";
  cardItem.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", handleDelete);

  function handleDelete(e) {
    e.preventDefault();
    const card = e.target.parentElement.parentElement;
    card.remove();
  }

  cardItem.appendChild(cardBody);
  return cardItem;
}
