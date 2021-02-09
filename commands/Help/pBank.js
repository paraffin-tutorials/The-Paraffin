const axios = require('axios');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setTitle("<:help:778600706729967647>    IE راهنمای استفاده از بانک  ")
    .setThumbnail(bot.user.displayAvatarURL())
    .addField('پی بانک چیست و چکار میکند', 'پی بانک دقیقا مثل بانک واقعی است و شما با گذاشتن پیکوین در آن پیکوینتان محفوظ میمونه و  کسی موقع حمله کردن نمیتونه از شما پیکوینی راغنیمت کند')
    .addField('دستور جهت گذاشتن پیکوین در پی بانک <:Pbank:778138053197561857>  ', '<:cmd:778602422490103868>  `p?deposit <مبلغ پیکوین>`')
    .addField('دستور جهت برداشت پیکوین از پی بانک <:Pbank:778138053197561857>  ', '<:cmd:778602422490103868>  `p?take <مبلغ پیکوین>`')
    .setColor("#f2ecec")
  
    message.channel.send(embed)





}
    module.exports.help = {
        name:"bank",
        aliases: [""]
    }