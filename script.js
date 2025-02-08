/*---------------------------typing animation-----------------*/
var typed = new Typed(".typing", {

    strings:["", "Software QA Tester","Software Test Specialist","QA Engineer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true

})

/*---------------------------Aside-----------------*/
const nav = document.querySelector(".nav"), // Yan menü
    navList = nav.querySelectorAll("li"), // Menüdeki liste öğeleri
    totalNavList = navList.length, // Toplam liste sayısı
    allSection = document.querySelectorAll(".section"), // Tüm içerik bölümleri
    totalSection = allSection.length; // Toplam bölüm sayısı


for (let i = 0; i < totalNavList; i++) 
    {
    const a = navList[i].querySelector("a"); // Menüdeki bağlantı
    a.addEventListener("click", function () {
       
        for (let j = 0; j < totalNavList; j++) 
            {
            navList[j].querySelector("a").classList.remove("active");
        }
       
        this.classList.add("active");

        
        showSection(this);
        if(window.innerWidth<1200)
        {
            asideSectionTogglerBtn();
        }
    });
}

function showSection(element) 
{
   
    for (let i = 0; i < totalSection; i++) 
    {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1]; 
    document.querySelector("#" + target).classList.add("active");
}
function updateNav(element)
{
   for(let i=0 ; i<totalNavList; i++)
   {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1]; 
    if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
    {
        navList[i].querySelector("a").classList.add("active");
    }
   }
}
   document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("data-section-index");
    console.log(sectionIndex)
    showSection(this);
    updateNav(this);
})

    function showSection(element) 
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1]; // "home", "about", vb. alır
        document.querySelector("#" + target).classList.add("active"); // Hedef bölüme "active" ekler
    }
    const navTogglerBtn= document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click",() =>
        {
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn()
        {
            aside.classList.toggle ("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.toggle()
            }
        }

        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav li a");
        
        window.addEventListener("scroll", () => {
          let current = "";
        
          // Her bir section'ı kontrol et
          sections.forEach((section) => {
            const sectionTop = section.offsetTop; // Section'ın üst pozisyonu
            const sectionHeight = section.clientHeight; // Section yüksekliği
        
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
              current = section.getAttribute("id"); // Görünen section'un id'sini al
            }
          });
        
          // Menü bağlantılarını güncelle
          navLinks.forEach((link) => {
            link.classList.remove("active"); // Önce tümünü pasif yap
            if (link.getAttribute("href").includes(current)) {
              link.classList.add("active"); // Şu anki başlığa göre aktif yap
            }
          });
        });
/*---------------------------Form Validation-----------------*/
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    const inputs = document.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        const error = input.nextElementSibling;
        if (!input.checkValidity()) {
            e.preventDefault();
            input.style.borderColor = 'red';
            if (!error || !error.classList.contains('error-message')) {
                const errorMsg = document.createElement('span');
                errorMsg.classList.add('error-message');
                errorMsg.style.color = 'red';
                errorMsg.style.fontSize = '14px';
                errorMsg.style.marginTop = '5px';
                errorMsg.style.display = 'block';
                errorMsg.innerText = 'Lütfen bu alanı doldurunuz.';
                input.parentNode.appendChild(errorMsg);
            }
            isValid = false;
        } else {
            input.style.borderColor = '';
            if (error && error.classList.contains('error-message')) {
                error.remove();
            }
        }
    });

    if (!isValid) {
        e.preventDefault();
    }
});

        
