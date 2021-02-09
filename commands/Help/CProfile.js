const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای شخصی سازی پروفایل <:help:778600706729967647>   ")
    .addField("دستور راهنمای خرید رنگ برای پروفایل <:color:778699360715800597> ", "<:cmd:778602422490103868>  `p?color`")
    .addField("اگر میخواهید که جزو ممبر های وی آی پی ما شوید این دستور را بزنید <:vip:778700786141102120> ", "<:cmd:778602422490103868>  `p?vip-store`")
    .addField("راهنمای خرید والپیپر برای پروفایل <:wallpaper:778696161414217738> ", "<:cmd:778602422490103868>  `p?wallpaper`")
    .addField("راهنمای خرید مدال برای پروفایل <:medal:778189281444888586> ", "<:cmd:778602422490103868>  `p?medal`")
   
    .setColor("#f2ecec")
    message.channel.send(embed)




}

module.exports.help = {
  name:"help-profile",
  aliases: [""]
}