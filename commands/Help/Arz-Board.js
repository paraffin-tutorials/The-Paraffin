const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle('قیمت های لایو ارز ها 💹')
    .addField("واحد ارز", "فروش | خرید")
    .addField("دلار", "312 | 299")
    .addField("پوند", "361 | 310")
    .addField("طلا گرمی", "650 | 588")
    .addField("نقره گرمی", "193 | 192")
    .setColor("#f2ecec")
    message.channel.send(embed)




}

module.exports.help = {
  name:"arz-board",
  aliases: [""]
}