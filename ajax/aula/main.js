// // AJAX INICIO 

// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/diego3g');
// xhr.send(null);
// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//         console.log(JSON.parse(xhr.responseText))
//     }
// }


// ----------------------------PROMISSES-----------------------------------
// var minhaPromesssa = () => {
//     return new Promise(function(resolve, reject) {
//         var xhr = new XMLHttpRequest()
//         xhr.open('GET', 'https://api.github.com/users/diego3g')
//         xhr.send(null)

//         xhr.onreadystatechange = () => {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText))
//                 } else {
//                     reject('erro')
//                 }
//             }
//         }

//     })
// }

// minhaPromesssa()
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.warn(error)
//     })

axios.get('get',
        'https://api.github.com/users/diego3g')
    .then((response) => {
        console.log(response)

    })
    .catch((error) => {
        console.warn(error)
    })