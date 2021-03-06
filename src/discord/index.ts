import { Client, Intents, Message } from "discord.js"
import announce from "./commands/announce"
import help from "./commands/help"
import info from "./commands/info"
const token = process.env.TOKEN

// @ts-ignore
const client: Client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

try {
    client.login(token)
    console.log("Live Socket!")
} catch (error) {
    console.log(error)
}

client.on("messageCreate", async (req: Message) => {
    const message = req.content.trim().split(" ")
    const prefix = message[0].substring(0, 2)
    const command = message[0].length === 2 ? "" : message[0].substring(2)
    const arg: string[] = message.slice(1)

    if (prefix === "a!") {
        console.log(command || "a!")
        switch (command) {
            case "help":
                help(req, arg)
                break
            case "info":
                info(req)
                break
            case "":
                arg.unshift(command)
                await announce(req)
                break
            case "embed":
            case "announce":
                await announce(req)
                break
        }
    }
})

export default client
