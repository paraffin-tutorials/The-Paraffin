const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setDescription("**بخش خرید وی آی پی ** <:help:778600706729967647>   ")
   .addField("برای خرید وی آی پی این دستور را استفاده کنید <:buy:778138002139381770>", "<:cmd:778602422490103868>  `p?buy-vip <level1>`")
   .addField("نکته:", "برای خرید هر وی آی پی نیاز به خرید وی آی لول پایین تر رو دارید برای مثال برای خرید وی آی پی لول 6 نیاز به خرید وی آی پی لول 5 دارید")
   .addField("لیست وی آپی ها <:list:778695104696418356> ", "<:cmd:778602422490103868>  `p?lvip`")
    .setColor("#f2ecec")
    message.channel.send(embed)




}


module.exports.help = {
  name:"vip-store",
  aliases: ["vip"]
}
