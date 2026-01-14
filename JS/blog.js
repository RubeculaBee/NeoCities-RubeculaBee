window.addEventListener("load", onLoad)

fr = new FileReader()

function onLoad()
{
	getPosts().then(promises => {
		for(promise of promises)
			promise.then(post => makePages(post))
	})
}

async function getPosts()
{
	var posts = []
	var list = await fetch("../Metadata/post-list.json")
	list = await list.json()

	for(let name of list)
	{
		let post = {
			date: '',
			title: '',
			text: ''
		}

		file = await fetch(`../Assets/blog-posts/${name}`)
		file = await file.blob()


		post.date = new Date(file.lastModified).toDateString()
		post.title = file.name

		fr.readAsText(file)
		posts.push(new Promise((resolve) => {
			fr.onload = () => {
				post.text = fr.result
				resolve(post)
			}
		}))
	}
	return posts
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