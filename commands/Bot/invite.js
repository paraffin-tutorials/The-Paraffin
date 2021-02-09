const axios = require('axios');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setAuthor('Paraffin Team',  `https://cdn.discordapp.com/avatars/728328227810050061/815b60f0ee00342b70ef7b1d85838215.png?size=1024`)
    .setThumbnail(bot.user.displayAvatarURL())
    .addField("لینک اینوایت من <:link:778205945934774313> ", "[The Paraffin Invite](https://bots.ondiscord.xyz/bots/728328227810050061)")
    .addField("لینک سرور پشتیبانی من <:link:778205945934774313> ", "[Paraffin Server](https://discord.gg/vC9Sf2PYTk)")
    .addField('درخواست شده توسط : ', `${message.author}`)
    .setColor("#f2ecec")
    
    message.channel.send(embed)





}
    module.exports.help = {
        name:"invite",
        aliases: ["IE", "IE"]
    }