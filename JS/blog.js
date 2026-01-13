window.addEventListener("load", onLoad)

fr = new FileReader()

function onLoad()
{
	getPosts()
}

async function getPosts()
{
	response = await fetch("../Metadata/blog-posts/Lorem Ipsum.txt")
	file = await response.blob()
	await fr.readAsText(file)

	fr.onload = () => {
		console.log(fr.result)
	}
}