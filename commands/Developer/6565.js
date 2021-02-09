const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== '685169776359768094') {
        return message.channel.send(`شما قابلیت اضافه کردن پیکوین به حساب کسی را ندارید!`)
    }

    if (!args[0]) return message.reply('قربان،لطفا عدد مورد نظر خود را هم عوض کنین')
    if (isNaN(args[0])) return message.reply('این یک عدد نیست قربان ما اسکل نیستیم :/')

    let user = message.mentions.users.first() || message.author
    message.channel.send('با موفقیت انتقال یافت ' + args[0] + ' ' + user)
    db.add(`pcoin_${message.guild.id}_${user.id}`, args[0])

}

module.exports.help = {
    name:"#6565",
    aliases: [""]
  }