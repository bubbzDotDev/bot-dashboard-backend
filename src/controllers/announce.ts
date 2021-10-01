import { AwaitMessagesOptions, Collection, Message } from "discord.js"
import { announceDisplayEm, announceIntroEm, errorEm } from "./embeds"
import getFirst from "./getFirst"
import help from "./help"


export default async function announce(req: Message, arg: string[]) {
    try {
        await req.channel.send({ embeds: [announceIntroEm] })
        const response = await getFirst(req)
        if (response && response.guildId && arg) {
            const guildId: string = response.guildId
            const guilds = req.client.guilds.cache.map((guild) => guild.id)
            if (guilds.includes(guildId)) {

            } else {

            }
        } else {
            help(req, [])
        }
    } catch (error: any) {
        errorEm(error)
    }
}
