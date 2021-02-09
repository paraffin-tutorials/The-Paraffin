const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("لیست رنگ های قابل فروش برای پروفایل <:help:778600706729967647>   ")
    .addField("ارز ها <:money:778590631307771936>", "`dollar` **|** `pound`")
    .addField("رنگ های خاص <:money:778590631307771936>", "`gold` **|** `silver`")
    .addField("دستور خرید ارز ها <:money:778590631307771936>", "<:cmd:778602422490103868>  `p?buy-<مقدار مورد نظر> <ارز مورد نظر>`")
    .addField("دستور فروش ارز ها <:money:778590631307771936>", "<:cmd:778602422490103868>  `p?sell-<مقدار مورد نظر> <ارز مورد نظر>`")
    .addField("دسور نشان دادن قیمت های بازار <:money:778590631307771936>", "<:cmd:778602422490103868>  `p?arz-board`")
    .setColor("#f2ecec")
    message.channel.send(embed)




}

module.exports.help = {
  name:"arz-store",
  aliases: [""]
}