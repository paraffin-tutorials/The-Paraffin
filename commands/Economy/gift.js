const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
    

  let member11 = message.member;
  let member22 = message.mentions.members.first();
    let user = message.mentions.members.first()
    let author = await db.fetch(`giftt_${message.guild.id}_${message.author.id}`)

    let mention = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما نمی توانید به خود هدیه دهید  **|** <:x_:778316309050032149>    `);
    
    if(member11 == member22) {
     message.channel.send(mention);
    } else {

      
    let timeout = 86400000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
         .setColor("#f2ecec")
        .setDescription(`**شما همین امروز به یک نفر هدیه دادید ** **|** <:x_:778316309050032149>    \n\n${time.hours}h  ${time.minutes}m ${time.seconds}s زمان باقی مانده :`);
        message.channel.send(timeEmbed)
      } else {


        let amount = Math.floor(Math.random() * 1000) + 100;
        let embed1 = new Discord.MessageEmbed()
         .setColor("#f2ecec")
        .setDescription(`شما به ${args[0]} , ${amount} پیکوین هدیه دادید **|** <:tik:780138062578712646> `)
        message.channel.send(embed1)
        
        db.add(`pcoin_${message.guild.id}_${user.id}`, amount)
        db.add(`giftn_${message.guild.id}_${message.author.id}`, amount)
        db.set(`giftt_${message.guild.id}_${message.author.id}`, Date.now())
    };
}
}



module.exports.help = {
  name:"gift",
  aliases: [""]
}
