const t={
    ar:{nav_home:"الرئيسية",nav_about:"من نحن",nav_services:"الخدمات",nav_gallery:"المعرض",nav_booking:"حجز موعد",nav_contact:"اتصل بنا",hero_title:"مهدي ثيرابي",hero_subtitle:"معالج بالطاقة ومدرب شامل",contact_btn:"احجز الآن",about_title:"من نحن",about_content:"معالج بالطاقة، مدرب شامل، خبير في التنويم الإيحائي والرقية الشرعية.",services_title:"خدماتنا",service1:"التنويم الإيحائي",service2:"الرقية الشرعية",service3:"العلاج بالطاقة",service4:"استشارات رياضية",gallery_title:"معرض الصور",booking_title:"حجز جلسة",name_label:"الاسم الكامل",email_label:"البريد الإلكتروني",phone_label:"الهاتف",message_label:"رسالتك",submit_btn:"إرسال",contact_title:"تواصل معنا",phone_label_text:"الهاتف"},
    fr:{nav_home:"Accueil",nav_about:"À propos",nav_services:"Services",nav_gallery:"Galerie",nav_booking:"Prendre RDV",nav_contact:"Contact",hero_title:"Mahdi Therapy",hero_subtitle:"Thérapeute énergétique & coach holistique",contact_btn:"Réserver",about_title:"À propos",about_content:"Thérapeute énergétique, coach holistique, expert en hypnothérapie et Roukya.",services_title:"Nos services",service1:"Hypnothérapie",service2:"Roukya",service3:"Énergie thérapeutique",service4:"Conseils sportifs",gallery_title:"Galerie",booking_title:"Prendre rendez‑vous",name_label:"Nom complet",email_label:"E‑mail",phone_label:"Téléphone",message_label:"Message",submit_btn:"Envoyer",contact_title:"Contactez‑nous",phone_label_text:"Téléphone"},
    en:{nav_home:"Home",nav_about:"About",nav_services:"Services",nav_gallery:"Gallery",nav_booking:"Book",nav_contact:"Contact",hero_title:"Mahdi Therapy",hero_subtitle:"Energy Therapist & Holistic Coach",contact_btn:"Book Now",about_title:"About",about_content:"Energy therapist, holistic coach, expert in hypnotherapy and spiritual healing.",services_title:"Our Services",service1:"Hypnotherapy",service2:"Spiritual Healing",service3:"Energy Therapy",service4:"Sports Consulting",gallery_title:"Gallery",booking_title:"Book a Session",name_label:"Full Name",email_label:"Email",phone_label:"Phone",message_label:"Your Message",submit_btn:"Submit",contact_title:"Contact Us",phone_label_text:"Phone"}
    };
    
    function setLanguage(l){
    document.documentElement.lang=l;
    document.documentElement.dir=l==="ar"?"rtl":"ltr";
    document.querySelectorAll("[data-i18n]").forEach(e=>{const k=e.getAttribute("data-i18n");if(t[l][k])e.textContent=t[l][k]});
    document.querySelectorAll("[data-i18n-placeholder]").forEach(e=>{const k=e.getAttribute("data-i18n-placeholder");if(t[l][k])e.placeholder=t[l][k]});
    }
    
    document.querySelectorAll(".lang-switch button").forEach(b=>b.addEventListener("click",()=>setLanguage(b.dataset.lang)));
    setLanguage("ar");
    
    AOS.init({once:true});
    document.getElementById("year").textContent=new Date().getFullYear();
    
    const themeToggle=document.getElementById("themeToggle");
    themeToggle.addEventListener("click",()=>{document.body.classList.toggle("dark");themeToggle.innerHTML=document.body.classList.contains("dark")?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>'});
    
    const modal=document.querySelector(".modal"),modalImg=document.querySelector(".modal-content"),caption=document.querySelector(".caption"),close=document.querySelector(".close");
    document.querySelectorAll(".gallery-grid img").forEach(img=>img.addEventListener("click",()=>{modal.style.display="flex";modalImg.src=img.src;caption.textContent=img.alt}));
    close.addEventListener("click",()=>modal.style.display="none");
    modal.addEventListener("click",e=>{if(e.target===modal)modal.style.display="none"});
    
    const burger=document.getElementById("burger"),navlinks=document.querySelector(".navlinks");
    burger.addEventListener("click",()=>navlinks.classList.toggle("show"));
    