
window.addEventListener("load", onLoad)

// Runs when the page loads
function onLoad()
{
    setDesktopAnimation()
}

// Sets the desktop animation's keyframes to be correctly positioned for smooth looping.
function setDesktopAnimation()
{
    effect = document.querySelector("body").getAnimations()[0].effect
    getBackgroundSize()
    
    console.log(effect.getKeyframes())
    
    console.log("Changing Keyframes")
    
    effect.setKeyframes
    ({
            backgroundPositionX: ["0px", "200px"],
            backgroundPositionY: ["0px", "200px"],
    })
    
    console.log(effect.getKeyframes())
}

function getBackgroundSize()
{
    bgURL = document.styleSheets[0].cssRules[0].style.backgroundImage
    console.log(bgURL)
    
}