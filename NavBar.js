const sidebar = document.querySelector(".nav");
const navbar1 = document.querySelector("#icon");

navbar1.onclick = ()=>{
    sidebar.classList.toggle("active");
    console.log("button is clicked");
    
}
// slider js code start--------------------
let nextDom =document.getElementById('next');
let prevDom =document.getElementById('prev');
let mainDom =document.querySelector('.main');
let listDom = document.querySelector('.main .list');
let thumbDom = document.querySelector('.main .thumbnail');

nextDom.onclick =function(){
    showSlider('next');
}
prevDom.onclick =function(){
    showSlider('prev');
}
let timeAutoNext =7000;
let timeRunning = 1500;
let runTimeOut;
let autoNext = setTimeout(()=>{
    mainDom.classList.remove('next');
    mainDom.classList.remove('prev')
},timeAutoNext);
function showSlider(type){
    let itemslider = document.querySelectorAll('.main .list .items');
    let itemthumbnail = document.querySelectorAll('.main .thumbnail .items');
    if( type=='next'){
        listDom.appendChild(itemslider[0]);
        thumbDom.appendChild(itemthumbnail[0])
        mainDom.classList.add('next');
    }else{
        let positionLastItem =itemslider.length - 1;
        listDom.prepend(itemslider[positionLastItem]);
        thumbDom.prepend(itemthumbnail[positionLastItem]);
        mainDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(()=>{
        mainDom.classList.remove('next');
        mainDom.classList.remove('prev')
    },timeRunning)
}
// footer code .js start here---------------------->
// If you need any interactivity for the footer, you can add JavaScript here.
// For example, you can add event listeners for social media icons or handle form submissions if you have any forms in the footer.

document.addEventListener('DOMContentLoaded', () => {
    // Example: Add an event listener to social media icons
    const socialIcons = document.querySelectorAll('.social-icons a');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Redirecting to ' + icon.href);
            // You can add actual redirection here or other logic
        });
    });
});
