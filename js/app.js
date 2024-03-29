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

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//helper for viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    //return true if element is within the four sides of the screen
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//helper to build the navbar
function navbarbuild() {
    const navbarList = document.getElementById("navbar__list");
    //create nodelist with sections
    const liSections = document.querySelectorAll("[data-nav]");
    const ulFrag = document.createDocumentFragment();
    //iterate sections to place li in bar
    liSections.forEach((liSection, i) => {
        //create link for section
        const secLink = document.createElement("a");
        //add text to link
        secLink.appendChild(document.createTextNode("Section " + (i + 1)));
        //set class to menulink to apply the css code done for the links
        secLink.className = "menu__link";
        //create li and add link to it
        let linkLi = document.createElement("li");
        //secLink.className = "menu__link";
        linkLi.appendChild(secLink);
        //add li to frag
        ulFrag.appendChild(linkLi);

    })
    //empty list to avoid repetition
    navbarList.innerHTML = "";
    navbarList.appendChild(ulFrag);
}

//listener for keeping navbar when mouse at top of screen
function mouseForNav() {
    const navBar = document.querySelector(".page__header");
    document.addEventListener("mousemove", e => {
        if (e.clientY < 80 && e.clientY > 0) {
            navBar.style.visibility = "visible";
            navBar.style.opacity = "1";
        }
        else {
            navBar.style.visibility = "hidden";
            navBar.style.opacity = "0";
            navBar.style.transition = "visibility 0.5s ease,opacity 0.5s ease";
        }
    })
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
//create new sections and add to navbar
function createSection(Sectionnum) {
    //create document frag
    const secFrag = document.createDocumentFragment();
    //create section element
    const sectionTag = document.createElement("section");
    //set id and class
    sectionTag.id = "section" + Sectionnum;
    sectionTag.dataset.nav = "Section " + Sectionnum;
    sectionTag.className = "";
    //create div and set its class
    const divSectionChild = document.createElement("div");
    divSectionChild.className = "landing__container";
    //create H2 element
    const sectionH2 = document.createElement("h2");
    sectionH2.textContent = "Section " + Sectionnum;
    //create first p
    const sectionFirstP = document.createElement("p");
    sectionFirstP.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";
    //create second p
    const sectionSecP = document.createElement("p");
    sectionSecP.textContent = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";
    //append all elements together
    divSectionChild.appendChild(sectionH2);
    divSectionChild.appendChild(sectionFirstP);
    divSectionChild.appendChild(sectionSecP);
    sectionTag.appendChild(divSectionChild);
    //append elements to frag
    secFrag.appendChild(sectionTag);
    //append frag to main tag
    document.getElementsByTagName("main")[0].appendChild(secFrag);
    //call navbarbuild to add section to the bar
    navbarbuild();
}
//actions for scroll event function
function ScrollListens() {
    //get sections
    const liSections = document.querySelectorAll("[data-nav]");
    //iterate sections
    liSections.forEach((liSection, i) => {
        //get link
        const allLinks = document.querySelectorAll(".menu__link")[i];
        //event listener for scroll actions
        document.addEventListener("scroll", () => {
            //get navbar element and set to visible and opaque
            const navBar = document.querySelector(".page__header");
            navBar.style.visibility = "visible";
            navBar.style.opacity = "1";

            //hide navbar after 5 inactive seconds
            setTimeout(() => {
                navBar.style.visibility = "hidden";
                navBar.style.opacity = "0";
                navBar.style.transition = "visibility 0.5s ease,opacity 0.5s ease";
            }, 5000);

            //highlight active section in navbar
            if (isInViewport(liSection)) {
                liSection.classList.add("active");
                liSection.firstElementChild.style.border = "5px solid black";
                allLinks.style.backgroundColor = "black";
                allLinks.style.color = "white";
            }
            else if (liSection.classList.contains("active")) {
                liSection.classList.remove("active");
                liSection.firstElementChild.style.border = "";
                allLinks.style.backgroundColor = "";
                allLinks.style.color = "";
            }
        })

    })

}
//enable smooth scrolling
function smoothscroll() {
    const allLinks = document.querySelectorAll(".menu__link");
    //iterate links 
    allLinks.forEach((link, i) => {
        //listener for smooth scrolling after clicking section
        link.addEventListener("click", ev => {
            //prevent default anchor actio
            ev.preventDefault();
            const section = document.querySelectorAll("[data-nav]")[i];
            //element to scroll to and set behavior to smooth
            section.scrollIntoView({ behavior: "smooth" });
        })
    });
}
//button to scroll to top
function topbutton() {
    //button to go up again
    const topButton = document.createElement("button");
    topButton.textContent = "Go back to Top";
    document.querySelector(".page__footer").appendChild(topButton);
    //listner for button to smooth scroll back
    topButton.addEventListener("click", ev => {
        ev.preventDefault();
        document.querySelector(".main__hero").scrollIntoView({ behavior: "smooth" });
    });
}
//make sections collapsible
function makeCollapse() {

    const sections = document.querySelectorAll("[data-nav]");

    sections.forEach((section, i) => {
        //get div container
        let sectionCont = section.firstElementChild;
        //get h2 header
        let sectionhead = sectionCont.firstElementChild;

        //add arrow image to headings
        const arrowImg = document.createElement("img");
        arrowImg.src = "https://cdn-icons-png.flaticon.com/512/60/60625.png";
        arrowImg.alt = "arrow";
        //set arrow postion for even sections
        if ((i + 1) % 2 === 0) {
            arrowImg.setAttribute("style", `
                background-color: white;
                position: relative;
                z-index: -5; 
                width: 8vh; 
                height: 8vh;
                right: 84%;
                `)
        }
        //set arrow position for odd sections
        else if ((i + 1) % 2 === 1) {
            arrowImg.setAttribute("style", `
                background-color: white;
                position: relative;
                z-index: -5; 
                width: 8vh; 
                height: 8vh;
                left: 48%;
                `)
        }

        sectionhead.appendChild(arrowImg);

        //get 2 p elements in div
        const firstp = sectionhead.nextElementSibling;
        const secondp = firstp.nextElementSibling;


        sectionhead.setAttribute("style", "cursor: pointer; border: none;outline:none");
        //hide p initially
        firstp.setAttribute("style", "display: none; overflow: hidden;");
        secondp.setAttribute("style", "display: none; overflow: hidden;");

        //listener to toggle collapse
        sectionhead.addEventListener("click", () => {
            //if both visible hide else show them and rotate image accordingly
            if (firstp.style.display === "block" && secondp.style.display === "block") {
                firstp.setAttribute("style", "display: none; overflow: hidden;");
                secondp.setAttribute("style", "display: none; overflow: hidden;");
                arrowImg.style.rotate = "0deg"
                section.style.minHeight = "40vh";
            } else {
                firstp.setAttribute("style", "display: block; overflow: visible;");
                secondp.setAttribute("style", "display: block; overflow: visible;");
                arrowImg.style.rotate = "180deg"
                section.style.minHeight = "80vh";
            }
        });


    });
}

function addcontent() {
    const picfrag = document.createDocumentFragment();
    //add first pic
    const pic = document.createElement("img");
    pic.src = "https://t3.ftcdn.net/jpg/02/91/52/22/360_F_291522205_XkrmS421FjSGTMRdTrqFZPxDY19VxpmL.jpg";
    pic.alt = "thank you";
    //add second pic
    const pic2 = document.createElement("img");
    pic2.src = "https://media.istockphoto.com/vectors/well-done-paper-banner-vector-id914386120?k=20&m=914386120&s=612x612&w=0&h=Dc6oVt92D8ktFlTIgEWf2PGR26RsUQlvFcvhSLa8ifM=";
    pic.alt = "good job";
    //set widths to 50%
    pic.style.width = "50%";
    pic2.style.width = "50%";
    //edit pic height to be same as first
    pic.style.height = "30%";
    pic2.style.height = "30%";
    //add container then frag to document
    picfrag.append(pic, pic2);
    document.querySelector("main").appendChild(picfrag);
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// create sections
createSection(4);
createSection(5);
createSection(6);
createSection(7);
createSection(8);

// highlight active sections
ScrollListens();

// Scroll to anchor ID using scrollTO event
smoothscroll();

//add button
topbutton();


//change content (add 2 images)
//create fragment
addcontent();

//make sections collapsible
makeCollapse();

//keep navbar visible when user moves mouse to the top
mouseForNav();
