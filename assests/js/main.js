const dynamic = document.getElementById("dynamic-text");
const roles = ["Student", "Front-End Developer", "Back-End Developer", "Android Developer", "UI/UX designer"];
let roleIndex = 0;
let letterIndex = 0;

function printLetters(role){
    if(letterIndex == role.length){
        clearLetters();
    }
    else if(letterIndex < role.length){
        dynamic.textContent += role.charAt(letterIndex);
        letterIndex += 1;
        setTimeout(
            function(){
                printLetters(role)
            }, 500
        );
    }
    
}

function clearLetters(){
    if(letterIndex == -1){
        roleIndex = (roleIndex+1) % roles.length;
        letterIndex = 0;
        printLetters(roles[roleIndex]);
    }
    else if(letterIndex > -1){
        let updated = "";
        for(let index = 0; index < letterIndex; index++){
            updated += roles[roleIndex].charAt(index);
        }
        dynamic.textContent = updated;
        letterIndex -= 1;
        setTimeout(clearLetters, 200);
    }

}
printLetters(roles[roleIndex]);

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});