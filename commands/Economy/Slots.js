const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const slotItems = ["<:Grape:618765748940177421>", "<:Watermelon:618765904318038027>", "<:Orange:618765805596835880>", "<:Apple:618765871862513695>", "<:7_:618765717499805706>", "<:Strawberry:618765828929617930>", "<:Cherry:618765778094784513>"];

module.exports.run = async (bot, message, args) => {
  

 
  let timeout = 5000;
  
 
  let moneydb = await db.fetch(`pcoin_${message.guild.id}_${message.author.id}`)
  let money = parseInt(args[0]);
  let win = false;
  let weekly = await db.fetch(`slots_${message.author.id}`);

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
  
    let timeEmbed = new Discord.MessageEmbed()
     .setColor("#f2ecec")
     .setDescription(`شما همین الان قمار کردید   **|** <:x_:778316309050032149>     
     \n\n ${time.hours}h ${time.minutes}m ${time.seconds}s دیگر میتوانید قمار کنید`);
    message.channel.send(timeEmbed)
  } else {
    let moneymore = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`شما ${args[0]} پیکوین در کیف پولی خود ندارید  **|** <:x_:778316309050032149>    `)
    .addField(`اگر فکر میکنید که پیکوین خود را در پی بانک گذاشتید این دستور را بزنید`, `p?take ${args[0]}`);

    let moneyhelp = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(` لطفا مبلغ را وارد کنید   **|** <:x_:778316309050032149>    `);

    if (!money) return message.channel.send(moneyhelp);
    if (money > moneydb) return message.channel.send(moneymore);

    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[1] == number[0] && number[17] == number[0]) { 
        money *= 2
        win = true;
    } else if (number[0] == number[1] || number[0] == number[5] || number[14] == number[0]) { 
        money *= 2
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/780138062578712646.png?v=1")
            .setDescription(`\nتبریک میگم شما  **.${money}.** پیکوین را بردید <:tik:780138062578712646>`)
            .addField("شما خیلی خوش شانس هستید دوباره قمار کنید و پیکوین خود را باز دوبرابر کنید <:emoji:778595734765174825> ", `p?slots ${money}`)
            .setColor("#f2ecec")
        message.channel.send(slotsEmbed1)
        db.set(`slots_${message.author.id}`, Date.now())
        db.add(`pcoin_${message.guild.id}_${message.author.id}`, money)
    } else {
        let slotsEmbed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/emojis/778316309050032149.png?v=1")
            .setDescription(`\nمتاسفانه شما  **.${money}.** پیکوین را باختید <:x_:778316309050032149>`)
            .addField("ولی شما میتونید با یک قمار دیگه باخت خودتون رو جبران کنید <:emoji:778595734765174825> ", `p?slots ${money*2}`)
            .setColor("#f2ecec")
        message.channel.send(slotsEmbed)
        db.subtract(`pcoin_${message.guild.id}_${message.author.id}`, money)
    }

  }
};


module.exports.help = {
  name:"slots",
  aliases: [""]
}