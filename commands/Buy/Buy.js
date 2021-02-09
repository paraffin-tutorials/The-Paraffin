const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {


    let user = message.author;

    let author = db.fetch(`pcoin_${message.guild.id}_${user.id}`)
    if (args[0] == 'item1') {
       
        let iteamone = db.fetch(`${message.guild.id}_item1`)
        let iteamonepcoin = db.fetch(`${message.guild.id}_item1pcoin`)

        if (iteamone == null) return message.send.channel('آیتم یک به طور کامل درست نشده است [ مشکل : نام آیتم یک خالی است ]')
        if (iteamonepcoin == null) return message.send.channel('آیتم یک به طور کامل درست نشده است [ مشکل : قیمت آیتم یک خالی است ]')

        let Embed5 = new Discord.MessageEmbed()
            .setColor("#f2ecec")
            .setDescription(`شما این آیتم را از قبل خریده بودید **|** <:x_:778316309050032149>    `);

        let green2colore = await db.fetch(`${message.guild.id}_item1`)

        if (green2colore !== null) return message.channel.send(Embed5)
        let Embed2 = new Discord.MessageEmbed()
            .setColor("#f2ecec")
            .setDescription(`شما برای خرید آیتم ${iteamone} نیاز به ${iteamonepcoin} پی کوین دارید **|** <:x_:778316309050032149>   `);

        if (author < iteamonepcoin) return message.channel.send(Embed2)

        let role1 = db.fetch(`${message.guild.id}_role1`)
        const role = message.guild.roles.cache.get(role1);
        user.roles.add(role);
        

        let Embed3 = new Discord.MessageEmbed()
            .setColor("#f2ecec")
            .setDescription(`شما آیتم ${iteamone} را با قیمت ${iteamonepcoin} پی کوین خریدید **|** <:tik:778316308160446506>  `);


        db.subtract(`pcoin_${message.guild.id}_${user.id}`, iteamonepcoin)
        message.channel.send(Embed3)
  
    
    } else if (args[0] == 'item2') {
   
        let iteamone = db.fetch(`${message.guild.id}_item2`)
        let iteamonepcoin = db.fetch(`${message.guild.id}_item2pcoin`)

        if (iteamone == null) return message.send.channel('آیتم دو به طور کامل درست نشده است [ مشکل : نام آیتم یک خالی است ]')
        if (iteamonepcoin == null) return message.send.channel('آیتم دو به طور کامل درست نشده است [ مشکل : قیمت آیتم یک خالی است ]')

        let Embed5 = new Discord.MessageEmbed()
            .setColor("#f2ecec")
            .setDescription(`شما این آیتم را از قبل خریده بودید **|** <:x_:778316309050032149>    `);

        let green2colore = await db.fetch(`${message.guild.id}_item2`)

        if (green2colore !== null) return message.channel.send(Embed5)
        let Embed2 = new Discord.MessageEmbed()
            .setColor("#f2ecec")
            .setDescription(`شما برای خرید آیتم ${iteamone} نیاز به ${iteamonepcoin} پی کوین دارید **|** <:x_:778316309050032149>   `);

        if (author < iteamonepcoin) return message.channel.send(Embed2)

        
        
        let role2 = db.fetch(`${message.guild.id}_role2`)
        const rolee = message.guild.roles.cache.get(role2);
        user.roles.add(rolee);

        let Embed3 = new Discord.MessageEmbed()
            .setColor("#f2ecec")
            .setDescription(`شما آیتم ${iteamone} را با قیمت ${iteamonepcoin} پی کوین خریدید **|** <:tik:778316308160446506>  `);


        db.subtract(`pcoin_${message.guild.id}_${user.id}`, iteamonepcoin)
        message.channel.send(Embed3)
  
    } else if (args[0] == 'item3') {
        
        let iteamone = db.fetch(`${message.guild.id}_item3`)
        let iteamonepcoin = db.fetch(`${message.guild.id}_item3pcoin`)

        if (iteamone == null) return message.send.channel('آیتم سه به طور کامل درست نشده است [ مشکل : نام آیتم یک خالی است ]')
        if (iteamonepcoin == null) return message.send.channel('آیتم سه به طور کامل درست نشده است [ مشکل : قیمت آیتم یک خالی است ]')

        let Embed5 = new Discord.MessageEmbed()
            .setColor("#f2ecec")
            .setDescription(`شما این آیتم را از قبل خریده بودید **|** <:x_:778316309050032149>    `);

        let green2colore = await db.fetch(`${message.guild.id}_item3`)

        if (green2colore !== null) return message.channel.send(Embed5)
        let Embed2 = new Discord.MessageEmbed()
            .setColor("#f2ecec")
            .setDescription(`شما برای خرید آیتم ${iteamone} نیاز به ${iteamonepcoin} پی کوین دارید **|** <:x_:778316309050032149>   `);

        if (author < iteamonepcoin) return message.channel.send(Embed2)

       
        
        let role3 = db.fetch(`${message.guild.id}_role3`)
        const roleee = message.guild.roles.cache.get(role3);
        user.roles.add(roleee);

        let Embed3 = new Discord.MessageEmbed()
            .setColor("#f2ecec")
            .setDescription(`شما آیتم ${iteamone} را با قیمت ${iteamonepcoin} پی کوین خریدید **|** <:tik:778316308160446506>  `);


        db.subtract(`pcoin_${message.guild.id}_${user.id}`, iteamonepcoin)
        message.channel.send(Embed3)
  
    } else if (args[0] == 'item4') {
        
        let iteamone = db.fetch(`${message.guild.id}_item4`)
        let iteamonepcoin = db.fetch(`${message.guild.id}_item4pcoin`)

        if (iteamone == null) return message.send.channel('آیتم سه به طور کامل درست نشده است [ مشکل : نام آیتم یک خالی است ]')
        if (iteamonepcoin == null) return message.send.channel('آیتم سه به طور کامل درست نشده است [ مشکل : قیمت آیتم یک خالی است ]')

        let Embed5 = new Discord.MessageEmbed()
            .setColor("#f2ecec")
            .setDescription(`شما این آیتم را از قبل خریده بودید **|** <:x_:778316309050032149>    `);

        let green2colore = await db.fetch(`${message.guild.id}_item4`)

        if (green2colore !== null) return message.channel.send(Embed5)
        let Embed2 = new Discord.MessageEmbed()
            .setColor("#f2ecec")
            .setDescription(`شما برای خرید آیتم ${iteamone} نیاز به ${iteamonepcoin} پی کوین دارید **|** <:x_:778316309050032149>   `);

        if (author < iteamonepcoin) return message.channel.send(Embed2)

       
        
        let role4 = db.fetch(`${message.guild.id}_role4`)
        const roleeee = message.guild.roles.cache.get(role4);
        user.roles.add(roleeee);

        let Embed3 = new Discord.MessageEmbed()
            .setColor("#f2ecec")
            .setDescription(`شما آیتم ${iteamone} را با قیمت ${iteamonepcoin} پی کوین خریدید **|** <:tik:778316308160446506>  `);


        db.subtract(`pcoin_${message.guild.id}_${user.id}`, iteamonepcoin)
        message.channel.send(Embed3)
  
    } else if (args[0] == 'item5') {
        
        let iteamone = db.fetch(`${message.guild.id}_item5`)
        let iteamonepcoin = db.fetch(`${message.guild.id}_item5pcoin`)

        if (iteamone == null) return message.send.channel('آیتم سه به طور کامل درست نشده است [ مشکل : نام آیتم یک خالی است ]')
        if (iteamonepcoin == null) return message.send.channel('آیتم سه به طور کامل درست نشده است [ مشکل : قیمت آیتم یک خالی است ]')

        let Embed5 = new Discord.MessageEmbed()
            .setColor("#f2ecec")
            .setDescription(`شما این آیتم را از قبل خریده بودید **|** <:x_:778316309050032149>    `);

        let green2colore = await db.fetch(`${message.guild.id}_item5`)

        if (green2colore !== null) return message.channel.send(Embed5)
        let Embed2 = new Discord.MessageEmbed()
            .setColor("#f2ecec")
            .setDescription(`شما برای خرید آیتم ${iteamone} نیاز به ${iteamonepcoin} پی کوین دارید **|** <:x_:778316309050032149>   `);

        if (author < iteamonepcoin) return message.channel.send(Embed2)

       
        
        let role5 = db.fetch(`${message.guild.id}_role5`)
        const roleeeee = message.guild.roles.cache.get(role5);
        user.roles.add(roleeeee);

        let Embed3 = new Discord.MessageEmbed()
            .setColor("#f2ecec")
            .setDescription(`شما آیتم ${iteamone} را با قیمت ${iteamonepcoin} پی کوین خریدید **|** <:tik:778316308160446506>  `);


        db.subtract(`pcoin_${message.guild.id}_${user.id}`, iteamonepcoin)
        message.channel.send(Embed3)
  
    }
}
module.exports.help = {
    name: "buy",
    aliases: [""]
}