const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای خرید پریمیوم بات <:help:778600706729967647>   ")
    .addField('دستور خرید <:buy:778138002139381770> ', '`p?buy-premium`')
    .addField('و یا به سرور بات بپیوندید و تیکت باز کنید <:buy:778138002139381770> ', '[Link](https://discord.gg/7jape3M)')
    .setColor("#f2ecec")
    message.channel.send(embed)




}

module.exports.help = {
  name:"premium",
  aliases: [""]
}