const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const { random } = require("mathjs");

module.exports.run = async (bot, message, args) => {
  
let member11 = message.member;
let member22 = message.mentions.members.first();
let user = message.mentions.members.first();
let targetuser = await db.fetch(`pcoin_${message.guild.id}_${user.id}`)
let author = await db.fetch(`rob_${message.guild.id}_${message.author.id}`)
let author2 = await db.fetch(`pcoin_${message.guild.id}_${user.id}`)

let mention = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`شما نمی توانید از خود دزدی کنید  **|** <:x_:778316309050032149>    `);

if(member11 == member22) {
 message.channel.send(mention);
} else {





let timeout2 = 86400000;
let weekly = await db.fetch(`${user.id}_anti-rob`);
if (weekly !== null && timeout2 - (Date.now() - weekly) > 0) {

  let timeEmbed = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شخص مورد نظر آیتم ضد دزدی دارد **|** <:x_:778316309050032149>    `);
  
  message.channel.send(timeEmbed)
} else {try {


if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));

    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#f2ecec")
    .setDescription(`همین الان دزدی صورت گرفته و شما قادر به دزدی دیگر را تا ${time.hours}h ${time.minutes}m ${time.seconds}s ساعت دیگر را ندارید  **|** <:x_:778316309050032149>    `);
    
    message.channel.send(timeEmbed)
  } else {

let moneyEmbed = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`.${args[0]}. **.1.** پیکوین ندارد  **|** <:x_:778316309050032149>    `)
.addField("اگر پیکوین لازم را ندارید از این دستور استفاده کنید", "`p?makepcoin`");

if (author2 < 1) {
    return message.channel.send(moneyEmbed)

}
let moneyEmbed2 = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`شما حداقل نیاز به **.1.** پیکوین برای حمله به یک ممبر دیگر دارید  **|** <:x_:778316309050032149>    `)
.addField("اگر پیکوین لازم را ندارید از این دستور استفاده کنید", "`p?makepcoin`");

if (targetuser < 1) {
    return message.channel.send(moneyEmbed2)
}


let pcoin = await db.fetch(`pcoin_${message.guild.id}_${user.id}`)
  if (pcoin === null) pcoin = 0;


let vip1 = await db.fetch(`vipl1_${message.author.id}`)
let vip22 = await db.fetch(`vipl2_${message.author.id}`)
let vip33 = await db.fetch(`vipl3_${message.author.id}`)
let vip44 = await db.fetch(`vipl4_${message.author.id}`)
let vip55 = await db.fetch(`vipl5_${message.author.id}`)
let vip66 = await db.fetch(`vipl6_${message.author.id}`)
let vip77 = await db.fetch(`vipl7_${message.author.id}`)
let vipd1b = await db.fetch(`bd_${message.author.id}`)

if (vip1 === null) random1 = Math.floor(Math.random() + 300) + 1;
if(vip1 === true) random1 = Math.floor(Math.random() + 300) + 10;
if(vip22 === true) random1 = Math.floor(Math.random() + 300) + 20;
if(vip33 === true) random1 = Math.floor(Math.random() + 300) + 30;
if(vip44 === true) random1 = Math.floor(Math.random() + 300) + 50;
if(vip55 === true) random1 = Math.floor(Math.random() + 300) + 80;
if(vip66 === true) random1 = Math.floor(Math.random() + 300) + 100;
if(vip77 === true) random1 = Math.floor(Math.random() + 300) + 200;
if(vipd1b === true) random1 = Math.floor(Math.random() + 300) + 500;

let embed = new Discord.MessageEmbed()
.setDescription(`شما دزدی کردید از ${user} و **.${random1}.** پیکوین دزدیدید **|** <:tik:780138062578712646> `)
 .setColor("#f2ecec")
message.channel.send(embed)
db.subtract(`pcoin_${message.guild.id}_${user.id}`, random1)
db.add(`pcoin_${message.guild.id}_${message.author.id}`, random1)

db.set(`rob_${message.guild.id}_${message.author.id}`, Date.now())
  
}} catch (e) {
}
}}}

module.exports.help = {
  name: "rob",
  aliases: [""]
}