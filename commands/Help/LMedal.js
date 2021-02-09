const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setDescription("**بخش لیست خرید مدال IE ** <:help:778600706729967647>   ")
   .addField("برای خرید مدال این دستور را استفاده کنید <:buy:778138002139381770> ", "<:cmd:778602422490103868>  `p?buy-medal <mname>`")
   .addField("برای خرید مدال نیاز به وی آی پی لول 3 دارید <:vip3:778704130654732328> ", "<:cmd:778602422490103868>  `p?vip-store`")
   .addField("لیست مدال ها <:list:778695104696418356> ", " barcelona <:barcelona:759791287720214538> **|** real-madrid <:realmadrid:759791266652487750> **|** juve <:juve:759791264429637662> **|** esteghlal <:esteghlal:759812389885182012> **|** perspolis <:perspolis:759791259148615701> **|** medal 1 <a:m1:750315651830382673> **|** medal 2 <a:m2:750315657773449316> **|** medal 3 <a:m3:750315691990843422>")
    .setColor("#f2ecec")
    message.channel.send(embed)




}


module.exports.help = {
  name:"lmedal",
  aliases: ["lmd"]
}