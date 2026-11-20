const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];


const editProfileButton = document.querySelector(".profile__edit-btn");
const addCardButton = document.querySelector(".profile__add-btn");

//Функции открытия и закрытия попапов

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

const closeButtons = document.querySelectorAll(".popup__btn-close");

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

//=====================================Edit profile======================//
// Переменные попапа
const editProfilePopup = document.querySelector("#profile-form");
const formProfilePopup = editProfilePopup.querySelector(".popup__container");
const inputNameProfile = formProfilePopup.querySelector("#profile-name");
const inputDescriptionProfile = formProfilePopup.querySelector("#profile-description");

//Переменные профиля
const profileSection = document.querySelector(".profile");
const profileName = profileSection.querySelector(".profile__name");
const profileDescription = profileSection.querySelector(
  ".profile__description",
);

//Открытие попапа для изменения профиля

function openProfileForm() {
  inputNameProfile.value = profileName.textContent;
  inputDescriptionProfile.value = profileDescription.textContent;
  openPopup(editProfilePopup);
}
editProfileButton.addEventListener("click", openProfileForm);

//Редактирование профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputNameProfile.value;
  profileDescription.textContent = inputDescriptionProfile.value;
  closePopup(editProfilePopup);
}

formProfilePopup.addEventListener("submit", handleProfileFormSubmit);

//=====================================Add card=======================//

//Переменные попапа
const addCardPopup = document.querySelector("#card-form");
const formCardPopup = addCardPopup.querySelector(".popup__container");
const inputNameCard = addCardPopup.querySelector("#card-name");
const inputLinkCard = addCardPopup.querySelector("#card-link");

function openAddCardForm() {
  formCardPopup.reset();
  openPopup(addCardPopup);
}

addCardButton.addEventListener("click", openAddCardForm);

function likeCard(evt) {
  evt.target.classList.toggle("card__like-btn_active");
}

function deleteCard(evt) {
  evt.target.closest(".elements__item").remove();
}

//Объявление переменных для вставки карточек
const cardsContainer = document.querySelector(".elements__items");
const cardTemplate = document.querySelector("#card").content;

function createCard({ name, link }) {
  const card = cardTemplate.querySelector(".elements__item").cloneNode(true);
  const cardImg = card.querySelector(".card__img");
  cardImg.alt = name;
  cardImg.src = link;
  card.querySelector(".card__name").textContent = name;

  const likeButton = card.querySelector(".card__like-btn");
  likeButton.addEventListener("click", likeCard);

  const deleteCardButton = card.querySelector(".card__delete-btn");
  deleteCardButton.addEventListener("click", deleteCard);

  cardImg.addEventListener("click", () => openFullImagePopup(cardImg));

  return card;
}

//Добавление новой карточки

function handleNewCardSubmit(evt) {
  evt.preventDefault();
  cardsContainer.prepend(
    createCard({ name: inputNameCard.value, link: inputLinkCard.value }),
  );
  closePopup(addCardPopup);
}

formCardPopup.addEventListener("submit", handleNewCardSubmit);

//======================Full image====================//

// Переменные попапа
const fullImagePopup = document.querySelector("#image-full");
const fullImage = fullImagePopup.querySelector(".popup__full-image");
const captionImage = fullImagePopup.querySelector(".popup__caption");

function openFullImagePopup(image) {
  const imageAlt = image.alt;
  fullImage.src = image.src;
  fullImage.alt = imageAlt;
  captionImage.textContent = imageAlt;
  openPopup(fullImagePopup);
}

initialCards.forEach((cardData) => {
  cardsContainer.append(createCard(cardData));
});
