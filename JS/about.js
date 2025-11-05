window.addEventListener("load", onLoad)

var activeSide = {"button": null, "text": null}

function onLoad()
{
    console.log("Load")
}

function activateText(buttonClicked)
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
}