const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("لیست رنگ های قابل خرید برای پروفایل <:help:778600706729967647>   ")
    .addField("رنگ های معمول <:color:778699360715800597> ", "`red` `blue` `green` `purple` `orange` `black` `white` `yellow`")
    .addField("رنگ های خاص <:color:778699360715800597> ", "`barcelona` `real-madrid` `juve` `esteghlal` `perspolis`")
    .addField("دستور خرید رنگ ها <:buy:778138002139381770>", "<:cmd:778602422490103868>  ``p?buy-color <red>`")
    .addField("دستور فروش رنگ ها <:sell:778188790228320266>", "<:cmd:778602422490103868>  ``p?sell-color <red>`")
   
    .setColor("#f2ecec")
    message.channel.send(embed)




}

module.exports.help = {
  name:"lcolor",
  aliases: [""]
}