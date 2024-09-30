// const express = require('express')
// const path = require('path')
// const app = express()
// app.use(express.static(path.join(__dirname, "Public")))

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'home.html', 'Public'))
// })

// app.listen(4000, () => {
//     console.log('App running on Port:3000')
// })

const myFs = require('fs');
myFs.readFile('/Public/data.txt', 'utf-8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    else{
        console.log(data);
    }
})


