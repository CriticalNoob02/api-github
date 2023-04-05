const axios = require('axios')


async function requestLang(user) {
  try{
    const lang = new Object()

    let response = await axios.get(`https://api.github.com/users/${user}/repos`)
    let resData = response.data
    let langs = resData.map( line => line.languages_url )
    const langPromises = langs.map( async url => {
      let response2 = await axios.get(url)
      let resData2 = response2.data
      return resData2
    })
    let data = await Promise.all(langPromises)
    data.forEach(obj => {
      Object.keys(obj).forEach(key => {
        if (!lang[key]) {
          lang[key] = obj[key]
        } else {
          lang[key] += obj[key]
        }
      })
    })
    console.log(lang)
    return lang
  }
  catch(err){
    console.log(err)
  }
}

module.exports = requestLang