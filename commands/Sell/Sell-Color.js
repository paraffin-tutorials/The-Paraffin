const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    
    
    let user = message.author;

     if(args[0] == 'red') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما رنگ **.قرمز.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let redcolor = await db.fetch(`red_${user.id}`)

        if (redcolor < 1) return message.channel.send(Embed2)
       
        db.fetch(`red_${user.id}`)
        db.delete(`red_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت رنگ **.قرمز.** پروفایل خود را با **.800.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    }if(args[0] == 'blue') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما رنگ **.آبی.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

       let bluecolor = await db.fetch(`blue_${user.id}`)

        if (bluecolor < 1) return message.channel.send(Embed2)
       
        db.fetch(`blue_${user.id}`)
        db.delete(`blue_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت رنگ **.آبی.** پروفایل خود را با **.800.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    }if(args[0] == 'green') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما رنگ **.سبز.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let greencolore = await db.fetch(`green_${user.id}`)

        if (greencolore < 1) return message.channel.send(Embed2)
       
        db.fetch(`green_${user.id}`);
        db.delete(`green_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت رنگ **.سبز.** پروفایل خود را با **.800.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    }if(args[0] == 'black') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما رنگ **.سیاه.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let redcolor = await db.fetch(`black_${user.id}`)

        if (redcolor < 1) return message.channel.send(Embed2)
       
        db.fetch(`black_${user.id}`)
        db.delete(`black_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت رنگ **.سیاه.** پروفایل خود را با **.800.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    }if(args[0] == 'white') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما رنگ **.سفید.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let redcolor = await db.fetch(`white_${user.id}`)

        if (redcolor < 1) return message.channel.send(Embed2)
       
        db.fetch(`white_${user.id}`)
        db.delete(`white_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت رنگ **.سفید.** پروفایل خود را با **.800.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    }if(args[0] == 'orange') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما رنگ **.نارنجی.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let redcolor = await db.fetch(`or_${user.id}`)

        if (redcolor < 1) return message.channel.send(Embed2)
       
        db.fetch(`or_${user.id}`)
        db.delete(`or_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت رنگ **.نارنجی.** پروفایل خود را با **.800.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    }if(args[0] == 'yellow') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما رنگ **.زرد.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let redcolor = await db.fetch(`yel_${user.id}`)

        if (redcolor < 1) return message.channel.send(Embed2)
       
        db.fetch(`yel_${user.id}`)
        db.delete(`yel_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت رنگ **.زرد.** پروفایل خود را با **.800.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    }if(args[0] == 'purple') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما رنگ **.بنفش.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let redcolor = await db.fetch(`pur_${user.id}`)

        if (redcolor < 1) return message.channel.send(Embed2)
       
        db.fetch(`pur_${user.id}`)
        db.delete(`pur_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت رنگ **.بنفش.** پروفایل خود را با **.800.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    }if(args[0] == 'barcelona') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما رنگ **.Barcelona.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let redcolor = await db.fetch(`barcacolor_${user.id}`)

        if (redcolor < 1) return message.channel.send(Embed2)
       
        db.fetch(`barcacolor_${user.id}`)
        db.delete(`barcacolor_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت رنگ **.Barcelona.** پروفایل خود را با **.800.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    }if(args[0] == 'juve') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما رنگ **.Juve.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let redcolor = await db.fetch(`juvecolor_${user.id}`)

        if (redcolor < 1) return message.channel.send(Embed2)
       
        db.fetch(`juvecolor_${user.id}`)
        db.delete(`juvecolor_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت رنگ **.Juve.** پروفایل خود را با **.800.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    }if(args[0] == 'esteghlal') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما رنگ **.Esteghlal.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let redcolor = await db.fetch(`estcolor_${user.id}`)

        if (redcolor < 1) return message.channel.send(Embed2)
       
        db.fetch(`estcolor_${user.id}`)
        db.delete(`estcolor_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت رنگ **.Esteghlal.** پروفایل خود را با **.800.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    }if(args[0] == 'perspolis') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما رنگ **.Perspolis.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let redcolor = await db.fetch(`perscolor_${user.id}`)

        if (redcolor < 1) return message.channel.send(Embed2)
       
        db.fetch(`perscolor_${user.id}`)
        db.delete(`perscolor_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت رنگ **.Perspolis.** پروفایل خود را با **.800.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    }if(args[0] == 'real-madrid') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما رنگ **.Real madrid.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let redcolor = await db.fetch(`realmcolor_${user.id}`)

        if (redcolor < 1) return message.channel.send(Embed2)
       
        db.fetch(`realmcolor_${user.id}`)
        db.delete(`realmcolor_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت رنگ **.Real madrid.** پروفایل خود را با **.800.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    }

}
  
  module.exports.help = {
    name:"sell-color",
    aliases: [""]
  }