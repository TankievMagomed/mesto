let editButton = document.querySelector(".profile__edit-btn");
let form = document.querySelector(".popup");
let closeButton = document.querySelector(".popup__btn-close");

let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let formElement = document.querySelector(".popup__container");
let inputName = document.querySelector(".popup__input-name");
let inputDescription = document.querySelector(".popup__input-description");

const popupOpen = () => {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  form.classList.add("popup_opened");
};

editButton.addEventListener("click", popupOpen);

const popupClose = () => {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  form.classList.remove("popup_opened");
};

closeButton.addEventListener("click", popupClose);

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  popupClose();
}

formElement.addEventListener("submit", handleFormSubmit);

// let likeButton = document.querySelector('.card__like-btn');

// const likeCard = () => {
//   likeButton.classList.toggle('card__like-btn_active');
//   likeButton.classList.toggle('card__like-btn');
// }

// likeButton.addEventListener('click', likeCard);
