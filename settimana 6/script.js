const images = document.querySelectorAll(" img");
console.log(images);
images.forEach((image)=>{
    
    image.addEventListener("mouseenter", () => {
        image.style.transform = "scale(1.50)"

    })
    image.addEventListener("mouseleave", () => {
        image.style.transform = "scale(1)"
    })
})