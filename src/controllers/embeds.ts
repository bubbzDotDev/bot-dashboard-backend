import { MessageEmbed } from "discord.js"

/**************************************
 *  Colors
 *************************************/
const defaultColor = "#2f3136"

/**************************************
 *  URLs
 *************************************/
const discordLogoURL = "http://announcementbot.live/images/discord_logo.png"
const botAddURL = "https://discord.com/api/oauth2/authorize?client_id=725281264411869244&permissions=519232&scope=bot"
const botJoinURL = "https://discord.gg/bMjyskS"
const botPatreonURL = "https://www.patreon.com/announcementbot"
const donateBotURL = "https://donatebot.io/checkout/725635017652305943"
const botVoteURL = "https://discords.com/bots/bot/725281264411869244/vote"
const botURL = "https://www.announcementbot.live/"
const botTwitterURL = "https://twitter.com/embedondiscord"

/**********************************************************************************************************************
 *
 *  Help Command Embeds
 *
 *********************************************************************************************************************/
export function errorEm(error: string) {
    return new MessageEmbed()
        .setColor(defaultColor)
        .setDescription(
            `Error: ${error}`)
}

/**********************************************************************************************************************
 *
 *  Help Command Embeds
 *
 *********************************************************************************************************************/
export const helpEm: MessageEmbed = new MessageEmbed()
    .setColor(defaultColor)
    .setDescription(
        `Use \`a!help [command]\` for more info on a command.

        **Commands**
        \`announce\` \`message\` \`dashboard\` \`info\` \`help\``)

export const helpAnnounceEm = new MessageEmbed()
    .setColor(defaultColor)
    .setDescription(
        `Use \`a!help [command]\` for more info on a command.

        **Commands**
        \`announce\` \`message\` \`dashboard\` \`info\` \`help\``)

export const helpMessageEm = new MessageEmbed()
    .setColor(defaultColor)
    .setDescription(
        `Type **\`a!message [YOUR MESSAGE HERE]\`** to write a default message`)

export const helpDashboardEm = new MessageEmbed()
    .setColor(defaultColor)
    .setDescription(
        `Type **\`a!dashboard\`** to get the Announcement Bot dashboard link`)

/**********************************************************************************************************************
 *
 *  Info Command Embeds
 *
 *********************************************************************************************************************/
export const infoEm = new MessageEmbed()
    .setColor(defaultColor)
    .setDescription(
        `**Information**
        For available commands, use \`a!help\`.

        **Invite**
        [Click here](${botAddURL}) to invite Announcement Bot to your server!

        **Support Server**
        Join [https://discord.gg/bMjyskS](${botJoinURL}) to get help and chat with the Dev Team!

        **Donate**
        Become a patron via [Patreon](${botPatreonURL}).
        Or visit [donatebot.io](${donateBotURL}).

        **Vote**
        [discords.com](${botVoteURL}})

        **Our website**
        [announcementbot.live](${botURL})

        **Twitter**
        [@EmbedOnDiscord](${botTwitterURL})`)

/**********************************************************************************************************************
 *
 *  Announce Command Embeds
 *
 *********************************************************************************************************************/
export const announceIntroEm: MessageEmbed = new MessageEmbed()
    .setColor(defaultColor)
    .setDescription(
        `Let's get started! Where would you like your announcement posted?

        Respond with the \`#channel-name\` only.`)

export const announceDisplayEm = new MessageEmbed()
    .setColor("#5865F2")
    .setAuthor("Author (URL)", discordLogoURL, botAddURL)
    .setURL(botAddURL)
    .setTitle("Title (URL)")
    .setThumbnail(discordLogoURL)
    .setDescription("Description")
    .addField("Field Header", "Field Content")
    .setImage(discordLogoURL)
    .setFooter("Footer Text", discordLogoURL)
