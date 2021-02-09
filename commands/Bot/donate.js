const axios = require('axios');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
   
    .setThumbnail(bot.user.displayAvatarURL())
    .addField("Paraffin Team", "**[Donate](https://idpay.ir/Paraffin-development)\n[Supporter Server](https://discord.gg/vC9Sf2PYTk)**")
    .addField('درخواست شده توسط : ', `${message.author}`)
    .setColor("#f2ecec")
    
    message.channel.send(embed)





}
    module.exports.help = {
        name:"donate",
        aliases: [""]
    }