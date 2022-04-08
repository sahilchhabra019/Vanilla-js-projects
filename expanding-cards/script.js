// getting all cards
const getExpandingImages = document.querySelectorAll('.expanding-image');

// adding click event on each cards,add active class,remove active class before adding
getExpandingImages.forEach(eachImage => {
    eachImage.addEventListener('click', function(){
        removeActiveClass();
        eachImage.classList.add('active');
    })
})

// remove active class
const removeActiveClass = () => {
    getExpandingImages.forEach(eachImage=>{
        eachImage.classList.remove('active');
    })
}

