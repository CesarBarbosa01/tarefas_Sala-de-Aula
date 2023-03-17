const getUserinfo = (username) => {
     return new Promise((resolve, reject) => {
        fetch(`https://api.github.com/users/${username}`)
        .then((response))
     }) 
}