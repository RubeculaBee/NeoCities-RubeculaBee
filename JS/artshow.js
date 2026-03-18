window.addEventListener("load", onLoad)

function onLoad()
{
	art = document.createElement("img")
	art.src = "../Assets/art/dream catcher logo.png"
	art.style.height = "384px"
	art.style.width = `${(art.width/art.height) * 384}px`
	art.style.left = "25%"
	art.style.top = "15%"
	
	frame = document.createElement("img")
	frame.src = "../Assets/frame.webp"
	frame.style.width = `${parseInt(art.style.width.slice(0,-2)) + 40}px`
	frame.style.height = `${parseInt(art.style.height.slice(0,-2)) + 40}px`

	document.body.appendChild(art)
	document.body.appendChild(frame)

	frame.style.left = `${art.x - 20}px`
	frame.style.top = `${art.y - 20}px`
}