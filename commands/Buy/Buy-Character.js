const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
  

  let user = message.author;

  let author = db.fetch(`pcoin_${message.guild.id}_${user.id}`)

  if (args[0] == 'johansen') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما قبلا کارکتر **.Johansen** رو خریده اید  `);

    let green2colore = await db.fetch(`johansen_${message.guild.id}_${user.id}`)

    if (green2colore > 0) return message.channel.send(Embed5)
    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription("برای خرید کارکتر **.Johansen.** نیاز به **.3000.** پی کوین دارید  **|** <:x_:778316309050032149>  ");

    if (author < 3000) return message.channel.send(Embed2)
   
    db.fetch(`johansen_${message.guild.id}_${user.id}`)
    db.set(`johansen_${message.guild.id}_${user.id}`, true)
   

    let Embed3 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setImage("https://cdn.discordapp.com/attachments/749123968455147542/7600011816033452053/pngwave_5.png")
    .setDescription("شما کارکتر **.Johansen.** رو خریدید")


    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 3000)
    message.channel.send(Embed3)
}if (args[0] == 'salah') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما قبلا کارکتر **Salah** رو خریده اید  **|** <:x_:778316309050032149>   `);

    let green2colore = await db.fetch(`salah_${message.guild.id}_${user.id}`)

    if (green2colore > 0) return message.channel.send(Embed5)
    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription("برای خرید کارکتر **.Salah.** نیاز به **.1000.** پی کوین دارید  **|** <:x_:778316309050032149>  ");

    if (author < 1000) return message.channel.send(Embed2)
   
    db.fetch(`salah_${message.guild.id}_${user.id}`)
    db.set(`salah_${message.guild.id}_${user.id}`, true)
   

    let Embed3 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setImage("https://cdn.discordapp.com/attachments/749123968455147542/7600011801994723348/pngwave_7.png")
    .setDescription("شما کارکتر **.Salah.** رو خریدید")


    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 1000)
    message.channel.send(Embed3)
}if (args[0] == 'alexander') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما قبلا کارکتر **Alexander** رو خریده اید  **|** <:x_:778316309050032149>   `);

    let green2colore = await db.fetch(`alexander_${message.guild.id}_${user.id}`)

    if (green2colore > 0) return message.channel.send(Embed5)
    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription("برای خرید کارکتر **.Alexander.** نیاز به **.5500.** پی کوین دارید  **|** <:x_:778316309050032149>  ");

    if (author < 5500) return message.channel.send(Embed2)
   
    db.fetch(`alexander_${message.guild.id}_${user.id}`)
    db.set(`alexander_${message.guild.id}_${user.id}`, true)
   

    let Embed3 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setImage("https://cdn.discordapp.com/attachments/749123968455147542/7600011791077474344/pngwave_8.png")
    .setDescription("شما کارکتر **.Alexander.** رو خریدید")


    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 5500)
    message.channel.send(Embed3)
}if (args[0] == 'eric') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما قبلا کارکتر **Eric** رو خریده اید  **|** <:x_:778316309050032149>   `);

    let green2colore = await db.fetch(`eric_${message.guild.id}_${user.id}`)

    if (green2colore > 0) return message.channel.send(Embed5)
    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription("برای خرید کارکتر **.Eric.** نیاز به **.7000.** پی کوین دارید  **|** <:x_:778316309050032149>  ");

    if (author < 7000) return message.channel.send(Embed2)
   
    db.fetch(`eric_${message.guild.id}_${user.id}`)
    db.set(`eric_${message.guild.id}_${user.id}`, true)
   

    let Embed3 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setImage("https://cdn.discordapp.com/attachments/749123968455147542/7600011831292067840/pngwave_6.png")
    .setDescription("شما کارکتر **.Eric.** رو خریدید")


    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 7000)
    message.channel.send(Embed3)
}if (args[0] == 'richard') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما قبلا کارکتر **Richard** رو خریده اید  **|** <:x_:778316309050032149>   `);

    let green2colore = await db.fetch(`richard_${message.guild.id}_${user.id}`)

    if (green2colore > 0) return message.channel.send(Embed5)
    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription("برای خرید کارکتر **.Richard.** نیاز به **.8500.** پی کوین دارید  **|** <:x_:778316309050032149>  ");

    if (author < 8500) return message.channel.send(Embed2)
   
    db.fetch(`richard_${message.guild.id}_${user.id}`)
    db.set(`richard_${message.guild.id}_${user.id}`, true)
   

    let Embed3 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setImage("https://cdn.discordapp.com/attachments/749123968455147542/7600037427284148224/pngwave_10.png")
    .setDescription("شما کارکتر **.Richard.** رو خریدید")


    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 8500)
    message.channel.send(Embed3)
}if (args[0] == 'barbara') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما قبلا کارکتر **Barbara** رو خریده اید  **|** <:x_:778316309050032149>   `);

    let green2colore = await db.fetch(`barbara_${message.guild.id}_${user.id}`)

    if (green2colore > 0) return message.channel.send(Embed5)
    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription("برای خرید کارکتر **.Barbara.** نیاز به **.9000.** پی کوین دارید  **|** <:x_:778316309050032149>  ");

    if (author < 9000) return message.channel.send(Embed2)
   
    db.fetch(`barbara_${message.guild.id}_${user.id}`)
    db.set(`barbara_${message.guild.id}_${user.id}`, true)
   

    let Embed3 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setImage("https://cdn.discordapp.com/attachments/749123968455147542/7600037427284148224/pngwave_10.png")
    .setDescription("شما کارکتر **.Barbara.** رو خریدید")


    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 9000)
    message.channel.send(Embed3)
}if (args[0] == 'susan') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما قبلا کارکتر **Susan** رو خریده اید  **|** <:x_:778316309050032149>   `);

    let green2colore = await db.fetch(`susan_${message.guild.id}_${user.id}`)

    if (green2colore > 0) return message.channel.send(Embed5)
    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription("برای خرید کارکتر **.Susan.** نیاز به **.10000.** پی کوین دارید  **|** <:x_:778316309050032149>  ");

    if (author < 10000) return message.channel.send(Embed2)
   
    db.fetch(`susan_${message.guild.id}_${user.id}`)
    db.set(`susan_${message.guild.id}_${user.id}`, true)
   

    let Embed3 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setImage("https://cdn.discordapp.com/attachments/749123968455147542/7600037427284148224/pngwave_10.png")
    .setDescription("شما کارکتر **.Susan.** رو خریدید")


    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 10000)
    message.channel.send(Embed3)
}if (args[0] == 'atan') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما قبلا کارکتر **Atan** رو خریده اید  **|** <:x_:778316309050032149>   `);

    let green2colore = await db.fetch(`atan_${message.guild.id}_${user.id}`)

    if (green2colore > 0) return message.channel.send(Embed5)
    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription("برای خرید کارکتر **.Atan.** نیاز به **.13000.** پی کوین دارید  **|** <:x_:778316309050032149>  ");

    if (author < 13000) return message.channel.send(Embed2)
   
    db.fetch(`atan_${message.guild.id}_${user.id}`)
    db.set(`atan_${message.guild.id}_${user.id}`, true)
   

    let Embed3 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setImage("https://cdn.discordapp.com/attachments/749123968455147542/7600012666781171742/pngwave_2.png")
    .setDescription("شما کارکتر **.Atan.** رو خریدید")


    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 13000)
    message.channel.send(Embed3)
}if (args[0] == 'david') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما قبلا کارکتر **David** رو خریده اید  **|** <:x_:778316309050032149>   `);

    let green2colore = await db.fetch(`david_${message.guild.id}_${user.id}`)

    if (green2colore > 0) return message.channel.send(Embed5)
    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription("برای خرید کارکتر **.David.** نیاز به **.16000.** پی کوین دارید  **|** <:x_:778316309050032149>  ");

    if (author < 16000) return message.channel.send(Embed2)
   
    db.fetch(`david_${message.guild.id}_${user.id}`)
    db.set(`david_${message.guild.id}_${user.id}`, true)
   

    let Embed3 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setImage("https://cdn.discordapp.com/attachments/749123968455147542/7600021784392761355/Untitled-1.png")
    .setDescription("شما کارکتر **.David.** رو خریدید")


    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 16000)
    message.channel.send(Embed3)
}

}
  module.exports.help = {
    name:"buy-character",
    aliases: [""]
  }