const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//navigation links
const navHeader = document.querySelectorAll('nav a');

navHeader[0].textContent = siteContent['nav']['nav-item-1'];
navHeader[1].textContent = siteContent['nav']['nav-item-2'];
navHeader[2].textContent = siteContent['nav']['nav-item-3'];
navHeader[3].textContent = siteContent['nav']['nav-item-4'];
navHeader[4].textContent = siteContent['nav']['nav-item-5'];
navHeader[5].textContent = siteContent['nav']['nav-item-6'];

//cta---txt---img
const header = document.querySelector('h1');
header.textContent = siteContent['cta']['h1'];

const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

//main content---txt---img

const p = document.querySelectorAll('.text-content p');

p[0].textContent = siteContent['main-content']['features-content'];
p[1].textContent = siteContent['main-content']['about-content'];
p[2].textContent = siteContent['main-content']['services-content'];
p[3].textContent = siteContent['main-content']['product-content'];
p[4].textContent = siteContent['main-content']['vision-content'];

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//headers main content---txt
const subHeader4 = document.querySelectorAll('.text-content h4');
subHeader4[0].textContent = siteContent['main-content']['features-h4'];
subHeader4[1].textContent = siteContent['main-content']['about-h4'];
subHeader4[2].textContent = siteContent['main-content']['product-h4'];
subHeader4[3].textContent = siteContent['main-content']['services-h4'];
subHeader4[4].textContent = siteContent['main-content']['vision-h4'];




//bottom content---txt---img
document.querySelector('.contact p').textContent = siteContent['contact']['contact-h4'];
const pContact = document.querySelectorAll('.contact p');
const contactHeader = document.querySelectorAll('.contact h4');

contactHeader[0].textContent = siteContent['contact']['.contact-h4'];

pContact[0].textContent = siteContent['contact']['address'];
pContact[1].textContent = siteContent['contact']['phone'];
pContact[2].textContent = siteContent['contact']['email'];

//footer--txt
const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];