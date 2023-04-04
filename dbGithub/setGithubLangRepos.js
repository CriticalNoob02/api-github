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
    langObjects.forEach( async obj => {
      Object.keys(obj).forEach( async key => {
        if(!lang[key]){
          lang[key] = await obj[key]
        } 
        else {
          lang[key] += await obj[key]
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