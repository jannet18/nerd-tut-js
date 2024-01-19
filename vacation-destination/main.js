// const detailsForm = document.getElementById("destination_details_form");
// detailsForm.addEventListener("submit", handleFormSubmit);

// function handleFormSubmit(e) {
//   e.preventDefault();
//   const destName = e.target.elements["name"].value;
//   const destLocation = e.target.elements["location"].value;
//   const destPhoto = e.target.elements["photo"].value;
//   const destDescription = e.target.elements["description"].value;

//   for (let i = 0; i < detailsForm.length; i++) {
//     detailsForm.elements[i].value = "";
//   }

//   //   create card
//   const destCard = createDestinationCard(
//     destName,
//     destLocation,
//     destPhoto,
//     destDescription
//   );

//   // append a new heading
//   const wishList = document.getElementById("destination_container");
//   if (wishList.children.length === 0) {
//     document.getElementById("title").innerHTML = "My Wish List";
//   }
//   document.getElementById("destination_container").appendChild(destCard);
// }

// function createDestinationCard(name, location, photoURL, description) {
//   const card = document.createElement("div");
//   card.className = "card";

//   const cardImg = document.createElement("img");
//   cardImg.setAttribute("alt", name);
//   let constantImage = "images/tsavoeast.jpeg";

//   if (photoURL.length === 0) {
//     cardImg.setAttribute("src", constantImage);
//   } else {
//     cardImg.setAttribute("src", photoURL);
//   }
//   card.appendChild(cardImg);

//   const cardBody = document.createElement("div");
//   cardBody.className = "card_body";
//   card.appendChild(cardBody);

//   const cardTitle = document.createElement("h3");
//   cardTitle.innerHTML = name;
//   cardBody.appendChild(cardTitle);

//   const cardSubtitle = document.createElement("h4");
//   cardSubtitle.innerHTML = location;
//   cardBody.appendChild(cardSubtitle);

//   if (description !== "") {
//     const cardText = document.createElement("p");
//     cardText.className = "card_text";
//     cardText.innerHTML = description;
//     card.appendChild(cardText);
//   }

//   const removeBtn = document.createElement("button");
//   removeBtn.className = "btn";
//   removeBtn.innerText = "Remove";
//   cardBody.appendChild(removeBtn);

//   removeBtn.addEventListener("click", handleRemoveBtn);
//   function handleRemoveBtn(e) {
//     e.preventDefault();
//     const card = e.target.parentElement.parentElement;
//     card.remove();
//   }
//   return card;
// }
