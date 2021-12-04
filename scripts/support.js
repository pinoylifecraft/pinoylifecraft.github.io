var splashScreen = document.getElementById("splashScreen")
var mobilenavMenu = document.getElementById("mobilenavMenu")
var mobilenavMenuClose = document.getElementById("mobilenavMenuClose")
var mobilenavListContainer = document.getElementById("mobilenavListContainer")
var mobilenavMenuBackground = document.getElementById("mobilenavMenuBackground")
var homeContentTitle = document.getElementById("homeContentTitle")
var forumTipContainer = document.getElementById("forumTipContainer")
var forumNav2 = document.getElementById("forumNav2")
var forumNav3 = document.getElementById("forumNav3")
var forumTopicBlocks1 = document.getElementsByClassName("forumTopicBlocks")[0]
var forumTopicBlocks2 = document.getElementsByClassName("forumTopicBlocks")[1]
var forumTopicBlocks3 = document.getElementsByClassName("forumTopicBlocks")[2]
var forumTopicBlocks4 = document.getElementsByClassName("forumTopicBlocks")[3]
var forumTopicBlocks5 = document.getElementsByClassName("forumTopicBlocks")[4]
var forumTopicBlocks6 = document.getElementsByClassName("forumTopicBlocks")[5]
var forumTipsContainer = document.getElementById("forumTipsContainer")
var forumNewpostSection = document.getElementById("forumNewpostSection")

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
    mobilenavListContainer.style.transition = "top .3s"
    mobilenavListContainer.style.top = "80px"
    mobilenavMenuBackground.style.display = "block"
}
function mobilenavMenuFadein () {
    mobilenavMenu.style.animation = "NavMenuClose .3s forwards"
    mobilenavMenuClose.style.animation = "NavMenuOpen .3s forwards"
    mobilenavMenuClose.style.visibility = "hidden"
    mobilenavListContainer.style.top = "-380px"
    mobilenavMenuBackground.style.display = "none"
}

// FORUM TIPS
function forumTipOpen () {
    homeContentTitle.innerHTML = "About Forum Topics"
    forumTipContainer.style.display = "none"
    forumNav2.style.display = "none"
    forumNav3.style.display = "block"
    forumTopicBlocks1.style.display = "none"
    forumTopicBlocks2.style.display = "none"
    forumTopicBlocks3.style.display = "none"
    forumTopicBlocks4.style.display = "none"
    forumTopicBlocks5.style.display = "none"
    forumTopicBlocks6.style.display = "none"
    forumTipsContainer.style.display = "block"
}
function forumTipClose () {
    homeContentTitle.innerHTML = "Community and Help Center"
    forumTipContainer.style.display = "flex"
    forumNav2.style.display = "inline-block"
    forumNav3.style.display = "none"
    forumTopicBlocks1.style.display = "block"
    forumTopicBlocks2.style.display = "block"
    forumTopicBlocks3.style.display = "block"
    forumTopicBlocks4.style.display = "block"
    forumTopicBlocks5.style.display = "block"
    forumTopicBlocks6.style.display = "block"
    forumTipsContainer.style.display = "none"
}

// NEW POST
function forumNewpostOpen () {
    forumNewpostSection.style.display = "block"
}
function forumNewpostClose () {
    forumNewpostSection.style.display = "none"
}