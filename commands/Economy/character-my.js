const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  

  let user = message.mentions.members.first() || message.author;

  const member = message.mentions.members.last() || message.member;

let char1 = await db.fetch(`salah_${message.guild.id}_${user.id}`)
let char2 = await db.fetch(`johansen_${message.guild.id}_${user.id}`)
let char3 = await db.fetch(`alexander_${message.guild.id}_${user.id}`)
let char4 = await db.fetch(`eric_${message.guild.id}_${user.id}`)
let char5 = await db.fetch(`richard_${message.guild.id}_${user.id}`)
let char6 = await db.fetch(`barbara_${message.guild.id}_${user.id}`)
let char7 = await db.fetch(`susan_${message.guild.id}_${user.id}`)
let char8 = await db.fetch(`atan_${message.guild.id}_${user.id}`)
let char9 = await db.fetch(`david_${message.guild.id}_${user.id}`)
let chardeveloper = await db.fetch(`bd_${user.id}`)

    if(chardeveloper === null) character = 'https://cdn.discordapp.com/attachments/749123968455147542/760036649534357525/pngwave_12.png'
    if(char1=== null) character = 'https://cdn.discordapp.com/attachments/749123968455147542/760036649534357525/pngwave_12.png'
    if(char2 === null) character = 'https://cdn.discordapp.com/attachments/749123968455147542/760036649534357525/pngwave_12.png'
    if(char3 === null) character = 'https://cdn.discordapp.com/attachments/749123968455147542/760036649534357525/pngwave_12.png'
    if(char4 === null) character = 'https://cdn.discordapp.com/attachments/749123968455147542/760036649534357525/pngwave_12.png'
    if(char5 === null) character = 'https://cdn.discordapp.com/attachments/749123968455147542/760036649534357525/pngwave_12.png'
    if(char6 === null) character = 'https://cdn.discordapp.com/attachments/749123968455147542/760036649534357525/pngwave_12.png'
    if(char7 === null) character = 'https://cdn.discordapp.com/attachments/749123968455147542/760036649534357525/pngwave_12.png'
    if(char8 === null) character = 'https://cdn.discordapp.com/attachments/749123968455147542/760036649534357525/pngwave_12.png'
    if(char9 === null) character = 'https://cdn.discordapp.com/attachments/749123968455147542/760036649534357525/pngwave_12.png'

    if(char1 === true) character = 'https://cdn.discordapp.com/attachments/749123968455147542/760011801994723348/pngwave_7.png'
    if(char2 === true) character = 'https://cdn.discordapp.com/attachments/749123968455147542/760011816033452053/pngwave_5.png'
    if(char3 === true) character = 'https://cdn.discordapp.com/attachments/749123968455147542/760011791077474344/pngwave_8.png'
    if(char4 === true) character = 'https://cdn.discordapp.com/attachments/749123968455147542/760011831292067840/pngwave_6.png'
    if(char5 === true) character = 'https://cdn.discordapp.com/attachments/749123968455147542/760037427284148224/pngwave_10.png'
    if(char6 === true) character = 'https://cdn.discordapp.com/attachments/749123968455147542/760037406602035200/pngwave_9.png'
    if(char7 === true) character = 'https://cdn.discordapp.com/attachments/749123968455147542/760037783955570708/pngwave_14.png'
    if(char8 === true) character = 'https://cdn.discordapp.com/attachments/749123968455147542/760012666781171742/pngwave_2.png'
    if(char9 === true) character = 'https://cdn.discordapp.com/attachments/749123968455147542/760021784392761355/Untitled-1.png'
    if(chardeveloper === true) character = 'https://cdn.discordapp.com/attachments/749123968455147542/760012847467069490/pngwave_1.png'



    if(char1 === null) color = '#210707'
    if(char1 === true) color = '#122d0f'
    if(char2 === true) color = '#3b90ac'
    if(char3 === true) color = '#29412b'
    if(char4 === true) color = '#412929'
    if(char5 === true) color = '#8a1010'
    if(char6 === true) color = '#07033c'
    if(char7 === true) color = '#df0002'
    if(char8 === true) color = '#c0a800'
    if(char9 === true) color = '#df2b00'
    if(chardeveloper === true) color = '#3193b2'



    if(char1 === null) name = 'Mat'
    if(char1 === true) name = 'Salah'
    if(char2 === true) name = 'Johansen'
    if(char3 === true) name = 'Alexander'
    if(char4 === true) name = 'Eric'
    if(char5 === true) name = 'Richard'
    if(char6 === true) name = 'Barbara'
    if(char7 === true) name = 'Susan'
    if(char8 === true) name = 'Atan'
    if(char9 === true) name = 'David'
    if(chardeveloper === true) name = 'Paraffin'

    
    if(char1 === null) power = '55'
    if(char1 === true) power = '60'
    if(char2 === true) power = '65'
    if(char3 === true) power = '70'
    if(char4 === true) power = '75'
    if(char5 === true) power = '80'
    if(char6 === true) power = '85'
    if(char7 === true) power = '90'
    if(char8 === true) power = '95'
    if(char9 === true) power = '100'
    if(chardeveloper === true) power = '150'

    let charactere = new Discord.MessageEmbed()

  .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512}))
  .setColor(`${color}`)
  .setDescription(`**کارکتر** ${user} \n\n **نام **: ${name} \n\n **قدرت **: ${power}`)
 .setImage(`${character}`)
  message.channel.send(charactere)
};

module.exports.help = {
  name:"character",
  aliases: [""]
}
