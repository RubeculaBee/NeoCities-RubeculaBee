window.addEventListener("load", onLoad)

fr = new FileReader()

function onLoad()
{
	getPosts().then(post => makePages(post))

	foldertest()
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


	post.date = new Date(file.lastModified).toDateString()
	post.title = file.name

	fr.readAsText(file)
	return new Promise((resolve) => {
		fr.onload = () => {
			post.text = fr.result
			resolve(post)
		}
	});
}

async function foldertest()
{
	testResponse = await fetch("../Assets/blog-posts/")
	folder = await testResponse.blob()
	console.log(folder)
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
		content[part].innerText = post[part]
		page.appendChild(content[part])
	}

	document.body.appendChild(page)
}