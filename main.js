const url = "https://api.github.com/users/picklescat7"

console.log('Calling fetch....');

fetch(url)
    .then((response) => response.json())  //first .then is a "promise". we are passing the parameter "response" or can be res
    .then((data) => {//second "promise" where we'll start returning html elements using javascript then dot notating off my object to reprsent bits and pieces of the information 
        const root = document.getElementById('root'); //select the element root from html where we'll start throwing stuff in
        console.log(root);
        console.log("nothing to see here", root.innerHTML);
    
        //template literal- start with `` instead of ""
        root.innerHTML = `
        <div class = "header">
        <img src=${data.avatar_url} width="150" />
        <h2>${data.name}</h2> </div>

    
        <div class = "box-1">
            <p><b>Location:<b> ${data.location}</p>
            <p><b>GitHub URL:<b> ${data.html_url}</p>
            <p><b>GitHub Username:<b> ${data.login}</p>
        </div>
        `
        //Question: why is this in this function, but then seperate function for the for loop?
        console.log(data.html_url)
        return data.repos_url // returning this so I can make another request in the next step
    })
    //add the repos 
    .then((reposUrl) => fetch(reposUrl))
    .then((res) => res.json())
    .then((data) => {
        //can do stuff here with repos data
        console.log(data)
  // here I'm just taking ONE repo so that I can manage it more easily,
    // but I will want to do this in a loop for ALL of the repos.
//     const justOneRepo = data[0]
//     console.log(justOneRepo)
//     document.querySelector(
//         '#repo-area'
//     ).innerHTML= `<a href=${justOneRepo.url}>${justOneRepo.name}</a>`
// })
    
    //Here it is with a loop putting the 'stuff' on the page from the fetch above
    for (let repo of data) {
        document.querySelector(
        '#repo-area'
        ).innerHTML += `<p>
        <div class="repo-line"> 
        <i class="fa-solid fa-book"></i>
        <a href=${repo.html_url}>${repo.name}</a><p
        </div>
        `
    }
})

//<h3>${data.name}</h3>

        //This would be the long way to do it. Don't do it bc would need to it for every single key over and over
        // let username = document.createElement('h3')
        // username.innerText = data.login 
        // root.appendChild(username)
//document.querySelector('#root').innerHTML = `<h2>${data.name}</h2>`
//         console.log(data.repos_url)   //need reminder about where repos_url came from/does
//         return data.repos_url //returing so we can make another request in the next step


// .then((reposURL) => fetch(reposUrl))
// .then((res) => res.json())
// .then((data)=> {
//     //can do stuff here with repos data
//     console.log(data)
//})
//make a button
// <button class="button">Hello World!</button>

//<p>${data.location}</p> 
// fetch(url)
//     .then(function (response) {  //first .then is a "promise"
//     console.log(response)
//     return response.json()
// })

// //find thr different objects
//     .then(function (data) {
//     console.log(data)
//     document.querySelector('#root').innerHTML = `<h2>${data.name}</h2>`
// //do whatever we want with that data, now in json format
//     console.log(data.name)
    
//     document.querySelector('#root').innerHTML = `<h3>${data.id}</h3>`
// //do whatever we want with that data, now in json format
//     console.log(data.id)
// })