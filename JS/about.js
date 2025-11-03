window.addEventListener("load", onLoad)

var activeSide

function onLoad()
{
    console.log("Load")
}

function activateText(button)
{
    if(activeSide != null)
        activeSide.style.color = ""

    if(button == activeSide)
    {
        activeSide = null
        return
    }
    
    activeSide = button

    activeSide.style.color = "yellow"

    console.log(activeSide)
}