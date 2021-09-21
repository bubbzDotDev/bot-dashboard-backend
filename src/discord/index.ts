import { Client, Intents, Message } from "discord.js"
import controller from "../controllers/discordController"
const token = process.env.TOKEN


const client = new Client()
try {
    client.login(token)
    console.log("Live Socket!")
} catch (error) {
    console.log(error)
}

client.on("message", (req: Message) => {
    const message = req.content.split(" ")
    const prefix = message[0].substring(0, 2)
    const command = message[0].substring(2)
    const arg: string[] = message.slice(1)

    if (prefix === "a!") {
        console.log(command)
        switch (command) {
            case "help":
                controller.help(req, arg)
                break
            case "announcement":
                controller.announcement(req, arg)
                break

        }
    }
})

export default client
