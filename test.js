console.log('Hello World');
// const url = 'https://api.github.com/users/jeanetteobr';
// fetch(url)

fetch('https://api.github.com/users/jeanetteobr')
    .then((response) => response.json())
    .then((data) => {
        const root = document.getElementById('root');
        console.log(root);
        console.log(root.innerHTML)
        root.innerHTML = `<p>${data.login}</p>`
    })