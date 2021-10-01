import { Client, Intents, Message } from "discord.js"
import info from "../controllers/info"
import help from "../controllers/help"
import announcement from "../controllers/announcement"
const token = process.env.TOKEN

const client = new Client()
try {
    client.login(token)
    console.log("Live Socket!")
} catch (error) {
    console.log(error)
}

client.on("message", (req: Message) => {
    const message = req.content.trim().split(" ")
    const prefix = message[0].substring(0, 2)
    const command = message[0].length === 2 ? "" : message[0].substring(2)
    const arg: string[] = message.slice(1)

    if (prefix === "a!") {
        console.log(command)
        switch (command) {
            case "help":
                help(req, arg)
                break
            case "info":
                info(req)
                break
            case "announcement":
                announcement(req, arg)
                break
            case "":
                arg.unshift(command)
                announcement(req, arg)
                break
        }
    }
})

export default client
