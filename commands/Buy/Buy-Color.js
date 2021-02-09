const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    

    let user = message.author;

    let author = db.fetch(`pcoin_${message.guild.id}_${user.id}`)

 if (args[0] == 'red') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما رنگ **.قرمز.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let redcolore = await db.fetch(`red_${user.id}`)
    
        if (redcolore > 0) return message.channel.send(Embed5)
        let Embed4 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آپی لول **.2.** را ندارید بخاطر همین نمی تونید برای پروفایل خود **.رنگی.** را بخرید   **|** <:x_:778316309050032149>     `);

        let colorered = await db.fetch(`vipl2_${user.id}`)

        if (colorered < 1) return message.channel.send(Embed4)
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    
.setDescription(`برای خرید رنگ **.قرمز.** نیاز به **.800.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

    if (author < 800) return message.channel.send(Embed)
    
        db.fetch(`red_${user.id}`);
        db.set(`red_${user.id}`, 1)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت رنگ **.قرمز.** را برای پروفایل خود خریدید **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed2)
}if (args[0] == 'blue') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما رنگ **.آبی.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let bluecolore = await db.fetch(`blue_${user.id}`)
    
        if (bluecolore > 0) return message.channel.send(Embed5)
        let Embed4 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آپی لول **21.** را ندارید بخاطر همین نمی تونید برای پروفایل خود **.رنگی.** را بخرید   **|** <:x_:778316309050032149>     `);

        let bluecolore2 = await db.fetch(`vipl2_${user.id}`)

        if (bluecolore2 < 1) return message.channel.send(Embed4)
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
   
.setDescription(`برای خرید رنگ **.آبی.** نیاز به **.800.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

    if (author < 800) return message.channel.send(Embed)
    
        db.fetch(`blue_${user.id}`);
        db.set(`blue_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت رنگ **.آبی.** را برای پروفایل خود خریدید **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed2)
}if (args[0] == 'green') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما رنگ **.سبز.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let green2colore = await db.fetch(`green_${user.id}`)
    
        if (green2colore > 0) return message.channel.send(Embed5)
        let Embed4 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آپی لول **.2.** را ندارید بخاطر همین نمی تونید برای پروفایل خود **.رنگی.** را بخرید   **|** <:x_:778316309050032149>     `);

        let greencolore = await db.fetch(`vipl2_${user.id}`)

        if (greencolore < 1) return message.channel.send(Embed4)
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
   
.setDescription(`برای خرید رنگ **.سبز.** نیاز به **.800.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

    if (author < 800) return message.channel.send(Embed)
    
        db.fetch(`green_${message.guild.id}_${user.id}`);
        db.set(`green_${message.guild.id}_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت رنگ **.سبز.** را برای پروفایل خود خریدید **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed2)
}if (args[0] == 'black') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما رنگ **.سیاه.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let green2colore = await db.fetch(`black_${user.id}`)
    
        if (green2colore > 0) return message.channel.send(Embed5)
        let Embed4 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آپی لول **.2.** را ندارید بخاطر همین نمی تونید برای پروفایل خود **.رنگی.** را بخرید   **|** <:x_:778316309050032149>     `);

        let greencolore = await db.fetch(`vipl2_${user.id}`)

        if (greencolore < 1) return message.channel.send(Embed4)
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
.setDescription(`برای خرید رنگ **.سیاه.** نیاز به **.800.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

    if (author < 800) return message.channel.send(Embed)
    
        db.fetch(`black_${user.id}`);
        db.set(`black_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت رنگ **.سیاه.** را برای پروفایل خود خریدید **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed2)
}if (args[0] == 'white') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما رنگ **.سفید.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let green2colore = await db.fetch(`white_${user.id}`)
    
        if (green2colore > 0) return message.channel.send(Embed5)
        let Embed4 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما وی آپی لول **.2.** را ندارید بخاطر همین نمی تونید برای پروفایل خود **.رنگی.** را بخرید   **|** <:x_:778316309050032149>     `);

        let greencolore = await db.fetch(`vipl2_${user.id}`)

        if (greencolore < 1) return message.channel.send(Embed4)
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
.setDescription(`برای خرید رنگ **.سفید.** نیاز به **.800.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

    if (author < 800) return message.channel.send(Embed)
    
        db.fetch(`white_${user.id}`);
        db.set(`white_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت رنگ **.سفید.** را برای پروفایل خود خریدید  **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed2)
}if (args[0] == 'purple') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما رنگ **.بنفش.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);

    let green2colore = await db.fetch(`pur_${user.id}`)

    if (green2colore > 0) return message.channel.send(Embed5)
    let Embed4 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما وی آپی لول **.2.** را ندارید بخاطر همین نمی تونید برای پروفایل خود **.رنگی.** را بخرید   **|** <:x_:778316309050032149>     `);

    let greencolore = await db.fetch(`vipl2_${user.id}`)

    if (greencolore < 1) return message.channel.send(Embed4)
    let Embed = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`برای خرید رنگ **.بنفش.** نیاز به **.800.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

