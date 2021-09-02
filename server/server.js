const express = require('express');

const app = express();
const PORT = 5000;

const tennisPlayersArray = [
    {
        firstName: 'Serena',
        lastName: 'Williams',
        born: 1981,
    },
    {
        firstName: 'Arthur',
        lastName: 'Ashe',
        born: 1943,
    },
    {
        firstName: 'John',
        lastName: 'McEnroe',
        born: 1959,
    },
    {
        firstName: 'Naomi',
        lastName: 'Osaka',
        born: 1997,
    },
    {
        firstName: 'Andre',
        lastName: 'Agassi',
        born: 1970,
    },
    {
        firstName: 'Bille Jean',
        lastName: 'King',
        born: 1943,
    },
];

const tournamentsArray = [
    {
        name: 'Australian Open',
        location: 'Melbourne, Australia',
    },
    {
        name: 'French Open',
        location: 'Paris, France',
    },
    {
        name: 'Wimbledon',
        location: 'Wimbledon, England',
    },
    {
        name: 'US Open',
        location: 'NYC, New York',
    },
];

// app.use(express.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.get('/players', (req, res) => {
    res.send(tennisPlayersArray);
});

app.get('/tournaments', (req, res) => {
    res.send(tournamentsArray);
});

app.post('/players', (req, res) => {
    console.log(req.body);
    tennisPlayersArray.push(req.body);
    res.send('Player Added');
});

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});