const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  
  let member11 = message.member;
  let member22 = message.mentions.members.first();
  let user = message.mentions.members.first()

  let mention = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما نمی توانید از خود رای اعتماد کم کنید  **|** <:x_:778316309050032149>    `);
  
  if(member11 == member22) {
   message.channel.send(mention);
  } else {

    
  let embed1 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`لطفا شخص مورد نظر خودتون رو منشن کنید   **|** <:x_:778316309050032149>    `);

  if (!user) {
      return message.channel.send(embed1)
  }
  let timeout = 86400000;

  
  let weekly = await db.fetch(`unvotet_${message.author.id}`);

  
  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
  
    
    let timeEmbed = new Discord.MessageEmbed()
     .setColor("#f2ecec")
     .setDescription(`شما همین امروز از یک نفر رای اعتماد کم کردید   **|** <:x_:778316309050032149>     
     \n\n ${time.hours}h ${time.minutes}m ${time.seconds}s زمان باقی مانده :`);
    message.channel.send(timeEmbed)
  } else {
    
    let moneyEmbed = new Discord.MessageEmbed()
     .setColor("#f2ecec")
     .setDescription(`شما با موفقیت به ${args[0]} رای اعتماد دادید **|** <:tik:778316308160446506>  `);
     db.delete(`vote_${user.id}`, 1)
     db.set(`unvotet_${message.author.id}`, Date.now())
  message.channel.send(moneyEmbed)


  }
  }
};


module.exports.help = {
  name:"unrep",
  aliases: ["unvote"]
}