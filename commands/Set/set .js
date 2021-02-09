const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {


  let user = message.author;

 if (args[0] == 'football') {
       
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription(`شما **.${args.slice(1).join(' ')}.** به عنوان علاقه فوتبالی خود انتخاب کردید **|** <:tik:778316308160446506>  `);


        db.set(`${user.id}fteam`, args.slice(1).join(' '))
        message.channel.send(Embed2)
} if (args[0] == 'first-name') {
       
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **.${args.slice(1).join(' ')}.** به عنوان نام خود انتخاب کردید **|** <:tik:778316308160446506>  `);


  db.set(`${user.id}fname`, args.slice(1).join(' '))
  message.channel.send(Embed2)
} if (args[0] == 'last-name') {
       
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **.${args.slice(1).join(' ')}.** به عنوان نام خانوادگی خود انتخاب کردید **|** <:tik:778316308160446506>  `);


  db.set(`${user.id}lname`, args.slice(1).join(' '))
  message.channel.send(Embed2)
} if (args[0] == 'singer') {
       
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **.${args.slice(1).join(' ')}.** به عنوان خواننده مورد علاقه خود انتخاب کردید **|** <:tik:778316308160446506>  `);


  db.set(`${user.id}song`, args.slice(1).join(' '))
  message.channel.send(Embed2)
} if (args[0] == 'age') {
       
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **.${args.slice(1).join(' ')}.** به عنوان سن خود انتخاب کردید **|** <:tik:778316308160446506>  `);


  db.set(`${user.id}age`, args.slice(1).join(' '))
  message.channel.send(Embed2)
} if (args[0] == 'city') {
       
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **.${args.slice(1).join(' ')}.** به عنوان شهر خود انتخاب کردید **|** <:tik:778316308160446506>  `);


  db.set(`${user.id}pcity`, args.slice(1).join(' '))
  message.channel.send(Embed2)
} if (args[0] == 'pic') {
       
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **.${args.slice(1).join(' ')}.** به عنوان عکس خود انتخاب کردید **|** <:tik:778316308160446506>  `);


  db.set(`${user.id}pic`, args.slice(1).join(' '))
  message.channel.send(Embed2)
} if (args[0] == 'bio') {
       
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **.${args.slice(1).join(' ')}.** به عنوان بیو خود انتخاب کردید **|** <:tik:778316308160446506>  `);


  db.set(`${user.id}disc`, args.slice(1).join(' '))
  message.channel.send(Embed2)
} if (args[0] == 'youtube') {
       
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **.${args.slice(1).join(' ')}.** به عنوان اکانت یوتیوب خود انتخاب کردید **|** <:tik:778316308160446506>  `);


  db.set(`${user.id}youtube`, args.slice(1).join(' '))
  message.channel.send(Embed2)
} if (args[0] == 'spotify') {
       
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **.${args.slice(1).join(' ')}.** به عنوان اکانت اسپاتیفای خود انتخاب کردید **|** <:tik:778316308160446506>  `);


  db.set(`${user.id}spotify`, args.slice(1).join(' '))
  message.channel.send(Embed2)
} if (args[0] == 'gmail') {
       
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **.${args.slice(1).join(' ')}.** به عنوان جیمیل خود انتخاب کردید **|** <:tik:778316308160446506>  `);


  db.set(`${user.id}gmail`, args.slice(1).join(' '))
  message.channel.send(Embed2)
} if (args[0] == 'instagram') {
       
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **.${args.slice(1).join(' ')}.** به عنوان اکانت اینستاگرام خود انتخاب کردید **|** <:tik:778316308160446506>  `);


  db.set(`${user.id}instagram`, args.slice(1).join(' '))
  message.channel.send(Embed2)
} if (args[0] == 'phonenumber') {
       
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **.${args.slice(1).join(' ')}.** به عنوان شماره خود انتخاب کردید **|** <:tik:778316308160446506>  `);


  db.set(`${user.id}phonenumber`, args.slice(1).join(' '))
  message.channel.send(Embed2)
} if (args[0] == 'item1-name') {
    
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **${args[1]}** را به عنوان نام **آیتم یک** انتخاب کردید**|** <:tik:778316308160446506>  `);


  db.set(`${message.guild.id}_item1`, args[1])
  message.channel.send(Embed2)
} if (args[0] == 'item2-name') {
    
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **${args[1]}** را به عنوان نام **آیتم دو** انتخاب کردید**|** <:tik:778316308160446506>  `);


  db.set(`${message.guild.id}_item2`, args[1])
  message.channel.send(Embed2)
} if (args[0] == 'item3-name') {
    
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **${args[1]}** را به عنوان نام **آیتم سه** انتخاب کردید**|** <:tik:778316308160446506>  `);


  db.set(`${message.guild.id}_item3`, args[1])
  message.channel.send(Embed2)
} if (args[0] == 'item4-name') {
    
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **${args[1]}** را به عنوان نام **آیتم چهار** انتخاب کردید**|** <:tik:778316308160446506>  `);


  db.set(`${message.guild.id}_item4`, args[1])
  message.channel.send(Embed2)
} if (args[0] == 'item5-name') {
    
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **${args[1]}** را به عنوان نام **آیتم پنج** انتخاب کردید**|** <:tik:778316308160446506>  `);


  db.set(`${message.guild.id}_item5`, args[1])
  message.channel.send(Embed2)
} if (args[0] == 'item6-name') {
    
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **${args[1]}** را به عنوان نام **آیتم شش** انتخاب کردید**|** <:tik:778316308160446506>  `);


  db.set(`${message.guild.id}_item6`, args[1])
  message.channel.send(Embed2)
} if (args[0] == 'item7-name') {
    
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **${args[1]}** را به عنوان نام **آیتم هفت** انتخاب کردید**|** <:tik:778316308160446506>  `);


  db.set(`${message.guild.id}_item7`, args[1])
  message.channel.send(Embed2)
} if (args[0] == 'item8-name') {
    
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **${args[1]}** را به عنوان نام **آیتم هشت** انتخاب کردید**|** <:tik:778316308160446506>  `);


  db.set(`${message.guild.id}_item8`, args[1])
  message.channel.send(Embed2)
} if (args[0] == 'item9-name') {
    
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **${args[1]}** را به عنوان نام **آیتم نه** انتخاب کردید**|** <:tik:778316308160446506>  `);


  db.set(`${message.guild.id}_item9`, args[1])
  message.channel.send(Embed2)
} if (args[0] == 'item10-name') {
    
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **${args[1]}** را به عنوان نام **آیتم ده** انتخاب کردید**|** <:tik:778316308160446506>  `);


  db.set(`${message.guild.id}_item10`, args[1])
  message.channel.send(Embed2)

    
  let Embed22 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **${args[1]}** را به عنوان نام **آیتم یک** انتخاب کردید**|** <:tik:778316308160446506>  `);


  db.set(`${message.guild.id}_item1`, args[1])
  message.channel.send(Embed22)

    
  let Embed222 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **${args[1]}** را به عنوان نام **آیتم یک** انتخاب کردید**|** <:tik:778316308160446506>  `);


  db.set(`${message.guild.id}_item1`, args[1])
  message.channel.send(Embed222)
} if (args[0] == 'item1-description') {
    
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **${args.slice(1).join(" ")}** را به عنوان توضیحات **آیتم یک** انتخاب کردید**|** <:tik:778316308160446506>  `);


  db.set(`${message.guild.id}_item1dec`, args.slice(1).join(" "))
  message.channel.send(Embed2)
    
  let Embed22 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **${args.slice(1).join(" ")}** را به عنوان توضیحات **آیتم یک** انتخاب کردید**|** <:tik:778316308160446506>  `);


  db.set(`${message.guild.id}_item1dec`, args.slice(1).join(" "))
  message.channel.send(Embed22)
} if (args[0] == 'item2-description') {
    
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **${args.slice(1).join(" ")}** را به عنوان توضیحات **آیتم دو** انتخاب کردید**|** <:tik:778316308160446506>  `);


  db.set(`${message.guild.id}_item2dec`, args.slice(1).join(" "))
  message.channel.send(Embed2)
} if (args[0] == 'item3-description') {
    
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **${args.slice(1).join(" ")}** را به عنوان توضیحات **آیتم سه** انتخاب کردید**|** <:tik:778316308160446506>  `);


  db.set(`${message.guild.id}_item3dec`, args.slice(1).join(" "))
  message.channel.send(Embed2)
} if (args[0] == 'item4-description') {
    
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **${args.slice(1).join(" ")}** را به عنوان توضیحات **آیتم چهار** انتخاب کردید**|** <:tik:778316308160446506>  `);


  db.set(`${message.guild.id}_item4dec`, args.slice(1).join(" "))
  message.channel.send(Embed2)
} if (args[0] == 'item5-description') {
    
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **${args.slice(1).join(" ")}** را به عنوان توضیحات **آیتم پنج** انتخاب کردید**|** <:tik:778316308160446506>  `);


  db.set(`${message.guild.id}_item5dec`, args.slice(1).join(" "))
  message.channel.send(Embed2)
} if (args[0] == 'item6-description') {
    
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **${args.slice(1).join(" ")}** را به عنوان توضیحات **آیتم شش** انتخاب کردید**|** <:tik:778316308160446506>  `);


  db.set(`${message.guild.id}_item6dec`, args.slice(1).join(" "))
  message.channel.send(Embed2)
} if (args[0] == 'item7-description') {
    
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **${args.slice(1).join(" ")}** را به عنوان توضیحات **آیتم هفت** انتخاب کردید**|** <:tik:778316308160446506>  `);


  db.set(`${message.guild.id}_item7dec`, args.slice(1).join(" "))
  message.channel.send(Embed2)
} if (args[0] == 'item8-description') {
    
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **${args.slice(1).join(" ")}** را به عنوان توضیحات **آیتم هشت** انتخاب کردید**|** <:tik:778316308160446506>  `);


  db.set(`${message.guild.id}_item8dec`, args.slice(1).join(" "))
  message.channel.send(Embed2)
} if (args[0] == 'item9-description') {
    
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **${args.slice(1).join(" ")}** را به عنوان توضیحات **آیتم نه** انتخاب کردید**|** <:tik:778316308160446506>  `);


  db.set(`${message.guild.id}_item9dec`, args.slice(1).join(" "))
  message.channel.send(Embed2)
} if (args[0] == 'item10-description') {
    
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما **${args.slice(1).join(" ")}** را به عنوان توضیحات **آیتم ده** انتخاب کردید**|** <:tik:778316308160446506>  `);


  db.set(`${message.guild.id}_item10dec`, args.slice(1).join(" "))
  message.channel.send(Embed2)
}
}

  
  module.exports.help = {
    name:"set",
    aliases: [""]
  }