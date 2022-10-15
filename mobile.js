// bruh im too lazy to make it actually responsive so this will do the job
function resize(){
    var chart = document.getElementById("chart")
    var select = document.getElementById("lang")
    if (window.outerHeight/window.outerWidth > 1){
        chart.style.margin = "0"
        select.style.width = "20%"
        return
    }
    if (window.outerWidth/window.outerHeight > 1.8){
        let calc = window.outerWidth/window.outerHeight
        chart.style.marginLeft = `${12+calc*10}rem`
        chart.style.marginRight = `${12+calc*10}rem`
        select.style.width = `${2 + 10.0/calc}rem`
    } else {
        chart.style.marginLeft = "10rem"
        chart.style.marginRight = "10rem"
        select.style.width = "15%"
    }
}

resize()

window.onresize = (ev) => resize()