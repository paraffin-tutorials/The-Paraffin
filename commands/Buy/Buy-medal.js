const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    

    let user = message.author;

    let author = db.fetch(`pcoin_${message.guild.id}_${user.id}`)

    if (args[0] == '3') {
        let Embed1 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما مدال **.3.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let redcolore = await db.fetch(`medal3_${user.id}`)
    
        if (redcolore > 0) return message.channel.send(Embed1)
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آی پی **.لول3.** را ندارید   **|** <:x_:778316309050032149>     `);
    
        let vip3filter = await db.fetch(`vipl13_${user.id}`)
    
        if (vip3filter < 0) return message.channel.send(Embed5)
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید مدال **.3.** نیاز به**.1000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);
    if (author < 1000) return message.channel.send(Embed)
    
        db.fetch(`medal3_${user.id}`);
        db.set(`medal3_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(` شما مدال شماره 3 را خریدید! **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed2)
    }if (args[0] == '2') {
        let Embed1 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما مدال **.2.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let redcolore = await db.fetch(`medal2_${user.id}`)
    
        if (redcolore > 0) return message.channel.send(Embed1)
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آی پی **.لول3.** را ندارید   **|** <:x_:778316309050032149>     `);
    
        let vip3filter = await db.fetch(`vipl13_${user.id}`)
    
        if (vip3filter < 0) return message.channel.send(Embed5)
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید مدال **.2.** نیاز به**.1000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);
    if (author < 1000) return message.channel.send(Embed)
    
        db.fetch(`medal2_${user.id}`);
        db.set(`medal2_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(` شما مدال شماره 2 را خریدید! **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed2)
    }if (args[0] == '1') {
        let Embed1 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما مدال **.1.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let redcolore = await db.fetch(`medal1_${user.id}`)
    
        if (redcolore > 0) return message.channel.send(Embed1)
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آی پی **.لول3.** را ندارید   **|** <:x_:778316309050032149>     `);
    
        let vip3filter = await db.fetch(`vipl13_${user.id}`)
    
        if (vip3filter < 0) return message.channel.send(Embed5)
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید مدال **.1.** نیاز به**.1000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);
    if (author < 1000) return message.channel.send(Embed)
    
        db.fetch(`medal1_${user.id}`);
        db.set(`medal1_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(` شما مدال شماره 1 را خریدید! **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed2)
    }if (args[0] == 'barcelona') {
        let Embed1 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما مدال **.Barcelona.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let redcolore = await db.fetch(`barcam_${user.id}`)
    
        if (redcolore > 0) return message.channel.send(Embed1)
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آی پی **.لول4.** را ندارید   **|** <:x_:778316309050032149>     `);
    
        let vip3filter = await db.fetch(`vipl14_${user.id}`)
    
        if (vip3filter < 0) return message.channel.send(Embed5)
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید مدال **.Barcelona.** نیاز به**.1000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);
    if (author < 1000)return message.channel.send(Embed)
    
        db.fetch(`barcam_${user.id}`);
        db.set(`barcam_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(` شما مدال شماره **.Barcelona.** را خریدید! **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed2)
    }if (args[0] == 'real-madrid') {
        let Embed1 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما مدال **.Real madrid.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let redcolore = await db.fetch(`realmm_${user.id}`)
    
        if (redcolore > 0) return message.channel.send(Embed1)
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آی پی **.لول4.** را ندارید   **|** <:x_:778316309050032149>     `);
    
        let vip3filter = await db.fetch(`vipl14_${user.id}`)
    
        if (vip3filter < 0) return message.channel.send(Embed5)
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید مدال **.Real madrid.** نیاز به**.1000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);
    if (author < 1000)return message.channel.send(Embed)
    
        db.fetch(`realmm_${user.id}`);
        db.set(`realmm_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(` شما مدال شماره **.Real madrid.** را خریدید! **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed2)
    }if (args[0] == 'juve') {
        let Embed1 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما مدال **.Juve.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let redcolore = await db.fetch(`juvem_${user.id}`)
    
        if (redcolore > 0) return message.channel.send(Embed1)
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آی پی **.لول4.** را ندارید   **|** <:x_:778316309050032149>     `);
    
        let vip3filter = await db.fetch(`vipl14_${user.id}`)
    
        if (vip3filter < 0) return message.channel.send(Embed5)
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید مدال **.Juve.** نیاز به**.1000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);
    if (author < 1000)return message.channel.send(Embed)
    
        db.fetch(`juvem_${user.id}`);
        db.set(`juvem_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(` شما مدال شماره **.Juve.** را خریدید! **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed2)
    }if (args[0] == 'esteghlal') {
        let Embed1 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما مدال **.Esteghlal.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let redcolore = await db.fetch(`estm_${user.id}`)
    
        if (redcolore > 0) return message.channel.send(Embed1)
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آی پی **.لول4.** را ندارید   **|** <:x_:778316309050032149>     `);
    
        let vip3filter = await db.fetch(`vipl14_${user.id}`)
    
        if (vip3filter < 0) return message.channel.send(Embed5)
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید مدال **.Esteghlal.** نیاز به**.1000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);
    if (author < 1000)return message.channel.send(Embed)
    
        db.fetch(`estm_${user.id}`);
        db.set(`estm_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(` شما مدال شماره **.Esteghlal.** را خریدید! **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed2)
    }if (args[0] == 'perspolis') {
        let Embed1 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما مدال **.Perspolis.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let redcolore = await db.fetch(`persm_${user.id}`)
    
        if (redcolore > 0) return message.channel.send(Embed1)
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آی پی **.لول4.** را ندارید   **|** <:x_:778316309050032149>     `);
    
        let vip3filter = await db.fetch(`vipl14_${user.id}`)
    
        if (vip3filter < 0) return message.channel.send(Embed5)
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید مدال **.Perspolis.** نیاز به**.1000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);
    if (author < 1000)return message.channel.send(Embed)
    
        db.fetch(`persm_${user.id}`);
        db.set(`persm_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(` شما مدال شماره **.Perspolis.** را خریدید! **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed2)
    }
}
  
  module.exports.help = {
    name:"buy-medal",
    aliases: ["bm"]
  }