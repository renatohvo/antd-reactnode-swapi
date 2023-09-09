const service = require('../services/service');
const axios = require('axios');

const swapi = axios.create({
    baseURL: 'https://swapi.dev/api/'
});

async function getSeeding(req, res) {
    try {
        let swapiArray = [];
        for (let i = 1; i <= 9; i++) {
            const retornoswapi = await swapi.get(`/people/?page=${i}`);
            swapiArray.push(JSON.parse(JSON.stringify(retornoswapi.data.results)));
        }
        const arrNames = [];
        for (const newArray of swapiArray) {
            for (const objeto of newArray) {
                arrNames.push(objeto.name);
            }
        }
        const results = await service.insertAll(arrNames);
        res.json(results);
        console.log(results);
    }
    catch (error) {
        res.status(500).send("Error Populating Database SWAPI");
    }
}

module.exports = { getSeeding }