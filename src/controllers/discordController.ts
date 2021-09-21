import { Message } from "discord.js"

export default {
    help(req: Message, arg: string[]) {

        if (arg) {
            req.channel.send("Help! " + arg.join(" "))
        }
    },
    announcement(req: any, arg: any) {
        if (arg) {
            req.channel.send("Accouncement: " + arg.join(" "))
        }
    }
}