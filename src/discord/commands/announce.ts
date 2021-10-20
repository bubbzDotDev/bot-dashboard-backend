import { Message } from "discord.js"
import { announceDisplayEm, announceIntroEm, announceMentionEm, announceRoleEm, errorEm } from "../embeds"
import getFirst from "../getFirst"

export default async function announce(req: Message) {
    try {
        const message = await req.channel.send({ embeds: [announceIntroEm] })
        // Asking for Channel to send to
        const prompt1: Message = await getFirst(req)
        const channelID: string = prompt1.content.substring(2, prompt1.content.length - 1)
        if (req.client.channels.cache.find((channel) => channel.id === channelID)) {
            let mention: string = ""
            const title: string = ""
            const description: string = ""
            const thumbnail: string = ""
            const image: string = ""
            // let fields: string: ""
            const footer: string = ""
            const author: string = ""
            const color: string = ""
            const confirm: boolean = false

            await message.edit({ embeds: [announceRoleEm] })
            // Asking if they want to add message about embed
            const prompt2: Message = await getFirst(req)
            if (prompt2.content.toLowerCase() === "yes") {
                const res = await message.edit({ embeds: [announceMentionEm] })
                mention = res.content
            }

            await message.edit({ embeds: [announceRoleEm] })
            // Asking if they want to add message about embed
            const prompt3: Message = await getFirst(req)
            if (prompt3.content.toLowerCase() === "yes") {
                const res = await message.edit({ embeds: [announceMentionEm] })
                mention = res.content
            }

            // const message: any = req.client.channels.cache.get(channelID)
            // const msg = await message.send({
            //     content: `**SENDING TO** <#${channelID}>:`,
            //     embeds: [announceDisplayEm]
            // })
            // msg.edit({ embeds: [announceRoleEm], content: "hi" })

        } else {
            req.channel.send({ embeds: [errorEm("Could not find Channel!")] })
        }
    } catch (error: any) {
        req.channel.send({ embeds: [errorEm(error)] })
    }
}
