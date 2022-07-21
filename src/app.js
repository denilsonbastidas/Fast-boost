const express = require('express')
const Instagram = require('instagram-web-api')
const App = express()

const username = ''
const password = ''

let client = new Instagram({ username: username, password: password });
(async () => {
    await client.login().catch(err => {
        console.log(err);
    })

})()
module.exports = App