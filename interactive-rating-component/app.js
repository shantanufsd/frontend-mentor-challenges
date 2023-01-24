let btn = document.querySelector("#submit");
let rating = document.querySelectorAll(".rating");
let showRating = document.querySelector(".showRating");
let container = document.querySelector(".container");
let hiddenContainer = document.querySelector(".hidden-container")

let rateClick = null;
for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener("click", () => {
    rateClick = rating[i].value;
    for(j=0; j<rating.length; j++){
        rating[j].classList.remove("selectedRating");
    }
    rating[i].classList.add("selectedRating")
  });
}


hiddenContainer.style.display = "none";

btn.addEventListener("click", () => {
    if(rateClick){
        container.style.display = "none";
        hiddenContainer.style.display = "flex";
        showRating.innerHTML = `You selected ${rateClick} out of 5`;

    }
    else{
        console.log("please select a rating")
    }
});
