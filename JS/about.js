window.addEventListener("load", onLoad)

var activeSide

function onLoad()
{
    console.log("Load")
}

function activateText(button)
{
    if(button == activeSide)
    {
        activeSide = null
        button.style.color = ""
        return
    }

    if(activeSide != null)
        activeSide.style.color = ""
    
    activeSide = button

    button.style.color = "yellow"

    console.log(activeSide)
}