const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  

  let user = message.author;

  let timeout = 18000;
  let amount = Math.floor(Math.random() * 100) + 10;

  let beg = await db.fetch(`beg_${message.guild.id}_${message.author.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.MessageEmbed()
     .setColor("#f2ecec")
    .setDescription(`شما همین الان گدایی کردید کسی برای کمک به شما پول خورد ندارد  **|** <:x_:778316309050032149>    \n\n  دیگر کسی پول خورد ندارد !${time.minutes}m ${time.seconds}s تا`);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
     .setColor("#f2ecec")
  .setDescription(` یک انسان خیر به شما **.${amount}.** پی کوین داد **|** <:tik:780138062578712646> `);
  message.channel.send(moneyEmbed)
  db.add(`pcoin_${message.guild.id}_${user.id}`, amount)
  db.set(`beg_${message.guild.id}_${message.author.id}`, Date.now())


  }
};


module.exports.help = {
  name:"cadge",
  aliases: [""]
}