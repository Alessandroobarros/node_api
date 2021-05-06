const fs = require('fs')

fs.readFile('./assets/Cute_dog.jpg', (error, buffer)=> {
    console.log('imagem carregada')
    console.log(buffer)

    fs.writeFile('./assets/dog.jpg', buffer, erro => {
        console.log('A imagem foi escrira.')
    })
})
