const translations = {
    en:{
       title: "The \"David\" Measuring Unit",
       desc: "following it's history since July 2022"
    },
    ro:{
        title: "Unitatea de Măsură „David”",
        desc: "și istoria sa de la început până în momentul actual"
    },
    de:{
        title: "Das \"David\" Maßeinheit",
        desc: "und seine Geschichte von Anfag bis aktuell Zeit"
    }
}

const langs = ["en", "ro", "de"]

if (!localStorage.getItem("lang")){
    let userLang = navigator.language
    if (userLang.includes("ro")){
        changeLang("ro")
    } else if (userLang.includes("de")){
        changeLang("de")
    } else {
        changeLang("en")
    }
}

changeLang(localStorage.getItem("lang"))

function changeLang(lang){
    var title = document.getElementById("title")
    var desc = document.getElementById("desc")
    var select = document.getElementById("lang")
    select.selectedIndex = langs.indexOf(lang)
    localStorage.setItem("lang", lang)
    let userLang = lang
    title.innerHTML = translations[userLang].title
    document.title = translations[userLang].title
    desc.innerHTML = translations[userLang].desc
}