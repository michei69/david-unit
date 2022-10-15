const translations = {
    en:{
       title: "The \"David\" Measuring Unit",
       desc: "following it's history since July 2022",
       lang: "English",
    },
    ro:{
        title: "Unitatea de Măsură „David”",
        desc: "și istoria sa de la început până în momentul actual",
        lang: "Română",
    },
    de:{
        title: "Das \"David\" Maßeinheit",
        desc: "und seine Geschichte von Anfag bis aktuell Zeit",
        lang: "Deutsch",
    },
    bg:{
        title: "Мерната Единица \"Давид\"",
        desc: "и своята история от началото до сега",
        lang: "Български",
    },
    es:{
        title: "Unidad de Medida \"David\"",
        desc: "y su historia desde el principio hasta ahora",
        lang: "Español",
    },
    cz: {
        title: "Měrná Jednotka \"David\"",
        desc: "a jeho historie od začátku do dneška",
        lang: "Čeština",
    },
    la: {
        title: "Unitas Mensurae \"David\"",
        desc: "et sua historia ab initio usque nunc",
        lang: "Latina",
    },
    ar: {
        title: "وحدة قياس دافيد",
        desc: "و تاريخها من البداية حتى الآن",
        lang: "عربى",
    },
    cn: {
        title: "计量单位 - \"戴维德\"",
        desc: "和它从一开始到现在的历史",
        lang: "中文",
    },
    da: {
        title: "Måleenhed \"Davide\"",
        desc: "og dens historie fra begyndelsen til nu",
        lang: "Dansk",
    },
    el: {
        title: "Μονάδα Mέτρησης \"Δαβίδ\"",
        desc: "και την ιστορία του από την αρχή μέχρι τώρα",
        lang: "Ελληνικά",
    },
    ko: {
        title: "측정 단위 \"다비드\"",
        desc: "그리고 처음부터 지금까지의 역사",
        lang: "한국인",
    },
    th: { 
        title: "หน่วยวัด \"ดาวิด\"",
        desc: "และประวัติศาสตร์ตั้งแต่ต้นจนถึงปัจจุบัน",
        lang: "แบบไทย",
    },
    tr: {
        title: "Ölçü Birimi \"David\"",
        desc: "ve onun tarihi başlangıçtan günümüze",
        lang: "Türkçe",
    }
}

if (!localStorage.getItem("lang")){
    let userLang = navigator.language
    for (i in translations){
        if (userLang.includes(i)){
            changeLang(i)
            break;
        }
    }
    changeLang("en")
}

var langList = []
var select = document.getElementById("lang")
addLangs()
changeLang(localStorage.getItem("lang"))

function changeLang(lang){
    var title = document.getElementById("title")
    var desc = document.getElementById("desc")
    select.selectedIndex = langList.indexOf(lang)
    localStorage.setItem("lang", lang)
    let userLang = lang
    title.innerHTML = translations[userLang].title
    document.title = translations[userLang].title
    desc.innerHTML = translations[userLang].desc
}

function addLangs(){
    for (i in translations){
        langList.push(i)
        var opt = document.createElement("option")
        opt.id = i
        opt.innerHTML = translations[i].lang
        select.appendChild(opt)
    }
}