const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setDescription("**به فروشگاه بزرگ IE خوش آمدید** <:help:778600706729967647>   ")

    .addField("راهنمای خرید کارکتر <:character:778109077670461491>  ", "<:cmd:778602422490103868>  `p?character-store`")
    .addField("راهنمای شخصی سازی پروفایل <:developer:778598505467609099> ", "<:cmd:778602422490103868>  `p?help-profile`")
    .addField("اگر قصد خریدایموجی دارید این دستورد را بزنید <:emoji:778595734765174825> ", "<:cmd:778602422490103868>  `p?emoji-store`")
    .addField("راهنمای خرید اسلحه <:gun:778594827108483072>  ", "<:cmd:778602422490103868>  `p?gun-store`")
    .addField("راهنمای خرید ارز <:money:778590631307771936>", "<:cmd:778602422490103868>  `p?arz-store`")
    .setColor("#f2ecec")
    message.channel.send(embed)




}


module.exports.help = {
  name:"store",
  aliases: [""]
}
