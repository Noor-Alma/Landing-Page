/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/* 
 * This code was written, tested, debugged, and operated by me only Muhammad Nasif, all rights reserved only to me and Udacity.
 * Everything done in the code has its own comment above it.
*/

// Start Global Variables
const navBar = document.querySelector('.navbar__menu');
const navList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');
const header = document.querySelector('.page__header');
// End Global Variables


// Start build the nav
function buildNav(){
    sections.forEach(section => {
        const navButton = document.createElement('li');
        navButton.insertAdjacentHTML("afterbegin",`<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
        navList.appendChild(navButton);

        //scrollBehavior Function
        scrollBehavior(navButton, section);
    });
    navBar.appendChild(navList);
}

//Build Nav Function 
buildNav();

//End build the nav


// Start of Scroll to anchor ID using scrollTO event
function scrollBehavior(navButton, section){
    navButton.addEventListener('click', function(event){
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior:"smooth"
        });
    });
}
// End of Scroll to anchor ID using scrollTO event


// Start of Set the Section class 'active' when it near to the top of viewport
function activeSection (){
  const navActive = document.querySelectorAll(".menu__link");
    sections.forEach((section, i)=>{
        const sectionBond = section.getBoundingClientRect();
        if (sectionBond.top <= 380 && sectionBond.bottom >= 350){
            section.classList.add("your-active-class");
            navActive[i].classList.add("myBtn");
        } else{
            section.classList.remove("your-active-class");
            navActive[i].classList.remove("myBtn");
        }
    })
}
// End of Set the Section class 'active' when it near to the top of viewport


// Start of Toggle the NavBar According to User Scroll Activity
function toggleNavBar(){
    let userScroll;
    header.style.cssText = 'opacity: 1; transition: ease 0.3s ;'
    window.clearTimeout( userScroll );
    userScroll = setTimeout(function() {
        //The Settings Executed on NavBar after Timeout finished
        header.style.cssText = 'opacity: 0; transition: ease 0.3s ;'
    }, 6000);
}
// End of Toggle the NavBar According to User Scroll Activity
//active

// calcualting when the section is active
function makeActiveSection() {
  sectionsElements.forEach((section) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    // DOMRect object providing information about the size of an element and its position relative to the viewport.
    // viewport : A viewport represents a polygonal (normally rectangular) area in computer graphics that is currently being viewed.

    let elementOffset = section.getBoundingClientRect();
    if (elementOffset.top <= 150 && elementOffset.bottom >= 150) {
      addActiveClass(section);
    } else {
      removeActiveClass(section);
    }
  });
}


//Start of the Scroll Event to execute the functions of activeSection and toggleNavBar 
window.addEventListener('scroll',(event)=>{
    activeSection();
    toggleNavBar();
})
//End of the Scroll Event to execute the functions of activeSection and toggleNavBar 


// Start of GO UP Button
//Create the div element for the button 
const goUpButton = footer.insertAdjacentHTML("beforebegin", `<div Id="return_top" ></div>`);
// Scroll to top of the Landing Page using scrollTO event
document.getElementById("return_top").addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });
});
// End of GO UP Button


