import { MessageEmbed } from "discord.js"

export default function help(req: any, arg: string[]) {
    console.log(arg)

    if (arg.length === 0) {
        const embed = new MessageEmbed()
            .setColor('#5bc0de')
            .setDescription(
                `Use \`a!help [command]\` for more info on a command.

             **Commands**    
             \`announce\` \`message\` \`dashboard\` \`info\` \`help\``)
        req.channel.send(embed)
    } else {
        const command = arg[0]
        console.log(command)

        let embed
        switch (command) {
            case "announce":
                embed = new MessageEmbed()
                    .setColor('#5bc0de')
                    .setDescription(
                        `Type **\`a!announce\`** or just **\`a!\`** to begin an embeded announcement builder.`)
                break
            case "message":
                embed = new MessageEmbed()
                    .setColor('#5bc0de')
                    .setDescription(
                        `Type **\`a!message [YOUR MESSAGE HERE]\`** to write a default message`)
                break
            case "dashboard":
                embed = new MessageEmbed()
                    .setColor('#5bc0de')
                    .setDescription(
                        `Type **\`a!dashboard\`** to get the Announcement Bot dashboard link`)
                break
            default:
                embed = new MessageEmbed()
                    .setColor('#5bc0de')
                    .setDescription(
                        `Use \`a!help [command]\` for more info on a command.

                    **Commands**    
                    \`embed\` \`noembed\` \`info\` \`help\``)
                break

        }
        req.channel.send(embed)
    }
}