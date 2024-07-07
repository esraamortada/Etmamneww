
// const dir= localStorage.getItem('languageDirection');
// console.log(dir);
// checkdir(dir);

function change_style_ltr() {
    document.querySelector(".language").classList.remove("right");



    document.querySelector(".rotated-img").style.borderTopLeftRadius = "50%";
    document.querySelector(".rotated-img").style.borderBottomLeftRadius = "50%";
    document.querySelector(".rotated-img").style.borderTopRightRadius = "0%";
    document.querySelector(".rotated-img").style.borderBottomRightRadius = "0%";
    document.querySelector(".rotated-img").style.margin = "0 0 0 auto";

    document.querySelector(".footer .input input").classList.remove('arabic-footer');
    document.querySelector(".mini-nav").style.right='0';
    document.querySelector(".mini-nav").style.left='unset';
    document.querySelector('.lang-img').src ="imgs/flag.svg";
    document.querySelector(".language").classList.remove("display");
    document.querySelector(".select-text").textContent="English (UK)";
    document.querySelector('.lang-img2').src ="imgs/flag.svg";

    document.querySelector(".select-text2").textContent="English (UK)";

    document.querySelectorAll('.i').forEach((i)=>{
        i.classList.remove("change-i2")
    });
    document.querySelector(".footer-img").classList.remove("footer-arabic");
    document.querySelector("#icon").classList.remove('change-i');
  






}


function change_style() {
    document.querySelector(".language").classList.add("right");


    document.querySelector(".rotated-img").style.borderTopLeftRadius = "0%";
    document.querySelector(".rotated-img").style.borderBottomLeftRadius = "0%";
    document.querySelector(".rotated-img").style.borderTopRightRadius = "50%";
    document.querySelector(".rotated-img").style.borderBottomRightRadius = "50%";
    
    document.querySelector(".footer .input input").classList.add('arabic-footer');
   
    document.querySelector(".mini-nav").style.right='unset';
    document.querySelector(".mini-nav").style.left='0';
    document.querySelector('.lang-img').src ="imgs/saudiflag.svg";
    document.querySelector(".language").classList.remove("display");
    document.querySelector(".select-text").textContent="اللغه العربيه";
    document.querySelector('.lang-img2').src ="imgs/saudiflag.svg";
    document.querySelector(".select-text2").textContent="اللغه العربيه";


    document.querySelectorAll('.i').forEach((i)=>{
        i.classList.add("change-i2")
    });
    document.querySelector(".footer-img").classList.add("footer-arabic");
    document.querySelector("#icon").classList.remove('change-i');






}




