const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
    

    let user = message.author;
    let author = await db.fetch(`work_${user.id}`)

    let timeout = 3600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
         .setColor("#11383e")
        .setDescription(`** شما همین الان کار کردید باید کمی استراحت کنید ** | <:tik:778976192107642900> \n\nاگر مایل به کار کردنید بعد از  ${time.minutes}m ${time.seconds}s کار کنید`);
        message.channel.send(timeEmbed)
      } else {

        let replies = [
          'کشاورز 👨‍🌾'
          ,'دکتر 👨‍⚕️'
          ,'وکیل 👨‍💼'
          ,'قاضی 👨‍⚖️'
          ,'آشپز 👨‍🍳'
          ,'مکانیک 👨‍🔧'
          ,'معدنچی 👷‍♂️'
          ,'سرباز 💂‍♀️'
          ,'معلم 👨‍🏫'
          ,'جوشکار 👨‍🏭'
          ,'محقق 👨‍🔬'
          ,'نقاش 👨‍🎨'
          ,'آتش نشان 👨‍🚒'
          ,'برنامه نویس 👨‍💻'
          ,'فظانورد 👨‍🚀'
          ,'پلیس 👮‍♂️']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 500) + 100;
        let embed1 = new Discord.MessageEmbed()
         .setColor("#f2ecec")
        .setDescription(`شمادر نقش   **.${replies[result]}.**   کار کردید و   .**${amount}**.   پیکوین حقوق گرفتید **|** <:tik:778316308160446506>`)
        message.channel.send(embed1)
        
        db.add(`pcoin_${message.guild.id}_${user.id}`, amount)
        db.set(`work_${user.id}`, Date.now())
    };
}



module.exports.help = {
  name:"work",
  aliases: ["wr"]
}
