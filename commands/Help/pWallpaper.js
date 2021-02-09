const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای خرید والپیپر برای پروفایل <:help:778600706729967647>   ")
    .addField("دستور  برای خرید والپیپر <:buy:778138002139381770>", "<:cmd:778602422490103868>  `p?buy-wallpaper <#666>`")
    .addField("دستور فروش والپیپر <:sell:778188790228320266>", "<:cmd:778602422490103868>  `p?sell-wallpaper <#006>`")
    .addField("لیست والپیپر های موجود <:list:778695104696418356> ", "<:cmd:778602422490103868>  `p?lwallpaper`")
  
    .setColor("#f2ecec")
    message.channel.send(embed)




}

module.exports.help = {
  name:"wallpaper",
  aliases: [""]
}