const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای دستورات ادمینی بات <:help:778600706729967647>")
    .addField('انتخاب پریفیکس بات <:Paraffinprefix:778138009996361788> ', '`p?prefix <پریفیکس مورد نظر>`')
    .addField('انتخاب چنل لول آپ <:level:778138052987715594> ', '`p?levelup-channel <ایدی چنل>`')
    .addField('انتخاب مقدار پی کوین برای هر پیام(پریمیوم) <:msg:778138053193367562> ', '`p?msgpcoin <مقدار دلخواه>`')
    
    .setColor("#f2ecec")
    message.channel.send(embed)




}

module.exports.help = {
  name:"help-admin",
  aliases: [""]
}