var splashScreen = document.getElementById("splashScreen")
var mobilenavMenu = document.getElementById("mobilenavMenu")
var mobilenavMenuClose = document.getElementById("mobilenavMenuClose")
var navList = document.getElementById("navList")
var mobilenavLogo = document.getElementById("mobilenavLogo")
var mobilenavMenuBackground = document.getElementById("mobilenavMenuBackground")
var viewerBG1 = document.getElementsByClassName("viewerBG")[0]
var gameinfoNavButtonsFeatures = document.getElementsByClassName("gameinfoNavButtons")[0]
var gameinfoNavButtonsMaps = document.getElementsByClassName("gameinfoNavButtons")[1]
var gameinfoNavButtonsFaqs = document.getElementsByClassName("gameinfoNavButtons")[2]
var gameinfoNavButtonsStaff = document.getElementsByClassName("gameinfoNavButtons")[3]
var gameinfoNavButtonsFeatures2 = document.getElementsByClassName("gameinfoNavButtons")[4]
var gameinfoNavButtonsMaps2 = document.getElementsByClassName("gameinfoNavButtons")[5]
var gameinfoNavButtonsFaqs2 = document.getElementsByClassName("gameinfoNavButtons")[6]
var gameinfoNavButtonsStaff2 = document.getElementsByClassName("gameinfoNavButtons")[7]
var gameinfoIframe = document.getElementById("gameinfoIframe")
var gameinfoNavButtonsIcon10 = document.getElementById("gameinfoNavButtonsIcon10")
var gameinfoNavButtonsIcon11 = document.getElementById("gameinfoNavButtonsIcon11")
var gameinfoNavButtonsIcon20 = document.getElementById("gameinfoNavButtonsIcon20")
var gameinfoNavButtonsIcon21 = document.getElementById("gameinfoNavButtonsIcon21")
var gameinfoNavButtonsIcon30 = document.getElementById("gameinfoNavButtonsIcon30")
var gameinfoNavButtonsIcon31 = document.getElementById("gameinfoNavButtonsIcon31")
var gameinfoNavButtonsIcon40 = document.getElementById("gameinfoNavButtonsIcon40")
var gameinfoNavButtonsIcon41 = document.getElementById("gameinfoNavButtonsIcon41")

// PRE LOADER or SPLASH SCREEN
window.addEventListener("load", function () {
    splashScreen.style.animation = "splashScreen .4s forwards cubic-bezier(0.4, 0, 1, 1)"
})
function splashScreenout () {
    splashScreen.style.animation = "splashScreenout .2s forwards cubic-bezier(0.4, 0, 1, 1)"
}

// NAVIGATION MENU
function mobilenavMenuFadeout () {
    mobilenavMenu.style.animation = "NavMenuOpen .3s forwards"
    mobilenavMenuClose.style.display = "block"
    mobilenavMenuClose.style.animation = "NavMenuClose .3s forwards"
    mobilenavLogo.style.visibility = "hidden"
    navList.style.transition = "left .3s"
    navList.style.left = "0px"
    mobilenavMenuBackground.style.display = "block"
}
function mobilenavMenuFadein () {
    mobilenavMenu.style.animation = "NavMenuClose .3s forwards"
    mobilenavMenuClose.style.animation = "NavMenuOpen .3s forwards"
    mobilenavMenuClose.style.visibility = "hidden"
    mobilenavLogo.style.visibility = "visible"
    navList.style.left = "-76%"
    mobilenavMenuBackground.style.display = "none"
}

// TRAILER (PLC SERVER)
function trailerVideoOpen () {
    aboutTrailerVideo.setAttribute("src", "https://www.youtube.com/embed/ac5s6a5ZbWM?autoplay=1")
    viewerBG1.style.display = "block"
}
function trailerVideoClose () {
    aboutTrailerVideo.setAttribute("src", "https://www.youtube.com/embed/ac5s6a5ZbWM?autoplay=0")
    viewerBG1.style.display = "none"
}

