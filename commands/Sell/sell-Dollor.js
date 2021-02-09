const Discord = require("discord.js")
const db = require("quick.db");
const ms = require("parse-ms");
const math = require('mathjs');

module.exports.run = async (bot, message, args) => {
  
    
const resp = math.evaluate(args[0]*258);

let author = await db.fetch(`dollarts_${message.guild.id}_${message.author.id}`)

let timeout = 86400;

if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));

    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما همین الان ارز فروختید و صرافی برای شما تا ${time.hours}h ${time.minutes}m ${time.seconds}s ساعت دیگر بسته است   **|** <:x_:778316309050032149>    `);
    
    message.channel.send(timeEmbed)
  } else {

let embed = new Discord.MessageEmbed()
.setDescription(`**شما دلار فروختید** **.${resp}.** پیکوین گرفتید و. **.${args[0]}.** دلار دادید. `)
 .setColor("#f2ecec")
message.channel.send(embed)
db.all(`pcoin_${message.guild.id}_${message.author.id}`, resp)
db.subtract(`dollar_${message.author.id}`, args[0])

db.set(`dollarts_${message.guild.id}_${message.author.id}`, Date.now())
  
};
}

module.exports.help = {
  name: "sell-dollar",
  aliases: [""]
}