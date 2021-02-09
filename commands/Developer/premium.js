const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== '488958506280550402') {
        return message.channel.send(`شما قابلیت پریمیوم کردن ندارید!`)
    }

    message.channel.send('با موفقیت  این سرور پریمیوم شد ')
    db.set(`premium_${message.guild.id}`, true)

}

module.exports.help = {

    name:[""],
    aliases: ["#add-premium"]
}