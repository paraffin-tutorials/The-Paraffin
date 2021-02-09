const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
  

  let user = message.author;

  let author = db.fetch(`pcoin_${message.guild.id}_${user.id}`)
      if (args[0] == 'scar') {
    let Embed5 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما قبلا اسلحه **.Scar.** را خریده بودید  **|** <:x_:778316309050032149>    `);

    let green2colore = await db.fetch(`scar_${message.guild.id}_${user.id}`)

    if (green2colore > 0) return message.channel.send(Embed5)
    let Embed2 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(" برای خرید اسلحه **.Scar.** نیاز به **.550.** پیکوین دارید  **|** <:x_:778316309050032149>   ");

    if (author < 550) return message.channel.send(Embed2)
   
    db.fetch(`scar_${message.guild.id}_${user.id}`)
    db.set(`scar_${message.guild.id}_${user.id}`, true)
   

    let Embed3 = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setImage("https://cdn.discordapp.com/attachments/747798345145122816/747803339139579995/87275964-7c80-4a94-a643-2ef5d0d78c4f.png")
    .setDescription("شما با موفقیت گان **.Scar.** خریدید")


    db.subtract(`pcoin_${message.guild.id}_${user.id}`, 550)
    message.channel.send(Embed3)
}else if(args[0] == 'ak-47') {
  let Embed5 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما قبلا اسلحه **.AK-47.** را خریده بودید  **|** <:x_:778316309050032149>    `);

  let green2colore = await db.fetch(`ak_${message.guild.id}_${user.id}`)

  if (green2colore > 0) return message.channel.send(Embed5)
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription("برای خرید اسلحه **.AK-47.** نیاز به **.650.** پیکوین دارید  **|** <:x_:778316309050032149>   ");

        if (author < 650) return message.channel.send(Embed2)
       
        db.fetch(`ak_${message.guild.id}_${user.id}`)
        db.set(`ak_${message.guild.id}_${user.id}`, true)

        
        let Embed3 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .setDescription("شما با موفقیت گان **.AK-47.** خریدید")
        .setImage("https://cdn.discordapp.com/attachments/747798345145122816/747799351614505030/1024px-AK-47.png");
        db.subtract(`pcoin_${message.guild.id}_${user.id}`, 650)
        message.channel.send(Embed3)
}else if(args[0] == 'aug') {
          let Embed5 = new Discord.MessageEmbed()
          .setColor("#f2ecec")
          .setDescription(`شما قبلا اسلحه **.AUG.** را خریده بودید  **|** <:x_:778316309050032149>    `);
        
          let green2colore = await db.fetch(`aug_${message.guild.id}_${user.id}`)
        
          if (green2colore > 0) return message.channel.send(Embed5)
                let Embed2 = new Discord.MessageEmbed()
                .setColor("#f2ecec")
                .setDescription("برای خرید اسلحه **.AUG.** نیاز به **.650.** پیکوین دارید  **|** <:x_:778316309050032149>   ");
        
                if (author < 650) return message.channel.send(Embed2)
               
                db.fetch(`aug_${message.guild.id}_${user.id}`)
                db.set(`aug_${message.guild.id}_${user.id}`, true)
        
                
                let Embed3 = new Discord.MessageEmbed()
                .setColor("#f2ecec")
                .setDescription("شما با موفقیت گان **.AUG.** خریدید")
                .setImage("https://cdn.discordapp.com/attachments/749123968455147542/765442042360234014/pngkey.com-balance-png-500311.png");
                db.subtract(`pcoin_${message.guild.id}_${user.id}`, 650)
                message.channel.send(Embed3)
}else if(args[0] == 'kar98') {
  let Embed5 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما قبلا اسلحه **.kar98.** را خریده بودید  **|** <:x_:778316309050032149>    `);

  let green2colore = await db.fetch(`kar98_${message.guild.id}_${user.id}`)

  if (green2colore > 0) return message.channel.send(Embed5)
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(" برای خرید اسلحه **.kar98.** نیاز به **.600.** پیکوین دارید  **|** <:x_:778316309050032149>   ");

  if (author < 600) return message.channel.send(Embed2)
 
  db.fetch(`kar98_${message.guild.id}_${user.id}`)
  db.set(`kar98_${message.guild.id}_${user.id}`, true)
  

  let Embed3 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription("شما با موفقیت **.kar98.** خود رو خریدی!")
  .setImage("https://cdn.discordapp.com/attachments/747798345145122816/747802928995106816/pngbarn_1.png");
  db.subtract(`pcoin_${message.guild.id}_${user.id}`, 600)
  message.channel.send(Embed3)
}else if(args[0] == 'm16') {
  let Embed5 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما قبلا اسلحه **.M16.** را خریده بودید  **|** <:x_:778316309050032149>    `);

  let green2colore = await db.fetch(`m16_${message.guild.id}_${user.id}`)

  if (green2colore > 0) return message.channel.send(Embed5)
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(" برای خرید اسلحه **.M16.** نیاز به **.600.** پیکوین دارید  **|** <:x_:778316309050032149>   ");

  if (author < 600) return message.channel.send(Embed2)
 
  db.fetch(`m16_${message.guild.id}_${user.id}`)
  db.set(`m16_${message.guild.id}_${user.id}`, true)
  

  let Embed3 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription("شما با موفقیت **.M16.** خود رو خریدی!")
  .setImage("https://cdn.discordapp.com/attachments/749123968455147542/759811276007800862/pngbarn_5.png");
  db.subtract(`pcoin_${message.guild.id}_${user.id}`, 600)
  message.channel.send(Embed3)
}else if(args[0] == 'mp5') {
  let Embed5 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما قبلا اسلحه **.MP5.** را خریده بودید  **|** <:x_:778316309050032149>    `);

  let green2colore = await db.fetch(`mp5_${message.guild.id}_${user.id}`)

  if (green2colore > 0) return message.channel.send(Embed5)
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(" برای خرید اسلحه **.MP5.** نیاز به **.500.** پیکوین دارید  **|** <:x_:778316309050032149>   ");

  if (author < 500) return message.channel.send(Embed2)
 
  db.fetch(`mp5_${message.guild.id}_${user.id}`)
  db.set(`mp5_${message.guild.id}_${user.id}`, true)
  

  let Embed3 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription("شما با موفقیت **.MP5.** خود رو خریدی!")
  .setImage("https://cdn.discordapp.com/attachments/749123968455147542/760003373432176660/pngbarn_14.png");
  db.subtract(`pcoin_${message.guild.id}_${user.id}`, 500)
  message.channel.send(Embed3)
}else if(args[0] == 'famas') {
  let Embed5 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما قبلا اسلحه **.FAMAS.** را خریده بودید  **|** <:x_:778316309050032149>    `);

  let green2colore = await db.fetch(`mp5_${message.guild.id}_${user.id}`)

  if (green2colore > 0) return message.channel.send(Embed5)
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(" برای خرید اسلحه **.FAMAS.** نیاز به **.500.** پیکوین دارید  **|** <:x_:778316309050032149>   ");

  if (author < 500) return message.channel.send(Embed2)
 
  db.fetch(`famas_${message.guild.id}_${user.id}`)
  db.set(`famas_${message.guild.id}_${user.id}`, true)
  

  let Embed3 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription("شما با موفقیت **.FAMAS.** خود رو خریدی!")
  .setImage("https://cdn.discordapp.com/attachments/749123968455147542/760004528703143956/pngbarn_7.png");
  db.subtract(`pcoin_${message.guild.id}_${user.id}`, 500)
  message.channel.send(Embed3)
}else if(args[0] == 'ump') {
  let Embed5 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما قبلا اسلحه **.UMP.** را خریده بودید  **|** <:x_:778316309050032149>    `);

  let green2colore = await db.fetch(`ump_${message.guild.id}_${user.id}`)

  if (green2colore > 0) return message.channel.send(Embed5)
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(" برای خرید اسلحه **.UMP.** نیاز به **.500.** پیکوین دارید  **|** <:x_:778316309050032149>   ");

  if (author < 500) return message.channel.send(Embed2)
 
  db.fetch(`ump_${message.guild.id}_${user.id}`)
  db.set(`ump_${message.guild.id}_${user.id}`, true)
  

  let Embed3 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription("شما با موفقیت **.UMP.** خود رو خریدی!")
  .setImage("https://cdn.discordapp.com/attachments/749123968455147542/760821216315047976/hiclipart.com_5.png");
  db.subtract(`pcoin_${message.guild.id}_${user.id}`, 500)
  message.channel.send(Embed3)
}else if(args[0] == 'desert-eagle') {
  let Embed5 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما قبلا اسلحه **.Desert Eagle.** را خریده بودید  **|** <:x_:778316309050032149>    `);

  let green2colore = await db.fetch(`desert-eagle_${message.guild.id}_${user.id}`)

  if (green2colore > 0) return message.channel.send(Embed5)
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(" برای خرید اسلحه **.Desert Eagle.** نیاز به **.500.** پیکوین دارید  **|** <:x_:778316309050032149>   ");

  if (author < 500) return message.channel.send(Embed2)
 
  db.fetch(`desert-eagle_${message.guild.id}_${user.id}`)
  db.set(`desert-eagle_${message.guild.id}_${user.id}`, true)
  

  let Embed3 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription("شما با موفقیت **.Desert Eagle.** خود رو خریدی!")
  .setImage("https://cdn.discordapp.com/attachments/749123968455147542/760823963294236682/Daco_1250105.png");
  db.subtract(`pcoin_${message.guild.id}_${user.id}`, 500)
  message.channel.send(Embed3)
}else if(args[0] == 'p90') {
  let Embed5 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما قبلا اسلحه **.P90.** را خریده بودید  **|** <:x_:778316309050032149>    `);

  let green2colore = await db.fetch(`p90_${message.guild.id}_${user.id}`)

  if (green2colore > 0) return message.channel.send(Embed5)
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(" برای خرید اسلحه **.P90.** نیاز به **.500.** پیکوین دارید  **|** <:x_:778316309050032149>   ");

  if (author < 500) return message.channel.send(Embed2)
 
  db.fetch(`p90_${message.guild.id}_${user.id}`)
  db.set(`p90_${message.guild.id}_${user.id}`, true)
  

  let Embed3 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription("شما با موفقیت **.P90.** خود رو خریدی!")
  .setImage("https://cdn.discordapp.com/attachments/749123968455147542/760823002668597265/pngegg_1.png");
  db.subtract(`pcoin_${message.guild.id}_${user.id}`, 500)
  message.channel.send(Embed3)
}else if(args[0] == 'colt1911') {
  let Embed5 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما قبلا اسلحه **.colt1911.** را خریده بودید  **|** <:x_:778316309050032149>    `);

  let green2colore = await db.fetch(`colt1911_${message.guild.id}_${user.id}`)

  if (green2colore > 0) return message.channel.send(Embed5)
  let Embed2 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(" برای خرید اسلحه **.colt1911.** نیاز به **.500.** پیکوین دارید  **|** <:x_:778316309050032149>   ");

  if (author < 500) return message.channel.send(Embed2)
 
  db.fetch(`colt1911_${message.guild.id}_${user.id}`)
  db.set(`colt1911_${message.guild.id}_${user.id}`, true)
  

  let Embed3 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription("شما با موفقیت **.colt1911.** خود رو خریدی!")
  .setImage("https://cdn.discordapp.com/attachments/749123968455147542/760819457810759700/hiclipart.com_1.png");
  db.subtract(`pcoin_${message.guild.id}_${user.id}`, 500)
  message.channel.send(Embed3)
}

}
  module.exports.help = {
    name:"buy-gun",
    aliases: [""]
  }