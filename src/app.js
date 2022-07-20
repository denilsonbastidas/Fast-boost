const express = require('express')
const Instagram = require('instagram-web-api')
const App = express()
// const username = 'incodeweb'
// const password = 'danielgustavodeni'


const { username, password } = process.env

const client = new Instagram({ username: 'incodeweb', password: 'danielgustavodeni' }, { language: 'es-CL' });

(async () => {
    await client.login()
    const profile = await client.getProfile()

    console.log(profile)
})()
module.exports = App