
window.addEventListener("load", onLoad)

// Runs when the page loads
function onLoad()
{
    setDesktopAnimation()
}

// Sets the desktop animation's backgroundgPosition keyframes to be correctly positioned for smooth looping.
function setDesktopAnimation()
{
    // Get the keyframe effect of the body's first animation (bg-move)
    var effect = document.querySelector("body").getAnimations()[0].effect
    // Get the dimension of the background
    var bgDimensions = getBackgroundSize()
    
    // Set keyframes of the animation to move the background from (0,0) to (width, height)
    effect.setKeyframes({
            backgroundPositionX: ["0px", `${bgDimensions[0]}px`],
            backgroundPositionY: ["0px", `${bgDimensions[1]}px`],
    })
}

// Grabs the current desktop background and gets its dimensions
// Returns an array containing the width and height, in that order
function getBackgroundSize()
{
    // Get the url of the background image (the 0 index css rule is the body style rule)
    var bgURL = document.styleSheets[0].cssRules[0].style.backgroundImage

    //chop off the first 5 and last 2 characters (this removes the 'url("' and '")' parts specifically, leaving us with only the actual resource location)
    bgURL = bgURL.substring(5, bgURL.length - 2)

    // create an image object with that resource as it's source
    var bgImg = new Image()
    bgImg.src = bgURL

    //return the dimensions
    return [bgImg.width, bgImg.height]
}