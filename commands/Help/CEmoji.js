const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای بخش ایموجی <:help:778600706729967647>   ")
    .addField('خرید پک های ایموجی <:emoji:778595734765174825> ', '<:cmd:778602422490103868>  `p?buy-emoji <#01>`')
    .addField('مشاهده پک های موجود ایموجی <:emoji:778595734765174825> ', '<:cmd:778602422490103868>  `p?lemoji`')
   
    .setColor("#f2ecec")
    message.channel.send(embed)




}

module.exports.help = {
  name:"emoji-store",
  aliases: [""]
}