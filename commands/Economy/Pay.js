const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {

  
  let member11 = message.member;
  let member22 = message.mentions.members.first();
  
let mention = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`شما نمی توانید به خود پول دهید  **|** <:x_:778316309050032149>    `);

if(member11 == member22) {
 message.channel.send(mention);
} else {


  let user = message.mentions.members.first() 

  let member = db.fetch(`pcoin_${message.guild.id}_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`لطفا شخص مورد نظر خودتون رو منشن کنید   **|** <:x_:778316309050032149>    `);

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`لطفا مغدار را هم وارد کنید  **|** <:x_:778316309050032149>    `);
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما نمیتونید بدون پیکوین آن را انتقال دهید  **|** <:x_:778316309050032149>    `);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **.${args[1]}.** پیکوین ندارید  **|** <:x_:778316309050032149>    `);

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

  db.add(`pcoin_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`pcoin_${message.guild.id}_${message.author.id}`, args[1])

  
  let money2 = await db.fetch(`pcoin_${message.guild.id}_${message.author.id}`)
  if (money2 === null) money = 0;

  
  let money22 = await db.fetch(`pcoin_${message.guild.id}_${user.id}`)
  if (money22 === null) money = 0;
  
  let embed5 = new Discord.MessageEmbed()
   .setColor("#f2ecec")
   .setDescription('عملیات موفق <:tik:778316308160446506>')
   .addField(`مبلغ واریزی به ${user.user.username}`, `${args[1]}`)
   .addField('موجودی شما هم اکنون', `${money2}`)
   .addField(`موجودی ${user.user.username} هم اکنون`, `${money22}`)
   
  message.channel.send(embed5)
}

}

module.exports.help = {
  name:"pay",
  aliases: [""]
}