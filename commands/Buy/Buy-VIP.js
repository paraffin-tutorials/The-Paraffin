const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    

    let user = message.author;

    let author = db.fetch(`pcoin_${message.guild.id}_${user.id}`)

    if (args[0] == 'level1') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آی پی **.لول1.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let redcolore = await db.fetch(`vipl1_${user.id}`)
    
        if (redcolore > 0) return message.channel.send(Embed5)
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید رنک وی آی پی لول **.1.** نیاز به**.2500.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);
    if (author < 2500) return message.channel.send(Embed)
    
        db.fetch(`vipl1_${user.id}`);
        db.set(`vipl1_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما جزو ممبر های وی آی پی لول **.1.** شدید! **|** <:tik:778316308160446506>   `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 2500)
        message.channel.send(Embed2)
    }if (args[0] == 'level2') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آی پی **.لول2.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let redcolore = await db.fetch(`vipl2_${user.id}`)
    
        if (redcolore > 0) return message.channel.send(Embed5)
        let Embed4 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آپی لول **.1.** را ندارید بخاطر همین نمی تونید وی آی پی لول **.2.** را بخرید   **|** <:x_:778316309050032149>     `);

        let greencolore = await db.fetch(`vipl1_${user.id}`)

        if (greencolore < 1) return message.channel.send(Embed4)
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید رنک وی آی پی لول **.2.** نیاز به**.3500.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

    if (author < 3500) return message.channel.send(Embed)
    
        db.fetch(`vipl2_${user.id}`);
        db.set(`vipl2_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما جزو ممبر های وی آی پی لول **.2.** شدید! **|** <:tik:778316308160446506>   `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 3500)
        message.channel.send(Embed2)
    }if (args[0] == 'level3') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آی پی **.لول3.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let redcolore = await db.fetch(`vipl13_${user.id}`)
    
        if (redcolore > 0) return message.channel.send(Embed5)
        let Embed4 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آپی لول **.2.** را ندارید بخاطر همین نمی تونید وی آی پی لول **.3.** را بخرید   **|** <:x_:778316309050032149>     `);

        let greencolore = await db.fetch(`vipl2_${user.id}`)

        if (greencolore < 1) return message.channel.send(Embed4)
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید رنک وی آی پی لول **.3.** نیاز به**.4500.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);
    if (author < 4500) return message.channel.send(Embed)
    
        db.fetch(`vipl3_${user.id}`);
        db.set(`vipl3_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما جزو ممبر های وی آی پی لول **.3.** شدید! **|** <:tik:778316308160446506>   `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 4500)
        message.channel.send(Embed2)
    }if (args[0] == 'level4') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آی پی **.لول4.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let redcolore = await db.fetch(`vipl4_${user.id}`)
    
        if (redcolore > 0) return message.channel.send(Embed5)
        let Embed4 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آپی لول **.3.** را ندارید بخاطر همین نمی تونید وی آی پی لول **.4.** را بخرید   **|** <:x_:778316309050032149>     `);

        let greencolore = await db.fetch(`vipl3_${user.id}`)

        if (greencolore < 1) return message.channel.send(Embed4)
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید رنک وی آی پی لول **.4.** نیاز به**.2500.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

    if (author < 2500) return message.channel.send(Embed)
    
        db.fetch(`vipl4_${user.id}`);
        db.set(`vipl4_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما جزو ممبر های وی آی پی لول **.4.** شدید! **|** <:tik:778316308160446506>   `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 2500)
        message.channel.send(Embed2)
    }if (args[0] == 'level5') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آی پی **.لول5.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let redcolore = await db.fetch(`vipl5_${user.id}`)
    
        if (redcolore > 0) return message.channel.send(Embed5)
        let Embed4 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آپی لول **.4.** را ندارید بخاطر همین نمی تونید وی آی پی لول **.5.** را بخرید   **|** <:x_:778316309050032149>     `);

        let greencolore = await db.fetch(`vipl4_${user.id}`)

        if (greencolore < 1) return message.channel.send(Embed4)
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(` برای خرید رنک وی آی پی لول **.5.** نیاز به**.3500.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);


    if (author < 3500) return message.channel.send(Embed)
    
        db.fetch(`vipl5_${user.id}`);
        db.set(`vipl5_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما جزو ممبر های وی آی پی لول **.5.** شدید!  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 3500)
        message.channel.send(Embed2)
    }if (args[0] == 'level6') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آی پی **.لول6.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let redcolore = await db.fetch(`vipl6_${user.id}`)
    
        if (redcolore > 0) return message.channel.send(Embed5)
        let Embed4 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آپی لول **.5.** را ندارید بخاطر همین نمی تونید وی آی پی لول **.6.** را بخرید   **|** <:x_:778316309050032149>     `);

        let greencolore = await db.fetch(`vipl5_${user.id}`)

        if (greencolore < 1) return message.channel.send(Embed4)
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید گرید وی آی پی لول **.6.** نیاز به**.9000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

    if (author < 9000) return message.channel.send(Embed)
    
        db.fetch(`vipl6_${user.id}`);
        db.set(`vipl6_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما جزو ممبر های وی آی پی لول **.6.** شدید! **|** <:tik:778316308160446506>   `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 9000)
        message.channel.send(Embed2)
    }
}
  
  module.exports.help = {
    name:"buy-vip",
    aliases: ["bv"]
  }