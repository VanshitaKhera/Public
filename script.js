import { config } from "dotenv"
// import {config} from configDotenv

config()
// import { Configuration , OpenAIApi} from "openai"

import OpenAI from 'openai'
import readline from "readline"


const openai = new OpenAI({
  apiKey: process.env.API_KEY
})

const userInterface = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

userInterface.prompt()
userInterface.on("line", async input => {
    const res = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0613",
        messages: [{"role": "user", "content": input}],
      })
      console.log(res.data.choices[0].message.content) 
      userInterface.prompt()
})

// const chatCompletion = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: [{"role": "user", "content": "Hello!"}],
//   })
// .then(res => {
//     console.log(res.data.choices[0].message.content) 
// })