// GAMEINFO NAVIGATIONS
function gameinfoButtonsFeatures () {
    gameinfoNavButtonsFeatures.setAttribute("class", "gameinfoNavButtons gameinfoNavButtonsActive")
    gameinfoNavButtonsMaps.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsFaqs.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsStaff.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsFeatures2.setAttribute("class", "gameinfoNavButtons gameinfoNavButtonsActive")
    gameinfoNavButtonsMaps2.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsFaqs2.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsStaff2.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsIcon10.style.display = "none"
    gameinfoNavButtonsIcon11.style.display = "block"
    gameinfoNavButtonsIcon20.style.display = "block"
    gameinfoNavButtonsIcon21.style.display = "none"
    gameinfoNavButtonsIcon30.style.display = "block"
    gameinfoNavButtonsIcon31.style.display = "none"
    gameinfoNavButtonsIcon40.style.display = "block"
    gameinfoNavButtonsIcon41.style.display = "none"
    gameinfoIframe.src = "features.html"
}
function gameinfoButtonsMaps () {
    gameinfoNavButtonsFeatures.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsMaps.setAttribute("class", "gameinfoNavButtons gameinfoNavButtonsActive")
    gameinfoNavButtonsFaqs.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsStaff.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsFeatures2.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsMaps2.setAttribute("class", "gameinfoNavButtons gameinfoNavButtonsActive")
    gameinfoNavButtonsFaqs2.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsStaff2.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsIcon10.style.display = "block"
    gameinfoNavButtonsIcon11.style.display = "none"
    gameinfoNavButtonsIcon20.style.display = "none"
    gameinfoNavButtonsIcon21.style.display = "block"
    gameinfoNavButtonsIcon30.style.display = "block"
    gameinfoNavButtonsIcon31.style.display = "none"
    gameinfoNavButtonsIcon40.style.display = "block"
    gameinfoNavButtonsIcon41.style.display = "none"
    gameinfoIframe.src = "maps.html"
}
function gameinfoButtonsFaqs () {
    gameinfoNavButtonsFeatures.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsMaps.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsFaqs.setAttribute("class", "gameinfoNavButtons gameinfoNavButtonsActive")
    gameinfoNavButtonsStaff.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsFeatures2.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsMaps2.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsFaqs2.setAttribute("class", "gameinfoNavButtons gameinfoNavButtonsActive")
    gameinfoNavButtonsStaff2.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsIcon10.style.display = "block"
    gameinfoNavButtonsIcon11.style.display = "none"
    gameinfoNavButtonsIcon20.style.display = "block"
    gameinfoNavButtonsIcon21.style.display = "none"
    gameinfoNavButtonsIcon30.style.display = "none"
    gameinfoNavButtonsIcon31.style.display = "block"
    gameinfoNavButtonsIcon40.style.display = "block"
    gameinfoNavButtonsIcon41.style.display = "none"
    gameinfoIframe.src = "faq.html"
}
function gameinfoButtonsStaff () {
    gameinfoNavButtonsFeatures.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsMaps.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsFaqs.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsStaff.setAttribute("class", "gameinfoNavButtons gameinfoNavButtonsActive")
    gameinfoNavButtonsFeatures2.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsMaps2.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsFaqs2.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsStaff2.setAttribute("class", "gameinfoNavButtons gameinfoNavButtonsActive")
    gameinfoNavButtonsIcon10.style.display = "block"
    gameinfoNavButtonsIcon11.style.display = "none"
    gameinfoNavButtonsIcon20.style.display = "block"
    gameinfoNavButtonsIcon21.style.display = "none"
    gameinfoNavButtonsIcon30.style.display = "block"
    gameinfoNavButtonsIcon31.style.display = "none"
    gameinfoNavButtonsIcon40.style.display = "none"
    gameinfoNavButtonsIcon41.style.display = "block"
    gameinfoIframe.src = "staff.html"
}
function gameinfoButtonsRules () {
    gameinfoNavButtonsFeatures.setAttribute("class", "gameinfoNavButtons gameinfoNavButtonsInactive")
    gameinfoNavButtonsMaps.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsFaqs.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsStaff.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsFeatures2.setAttribute("class", "gameinfoNavButtons gameinfoNavButtonsInactive")
    gameinfoNavButtonsMaps2.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsFaqs2.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsStaff2.setAttribute("class", "gameinfoNavButtons")
    gameinfoNavButtonsIcon10.style.display = "block"
    gameinfoNavButtonsIcon11.style.display = "none"
    gameinfoNavButtonsIcon20.style.display = "block"
    gameinfoNavButtonsIcon21.style.display = "none"
    gameinfoNavButtonsIcon30.style.display = "block"
    gameinfoNavButtonsIcon31.style.display = "none"
    gameinfoNavButtonsIcon40.style.display = "block"
    gameinfoNavButtonsIcon41.style.display = "none"
    gameinfoIframe.src = "rules.html"
}