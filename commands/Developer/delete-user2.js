const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== '488958506280550402') {
        return message.channel.send(`شما قابلیت دلیت کردن ندارید!`)
    }

    if (!args[0]) return message.reply('قربان،لطفا اسم فایل مورد نظر خود را هم بنویسید')
  
    let user = message.mentions.users.first() || message.author
    message.channel.send('با موفقیت دلیت شد  ' + args[0] + ' ' + user)
    db.subtract(`${args[0]}_${message.guild.id}_${user.id}`, `${args[1]}`)

}

module.exports.help = {

    name:[""],
    aliases: ["@655"]
}