const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  

  let user = message.author;
  let timeout = 604800000;
  let amount = Math.floor(Math.random() * 12050) + 1000;

  let weekly = await db.fetch(`weekly_${message.guild.id}_${user.id}`);

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
  
    let timeEmbed = new Discord.MessageEmbed()
     .setColor("#f2ecec")
    .setDescription(`**شما در همین هفته جایزه هفتگی خود را دریافت کرده اید**   **|** <:x_:778316309050032149>     \n\nشما بعد از گذشت ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s میتوانید جایزه هفتگی خود را دریافت کنید`);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
     .setColor("#f2ecec")
  .setDescription(` شما جایزه هفتگی خود را به مقدار **.${amount}.** پیکوین دریافت کرده اید **|** <:tik:778316308160446506>  `)
  message.channel.send(moneyEmbed)
  db.add(`pcoin_${message.guild.id}_${user.id}`, amount)
  db.set(`weekly_${message.guild.id}_${user.id}`, Date.now())


  }
};


module.exports.help = {
  name:"weekly",
  aliases: ["week"]
}