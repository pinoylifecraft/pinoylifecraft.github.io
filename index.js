var splashScreen = document.getElementById("splashScreen")
var mobilenavMenu = document.getElementById("mobilenavMenu")
var mobilenavMenuClose = document.getElementById("mobilenavMenuClose")
var navList = document.getElementById("navList")
var mobilenavLogo = document.getElementById("mobilenavLogo")
var mobilenavMenuBackground = document.getElementById("mobilenavMenuBackground")
var viewerBG1 = document.getElementsByClassName("viewerBG")[0]
var aboutTrailerVideo = document.getElementById("aboutTrailerVideo")
var viewerBG2 = document.getElementsByClassName("viewerBG")[1]
var screenshotImageCounter = document.getElementById("screenshotImageCounter")
var screenshotImagePrev = document.getElementById("screenshotImagePrev")
var screenshotImageNext = document.getElementById("screenshotImageNext")
var screenshotImage = document.getElementById("screenshotImage")

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

// GAMEPLAY SCREENSHOTS
function screenshotOpen1 () {
    viewerBG2.style.display = "block"
    screenshotImageCounter.innerHTML = "1"
    screenshotImagePrev.style.display = "none"
    screenshotImage.src = "https://i.imgur.com/LZoZ89a.png"
    screenshotImage.alt = "Screenshot 1 - Creative Menu"
    screenshotImageNext.setAttribute("onclick", "screenshotNext1()")
}
function screenshotNext1 () {
    screenshotImagePrev.style.display = "block"
    screenshotImageCounter.innerHTML = "2"
    screenshotImage.src = "https://i.imgur.com/L5oOx62.png"
    screenshotImage.alt = "Screenshot 2 - Hiding in the Bush"
    screenshotImageNext.setAttribute("onclick", "screenshotNext2()")
    screenshotImagePrev.setAttribute("onclick", "screenshotPrev2()")
}
function screenshotPrev2 () {
    screenshotImageCounter.innerHTML = "1"
    screenshotImagePrev.style.display = "none"
    screenshotImage.src = "https://i.imgur.com/LZoZ89a.png"
    screenshotImage.alt = "Screenshot 1 - Creative Menu"
    screenshotImageNext.setAttribute("onclick", "screenshotNext1()")
}
function screenshotOpen2 () {
    viewerBG2.style.display = "block"
    screenshotImageCounter.innerHTML = "2"
    screenshotImage.src = "https://i.imgur.com/L5oOx62.png"
    screenshotImage.alt = "Screenshot 2 - Hiding in the Bush"
    screenshotImageNext.setAttribute("onclick", "screenshotNext2()")
    screenshotImagePrev.setAttribute("onclick", "screenshotPrev2()")
}
function screenshotNext2 () {
    screenshotImageCounter.innerHTML = "3"
    screenshotImage.src = "https://i.imgur.com/hR6S5Po.png"
    screenshotImage.alt = "Screenshot 3 - Creative Menu Button"
    screenshotImageNext.setAttribute("onclick", "screenshotNext3()")
    screenshotImagePrev.setAttribute("onclick", "screenshotPrev3()")
}
function screenshotPrev3 () {
    screenshotImageCounter.innerHTML = "2"
    screenshotImage.src = "https://i.imgur.com/L5oOx62.png"
    screenshotImage.alt = "Screenshot 2 - Hiding in the Bush"
    screenshotImageNext.setAttribute("onclick", "screenshotNext2()")
    screenshotImagePrev.setAttribute("onclick", "screenshotPrev2()")
}
function screenshotOpen3 () {
    viewerBG2.style.display = "block"
    screenshotImageCounter.innerHTML = "3"
    screenshotImage.src = "https://i.imgur.com/hR6S5Po.png"
    screenshotImage.alt = "Screenshot 3 - Creative Menu Button"
    screenshotImageNext.setAttribute("onclick", "screenshotNext3()")
    screenshotImagePrev.setAttribute("onclick", "screenshotPrev3()")
}
function screenshotNext3 () {
    screenshotImageCounter.innerHTML = "4"
    screenshotImage.src = "https://i.imgur.com/VwMmk60.png"
    screenshotImage.alt = "Screenshot 4 - Server Tab"
    screenshotImageNext.setAttribute("onclick", "screenshotNext4()")
    screenshotImagePrev.setAttribute("onclick", "screenshotPrev4()")
}
function screenshotPrev4 () {
    screenshotImageCounter.innerHTML = "3"
    screenshotImage.src = "https://i.imgur.com/hR6S5Po.png"
    screenshotImage.alt = "Screenshot 3 - Creative Menu Button"
    screenshotImageNext.setAttribute("onclick", "screenshotNext3()")
    screenshotImagePrev.setAttribute("onclick", "screenshotPrev3()")
}
function screenshotOpen4 () {
    viewerBG2.style.display = "block"
    screenshotImageCounter.innerHTML = "4"
    screenshotImage.src = "https://i.imgur.com/VwMmk60.png"
    screenshotImage.alt = "Screenshot 4 - Server Tab"
    screenshotImageNext.setAttribute("onclick", "screenshotNext4()")
    screenshotImagePrev.setAttribute("onclick", "screenshotPrev4()")
}
function screenshotNext4 () {
    screenshotImageCounter.innerHTML = "5"
    screenshotImage.src = "https://i.imgur.com/zulmRcE.png"
    screenshotImage.alt = "Screenshot 5 - Creative Furniture"
    screenshotImageNext.setAttribute("onclick", "screenshotNext5()")
    screenshotImagePrev.setAttribute("onclick", "screenshotPrev5()")
}
function screenshotPrev5 () {
    screenshotImageCounter.innerHTML = "4"
    screenshotImage.src = "https://i.imgur.com/VwMmk60.png"
    screenshotImage.alt = "Screenshot 4 - Server Tab"
    screenshotImageNext.setAttribute("onclick", "screenshotNext4()")
    screenshotImagePrev.setAttribute("onclick", "screenshotPrev4()")
}
function screenshotOpen5 () {
    viewerBG2.style.display = "block"
    screenshotImageCounter.innerHTML = "5"
    screenshotImage.src = "https://i.imgur.com/zulmRcE.png"
    screenshotImage.alt = "Screenshot 5 - Creative Furniture"
    screenshotImageNext.setAttribute("onclick", "screenshotNext5()")
    screenshotImagePrev.setAttribute("onclick", "screenshotPrev5()")
}
function screenshotNext5 () {
    screenshotImageCounter.innerHTML = "6"
    screenshotImage.src = "https://i.imgur.com/U3suTWR.png"
    screenshotImage.alt = "Screenshot 6 - Creative Pet"
    screenshotImageNext.setAttribute("onclick", "screenshotNext6()")
    screenshotImagePrev.setAttribute("onclick", "screenshotPrev6()")
}
function screenshotPrev6 () {
    screenshotImageCounter.innerHTML = "5"
    screenshotImage.src = "https://i.imgur.com/zulmRcE.png"
    screenshotImage.alt = "Screenshot 5 - Creative Furniture"
    screenshotImageNext.setAttribute("onclick", "screenshotNext5()")
    screenshotImagePrev.setAttribute("onclick", "screenshotPrev5()")
}
function screenshotOpen6 () {
    viewerBG2.style.display = "block"
    screenshotImageCounter.innerHTML = "6"
    screenshotImage.src = "https://i.imgur.com/U3suTWR.png"
    screenshotImage.alt = "Screenshot 6 - Creative Pet"
    screenshotImageNext.setAttribute("onclick", "screenshotNext6()")
    screenshotImagePrev.setAttribute("onclick", "screenshotPrev6()")
}
function screenshotNext6 () {
    screenshotImageCounter.innerHTML = "7"
    screenshotImage.src = "https://i.imgur.com/U3suTWR.png"
    screenshotImage.alt = "Screenshot 6 - Creative Pet"
    screenshotImageNext.setAttribute("onclick", "screenshotNext6()")
    screenshotImagePrev.setAttribute("onclick", "screenshotPrev6()")
}
function screenshotClose () {
    viewerBG2.style.display = "none"
}