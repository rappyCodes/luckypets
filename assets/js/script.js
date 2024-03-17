const myCheckbox = document.getElementById("hamburgerCheckbox")
const myDiv = document.getElementById("myNav")
myCheckbox.addEventListener("change", function () {
  if (this.checked) {
    myDiv.style.width = "75%"
  } else {
    myDiv.style.width = "0"
  }
})
// JavaScript to open and close the modal
var modal = document.getElementById("myModal")
function openModal() {
  modal.style.display = "flex" // display the modal
}
function closeModal() {
  modal.style.display = "none" // hide the modal
}
const kittenCatFoodBtn = document.getElementById("kitten-cat-food-btn")
const allStagesCatFoodBtn = document.getElementById("all-stages-cat-food-btn")
const allStagesNutritionalAnalysisBtn = document.getElementById("all-stages-nutritional-analysis-btn")
const kittenCatFoodNutritionalAnalysisBtn = document.getElementById("kitten-cat-food-nutritional-analysis-btn")
const modalImg = document.querySelector("#myModal img")
const modalHeading = document.querySelector("#myModal h1")
const navbarProductsLinkOnMobile = document.getElementById(
  "navbar__products__link--isMobile"
)
const navbarPetCareLinkOnMobile = document.getElementById(
  "navbar__petcare__link--isMobile"
)
const navbarAboutUsLinkOnMobile = document.getElementById(
  "navbar__aboutus__link--isMobile"
)
const navbarContactUsLinkOnMobile = document.getElementById(
  "navbar__contactus__link--isMobile"
)
const isFacebookContactDiv = document.querySelector(".contact__card.isFacebook")
const isInstagramContactDiv = document.querySelector(
  ".contact__card.isInstagram"
)
kittenCatFoodBtn.addEventListener("click", () => {
  modalImg.src = "assets/images/kitten cat food info for modal.webp"
  modalHeading.textContent = "More Info for Kitten Cat Food"
  openModal()
})
allStagesCatFoodBtn.addEventListener("click", () => {
  modalImg.src = "assets/images/all stages cat food info for modal.webp"
  modalHeading.textContent = "More Info for All Stages Cat Food"
  openModal()
})
allStagesNutritionalAnalysisBtn.addEventListener("click", () => {
  modalImg.src = "assets/images/all-stages-nutritional-analysis-image.png"
  modalHeading.textContent = "Nutritional Analysis of All Stages Cat Food"
  openModal()
})
kittenCatFoodNutritionalAnalysisBtn.addEventListener("click", () => {
  modalImg.src = "assets/images/kitten-cat-food-nutritional-analysis.png"
  modalHeading.textContent = "Nutritional Analysis of Kitten Cat Food"
  openModal()
})
function closeMobileNav() {
  myCheckbox.checked = false
  myDiv.style.width = "0"
}
navbarProductsLinkOnMobile.addEventListener("click", closeMobileNav)
navbarPetCareLinkOnMobile.addEventListener("click", closeMobileNav)
navbarAboutUsLinkOnMobile.addEventListener("click", closeMobileNav)
navbarContactUsLinkOnMobile.addEventListener("click", closeMobileNav)
isFacebookContactDiv.addEventListener("click", function () {
  window.open("https://www.facebook.com/LuckypetcarePH", "_blank")
})
isInstagramContactDiv.addEventListener("click", function () {
  window.open("https://www.instagram.com/luckypetcare2022/", "_blank")
})
