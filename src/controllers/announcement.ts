import { Message, MessageEmbed } from "discord.js"
import help from "./help"

export default function announcement(req: any, arg: string[]) {
    if (arg) {
        const introEmbed = new MessageEmbed()
            .setColor('#5bc0de')
            .setDescription(
                `Hello! Before we get started, please check out the example below.
            Some *optional* items which will be handy to have available if you plan on including them:
            
            1. Author icon URL
            2. Author URL
            3. Title URL
            4. Thumbnail URL
            5. Main image URL
            6. Footer icon URL
            
            **Note:** I will quit and cancel the announcement after 5 minutes of waiting on a response!`)

        const displayEmbed = new MessageEmbed()
            .setColor('#5865F2')
            .setAuthor(
                "Author (URL)",
                "http://announcementbot.live/images/discord_logo.png",
                "https://discord.com/api/oauth2/authorize?client_id=725281264411869244&permissions=519232&scope=bot"
            )
            .setURL(
                'https://discord.com/api/oauth2/authorize?client_id=725281264411869244&permissions=519232&scope=bot'
            )
            .setTitle("Title (URL)")
            .setThumbnail("http://announcementbot.live/images/discord_logo.png")
            .setDescription("Description")
            .addField("Field Header", "Field Content")
            .setImage("http://announcementbot.live/images/discord_logo.png")
            .setFooter("Footer Text", "http://announcementbot.live/images/discord_logo.png")

        req.channel.send(introEmbed)
        req.channel.send(displayEmbed)
        req.author.send("Announcement was sent!")
    } else {
        help(req, [])
    }
}