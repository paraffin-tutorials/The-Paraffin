const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    

    let user = message.author;

    let author = db.fetch(`pcoin_${message.guild.id}_${user.id}`)

    if (args[0] == '#001') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.001#.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let bw001 = await db.fetch(`#001w_${user.id}`)
    
        if (bw001 > 0) return message.channel.send(Embed5)
       
        let Embed = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`برای خرید والپیپر **.001#.** نیاز به **.1000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);
    
    if (author < 1000) return message.channel.send(Embed)
    
        db.fetch(`#001w_${user.id}`);
        db.set(`#001w_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.001#.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed2)
    }if (args[0] == '#002') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.002.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let green2colore = await db.fetch(`#002w_${user.id}`)
    
        if (green2colore > 0) return message.channel.send(Embed5)
       
        let Embed = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`برای خرید والپیپر **.#002.** نیاز به **.1000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);
    

    if (author < 1000) return message.channel.send(Embed)
    
        db.fetch(`#002w_${user.id}`);
        db.set(`#002w_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.002#.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);


        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed2)
    }if (args[0] == '#003') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.003.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let bw003 = await db.fetch(`#003w_${user.id}`)
    
        if (bw003 > 0) return message.channel.send(Embed5)
       
    
        let Embed = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`برای خرید والپیپر **.#003.** نیاز به **.1000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);
    
    if (author < 1000) return message.channel.send(Embed)
    
        db.fetch(`#003w_${user.id}`);
        db.set(`#003w_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.003#.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed2)
    }if (args[0] == '#004') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.004.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let bw004 = await db.fetch(`#004w_${user.id}`)
    
        if (bw004 > 0) return message.channel.send(Embed5)
       
        let Embed = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`برای خرید والپیپر **.#004.** نیاز به **.1000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);
    

    if (author < 1000) return message.channel.send(Embed)
    
        db.fetch(`#004w_${user.id}`);
        db.set(`#004w_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.004#.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed2)
    }if (args[0] == '#005') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.005.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let bw005 = await db.fetch(`#005w_${user.id}`)
    
        if (bw005 > 0) return message.channel.send(Embed5)
       
        let Embed = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`برای خرید والپیپر **.#005.** نیاز به **.1000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);
    


    if (author < 1000) return message.channel.send(Embed)
    
        db.fetch(`#005w_${user.id}`);
        db.set(`#005w_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.005#.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);


        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed2)
    }if (args[0] == '#006') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.006.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let bw006 = await db.fetch(`#006w_${user.id}`)
    
        if (bw006 > 0) return message.channel.send(Embed5)
       
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید والپیپر **.#006.** نیاز به **.1000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

    if (author < 1000) return message.channel.send(Embed)
    
        db.fetch(`#006w_${user.id}`);
        db.set(`#006w_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.006#.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed2)
    }if (args[0] == '#007') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.007.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let bw007 = await db.fetch(`#007w_${user.id}`)
    
        if (bw007 > 0) return message.channel.send(Embed5)
       
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید والپیپر **.#007.** نیاز به **.1000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

    if (author < 1000) return message.channel.send(Embed)
    
        db.fetch(`#007w_${user.id}`);
        db.set(`#007w_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.007#.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed2)
    }if (args[0] == '#008') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.008.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let bw007 = await db.fetch(`#008w_${user.id}`)
    
        if (bw007 > 0) return message.channel.send(Embed5)
       
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید والپیپر **.#008.** نیاز به **.1000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

    if (author < 1000) return message.channel.send(Embed)
    
        db.fetch(`#008w_${user.id}`);
        db.set(`#008w_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.008#.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed2)
    }if (args[0] == '#009') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.009.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let bw007 = await db.fetch(`#009w_${user.id}`)
    
        if (bw007 > 0) return message.channel.send(Embed5)
       
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید والپیپر **.#009.** نیاز به **.1000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

    if (author < 1000) return message.channel.send(Embed)
    
        db.fetch(`#009w_${user.id}`);
        db.set(`#009w_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.009#.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed2)
    }if (args[0] == '#010') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.010.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let bw007 = await db.fetch(`#010w_${user.id}`)
    
        if (bw007 > 0) return message.channel.send(Embed5)
       
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید والپیپر **.#010.** نیاز به **.1000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

    if (author < 1000) return message.channel.send(Embed)
    
        db.fetch(`#010w_${user.id}`);
        db.set(`#010w_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.010#.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed2)
    }if (args[0] == 'barcelona') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.Barcelona.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let bw007 = await db.fetch(`barcaw_${user.id}`)
    
        if (bw007 > 0) return message.channel.send(Embed5)
       
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید والپیپر **.Barcelona.** نیاز به **.8000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

    if (author < 2000) return message.channel.send(Embed)
    
        db.fetch(`barcaw_${user.id}`);
        db.set(`barcaw_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **Barcelona.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 2000)
        message.channel.send(Embed2)
    }if (args[0] == 'real-madrid') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.Real madrid.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let bw007 = await db.fetch(`realmw_${user.id}`)
    
        if (bw007 > 0) return message.channel.send(Embed5)
       
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید والپیپر **.Real madrid.** نیاز به **.8000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

    if (author < 2000) return message.channel.send(Embed)
    
        db.fetch(`realmw_${user.id}`);
        db.set(`realmw_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **Real madrid.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 2000)
        message.channel.send(Embed2)
    }if (args[0] == 'juve') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.Juve.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let bw007 = await db.fetch(`juvew_${user.id}`)
    
        if (bw007 > 0) return message.channel.send(Embed5)
       
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید والپیپر **.Juve.** نیاز به **.8000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

    if (author < 2000) return message.channel.send(Embed)
    
        db.fetch(`juvew_${user.id}`);
        db.set(`juvew_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **Juve.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 2000)
        message.channel.send(Embed2)
    }if (args[0] == 'esteghlal') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.Esteghlal.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let bw007 = await db.fetch(`estw_${user.id}`)
    
        if (bw007 > 0) return message.channel.send(Embed5)
       
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید والپیپر **.Esteghlal.** نیاز به **.8000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

    if (author < 2000) return message.channel.send(Embed)
    
        db.fetch(`estw_${user.id}`);
        db.set(`estw_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.Esteghlal.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 2000)
        message.channel.send(Embed2)
    }if (args[0] == 'perspolis') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.Perspolis.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let bw007 = await db.fetch(`persw_${user.id}`)
    
        if (bw007 > 0) return message.channel.send(Embed5)
       
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید والپیپر **.Perspolis.** نیاز به **.8000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

    if (author < 2000) return message.channel.send(Embed)
    
        db.fetch(`persw_${user.id}`);
        db.set(`persw_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.Perspolis.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 2000)
        message.channel.send(Embed2)
    }if (args[0] == '#011') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.011.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);
    
        let bw007 = await db.fetch(`#011w_${user.id}`)
    
        if (bw007 > 0) return message.channel.send(Embed5)
       
        let Embed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`برای خرید والپیپر **.#011.** نیاز به **.1000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

    if (author < 1000) return message.channel.send(Embed)
    
        db.fetch(`#011w_${user.id}`);
        db.set(`#011w_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما والپیپر **.011#.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed2)
}if (args[0] == 'psg') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما والپیپر **.${args[0]}.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);

    let bwf1 = await db.fetch(`psgw_${user.id}`)

    if (bwf1 > 0) return message.channel.send(Embed5)
   
    let Embed = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`برای خرید والپیپر **.${args[0]}.** نیاز به **.2000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

if (author < 2000) return message.channel.send(Embed)

    db.fetch(`psgw_${user.id}`);
    db.set(`psgw_${user.id}`, true)

    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما والپیپر **.${args[0]}.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 2000)
    message.channel.send(Embed2)
}if (args[0] == 'pes') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما والپیپر **.${args[0]}.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);

    let bwf1 = await db.fetch(`pesw_${user.id}`)

    if (bwf1 > 0) return message.channel.send(Embed5)
   
    let Embed = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`برای خرید والپیپر **.${args[0]}.** نیاز به **.2000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

if (author < 2000) return message.channel.send(Embed)

    db.fetch(`pesw_${user.id}`);
    db.set(`pesw_${user.id}`, true)

    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما والپیپر **.${args[0]}.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 2000)
    message.channel.send(Embed2)
}if (args[0] == 'liverpool') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما والپیپر **.${args[0]}.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);

    let bwf1 = await db.fetch(`liverpoolw_${user.id}`)

    if (bwf1 > 0) return message.channel.send(Embed5)
   
    let Embed = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`برای خرید والپیپر **.${args[0]}.** نیاز به **.2000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

if (author < 2000) return message.channel.send(Embed)

    db.fetch(`liverpoolw_${user.id}`);
    db.set(`liverpoolw_${user.id}`, true)

    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما والپیپر **.${args[0]}.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 2000)
    message.channel.send(Embed2)
}if (args[0] == 'fifa') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما والپیپر **.${args[0]}.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);

    let bwf1 = await db.fetch(`fifaw_${user.id}`)

    if (bwf1 > 0) return message.channel.send(Embed5)
   
    let Embed = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`برای خرید والپیپر **.${args[0]}.** نیاز به **.2000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

if (author < 2000) return message.channel.send(Embed)

    db.fetch(`fifaw_${user.id}`);
    db.set(`fifaw_${user.id}`, true)

    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما والپیپر **.${args[0]}.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 2000)
    message.channel.send(Embed2)
}if (args[0] == 'milan') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما والپیپر **.${args[0]}.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);

    let bwf1 = await db.fetch(`milanw_${user.id}`)

    if (bwf1 > 0) return message.channel.send(Embed5)
   
    let Embed = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`برای خرید والپیپر **.${args[0]}.** نیاز به **.2000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

