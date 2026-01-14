window.addEventListener("load", onLoad)

fr = new FileReader()

function onLoad()
{
	getPosts().then(post => makePages(post))
}

async function getPosts()
{
	var post = {
		date: '',
		title: '',
		text: ''
	}

	response = await fetch("../Assets/blog-posts/Lorem Ipsum.txt")
	file = await response.blob()

	post.date = file.lastModified
	post.title = file.name

	fr.readAsText(file)
	return new Promise((resolve) => {
		fr.onload = () => {
			post.text = fr.result
			resolve(post)
		}
	});
}

function makePages(post)
{
	page = document.createElement('div')
	page.setAttribute('class', 'page')

	content = {
		date: document.createElement('i'),
		title: document.createElement('b'),
		text: document.createElement('p')
	}

	for(let part in content)
	{
		console.log(`${content[part]} ${part}: ${post[part]}`)
		content[part].innerText = post[part]
		page.appendChild(content[part])
	}

	document.body.appendChild(page)
}