function changeLang(direction) {
 
    localStorage.setItem('languageDirection', direction);

    
    fetch(`${direction}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load language file');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('home').textContent = data.home;
            document.getElementById('services').textContent = data.services;
            document.getElementById('blog').textContent = data.blog;
            document.getElementById('projects').textContent = data.projects;
            document.querySelectorAll('.contact').forEach((text)=>{
                text.textContent = data.contact;
            });
            document.querySelectorAll('.english').forEach((text)=>{
                text.textContent = data.english;
            });
            document.querySelectorAll('.arabic').forEach((text)=>{
                text.textContent = data.arabic;
            });
            

          
            document.body.dir = direction === 'ar' ? 'rtl' : 'ltr';

          
            if (direction === 'ar') {
                change_style();
            } else {
                 change_style_ltr();
            }
        })
        .catch(error => console.error('Error loading language:', error));
}


window.onload = function() {
    const direction = localStorage.getItem('languageDirection');
    if (direction) {
        changeLang(direction);
    } else {
        changeLang('en'); 
    }
};


/*subscribeee*/
const subscribe = document.getElementById('subscribe');

function saveEmail() {
    fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        body: JSON.stringify({
            "email": document.getElementById('mail').value,
        }),
        headers: {
            "Content-type": "application/json",
            "api-key": "",
        }
    })
    .then(response => {
        console.log(response.status);
        if (response.ok) {
            document.getElementById('subscribe-text').textContent = "Congratulations your email saved!!!!";
            setTimeout(() => { document.getElementById('subscribe-text').textContent = "" }, 3000);
        } else if (response.status === 400) { 
            document.getElementById('subscribe-text').textContent = "You already subscribed before";
            setTimeout(() => { document.getElementById('subscribe-text').textContent = "" }, 3000);
        }
    })
    .catch((err) => {
        console.log(err);
    });
}

function reset2() {
    document.getElementById('mail').value = '';
}

subscribe.addEventListener('submit', (e) => {
    e.preventDefault();
    saveEmail();
    reset2();
});


function appear() {
    document.querySelector(".language").classList.toggle("display");
    document.querySelector("#icon").classList.toggle('change-i');
}
function appear_nav() {
    document.querySelector(".mini-nav").style.display = "block";
}
function hide_nav() {
    document.querySelector(".mini-nav").style.display = "none";
}
let activeFlag = false;
function appear_services() {
    document.querySelector(".nav-services").classList.toggle("display");

    activeFlag = !activeFlag;
    if (!activeFlag) {
        document.querySelector("#services").classList.remove("active");
    } else {
        document.querySelector("#services").classList.add("active");
    }
}
function appear_menu_services() {
    document.querySelector(".inner-ul").classList.toggle("display");
    document.querySelector("#i2").classList.toggle("change-i");
}
function appear_menu_projects() {

    document.querySelector(".inner-ul2").classList.toggle("display");
    document.querySelector("#i3").classList.toggle("change-i");

}
function mini_nav_language() {

    document.querySelector(".mini-nav-language").classList.toggle("display");
    document.querySelector("#icon2").classList.toggle('change-i');
}


function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
}

window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
});





const main = document.querySelector('main');
main.addEventListener('click', () => {

    document.querySelector(".language").classList.remove("display");
})
const header = document.querySelector('.header');
header.addEventListener('click', () => {
    document.querySelector(".language").classList.remove("display");
})



const main2 = document.querySelector('main');
main2.addEventListener('click', () => {
    document.querySelector(".nav-services").classList.remove("display");
    document.querySelector("#services").classList.remove("active");
    activeFlag = !activeFlag
})
const header2 = document.querySelector('.header');
header.addEventListener('click', () => {
    document.querySelector(".nav-services").classList.remove("display");
    document.querySelector("#services").classList.remove("active");
    activeFlag = !activeFlag

})

function generateJSON() {
    const elements = document.body.querySelectorAll("*");
    const translation = {};
   
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (key) {
        translation[key] = element.textContent.trim();
      }
    });
   
    console.log(JSON.stringify(translation, null, 2));
  }
   
  document.addEventListener("DOMContentLoaded", generateJSON);

// function checkdir(direction) {
//     if (direction === 'ar') {
//         change_style();

//     }
//     else {
//         change_style_ltr();
//     }
// }




const texts = [
    "Custom Painting Services",
    "Wallpaper Installation",
    "Surface Preparation",
    "Protective and Specialty Coatings"
    
];
const paragraphs = [
    `Painting is more than just applying color to walls; it's about creating a mood and enhancing the aesthetic appeal of your space. Our custom painting services begin with a thorough consultation to understand your vision and requirements. We provide color matching, advice on paint types, and artistic techniques such as faux finishes, stenciling, or murals to make your space uniquely yours. Whether you desire a soothing matte finish for a bedroom or a vibrant, glossy finish for a commercial space, our skilled painters use only high-quality paints to ensure a durable and visually appealing result.  `,

    `Painting is more than just applying color to walls; it's about creating a mood and enhancing the aesthetic appeal of your space. Our custom painting services begin with a thorough consultation to understand your vision and requirements. We provide color matching, advice on paint types, and artistic techniques such as faux finishes, stenciling, or murals to make your space uniquely yours. Whether you desire a soothing matte finish for a bedroom or a vibrant, glossy finish for a commercial space, our skilled painters use only high-quality paints to ensure a durable and visually appealing result.  `,

 
    `Quality finishes start with proper surface preparation. We take great care in preparing walls for painting or wallpapering, ensuring that every surface is smooth, clean, and ready for transformation. This includes patching holes, sanding rough areas, and applying primer where necessary. Proper preparation not only enhances the durability of the finish but also ensures the true beauty of the materials is showcased.  `,

      `For areas that require more than just aesthetics, such as high moisture rooms or outdoor spaces, we offer protective and specialty coatings. These options include waterproofing, mold-resistant paints, and UV-protective coatings to ensure that your investment not only looks good but also withstands the test of time and elements. `

];




let currentIndex = 0;

function updateContent() {
    console.log("Updating content...");
  
    document.getElementById('Aboutus-h3').textContent = texts[currentIndex];
    document.getElementById('Aboutus-p').textContent = paragraphs[currentIndex];

    const sliders = document.querySelectorAll('.slider');
    sliders.forEach((slider, index) => {
        if (index === currentIndex) {
            slider.style.backgroundColor = '#CADEDD'; 
        } else {
            slider.style.backgroundColor = ''; 
        }
    });
}

document.querySelectorAll('.slider').forEach((slider, index) => {
    slider.addEventListener('click', () => {
        console.log("Slider clicked:", index);
        currentIndex = index;
        updateContent();
    });
});

const section = document.getElementById('Aboutus');
section.addEventListener("mouseenter",()=>{
    console.log("Mouse entered section");
    document.body.style.overflowY = "hidden";
})
section.addEventListener('mouseleave', () => {
    console.log("Mouse left section");
    document.body.style.overflowY = "auto"; 
});

section.addEventListener('wheel', (event) => {
    console.log("Wheel event detected");
    if (event.deltaY > 0) {
        currentIndex = (currentIndex + 1) % texts.length;
        updateContent();
    } else {
        currentIndex = (currentIndex - 1 + texts.length) % texts.length;
        updateContent();
    }
});

document.addEventListener('keydown', (event) => {
    console.log("Key pressed:", event.key);
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % texts.length;
        updateContent();
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + texts.length) % texts.length;
        updateContent();
    }
});


/*active discover linkssssss*/
const discovrLinks = document.querySelectorAll(".discover-nav-item");
discovrLinks.forEach((discoverLink)=>{
   discoverLink.addEventListener("click",function(){
       
       discovrLinks.forEach((discoverLink)=>{
           discoverLink.classList.remove("nav-active");

       });
       this.classList.add("nav-active");
   });
   
 
});
