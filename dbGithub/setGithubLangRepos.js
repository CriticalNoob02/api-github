const axios = require('axios')


async function requestLang(user) {
  try{
    let response = await axios.get(`https://api.github.com/users/${user}/repos`)
    let resData = response.data
    const langs = resData.map((line) =>{ return line.languages_url })
    const langPromises = await langs.map(async url => { 
      let response = await axios.get(url)
      let resData = response.data
      return resData
    })
    const lang = []
    langPromises.forEach( obj => {
      Object.keys(obj).forEach( key => {
        if(!lang[key]){
          lang[key] = obj[key]
        } 
        else {
          lang[key] += obj[key]
        }
      })
    })
    return langPromises
  }
  catch(err){
    console.log(err)
  }
}

module.exports = requestLang