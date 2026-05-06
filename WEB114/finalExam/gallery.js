"use strict"

const image = [  // this Object is still an object itself with multiple properties which is why the properties are encased in [] rather than {}
    {
        src: "images/gallery3.jpg",
        alt: "Golden Retriever pet portrait",
        //we could add a description confusing
    },
    {
        src: "images/gallery2.jpg",
        alt: "Golden Retriever pet portrait",
    },
    {
        src: "images/gallery1.jpg",
        alt: "Gathering place trail, Gathering Place, Tulsa OK",
    },
    {
        src: "images/gallery4.jpg",
        alt: "Fashion photoshoot, Downtown Lawrence KS",
    },
    {
        src: "images/gallery5.jpg",
        alt: "Clinton Lake, Lawrence KS",
    },
    {
        src: "images/gallery6.jpg",
        alt: "Ambient foggy morning, Regier Center, Overland Park KS",
    },
    {
        src: "images/gallery7.jpg",
        alt: "Clear skys with the sun visible on the horizon, Olathe KS",
    },
    {
        src: "images/gallery8.jpg",
        alt: "Geese scavenging for food on a lake shore, Clinton Lake, Lawrence KS",
    },
    {
        src: "images/gallery9.jpg",
        alt: "Rare sun halo captured on the horizon, Olathe KS",
    },
    {
        src: "images/gallery10.jpg",
        alt: "Beautiful clouds during a sunset, Olathe KS",
    },
    {
        src: "images/gallery11.jpg",
        alt: "Food photograph",
    },
    {
        src: "images/gallery12.jpg",
        alt: "4th of July Fireworks, Overland Park KS",
    },
    {
        src: "images/gallery13.jpg",
        alt: "Aloe plant gleaming in the sun",
    },
    {
        src: "images/gallery14.jpg",
        alt: "Tawny emperor butterfly, Olathe KS",
    },
    {
        src: "images/gallery15.jpg",
        alt: "Panchiko indie rock band concert, The Truman, Kansas City MO",
    },
    {
        src: "images/gallery16.jpg",
        alt: "Panchiko indie rock band concert, The Truman, Kansas City MO",
    },
    {
        src: "images/gallery17.jpg",
        alt: "Car photo, 2006 Acura TL",
    },
    {
        src: "images/gallery18.jpg",
        alt: "Beautiful sunset with altocumulus clouds, Lawrence KS",
    },
    {
        src: "images/gallery19.jpg",
        alt: "Golden Retriever pet portrait",
    },
    {
        src: "images/gallery20.jpg",
        alt: "Beautiful sunset on the beach, St. Augustine FL",
    },
    {
        src: "images/gallery21.jpg",
        alt: "Car photo, Nissan 350Z",
    },
]
let currentIndex = 0;     //declaring the variable
//start at the beginning

//Select the HTML elements
const galleryImage =  document.querySelector("#galleryPreview");
const captionElement = document.querySelector("#caption");
const headingElement = document.querySelector("#gallery-heading");
//const titleDisplay = document.querySelector("#title");


//previous and next buttons
const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");

//Display
function showGallery(index) {    //why in the index?  Starts the number count at 0
    const selectedImage = image[index];
    galleryImage.src = selectedImage.src;

    galleryImage.alt = selectedImage.alt; //set the image source (file path) to the movies src property

    //titleDisplay.textContent = selectedImage.title; //Set the alt text for the image (for accessablity and descriptions)

    captionElement.textContent = selectedImage.alt;

    headingElement.textContent = `image ${index + 1} of ${image.length}`;    // add a value of 1 for each movie //IS A LOOP
    //show which movie we are on (add 1 bc index starts at 0)
    // also show the total number of movies using movies.lenth

    //titleElement = titleElement.textContent = movie.titl;
}
showGallery(currentIndex);
        
function handlePrevClick(){
    currentIndex--;

    if (currentIndex < 0 ) {
        currentIndex = image.length -1;
        //jump to last movie
    }
    showGallery(currentIndex);
    console.log(`Previous button works`)
}

function handleNextClick(){
    currentIndex++
        //move forward
   
    if (currentIndex >= image.length){
        currentIndex = 0;
         //loop to beginning
    }
    showGallery(currentIndex);

}
nextButton.addEventListener("click", handleNextClick);
prevButton.addEventListener("click", handlePrevClick);