import { MessageEmbed } from "discord.js"

export default function info(req: any) {

    const embed = new MessageEmbed()
        .setColor('#5bc0de')
        .setDescription(
            `**Information**
            For available commands, use \`a!help\`.

            **Invite**
            [Click here](https://discord.com/api/oauth2/authorize?client_id=725281264411869244&permissions=519232&scope=bot) to invite Announcement Bot to your server!

            **Support Server**
            Join [https://discord.gg/bMjyskS](https://discord.gg/bMjyskS) to get help and chat with the Dev Team!

            **Donate**
            Become a patron via [Patreon](https://www.patreon.com/announcementbot).
            Or visit [donatebot.io](https://donatebot.io/checkout/725635017652305943).

            **Vote**
            [discords.com](https://discords.com/bots/bot/725281264411869244/vote)

            **Our website**
            [announcementbot.live](https://www.announcementbot.live/)

            **Twitter**
            [@EmbedOnDiscord](https://twitter.com/embedondiscord)`)
    req.channel.send(embed)
}