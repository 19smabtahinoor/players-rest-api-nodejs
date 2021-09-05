const express = require('express');
const app = express();

app.use(express.json());

const players = [
    { id: 1, name: "Tamim Iqbal", born: "March 20, 1989", age: 32 },
    { id: 2, name: "Liton Das", born: "February 16, 1994", age: 27 },
    { id: 3, name: "Soumya Sarkar", born: "February 25, 1993", age: 28 },
    { id: 4, name: "Shakib Al Hasan", born: "March 24, 1987", age: 34 },
    { id: 5, name: "Mushfiqur Rahim", born: "May 9, 1987", age: 34 },
    { id: 6, name: "Mahmudullah Riyad", born: " February 4, 1986", age: 35 },
    { id: 7, name: "Afif Hossain", born: "September 22, 1999", age: 21 },
    { id: 8, name: "Nasum Ahmed", born: " December 5, 1994", age: 26 },
    { id: 9, name: "Saifuddin", born: "November 1, 1996", age: 24 },
    { id: 10, name: "Taskin Ahmed", born: " April 3, 1995", age: 26 },
    { id: 11, name: "Mustafizur Rahman", born: "September 6, 1995", age: 25 },
]

//✅get 
app.get('/', (req, res) => {
    res.send('<h1>Welcome to my players api. Go to <a href="/api/players">Players API</a></h1>');
})

app.get('/api/players', (req, res) => {
    res.send(players);
})

app.get('/api/players/:id', (req, res) => {
    const player = players.find(item => item.id === parseInt(req.params.id));

    if (!player) {
        return res.status(404).send('404.Given id was not found!!')
    }
    res.send(player);
})

//✅post
app.post('/api/players', (req, res) => {
    const player = {
        id: players.length + 1,
        name: req.body.name,
        born: req.body.born,
        age: req.body.age,
    }
    players.push(player);
    res.send(player);
})

//✅ Put or update
app.put('/api/players/:id', (req, res) => {
    const player = players.find(item => item.id === parseInt(req.params.id));
    player.name = req.body.name;
    res.send(player);
})


//✅ Delete
app.delete('/api/players/:id' , (req, res) => {
    const player = players.find(item => item.id === parseInt(req.params.id));
    players.splice(player, 1);
    res.send(player);
})

//create server 
const port = process.env.PORT || 3000
app.listen(port, console.log(`Server listening on http://localhost:${port}`))