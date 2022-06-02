const submitButton = document.querySelector('.submitButton');
const card_content_1 = document.querySelector ('.card-content-1');
const card_content_2 = document.querySelector ('.card-content-2');
const ratingBtn = document.querySelectorAll('.ratingButton');
const score = document.querySelector('.score');
let rating_Score = 3; // default value


submitButton.addEventListener('click', onSubmit);
ratingBtn.forEach(ratingbutton => {
    ratingbutton.addEventListener('click', handleRatings);
});

function onSubmit (){
    card_content_1.classList.add('hide');
    score.textContent = rating_Score;
    card_content_2.classList.remove('hide');
    
    //console.log('submit Click')
}

function handleRatings(event) {
    ratingBtn.forEach (ratingbutton => {
        ratingbutton.classList.remove('active');
    });
    if (event.target.classList.contains('ratingButton')){
        event.target.classList.add('active');
    }else {
        event.target.parentElement.classList.add('active');
    }
    //return rating 
    rating_Score = event.target.textContent;
    console.log(rating_Score);
}

//console.log(ratingBtn);