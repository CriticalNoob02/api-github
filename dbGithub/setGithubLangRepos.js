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
    const langObjects = await Promise.all(langPromises);
    const lang = {}
    langObjects.forEach( obj => {
      Object.keys(obj).forEach( key => {
        if(!lang[key]){
          lang[key] = obj[key]
        } 
        else {
          lang[key] += obj[key]
        }
      })
    })
    return lang
  }
  catch(err){
    console.log(err)
  }
}

module.exports = requestLang