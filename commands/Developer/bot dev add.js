const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== '488958506280550402') {
        return message.channel.send(`شما قابلیت اضافه کردن ندارید!`)
    }

    let user = message.mentions.users.first() || message.author
    message.channel.send('با موفقیت دولوپر شد  '  + user)
    db.set(`bd_${user.id}`, true)

}

module.exports.help = {

    name:[""],
    aliases: ["#botdeveloper"]
}