import { Message } from "discord.js"
import { infoEm } from "../embeds"

export default function info(req: Message) {
    req.channel.send({ embeds: [infoEm] })
}
