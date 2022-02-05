let searchButton = doucment.getElementById('submit')

searchButton.addEventListener('click', function(e){
    // error checker
    e.preventDefault()

    let search = document.getElementById("search").value();
    let originalSearch = search.split('').join('')
    console.log(originalSearch)
    
    fetch("https://api.github.com/users"+originalSearch)
      .then((result) => result.json())
      .then((data) => {
          document.getElementById("result").innerHTML += `
          <div class ="User-profile">User profile <img src="${data.avatar_url}" alt=""></div>
          <div class="name">Name: ${data.name}</div>
          <div class="Username">User name: ${data.login}</div>
          <div class="Email">Email: ${data.email}</div>
          <div class="Location">Location: ${data.location}</div> 
          <div class="number-of-Gists">number of gists: ${data.public_gists}</div>
          `
        })


})
