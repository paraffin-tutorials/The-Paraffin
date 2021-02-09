const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    

    let user = message.author;

    let author = db.fetch(`pcoin_${message.guild.id}_${user.id}`)

    
    if (args[0] == 'amongus') {
       
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید ایموجی پک **.AmongUS.** نیاز به**.1000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);
    if (author < 1000) return message.channel.send(Embed)
    
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`لینک دانلود پک ایموجی **.AmongUS.** در دی ام شما ارسال شد!! **|** <:tik:778316308160446506>   `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed2)
        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
 
        .addField(' ایموجی پک خریداری شده AmongUS','[لینک](https://uupload.ir/view/iozn_amongus.rar/)')
        message.author.send(Embed3)
    }if (args[0] == 'pubg') {
       
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید ایموجی پک **.Pubg.** نیاز به**.1000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);
    if (author < 1000) return message.channel.send(Embed)
    
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`لینک دانلود پک ایموجی **.Pubg.** در دی ام شما ارسال شد!! **|** <:tik:778316308160446506>   `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed2)
        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setTitle(`Pubg Imoji Pack The Paraffin`)
        .addField(' ایموجی پک خریداری شده Pubg', '[لینک](https://uupload.ir/view/mtqa_pubg.rar/)')
        message.author.send(Embed3)
    }if (args[0] == 'original-style') {
       
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید ایموجی پک **.Original Style.** نیاز به**.1000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);
    if (author < 1000) return message.channel.send(Embed)
    
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`لینک دانلود پک ایموجی **.Original Style.** در دی ام شما ارسال شد!! **|** <:tik:778316308160446506>   `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed2)
        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")

        .addField(' ایموجی پک خریداری شده Original Style', '[لینک](https://uupload.ir/view/55hl_original_style.rar/)')
        message.author.send(Embed3)
    }
}
  
  module.exports.help = {
    name:"buy-emoji",
    aliases: [""]
  }