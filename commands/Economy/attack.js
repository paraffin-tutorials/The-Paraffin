const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  

  let member11 = message.member;
  let member22 = message.mentions.members.first();
  let user = message.mentions.members.first()

  let mention = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما نمی توانید به خود حمله کنید  **|** <:x_:778316309050032149>    `);
  
  if(member11 == member22) {
   message.channel.send(mention);
  } else {
  
  let embed1 = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`لطفا شخص مورد نظر خودتون رو منشن کنید   **|** <:x_:778316309050032149>    `);

  if (!user) {
      return message.channel.send(embed1)
  }
  const member = message.mentions.members.last() || message.member;

let char1 = await db.fetch(`salah_${message.guild.id}_${message.author.id}`)
let char2 = await db.fetch(`johansen_${message.guild.id}_${message.author.id}`)
let char3 = await db.fetch(`alexander_${message.guild.id}_${message.author.id}`)
let char4 = await db.fetch(`eric_${message.guild.id}_${message.author.id}`)
let char5 = await db.fetch(`richard_${message.guild.id}_${message.author.id}`)
let char6 = await db.fetch(`barbara_${message.guild.id}_${message.author.id}`)
let char7 = await db.fetch(`susan_${message.guild.id}_${message.author.id}`)
let char8 = await db.fetch(`atan_${message.guild.id}_${message.author.id}`)
let char9 = await db.fetch(`david_${message.guild.id}_${message.author.id}`)
let chardeveloper = await db.fetch(`bd_${message.author.id}`)

  if(char1 === null) powermessage = '55'
  if(char1 === true) powermessage = '60'
  if(char2 === true) powermessage = '65'
  if(char3 === true) powermessage = '70'
  if(char4 === true) powermessage = '75'
  if(char5 === true) powermessage = '80'
  if(char6 === true) powermessage = '85'
  if(char7 === true) powermessage = '90'
  if(char8 === true) powermessage = '95'
  if(char9 === true) powermessage = '100'
  if(chardeveloper === true) powermessage = '150'


let char12 = await db.fetch(`salah_${message.guild.id}_${user.id}`)
let char22 = await db.fetch(`johansen_${message.guild.id}_${user.id}`)
let char32 = await db.fetch(`alexander_${message.guild.id}_${user.id}`)
let char42 = await db.fetch(`eric_${message.guild.id}_${user.id}`)
let char52 = await db.fetch(`richard_${message.guild.id}_${user.id}`)
let char62 = await db.fetch(`barbara_${message.guild.id}_${user.id}`)
let char72 = await db.fetch(`susan_${message.guild.id}_${user.id}`)
let char82 = await db.fetch(`atan_${message.guild.id}_${user.id}`)
let char92 = await db.fetch(`david_${message.guild.id}_${user.id}`)
let chardeveloper2 = await db.fetch(`bd_${user.id}`)

if(char12 === null) powermention2 = '55'
  if(char12 === true) powermention2 = '60'
  if(char22 === true) powermention2 = '65'
  if(char32 === true) powermention2 = '70'
  if(char42 === true) powermention2 = '75'
  if(char52 === true) powermention2 = '80'
  if(char62 === true) powermention2 = '85'
  if(char72 === true) powermention2 = '90'
  if(char82 === true) powermention2 = '95'
  if(char92 === true) powermention2 = '100'
  if(chardeveloper2 === true) powermention2 = '150'

  

let pcoin = await db.fetch(`pcoin_${message.guild.id}_${user.id}`)
  if (pcoin === null) pcoin = 0;

let vip1 = await db.fetch(`vipl1_${user.id}`)
let vip22 = await db.fetch(`vipl2_${user.id}`)
let vip33 = await db.fetch(`vipl3_${user.id}`)
let vip44 = await db.fetch(`vipl4_${user.id}`)
let vip55 = await db.fetch(`vipl5_${user.id}`)
let vip66 = await db.fetch(`vipl6_${user.id}`)
let vip77 = await db.fetch(`vipl7_${user.id}`)
let vipd1b = await db.fetch(`bd_${user.id}`)

if (vip1 === null) random = Math.floor(Math.random() * 500) + 10;
if(vip1 === true) random = Math.floor(Math.random() * 500) + 300;
if(vip22 === true) random = Math.floor(Math.random() * 500) + 500;
if(vip33 === true) random = Math.floor(Math.random() * 500) + 800;
if(vip44 === true) random = Math.floor(Math.random() * 500) + 1000;
if(vip55 === true) random = Math.floor(Math.random() * 500) + 1500;
if(vip66 === true) random = Math.floor(Math.random() * 500) + 2000;
if(vip77 === true) random = Math.floor(Math.random() * 500) + 3000;
if(vipd1b === true) random = Math.floor(Math.random() * 500) + 6000;

  let timeout = 86400000;

  let weekly = await db.fetch(`attacktime_${message.author.id}`);

  const power1 = powermessage;
  const power2 = powermention2;
  
  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
  
    let timeEmbed = new Discord.MessageEmbed()
     .setColor("#f2ecec")
     .setDescription(`شما همین امروز به یک نفر حمله کردید  **|** <:x_:778316309050032149>     
     \n\n ${time.hours}h ${time.minutes}m ${time.seconds}s زمان باقی مانده : `);
    message.channel.send(timeEmbed)
  } else if (power2 > power1) {
    let win = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`شما در حمله به ${user} بردید و ${random} پیکوین را به دست آوردید..`)
db.subtract(`pcoin_${message.guild.id}_${user.id}`, random)
db.add(`pcoin_${message.guild.id}_${message.author.id}`, random)
db.set(`attacktime_${message.author.id}`, Date.now())

    return message.channel.send(win)

} else if (power1 > power2) {
let lose = new Discord.MessageEmbed()
.setColor("#f2ecec")
.setDescription(`شما در حمله به ${user} باختید و ${random} پیکوین از دست دادید.`)
db.add(`pcoin_${message.guild.id}_${user.id}`, random)
db.subtract(`pcoin_${message.guild.id}_${message.author.id}`, random)
db.set(`attacktime_${message.author.id}`, Date.now())

    return message.channel.send(lose)
    
} else if (power1 === power2) {
  let lose = new Discord.MessageEmbed()
  .setColor("#f2ecec")
  .setDescription(`شما با حمله به ${user} هیچ غنیمتی به دست نیاوردید و ${random} پی کوین ضرر کردید  **|** <:tik:780138062578712646>`)
  db.subtract(`pcoin_${message.guild.id}_${user.id}`, random)
  db.subtract(`pcoin_${message.guild.id}_${message.author.id}`, random)
  db.set(`attacktime_${message.author.id}`, Date.now())
  {
      return message.channel.send(lose)
      
  }
  }}
}

module.exports.help = {
  name:"attack",
  aliases: [""]
}