const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  

  let user = message.author;
  let timeout = 86400000;
  let amount = Math.floor(Math.random() * 4000) + 1000;

  let weekly = await db.fetch(`daily_${user.id}`);

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
  
    let timeEmbed = new Discord.MessageEmbed()
     .setColor("#f2ecec")
     .setDescription(`شما همین امروز جایزه روزانه خود را دریافت کرده اید   **|** <:x_:778316309050032149>     
     \n\n ${time.hours}h ${time.minutes}m ${time.seconds}s دیگر میتوانید جایزه روزانه خود را دریافت کنید`);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
     .setColor("#f2ecec")
     .setDescription(`شما جایزه روزانه خود را به مبلغ **.${amount}.** پیکوین دریافت کردید  **|** <:tik:780138062578712646>   `);
  message.channel.send(moneyEmbed)
  db.add(`pcoin_${message.guild.id}_${user.id}`, amount)
  db.set(`daily_${user.id}`, Date.now())


  }
};


module.exports.help = {
  name:"daily",
  aliases: ["day"]
}