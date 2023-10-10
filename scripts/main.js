console.log('HI IM WORKING');

let link = document.querySelector('.index-link');
console.log(link);

link.addEventListener("mouseover", function() {
    let show = document.querySelector(".link-box");
    show.style.opacity = "0.75"
});

link.addEventListener("mouseout", function() {
    let show = document.querySelector(".link-box");
    show.style.opacity = "0"
});