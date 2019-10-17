window.addEventListener('DOMContentLoaded', (e) => {
    fetchBlogs()
});

fetchBlogs = () => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40pintochristian2')
    .then(resp => resp.json())
    .then(blogs => {
        displayBlogs(blogs.items)
    })
}

displayBlogs = (blogs) => {
    let blogsDiv = document.querySelector(".blogs")
    debugger
}