// show links
const linksContainer = document.querySelector(".links-container")
const toggleBtn = document.querySelector(".toggle-container")

toggleBtn.addEventListener("click", () => {
    linksContainer.classList.toggle("show-links")
})


// fixed navbar
const navBar = document.querySelector(".navbar");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    console.log({navHeight});
    if (scrollHeight > navHeight) {
        navBar.classList.add("fixed-navbar")
    }else{
        navBar.classList.remove("fixed-navbar")
    }

    if(scrollHeight > 500) {
        topLink.classList.add("show-link")
    }else{
        topLink.classList.remove("show-link")
    }
});

// smooth scroll
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((scrollLink) => {
   scrollLink.addEventListener("click", (e) => {
   e.preventDefault();
//    get attributes
   const id = e.currentTarget.getAttribute("href").slice(1);
   const element = document.getElementById(id);
//    calculate heights
   const navHeight = navBar.getBoundingClientRect().height;
   const containerHeight = linksContainer.getBoundingClientRect().height;
   const fixedNav = navBar.classList.contains("fixed-navbar");
   console.log({fixedNav});
   let position = element.offsetTop - navHeight;
   console.log({position});
   if (!fixedNav) {
       position = position - navHeight;
       console.log({position});
   }
   if(navHeight > 40) {
    position = position + containerHeight;
   }
   window.scrollTo({
       left: 0,
       top: position,
   });
//    close links
    linksContainer.classList.toggle("show-links")
})
})