import { Client, Intents } from "discord.js"

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.login("ODg5NjE2ODYyNzE4MDk5NTI2.YUj2RA.BTObw2e8ZgLDuIQgqhhHCklo3Qc")
console.log("discord, connect!")

export default client