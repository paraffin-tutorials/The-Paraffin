const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setDescription("**بخش لیست خرید وی آی پی IE ** <:help:778600706729967647>   ")
   .addField("برای خرید وی آی پی این دستور را استفاده کنید <:vip:778700786141102120>  ", "<:cmd:778602422490103868>  `p?buy-vip <level1>`")
   .addField("نکته:", "برای خرید هر وی آی پی نیاز به خرید وی آی لول پایین تر رو دارید برای مثال برای خرید وی آی پی لول 6 نیاز به خرید وی آی پی لول 5 دارید")
   .addField("لیست وی آی پی ها", "level1<:vip1:778704122319994910>  | level2<:vip2:778704129882062908>  | level3<:vip3:778704130654732328>  | level4<:vip4:778704131862298634>  | level5<:vip5:778704160748339261>  | level6<:vip6:778704166918553640> ")
    .setColor("#f2ecec")
    message.channel.send(embed)




}


module.exports.help = {
  name:"lvip",
  aliases: ["lv"]
}