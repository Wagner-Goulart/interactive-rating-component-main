const submitBtn = document.querySelector('#submitBtn');
const phraseResult = document.querySelector('#phrase-result');
const ratingCard = document.querySelector('#rating-state');
const ThakYouCard = document.querySelector('#thank-you-card');


function toggleCard() {
    ratingCard.classList.toggle('hide');
    ThakYouCard.classList.toggle('hide')
}

submitBtn.addEventListener('click', () =>{
    const inputRadioValue = document.querySelector("input[type='radio']:checked").value;

    phraseResult.innerHTML = `You selected ${inputRadioValue} out of 5`;

    toggleCard();

})