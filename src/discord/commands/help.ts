import { Message } from "discord.js"
import { helpAnnounceEm, helpDashboardEm, helpEm, helpMessageEm } from "../embeds"

export default function help(req: Message, arg: string[]) {
    const command = arg[0]

    switch (command) {
        case "announce":
            req.channel.send({ embeds: [helpAnnounceEm] })
            break
        case "message":
            req.channel.send({ embeds: [helpMessageEm] })
            break
        case "dashboard":
            req.channel.send({ embeds: [helpDashboardEm] })
            break
        default:
            req.channel.send({ embeds: [helpEm] })
            break
    }
}
