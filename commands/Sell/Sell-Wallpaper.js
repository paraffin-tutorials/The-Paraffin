const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    
    
    let user = message.author;

     if(args[0] == '#001') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.#001.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww001 = await db.fetch(`#001w_${user.id}`)

        if (ww001 < 1) return message.channel.send(Embed2)
       
        db.fetch(`#001w_${user.id}`)
        db.delete(`#001w_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.001#.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == '#002') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.#002.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww002 = await db.fetch(`#002w_${user.id}`)

        if (ww002 < 1) return message.channel.send(Embed2)
       
        db.fetch(`#002w_${user.id}`)
        db.delete(`#002w_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.002#.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == '#003') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.#003.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww003 = await db.fetch(`#003w_${user.id}`)

        if (ww003 < 1) return message.channel.send(Embed2)
       
        db.fetch(`#003w_${user.id}`)
        db.delete(`#003w_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.003#.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == '#004') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.#004.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww004 = await db.fetch(`#004w_${user.id}`)

        if (ww004 < 1) return message.channel.send(Embed2)
       
        db.fetch(`#004w_${user.id}`)
        db.delete(`#004w_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.004#.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == '#005') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.#005.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww005 = await db.fetch(`#005w_${user.id}`)

        if (ww005 < 1) return message.channel.send(Embed2)
       
        db.fetch(`#005w_${user.id}`)
        db.delete(`#005w_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.005#.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == '#006') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.#006.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww006 = await db.fetch(`#006w_${user.id}`)

        if (ww006 < 1) return message.channel.send(Embed2)
       
        db.fetch(`#006w_${user.id}`)
        db.delete(`#006w_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.006#.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == '#007') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.#007.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww007 = await db.fetch(`#007w_${user.id}`)

        if (ww007 < 1) return message.channel.send(Embed2)
       
        db.fetch(`#007w_${user.id}`)
        db.delete(`#007w_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.007#.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == '#008') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.#008.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww007 = await db.fetch(`#008w_${user.id}`)

        if (ww007 < 1) return message.channel.send(Embed2)
       
        db.fetch(`#008w_${user.id}`)
        db.delete(`#008w_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.008#.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == '#009') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.#009.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww007 = await db.fetch(`#009w_${user.id}`)

        if (ww007 < 1) return message.channel.send(Embed2)
       
        db.fetch(`#009w_${user.id}`)
        db.delete(`#009w_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.009#.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == '#010') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.#010.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww007 = await db.fetch(`#010w_${user.id}`)

        if (ww007 < 1) return message.channel.send(Embed2)
       
        db.fetch(`#010w_${user.id}`)
        db.delete(`#010w_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.010#.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == 'barcelona') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.barcelona.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww007 = await db.fetch(`barcaw_${user.id}`)

        if (ww007 < 1) return message.channel.send(Embed2)
       
        db.fetch(`barcaw_${user.id}`)
        db.delete(`barcaw_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.barcelona.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == 'juve') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.Juve.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww007 = await db.fetch(`juvew_${user.id}`)

        if (ww007 < 1) return message.channel.send(Embed2)
       
        db.fetch(`juvew_${user.id}`)
        db.delete(`juvew_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.Juve.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == 'esteghlal') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.Esteghlal.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww007 = await db.fetch(`estw_${user.id}`)

        if (ww007 < 1) return message.channel.send(Embed2)
       
        db.fetch(`estw_${user.id}`)
        db.delete(`estw_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.Esteghlal.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == 'perspolis') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.Perspolis.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww007 = await db.fetch(`persw_${user.id}`)

        if (ww007 < 1) return message.channel.send(Embed2)
       
        db.fetch(`persw_${user.id}`)
        db.delete(`persw_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.Perspolis.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == 'real-madrid') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.Real madrid.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww007 = await db.fetch(`realmw_${user.id}`)

        if (ww007 < 1) return message.channel.send(Embed2)
       
        db.fetch(`realmw_${user.id}`)
        db.delete(`realmw_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.Real madrid.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == 'psg') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.${args[0]}.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww007 = await db.fetch(`psgw_${user.id}`)

        if (ww007 < 1) return message.channel.send(Embed2)
       
        db.fetch(`psgw_${user.id}`)
        db.delete(`psgw_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.${args[0]}.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == 'pes') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.${args[0]}.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww007 = await db.fetch(`pesw_${user.id}`)

        if (ww007 < 1) return message.channel.send(Embed2)
       
        db.fetch(`pesw_${user.id}`)
        db.delete(`pesw_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.${args[0]}.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == 'fifa') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.${args[0]}.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww007 = await db.fetch(`fifaw_${user.id}`)

        if (ww007 < 1) return message.channel.send(Embed2)
       
        db.fetch(`fifaw_${user.id}`)
        db.delete(`fifaw_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.${args[0]}.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == 'milan') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.${args[0]}.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww007 = await db.fetch(`milanw_${user.id}`)

        if (ww007 < 1) return message.channel.send(Embed2)
       
        db.fetch(`milanw_${user.id}`)
        db.delete(`milanw_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.${args[0]}.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == 'mancity') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.${args[0]}.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww007 = await db.fetch(`mancityw_${user.id}`)

        if (ww007 < 1) return message.channel.send(Embed2)
       
        db.fetch(`mancityw_${user.id}`)
        db.delete(`mancityw_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.${args[0]}.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == 'pubg') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.${args[0]}.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww007 = await db.fetch(`pubgw_${user.id}`)

        if (ww007 < 1) return message.channel.send(Embed2)
       
        db.fetch(`pubgw_${user.id}`)
        db.delete(`pubgw_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.${args[0]}.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == 'cod') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.${args[0]}.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww007 = await db.fetch(`codw_${user.id}`)

        if (ww007 < 1) return message.channel.send(Embed2)
       
        db.fetch(`codw_${user.id}`)
        db.delete(`codw_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.${args[0]}.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == 'atletico-madrid') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.${args[0]}.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww007 = await db.fetch(`atleticomadridw_${user.id}`)

        if (ww007 < 1) return message.channel.send(Embed2)
       
        db.fetch(`atleticomadridw_${user.id}`)
        db.delete(`atleticomadridw_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.${args[0]}.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == 'wow') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.${args[0]}.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww007 = await db.fetch(`wowww_${user.id}`)

        if (ww007 < 1) return message.channel.send(Embed2)
       
        db.fetch(`wowww_${user.id}`)
        db.delete(`wowww_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.${args[0]}.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }if(args[0] == 'liverpool') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما والپیپر **.${args[0]}.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let ww007 = await db.fetch(`liverpoolw_${user.id}`)

        if (ww007 < 1) return message.channel.send(Embed2)
       
        db.fetch(`liverpoolw_${user.id}`)
        db.delete(`liverpoolw_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما با موفقیت والپیپر **.${args[0]}.** پروفایل خود را با **.1000.** فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }
}
  
  module.exports.help = {
    name:"sell-wallpaper",
    aliases: [""]
  }