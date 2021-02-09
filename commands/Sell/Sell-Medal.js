const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    
    
    let user = message.author;

     if(args[0] == '1') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما مدال **.1.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let medal1filter = await db.fetch(`medal1_${user.id}`)

        if (medal1filter < 1) return message.channel.send(Embed2)
       
        db.fetch(`medal1_${user.id}`)
        db.delete(`medal1_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(` شما با موفقیت مدال 1 را فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    }if(args[0] == '2') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما مدال **.2.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let medal1filter = await db.fetch(`medal2_${user.id}`)

        if (medal1filter < 1) return message.channel.send(Embed2)
       
        db.fetch(`medal2_${user.id}`)
        db.delete(`medal2_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(` شما با موفقیت مدال 2 را فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    }if(args[0] == '3') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما مدال **.3.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let medal1filter = await db.fetch(`medald3_${user.id}`)

        if (medal1filter < 1) return message.channel.send(Embed2)
       
        db.fetch(`medal3_${user.id}`)
        db.delete(`medal3_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(` شما با موفقیت مدال 3 را فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    }if(args[0] == 'esteghlal') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما مدال **.Esteghlal.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let medal1filter = await db.fetch(`estm_${user.id}`)

        if (medal1filter < 1) return message.channel.send(Embed2)
       
        db.fetch(`estm_${user.id}`)
        db.delete(`estm_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(` شما با موفقیت مدال Esteghlal را فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    }if(args[0] == 'perspolis') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما مدال **.Perspolis.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let medal1filter = await db.fetch(`persm_${user.id}`)

        if (medal1filter < 1) return message.channel.send(Embed2)
       
        db.fetch(`persm_${user.id}`)
        db.delete(`persm_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(` شما با موفقیت مدال Perspolis را فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    }if(args[0] == 'juve') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما مدال **.Juve.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let medal1filter = await db.fetch(`persm_${user.id}`)

        if (medal1filter < 1) return message.channel.send(Embed2)
       
        db.fetch(`juvem_${user.id}`)
        db.delete(`juvem_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(` شما با موفقیت مدال Juve را فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    }if(args[0] == 'barcelona') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما مدال **.Barcelona.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let medal1filter = await db.fetch(`barcam_${user.id}`)

        if (medal1filter < 1) return message.channel.send(Embed2)
       
        db.fetch(`barcam_${user.id}`)
        db.delete(`barcam_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(` شما با موفقیت مدال Barcelona را فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    }if(args[0] == 'real-madrid') {
        let Embed2 = new Discord.MessageEmbed()
         .setColor("#00dcff")
        .setDescription(`شما مدال **.Real madrid.** را ندارید که بفروشید   **|** <:x_:778316309050032149>     `);

        let medal1filter = await db.fetch(`realmm_${user.id}`)

        if (medal1filter < 1) return message.channel.send(Embed2)
       
        db.fetch(`realmm_${user.id}`)
        db.delete(`realmm_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(` شما با موفقیت مدال Real madrid را فروختید **|** <:tik:778316308160446506>  `);

        db.add(`pcoin_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    }
}
  
  module.exports.help = {
    name:"sell-medal",
    aliases: [""]
  }