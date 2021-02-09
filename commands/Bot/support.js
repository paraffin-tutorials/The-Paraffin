const { MessageEmbed } = require('discord.js')
const os = require('os')

module.exports.run = async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Ξlite Team')
            .setURL('https://discord.gg/vC9Sf2PYTk')
            .setColor("#f2ecec")
            .addField("مشکل بات رو بنویسید <:support:778192441424740362> ", "`p?bug <مشکل شما با بات>`")
    .addField("پیشنهادات خودتون رو بنویسید <:support:778192441424740362> ", "`p?proposal <ایده و یا پیشنهاد خودتون رو بنویسید>`")
    .setAuthor('Paraffin ™',  `https://cdn.discordapp.com/emojis/778192441424740362.png?v=1`)

        await message.channel.send(embed)
    }
  
    module.exports.help = {
        name:"support",
        aliases: ["s"]
      }