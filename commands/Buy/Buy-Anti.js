const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {


    let user = message.author;

    let author = db.fetch(`pcoin_${message.guild.id}_${user.id}`)
    if (args[0] == 'anti-rob') {
        let Embed5 = new Discord.MessageEmbed()
            .setColor("#f2ecec")
            .setDescription(`شما این آیتم را از قبل خریده بودید **|** <:x_:778316309050032149>    `);

        let green2colore = await db.fetch(`${user.id}_anti-rob`)

        if (green2colore !== null) return message.channel.send(Embed5)
        let Embed2 = new Discord.MessageEmbed()
            .setColor("#f2ecec")
            .setDescription("برای خرید آیتم **آنتی راب ** نیاز به **9000** پی کوین دارید **|** <:x_:778316309050032149>   ");

        if (author < 9000) return message.channel.send(Embed2)

        db.set(`${user.id}_anti-rob`, Date.now())
        db.set(`${user.id}_anti-rob-icon`, '<:on:784380371139690496>')
        

        let Embed3 = new Discord.MessageEmbed()
            .setColor("#f2ecec")
            .setDescription(`شما آیتم ضد دزدی را روی خود به مدت **1 هفته** راه اندازی کردید **|** <:tik:778316308160446506>  `);


        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 9000)
        message.channel.send(Embed3)
  
    
    } else if (args[0] == 'anti-attack') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما این آیتم را از قبل خریده بودید **|** <:x_:778316309050032149>    `);

    let green2colore = await db.fetch(`${user.id}_anti-attack`)

    if (green2colore !== null) return message.channel.send(Embed5)
    let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription("برای خرید آیتم **آنتی راب ** نیاز به **11000** پی کوین دارید **|** <:x_:778316309050032149>   ");

    if (author < 11000) return message.channel.send(Embed2)

    db.set(`${user.id}_anti-attack`, Date.now())
    db.set(`${user.id}_anti-attack-icon`, '<:on:784380371139690496>')
    

    let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما آیتم ضد حمله را روی خود به مدت **1 هفته** راه اندازی کردید **|** <:tik:778316308160446506>  `);


    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 11000)
    message.channel.send(Embed3)
    }else if (args[0] == 'anti-attack') {
        let Embed5 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما این آیتم را از قبل خریده بودید **|** <:x_:778316309050032149>    `);

    let green2colore = await db.fetch(`${user.id}_anti-attack`)

    if (green2colore !== null) return message.channel.send(Embed5)
    let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription("برای خرید آیتم **آنتی راب ** نیاز به **11000** پی کوین دارید **|** <:x_:778316309050032149>   ");

    if (author < 11000) return message.channel.send(Embed2)

    db.set(`${user.id}_anti-attack`, Date.now())
    db.set(`${user.id}_anti-attack-icon`, '<:on:784380371139690496>')
    

    let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما آیتم ضد حمله را روی خود به مدت **1 هفته** راه اندازی کردید **|** <:tik:778316308160446506>  `);


    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 11000)
    message.channel.send(Embed3)
    }
}
module.exports.help = {
    name: "buy-item",
    aliases: [""]
}