if (author < 800) return message.channel.send(Embed)

    db.fetch(`pur_${user.id}`);
    db.set(`pur_${user.id}`, true)

    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما با موفقیت رنگ **.بنفش.** را برای پروفایل خود خریدید **|** <:tik:778316308160446506>  `);

    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 800)
    message.channel.send(Embed2)
}if (args[0] == 'yellow') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما رنگ **.زرد.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);

    let green2colore = await db.fetch(`yel_${user.id}`)

    if (green2colore > 0) return message.channel.send(Embed5)
    let Embed4 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما وی آپی لول **.2.** را ندارید بخاطر همین نمی تونید برای پروفایل خود **.رنگی.** را بخرید   **|** <:x_:778316309050032149>     `);

    let greencolore = await db.fetch(`vipl2_${user.id}`)

    if (greencolore < 1) return message.channel.send(Embed4)
    let Embed = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`برای خرید رنگ **.زرد.** نیاز به **.800.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

if (author < 800) return message.channel.send(Embed)

    db.fetch(`yel_${user.id}`);
    db.set(`yel_${user.id}`, true)

    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما با موفقیت رنگ **.زرد.** را برای پروفایل خود خریدید **|** <:tik:778316308160446506>  `);

    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 800)
    message.channel.send(Embed2)
}if (args[0] == 'orange') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما رنگ **.نارنجی.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);

    let green2colore = await db.fetch(`or_${user.id}`)

    if (green2colore > 0) return message.channel.send(Embed5)
    let Embed4 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما وی آپی لول **.2.** را ندارید بخاطر همین نمی تونید برای پروفایل خود **.رنگی.** را بخرید   **|** <:x_:778316309050032149>     `);
    let greencolore = await db.fetch(`vipl2_${user.id}`)

    if (greencolore < 1) return message.channel.send(Embed4)
    let Embed = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`برای خرید رنگ **.نارنجی.** نیاز به **.800.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

if (author < 800) return message.channel.send(Embed)

    db.fetch(`or_${user.id}`);
    db.set(`or_${user.id}`, true)

    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما با موفقیت رنگ **.نارنجی.** را برای پروفایل خود خریدید **|** <:tik:778316308160446506>  `);

    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 800)
    message.channel.send(Embed2)
}if (args[0] == 'barcelona') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما رنگ **.Barcelona.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);

    let green2colore = await db.fetch(`barcacolor_${user.id}`)

    if (green2colore > 0) return message.channel.send(Embed5)
    let Embed4 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما وی آپی لول **.2.** را ندارید بخاطر همین نمی تونید برای پروفایل خود **.رنگی.** را بخرید   **|** <:x_:778316309050032149>     `);
    let greencolore = await db.fetch(`vipl2_${user.id}`)

    if (greencolore < 1) return message.channel.send(Embed4)
    let Embed = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`برای خرید رنگ **.Barcelona.** نیاز به **.2000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

if (author < 2000) return message.channel.send(Embed)

    db.fetch(`barcacolor_${user.id}`);
    db.set(`barcacolor_${user.id}`, true)

    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما با موفقیت رنگ **.Barcelona.** را برای پروفایل خود خریدید **|** <:tik:778316308160446506>  `);

    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 2000)
    message.channel.send(Embed2)
}if (args[0] == 'real-madrid') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما رنگ **.Real madrid.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);

    let green2colore = await db.fetch(`realmcolor_${user.id}`)

    if (green2colore > 0) return message.channel.send(Embed5)
    let Embed4 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما وی آپی لول **.2.** را ندارید بخاطر همین نمی تونید برای پروفایل خود **.رنگی.** را بخرید   **|** <:x_:778316309050032149>     `);
    let greencolore = await db.fetch(`vipl2_${user.id}`)

    if (greencolore < 1) return message.channel.send(Embed4)
    let Embed = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`برای خرید رنگ **.Real madrid.** نیاز به **.2000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

