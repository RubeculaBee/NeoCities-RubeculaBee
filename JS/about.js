window.addEventListener("load", onLoad)

var activeSide = {"button": null, "text": null}

function onLoad()
{
    console.log("Load")
}

function activateSide(buttonClicked)
{
    if(activeSide.button != null)
    {
        activeSide.button.style.color = ""
        textSlide(activeSide.text, "reverse")
    }

    if(buttonClicked == activeSide.button)
    {
        activeSide.button = null
        activeSide.text = null
        return
    }
    
    activeSide.button = buttonClicked
    activeSide.text = document.getElementById(buttonClicked.dataset.side)
    
    activeSide.button.style.color = "yellow"
    textSlide(activeSide.text, "normal")
}

function textSlide(text, direction)
{
    console.log(`Playing ${direction} animation for ${text.id}`)

    text.style.animationDirection = direction
    
    // accessing clientHeight forces a repaint, causing the animation to reset its progress to the beginning when the id is readded
    let tempId = text.id
    text.id = ""
    text.clientHeight
    text.id = tempId
    
    text.style.animationPlayState = "running"
    
    if(direction == "normal")
        text.style.transform = "translateX(0%)"
    if(direction == "reverse")
        text.style.transform = `translateX(${110 * (text.id == "left" ? -1 : 1)}%)`
}