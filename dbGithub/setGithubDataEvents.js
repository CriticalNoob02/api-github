const { Octokit } = require("octokit")
require('dotenv').config()

const octokit = new Octokit({
    auth: process.env.TOKEN_GITHUB
});

async function requestDates(user) {
    try {
      const response = await octokit.request("GET /users/{username}/events", {
        username: user,
      })
      
      console.log(`Conectado! Status: ${response.status}.`)
      
      const data = response.data
      const dates = []

      for(let i = 0; i < data.length; i++){
        let date = data[i].created_at
        dates.push(date.slice(0,10))
      } 
      console.log(dates)
      return dates
    } catch (error) {
        console.log(`Error! Status: ${error.status}.`)
        throw error
      }
}

module.exports = requestDates