if (author < 2000) return message.channel.send(Embed)

    db.fetch(`realmcolor_${user.id}`);
    db.set(`realmcolor_${user.id}`, true)

    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما با موفقیت رنگ **.Real madrid.** را برای پروفایل خود خریدید **|** <:tik:778316308160446506>  `);

    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 2000)
    message.channel.send(Embed2)
}if (args[0] == 'juve') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما رنگ **.Juve.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);

    let green2colore = await db.fetch(`juvecolor_${user.id}`)

    if (green2colore > 0) return message.channel.send(Embed5)
    let Embed4 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما وی آپی لول **.2.** را ندارید بخاطر همین نمی تونید برای پروفایل خود **.رنگی.** را بخرید   **|** <:x_:778316309050032149>     `);
    let greencolore = await db.fetch(`vipl2_${user.id}`)

    if (greencolore < 1) return message.channel.send(Embed4)
    let Embed = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`برای خرید رنگ **.Juve.** نیاز به **.2000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

if (author < 2000) return message.channel.send(Embed)

    db.fetch(`juvecolor_${user.id}`);
    db.set(`juvecolor_${user.id}`, true)

    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما با موفقیت رنگ **.Juve.** را برای پروفایل خود خریدید **|** <:tik:778316308160446506>  `);

    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 2000)
    message.channel.send(Embed2)
}if (args[0] == 'esteghlal') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما رنگ **.Esteghlal.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);

    let green2colore = await db.fetch(`estcolor_${user.id}`)

    if (green2colore > 0) return message.channel.send(Embed5)
    let Embed4 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما وی آپی لول **.2.** را ندارید بخاطر همین نمی تونید برای پروفایل خود **.رنگی.** را بخرید   **|** <:x_:778316309050032149>     `);
    let greencolore = await db.fetch(`vipl2_${user.id}`)

    if (greencolore < 1) return message.channel.send(Embed4)
    let Embed = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`برای خرید رنگ **.Esteghlal.** نیاز به **.2000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

if (author < 2000) return message.channel.send(Embed)

    db.fetch(`estcolor_${user.id}`);
    db.set(`estcolor_${user.id}`, true)

    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما با موفقیت رنگ **.Esteghlal.** را برای پروفایل خود خریدید **|** <:tik:778316308160446506>  `);

    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 2000)
    message.channel.send(Embed2)
}if (args[0] == 'perspolis') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما رنگ **.Perspolis.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);

    let green2colore = await db.fetch(`perscolor_${user.id}`)

    if (green2colore > 0) return message.channel.send(Embed5)
    let Embed4 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما وی آپی لول **.2.** را ندارید بخاطر همین نمی تونید برای پروفایل خود **.رنگی.** را بخرید   **|** <:x_:778316309050032149>     `);
    let greencolore = await db.fetch(`vipl2_${user.id}`)

    if (greencolore < 1) return message.channel.send(Embed4)
    let Embed = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`برای خرید رنگ **.Perspolis.** نیاز به **.2000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

if (author < 2000) return message.channel.send(Embed)

    db.fetch(`perscolor_${user.id}`);
    db.set(`perscolor_${user.id}`, true)

    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما با موفقیت رنگ **.Perspolis.** را برای پروفایل خود خریدید **|** <:tik:778316308160446506>  `);

    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 2000)
    message.channel.send(Embed2)
}
}
  
  module.exports.help = {
    name:"buy-color",
    aliases: [""]
  }