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
  // {
  //   name: "Байкал",
  //   link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  // },
];

//Открытие формы профиля
let editButton = document.querySelector(".profile__edit-btn");
let formEditProfile = document.querySelector("#profile-form");
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let formElement = document.querySelector(".popup__container");
let inputName = document.querySelector(".popup__input-name");
let inputDescription = document.querySelector(".popup__input-description");

const popupOpen = () => {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  formEditProfile.classList.add("popup_opened");
};

editButton.addEventListener("click", popupOpen);

//Закртиые формы без сохранения
let closeButton = document.querySelector(".popup__btn-close");
const popupClose = () => {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  formEditProfile.classList.remove("popup_opened");
};
closeButton.addEventListener("click", popupClose);

//Редактирование профиля
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  popupClose();
}

formElement.addEventListener("submit", handleFormSubmit);

//Загрузка фоток и поставка лайков
const cardsContainer = document.querySelector(".elements__items");
initialCards.forEach((elem) => {
  const card = document.querySelector("#card").content;
  const cardElement = card.querySelector(".elements__item").cloneNode(true);
  cardElement.querySelector(".card__img").alt = elem.name;
  cardElement.querySelector(".card__img").src = elem.link;
  cardElement.querySelector(".card__name").textContent = elem.name;

  const likeButton = cardElement.querySelector(".card__like-btn");
  likeButton.addEventListener("click", (evt) => {
    evt.target.classList.toggle("card__like-btn_active");
    evt.target.classList.toggle("card__like-btn");
  });

  cardsContainer.append(cardElement);
});

//Открытие формы добавления карточки

let editButtonAddCard = document.querySelector(".profile__add-btn");
let formAddCard = document.querySelector("#card-form");
let formCardElement = formAddCard.querySelector(".popup__container");
let inputCardName = formAddCard.querySelector(".popup__input-name");
let inputCardLink = formAddCard.querySelector(".popup__input-description");

const popupOpenFormCard = () => {
  formAddCard.classList.add("popup_opened");
};

editButtonAddCard.addEventListener("click", popupOpenFormCard);

//Закрытие формы
let closeButtonCardForm = formAddCard.querySelector(".popup__btn-close");
const popupCloseCardForm = () => {
  inputCardName.value = "";
  inputCardLink.value = "";
  formAddCard.classList.remove("popup_opened");
};
closeButtonCardForm.addEventListener("click", popupCloseCardForm);

//Добавление новой карточки

function handleNewCardSubmit(evt) {
  evt.preventDefault();
  const newCard = document.querySelector("#card").content;
  const newCardElement = newCard
    .querySelector(".elements__item")
    .cloneNode(true);
  newCardElement.querySelector(".card__img").alt = inputCardName.value;
  newCardElement.querySelector(".card__img").src = inputCardLink.value;
  newCardElement.querySelector(".card__name").textContent = inputCardName.value;

  const likeButton = newCardElement.querySelector(".card__like-btn");
  likeButton.addEventListener("click", (evt) => {
    evt.target.classList.toggle("card__like-btn_active");
    evt.target.classList.toggle("card__like-btn");
  });
  popupCloseCardForm();

  cardsContainer.append(newCardElement);
}

formCardElement.addEventListener("submit", handleNewCardSubmit);
