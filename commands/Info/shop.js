const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const db = require("quick.db");

module.exports.run = async (client, message, args) => {


    let user = message.mentions.members.first() || message.author;


    let premuimserver = await db.fetch(`premium_${message.guild.id}`)


    let item1 = await db.fetch(`${user.id}_item1`)
    if(item1 === null) item1 = 'خالی**'
    let item2 = await db.fetch(`${user.id}_item2`)
    if(item2 === null) item2 = 'خالی**'
    let item3 = await db.fetch(`${user.id}_item3`)
    if(item3 === null) item3 = 'خالی**'
    let item4 = await db.fetch(`${user.id}_item4`)
    if(item4 === null) item4 = 'خالی**'
    let item5 = await db.fetch(`${user.id}_item5`)
    if(item5 === null) item5 = 'خالی**'
    let item6 = await db.fetch(`${user.id}_item6`)
    if(item6 === null) item6 = 'خالی**'
    let item7 = await db.fetch(`${user.id}_item7`)
    if(item7 === null) item7 = 'خالی**'
    let item8 = await db.fetch(`${user.id}_item8`)
    if(item8 === null) item8 = 'خالی**'
    let item9 = await db.fetch(`${user.id}_item9`)
    if(item9 === null) item9 = 'خالی**'
    let item10 = await db.fetch(`${user.id}_item10`)
    if(item10 === null) item10 = 'خالی**'



    let item1dec = await db.fetch(`${user.id}_item1dec`)
    if(item1dec === null) item1dec = 'خالی'

    let item2dec = await db.fetch(`${user.id}_item2dec`)
    if(item2dec === null) item2dec = 'خالی'

    let item3dec = await db.fetch(`${user.id}_item3dec`)
    if(item3dec === null) item3dec = 'خالی'

    let item4dec = await db.fetch(`${user.id}_item4dec`)
    if(item4dec === null) item4dec = 'خالی'

    let item5dec = await db.fetch(`${user.id}_item5dec`)
    if(item5dec === null) item5dec = 'خالی'

    let item6dec = await db.fetch(`${user.id}_item6dec`)
    if(item6dec === null) item6dec = 'خالی'

    let item7dec = await db.fetch(`${user.id}_item7dec`)
    if(item7dec === null) item7dec = 'خالی'

    let item8dec = await db.fetch(`${user.id}_item8dec`)
    if(item8dec === null) item8dec = 'خالی'

    let item9dec = await db.fetch(`${user.id}_item9dec`)
    if(item9dec === null) item9dec = 'خالی'

    let item10dec = await db.fetch(`${user.id}_item10dec`)
    if(item10dec === null) item10dec = 'خالی'


       const embed = new MessageEmbed()

       .setTitle(`فروشگاهِ رول ${message.guild.name}`)
       
       .addField(`**1.I ${item1}`, `${item1dec}`)
       .addField(`**2.I ${item2}`, `${item2dec}`)
       .addField(`**3.I ${item3}`, `${item3dec}`)
       .addField(`**4.I ${item4}`, `${item4dec}`)
       .addField(`**5.I ${item5}`, `${item5dec}`)

       
       .setColor(`#f5eeee`)
       .setFooter('درخواست شده توسط | ' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))

       if (premuimserver !== null) embed.addField(`**6.I ${item6}`, `${item6dec}`)
       if (premuimserver !== null) embed.addField(`**7.I ${item7}`, `${item7dec}`)
       if (premuimserver !== null) embed.addField(`**8.I ${item8}`, `${item8dec}`)
       if (premuimserver !== null) embed.addField(`**9.I ${item9}`, `${item9dec}`)
       if (premuimserver !== null) embed.addField(`**10.I ${item10}`, `${item10dec}`)
       message.channel.send(embed)
    }
  
    module.exports.help = {
        name:"shop",
        aliases: ["server-shop"]
      }