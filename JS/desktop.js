window.addEventListener("load", onLoad)

var desktopWidth;
var desktopHeight;
var appWidth;
var appHeight;

// Runs when the page loads
function onLoad()
{
    initialiseVariables()

    setDesktopAnimation()
    
    getMetadata().then(metadata => placeApps(metadata.apps))    
}

function initialiseVariables()
{
    desktopWidth = window.innerWidth
    desktopHeight = window.innerHeight

    // Substrings taken to chop off the 'px' at the end of the app width/height
    // the "px" prevents us from doign math with teh substring.
    appWidth = document.styleSheets[0].cssRules[1].style.width
    appWidth = appWidth.substring(0, appWidth.length - 2)

    appHeight = document.styleSheets[0].cssRules[1].style.height
    appHeight = appHeight.substring(0, appHeight.length - 2)
}

// Creates app buttons based on the desktop-apps.json metadata, and places them on the desktop
function placeApps(apps)
{
    apps.forEach(app => 
    {
        button = document.createElement("button")
        image = document.createElement("img")
        text = document.createElement("b")

        // Choose a random location for the button, ensuring that it stays fully within the bounds of the screen
        var buttonX = randInt(0, desktopWidth - appWidth)
        var buttonY = randInt(0, desktopHeight - appHeight)
        
        // Choose a random direction and start time for the button's shake animation
        const possibleDirections = ["normal", "reverse", "alternate", "alternate-reverse"]
        var animDir = possibleDirections[randInt(0,3)]
        var animStartTime = Math.random()

        // if the button type isn't set to "button", it will default to "submit" which is not what we want.
        button.setAttribute("type", "button")

        // Make it link to it's appropriate page
        button.setAttribute("ondblclick", `window.location.href='${app.page}'`)

        // Set all of the button's unique style properties.
        // these must be done in the same line, as the "setAttribute" method replaces any other instances of that attribute.
        button.setAttribute("style",
            `left:${buttonX}px; ` +
            `top:${buttonY}px; ` +
            `border-color:${app.color}; ` +
            `animation-direction:${animDir}; ` +
            `animation-delay:-${animStartTime}s; `
        )
        
        // Give the icon it's image and alt text
        image.setAttribute("class", "icon")
        image.setAttribute("src", app.icon)
        image.setAttribute("alt", app.alt)

        // put the title of the button in the text
        text.innerText = app.name

        //put it all together
        button.appendChild(image)
        button.appendChild(text)
        
        // Add it to the html document
        document.body.appendChild(button)

        console.log(button)
    });
}

function randInt(min, max)
{
    return Math.floor(Math.random() * (max + 1)) + min
}

// retrieve all the JSON metadata objects
// Has to be asynchronous due to fetch returning a promise.
async function getMetadata()
{
    response = await fetch("../Metadata/desktop-apps.json")
    metadata = await response.json();

    return metadata
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