const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای دستورات اکونومی بات IE <:cmd:778602422490103868>  ")
    .addField("اگر نمیدونید چگونه پیکوین به دست بیاورید این دستور را بزنید <:Pvoin:778188788522418176>  ", "<:cmd:778602422490103868>  `p?makepcoin`")
    .addField("راهنمای استفاده از پی بانک <:Pbank:778138053197561857>  ", "<:cmd:778602422490103868>  `p?bank`")
    .addField("راهنمای شخصی سازی پروفایل <:developer:778598505467609099> ", "<:cmd:778602422490103868>  `p?help-profile`")
    .addField("راهنمای اطلاعات شخصی <:profile:778138310664388648> ", "<:cmd:778602422490103868>  `p?help-info`")
    .setColor("#f2ecec")
    message.channel.send(embed)




}

module.exports.help = {
  name:"cmd",
  aliases: [""]
}