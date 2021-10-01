import { AwaitMessagesOptions, Collection, Message } from "discord.js"

const options: AwaitMessagesOptions = { max: 1, time: (2 * 60 * 1000) }

export default async function getFirst(req: Message): Promise<Message> {
    const filter = (m: any) => m.author.id === req.author.id
    const collected: Collection<string, Message> = await req.channel.awaitMessages({ ...options, filter })
    const first: Message | undefined = collected.first()
    if (first) {
        return first
    } else {
        throw "Invalid Response"
    }
}
