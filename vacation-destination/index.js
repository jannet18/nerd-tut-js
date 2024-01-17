const detailsForm = document.querySelector("#destination_details_form");

detailsForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  //   extract the value from each form field
  const destName = e.target.elements["name"].value;
  const destLocation = e.target.elements["location"].value;
  const destPhoto = e.target.elements["photo"].value;
  const destDesc = e.target.elements["description"].value;

  //   clear out form fields
  for (let i = 0; i < detailsForm.length; i++) {
    detailsForm.elements[i].value = "";
  }

  //   create destination card
  const destCard = createDestinationCard(
    destName,
    destLocation,
    destPhoto,
    destDesc
  );

  //   if needed change the header of the destination list
  const wishList = document.getElementById("destination_container");
  if (wishList.children.length === 0) {
    document.getElementById("title").innerHTML = "My Wish List";
  }
  wishList.innerText;

  //   add card
  document.querySelector("#destination_container").appendChild(destCard);
}
//   run a function that creates a new card
function createDestinationCard(name, location, photoURL, description) {
  const card = document.createElement("div");
  card.className = "card";

  const cardImg = document.createElement("img");
  cardImg.setAttribute("alt", name);

  let constantImg = "images/tsvoeast.jpeg";

  if (photoURL.length === 0) {
    cardImg.setAttribute("src", constantImg);
  } else {
    cardImg.setAttribute("src", photoURL);
  }
  card.appendChild(cardImg);

  const cardBody = document.createElement("div");
  cardBody.className = "card_body";

  const cardTitle = document.createElement("h3");
  cardTitle.innerHTML = name;
  cardBody.appendChild(cardTitle);

  const cardSubtitle = document.createElement("h4");
  cardSubtitle.innerHTML = location;
  cardBody.appendChild(cardSubtitle);

  //   if (description?.value?.length && description?.value?.length !== 0) {
  if (description !== "") {
    const cardDesc = document.createElement("p");
    cardDesc.className = "card_text";
    cardDesc.innerHTML = description;
    cardBody.appendChild(cardDesc);
  }

  const deleteBtn = document.createElement("button");
  deleteBtn.id = "button";
  deleteBtn.innerText = "Remove";
  deleteBtn.addEventListener("click", removeDestination);
  cardBody.appendChild(deleteBtn);

  function removeDestination(e) {
    const card = e.target.parentElement.parentElement;
    card.remove();
  }
  card.appendChild(cardBody);
  return card;
}
