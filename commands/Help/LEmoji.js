const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setDescription("**بخش لیست خرید پک ایموجی IE ** <:help:778600706729967647>   ")
    .addField('خرید پک های ایموجی <:buy:778138002139381770> ', '<:cmd:778602422490103868>  `p?buy-emoji <اسم پک مورد نظر>`')
    .addField('لیست پک های ایموجی <:list:778695104696418356> ', 'Pubg **|** AmongUS **|** Original-Style')

    .setColor("#f2ecec")
    message.channel.send(embed)




}


module.exports.help = {
  name:"lemoji",
  aliases: [""]
}