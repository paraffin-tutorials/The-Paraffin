const Discord = require('discord.js')

const { MessageEmbed } = require('discord.js')

const db = require("quick.db")

module.exports.run = async (bot, message, args) => {

let permission = message.member.hasPermission("ADMINISTRATOR");

if(!permission) return message.channel.send("شما پریمیشن ادمینستوری را ندارید `ADMINISTRATOR`")


let Embed5 = new Discord.MessageEmbed()
.setColor("#11383e")
.setDescription(`شما جزو سرور های پریمیوم نیستید **|** <:TickNo:764816791699980318>   `);

let green2colore = db.fetch(`premium_${message.guild.id}`)

if (green2colore < 0) return message.channel.send(Embed5)


if(!args[0]) return message.channel.send('لطفا مقدار پی کوین  مورد نظر خود را برای هر پیام بنویسید')


if(args[0] > 5) {

let five = 5

 db.set(`${message.guild.id}msgcoin`, five)
 
 var embs = new MessageEmbed()
 .setColor('#f2ecec') //hex color
 .setTitle(`مقدار پی کوین برای هر پیام عوض شد \n حداکثر : 5`)
.addField('مقدار پیکوین برای هر مسیج جدید جدید', '5')
 message.channel.send(embs)

}if(args[0] < 5){

  
 db.set(`${message.guild.id}msgcoin`, args[0])
 
 var embs = new MessageEmbed()
 .setColor('#f2ecec') //hex color
 .setTitle(`مقدار پی کوین برای هر پیام عوض شد `)
.addField('مقدار پیکوین برای هر مسیج جدید جدید', `${args[0]}`)
 message.channel.send(embs)

}

}
  
module.exports.help = {
  name:"msgpcoin",
  aliases: ["msg-pcoin"]
}