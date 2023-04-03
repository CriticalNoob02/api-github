const { Configuration, OpenAIApi } = require('openai')
const axios = require('axios')

// Configuração inicial do Chat;
const configuration = new Configuration({
    organization: "org-QLzI9xnxVzCgHU5b3jo9w6M0",
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);

// Caso o token esteja sem acesso
async (req, res) => {
    if (!configuration.apiKey) {
      res.status(500).json({
        error: {
          message: "Sua chave de acesso não está configurada",
        }
      })
      return
    }
}

// Criando input:
async function getChatResponse(Req) {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: Req,
        temperature: 0,6,
    })
    
}

openai.createCompletion