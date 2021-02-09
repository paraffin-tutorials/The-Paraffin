const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("راهنمای خرید مدال پروفایل <:help:778600706729967647>   ")
    .addField("دستور خرید مدال ها <:buy:778138002139381770>", "<:cmd:778602422490103868>  `p?buy-medal <mname>`")
    .addField("دستور فروش مدال ها <:sell:778188790228320266>", "<:cmd:778602422490103868>  `p?sell-medal <mname>`")
    .addField("لیست مدال های موجود <:list:778695104696418356> ", "<:cmd:778602422490103868>  `p?lmedal`")
    .setColor("#f2ecec")
    message.channel.send(embed)




}

module.exports.help = {
  name:"medal",
  aliases: [""]
}