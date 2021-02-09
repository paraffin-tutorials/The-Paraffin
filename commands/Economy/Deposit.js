const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  

  let user = message.author;

  let member = db.fetch(`pcoin_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`bank_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`pcoin_${message.guild.id}_${user.id}`)
    let bank = await db.fetch(`bank_${user.id}`)

    let embedbank = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(" شما هیچ پیکوینی برای انتقال به پی بانک ندارید <:x_:778316309050032149>    ")
    .addField("اگر پیکوین لازم را ندارید از این دستور استفاده کنید", "`p?makepcoin`")

    if(money === 0) return message.channel.send(embedbank)

    db.add(`bank_${user.id}`, money)
    db.subtract(`pcoin_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
     .setColor("#f2ecec")
  .setDescription(`شما همه پیکوینتان را به پی بانک انتقال دهید  <:tik:778316308160446506>   `);
  message.channel.send(embed5)
  
  } else {
  
  let embed2 = new Discord.MessageEmbed()
   .setColor("#f2ecec")
    .setDescription(`لطفا مبلغ را وارد کنید <:x_:778316309050032149>    `);
    
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما هیچ پیکوینی ندارید  <:x_:778316309050032149>    `)
  .addField("اگر پیکوین لازم را ندارید از این دستور استفاده کنید", "`p?makepcoin`");


  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما ${args[0]} پیکوین ندارید  <:x_:778316309050032149>    `);

  if (member < args[0]) {
      return message.channel.send(embed4)
  }

  db.add(`bank_${user.id}`, args[0])
  db.subtract(`pcoin_${message.guild.id}_${user.id}`, args[0])

  let bank5 = await db.fetch(`bank_${user.id}`)
  if (bank5 === null) bank = 0;

  let embed5 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  
  .setDescription('عملیات موفق <:tik:778316308160446506>')
  .addField('مبلغ واریزی به بانک', `${args[0]}`)
  .addField('موجودی بانک شما', `${bank5}`)
  

  message.channel.send(embed5)
  
  }
}
module.exports.help = {
  name:"deposit",
  aliases: ["dep"]
}