// select elements

const modalOuter = document.getElementById('modalOuter');
const showOffer = document.getElementById('showOffer');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');
const acceptOffer = document.getElementById('acceptOffer');
const offerAccepted = document.getElementById('offerAccepted');
// functions
function showModal() {
  modal.classList.toggle('hidden');
  body.classList.toggle('opacity');
}

function closeModal() {
  modal.classList.toggle('hidden');
  body.classList.toggle('opacity');
}
function acceptOfferBtn() {
  modal.classList.add('hidden');
  showOffer.classList.add('hidden');
  offerAccepted.classList.remove('hidden');
  body.classList.toggle('opacity');
}
// event listeners

showOffer.addEventListener('click', showModal);

closeModalBtn.addEventListener('click', closeModal);

acceptOffer.addEventListener('click', acceptOfferBtn);

// body.addEventListener('click', closeModal);
