import React from 'react'
import ReactDOM from 'react-dom'
import {SwapiService} from '../services/SwapiService'

const swapi = new SwapiService();
swapi.getAllPeople().then((people) => {
    people.forEach((p) => {
        console.log(p.name)
    })
})



ReactDOM.render(<h1>Hello</h1>, document.getElementById('root'))