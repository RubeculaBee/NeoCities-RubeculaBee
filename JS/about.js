window.addEventListener("load", onLoad)

var activeButton

function onLoad()
{
    console.log("Load")
}

function activateText(buttonClicked)
{
    if(activeButton != null)
        activeButton.style.color = ""

    if(buttonClicked == activeButton)
    {
        activeButton = null
        return
    }
    
    activeButton = buttonClicked

    activeButton.style.color = "yellow"

    console.log(activeButton)
}