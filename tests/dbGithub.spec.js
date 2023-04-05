// // Importando dados da api;
const requestBase =  require('../dbGithub/setGithubDataBase')
const requestRepos = require('../dbGithub/setGithubDataRepos')
const requestLang = require('../dbGithub/setGithubLangRepos')

it('Test in requestBase', async () => {
    const data = requestBase("CriticalNoob02")

    await expect(data).resolves.not.toBe({})
})

it('Test in requestRepos', async () => {
    const data = requestRepos("CriticalNoob02")

    await expect(data).resolves.not.toBe({})
})

it('Test in requestLang', async () => {
    const data = requestLang("CriticalNoob02")

    await expect(data).resolves.not.toBe({})
})
