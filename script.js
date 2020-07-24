

function displayRepos(responseJson) {
     $('.display-div').empty();
      let link;
      let name;
      for (let i = 0; i < responseJson.length; i++) {
        name = responseJson[i].name
        link = (responseJson[i].git_url).replace('git','http')
        $('.display-div').append(`<p class="repo-name"><b>Repository Name:</b> ${name}</p>`);
        $('.display-div').append(`<p>Click here: <a class="repo-link" href="${link}"> ${name}</a></p></br>`);
        console.log(link)
     }
      $('.hidden').removeClass('hidden')
    }
    
    
    function watchForm() {
      $(".js-github-handle").click(event => {
        event.preventDefault();
        const searchTerm = $('#js-github-handle').val()
        const url = `https://api.github.com/users/${searchTerm}/repos?sort=created`
        fetch(url)
          .then(response => response.json())
          .then(responseJson => displayRepos(responseJson))
          .catch(error => {console.log("error: ", error);alert('whoops!');})
      })
    
    }
    
    $(watchForm)
    