if (author < 2000) return message.channel.send(Embed)

    db.fetch(`milanw_${user.id}`);
    db.set(`milanw_${user.id}`, true)

    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما والپیپر **.${args[0]}.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 2000)
    message.channel.send(Embed2)
}if (args[0] == 'mancity') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما والپیپر **.${args[0]}.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);

    let bwf1 = await db.fetch(`mancityw_${user.id}`)

    if (bwf1 > 0) return message.channel.send(Embed5)
   
    let Embed = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`برای خرید والپیپر **.${args[0]}.** نیاز به **.2000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

if (author < 2000) return message.channel.send(Embed)

    db.fetch(`mancityw_${user.id}`);
    db.set(`mancityw_${user.id}`, true)

    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما والپیپر **.${args[0]}.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 2000)
    message.channel.send(Embed2)
}if (args[0] == 'pubg') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما والپیپر **.${args[0]}.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);

    let bwf1 = await db.fetch(`pubgw_${user.id}`)

    if (bwf1 > 0) return message.channel.send(Embed5)
   
    let Embed = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`برای خرید والپیپر **.${args[0]}.** نیاز به **.2000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

if (author < 2000) return message.channel.send(Embed)

    db.fetch(`pubgw_${user.id}`);
    db.set(`pubgw_${user.id}`, true)

    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما والپیپر **.${args[0]}.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 2000)
    message.channel.send(Embed2)
}if (args[0] == 'cod') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما والپیپر **.${args[0]}.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);

    let bwf1 = await db.fetch(`codw_${user.id}`)

    if (bwf1 > 0) return message.channel.send(Embed5)
   
    let Embed = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`برای خرید والپیپر **.${args[0]}.** نیاز به **.2000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

if (author < 2000) return message.channel.send(Embed)

    db.fetch(`codw_${user.id}`);
    db.set(`codw_${user.id}`, true)

    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما والپیپر **.${args[0]}.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 2000)
    message.channel.send(Embed2)
}if (args[0] == 'atletico-madrid') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما والپیپر **.${args[0]}.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);

    let bwf1 = await db.fetch(`atleticomadridw_${user.id}`)

    if (bwf1 > 0) return message.channel.send(Embed5)
   
    let Embed = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`برای خرید والپیپر **.${args[0]}.** نیاز به **.2000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

if (author < 2000) return message.channel.send(Embed)

    db.fetch(`atleticomadridw_${user.id}`);
    db.set(`atleticomadridw_${user.id}`, true)

    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما والپیپر **.${args[0]}.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 2000)
    message.channel.send(Embed2)
}if (args[0] == 'wow') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما والپیپر **.${args[0]}.** را از قبل خریده اید   **|** <:x_:778316309050032149>     `);

    let bwf1 = await db.fetch(`wowww_${user.id}`)

    if (bwf1 > 0) return message.channel.send(Embed5)
   
    let Embed = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`برای خرید والپیپر **.${args[0]}.** نیاز به **.2000.** پیکوین دارید ! **|** <:x_:778316309050032149>    `);

if (author < 2000) return message.channel.send(Embed)

    db.fetch(`wowww_${user.id}`);
    db.set(`wowww_${user.id}`, true)

    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما والپیپر **.${args[0]}.** را برای پروفایل خود خریدید! **|** <:tik:778316308160446506>  `);

    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 2000)
    message.channel.send(Embed2)
}
}
  
  module.exports.help = {
    name:"buy-wallpaper",
    aliases: [""]
  }