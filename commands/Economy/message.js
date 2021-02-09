const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  

  let user = message.mentions.members.first() || message.author;

  let money = await db.fetch(`pcoin_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let vote = await db.fetch(`vote_${user.id}`)
  if (vote === null) vote = 0;

  let colorred = await db.fetch(`red_${user.id}`)
  let colorblue = await db.fetch(`blue_${user.id}`)
  let colorgreen = await db.fetch(`green_${user.id}`)
  let colorblack = await db.fetch(`black_${user.id}`)
  let colorwhite = await db.fetch(`white_${user.id}`)
  let colorpur = await db.fetch(`pur_${user.id}`)
  let coloror = await db.fetch(`or_${user.id}`)
  let coloryel = await db.fetch(`yel_${user.id}`)
  let colorrealm = await db.fetch(`realmcolor_${user.id}`)
  let colorpers = await db.fetch(`perscolor_${user.id}`)
  let coloreste = await db.fetch(`estcolor_${user.id}`)
  let colorjuve = await db.fetch(`juvecolor_${user.id}`)
  let colorbarca = await db.fetch(`barcacolor_${user.id}`)
  let colordb = await db.fetch(`bd_${user.id}`)
    if(colorred === null) color = 'RANDOM'
    if(colorblue === true) color = '#0005ff'
    if(colorgreen === true) color = '#167100'
    if(coloryel === true) color = '#fdff00'
    if(colorpur === true) color = '#7a00ff'
    if(coloror === true) color = '#ff7500'
    if(colorred === true) color = '#ff0000'
    if(colorblack === true) color = '#030303'
    if(colorrealm === true) color = '#dcdad6'
    if(colorpers === true) color = '#ff0021'
    if(coloreste === true) color = '#0020ff'
    if(colorjuve === true) color = '#09090b'
    if(colorbarca === true) color = '#770a0a'
    if(colorwhite === true) color = '#faf8f8'
   
    if(colordb === true) color = '#f2ecec'

    
let wall1 = await db.fetch(`#001w_${user.id}`)
let wall2 = await db.fetch(`#002w_${user.id}`)
let wall3 = await db.fetch(`#003w_${user.id}`)

let wall5 = await db.fetch(`#005w_${user.id}`)
let wall6 = await db.fetch(`#006w_${user.id}`)
let wall7 = await db.fetch(`#007w_${user.id}`)
let wall8 = await db.fetch(`#008w_${user.id}`)
let wall9 = await db.fetch(`#009w_${user.id}`)
let wall10 = await db.fetch(`#010w_${user.id}`)
let wallpe = await db.fetch(`persw_${user.id}`)
let walles = await db.fetch(`estw_${user.id}`)
let wallrealm = await db.fetch(`realmw_${user.id}`)
let walljuve = await db.fetch(`juvew_${user.id}`)
let wallbarc = await db.fetch(`barcaw_${user.id}`)
let walldeveloper = await db.fetch(`bd_${user.id}`)

    if(wall1=== null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(walldeveloper === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(wall2 === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(walljuve === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(wallbarc === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(wall5 === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(wall6 === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(wall7 === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(wall8 === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(wall9 === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(wall10 === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(wallpe === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(walles === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(wallrealm === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'

    if(wall1 === true) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/749085987761684550/Stars_1.jpg'
    if(wall2 === true) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/749101179480440914/29dee2294baaa21998ced7b496ad8267.jpg'
    if(wall3 === true) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/749101184383451176/thumb2-4k-cristiano-ronaldo-2020-juventus-fc-goal.jpg'
    if(wall5 === true) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/749085905314381835/concerto-test.jpg'
    if(wall6 === true) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/750610281045950604/TheVoid.jpg'
    if(wall7 === true) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/750610226822119425/floating-astronaut-colorful-nebula-dreamy-orange-two-paths-space.jpeg'
    if(wall8 === true) wallpaper = 'https://cdn.discordapp.com/attachments/749123968455147542/759812889996820490/Californias-IoT-Law.-The-First-State-to-Protect-IoT-Devices-from-Hackers-700x475.jpeg'
    if(wall9 === true) wallpaper = 'https://cdn.discordapp.com/attachments/749123968455147542/759814748870148146/325138.png'
    if(wall10 === true) wallpaper = 'https://cdn.discordapp.com/attachments/749123968455147542/759814609279516693/classy-cool-wallpapers-for-desktop-39.jpg'
    if(wallpe === true) wallpaper = 'https://cdn.discordapp.com/attachments/749123968455147542/759787792652959744/thumb2-shoja-khalilzadeh-4k-iranian-footballers-persepolis-fc-soccer.jpg'
    if(walles === true) wallpaper = 'https://cdn.discordapp.com/attachments/749123968455147542/759787973734039592/mehdi-ghayedi-2020-iranian-footballers-esteghlal-fc-soccer.jpg'
    if(walljuve === true) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/749101272241537104/wp5983027.jpg'
    if(wallrealm === true) wallpaper = 'https://cdn.discordapp.com/attachments/749123968455147542/759787772826484756/thumb2-4k-eden-hazard-belgian-footballers-2019-real-madrid-fc.jpg'
    if(wallbarc === true) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/749101272241537104/wp5983027.jpg'
    
    if(walldeveloper === true) wallpaper = 'https://cdn.discordapp.com/attachments/749123968455147542/758030523317878875/bandicam_2020-09-23_09-52-42-240.jpg'


let m1 = await db.fetch(`medal1_${user.id}`)
let m2 = await db.fetch(`medal2_${user.id}`)
let m3 = await db.fetch(`medal3_${user.id}`)
let mpers = await db.fetch(`persm_${user.id}`)
let mest = await db.fetch(`estm_${user.id}`)
let mjuve = await db.fetch(`juvem_${user.id}`)
let mrealm = await db.fetch(`realmm_${user.id}`)
let mbarca = await db.fetch(`barcam_${user.id}`)
let mbh = await db.fetch(`mbh_${user.id}`)
let mprt = await db.fetch(`mprt_${user.id}`)
let mbd = await db.fetch(`bd_${user.id}`)

    if(m3 === null) medal3 = ''
    if(m2 === null) medal2 = '' 
    if(m1 === null) medal1 = ''
    if(mbd === null) medalbd = ''
    if(mpers === null) mpers = ''
    if(mest === null) mest = ''
    if(mjuve === null) mjuve = ''
    if(mrealm === null) mrealm = ''
    if(mbarca === null) mbarca = ''
    if(mbh === null) medalbh = ''
    if(mprt === null) medalprt = ''
    if(mbd === null) medalbd = ''

    if(m1 === true) medal1 = ' <a:m1:750315651830382673> **|**'
    if(m2 === true) medal2 = ' <a:m2:750315657773449316> **|**'
    if(m3 === true) medal3 = ' <a:m3:750315691990843422> **|**'
    if(mpers === true) mpers = ' <:perspolis:759791259148615701> **|**'
    if(mest === true) mest = ' <:esteghlal:759812389885182012> **|**'
    if(mjuve === true) mjuve = ' <:juve:759791264429637662> **|**'
    if(mrealm === true) mrealm = ' <:realmadrid:759791266652487750> **|**'
    if(mbarca === true) mbarca = ' <:barcelona:759791287720214538> **|**'
    if(mbh === true) medalbh = '<:theParaffinlogo:778851015445315614> **|**'
    if(mprt === true) medalprt = '<:par:750306197445410866> **|**'
    if(mbd === true) medalbd = '<:theParaffinlogo:778851015445315614> **|**'


  let vip1 = await db.fetch(`vipl1_${user.id}`)
  let vip2 = await db.fetch(`vipl2_${user.id}`)
  let vip3 = await db.fetch(`vipl3_${user.id}`)
  let vip4 = await db.fetch(`vipl4_${user.id}`)
  let vip5 = await db.fetch(`vipl5_${user.id}`)
  let vip6 = await db.fetch(`vipl6_${user.id}`)
  let bh = await db.fetch(`bh_${user.id}`)
  let prt = await db.fetch(`prt_${user.id}`)
  let developer = await db.fetch(`bd_${user.id}`)
    if(vip1 === null) rank = 'ممبر ساده  <:emoji:778595734765174825> '
    if(vip1 === true) rank = 'ممبر وی آی پی لول 1 <:vip1:778704122319994910>  '
    if(vip2 === true) rank = 'ممبر وی آی پی لول 2 <:vip2:778704129882062908>  '
    if(vip3 === true) rank = '3 ممبر وی آی پی لول <:vip3:778704130654732328>   '
    if(vip4 === true) rank = 'ممبر وی آی پی لول 4 <:vip4:778704131862298634>  '
    if(vip5 === true) rank = 'ممبر وی آی پی لول 5 <:vip5:778704160748339261>  '
    if(vip6 === true) rank = 'ممبر وی آی پی لول 6 <:vip6:778704166918553640>   '
    
    if(bh === true) rank = '<:theParaffinlogo:778851015445315614> Technician'
    if(prt === true) rank = '<:par:750306197445410866> IE PARTNER '
    if(developer === true) rank = '<:theParaffinlogo:778851015445315614> IE DEVELOPER'
    

  let messagefetch = db.fetch(`messages_${message.guild.id}_${user.id}`)
  if(messagefetch == null) messagefetch = '0';

  let levelfetch = db.fetch(`level_${message.guild.id}_${user.id}`)
  if(levelfetch == null) levelfetch = '0';

  let newcars = await db.fetch(`newcars_${message.guild.id}_${user.id}`)
  if(newcars === null) newcars = '0'

  const member = message.mentions.members.last() || message.member;

  let profile = new Discord.MessageEmbed()

  
  .setColor(`${color}`)
  .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512}))
  .setDescription(`**تعداد پیام های ارسالی ${user}**`)

  .addField(`<:level:778138052987715594>   لول: `, `${levelfetch}`, true)
  .addField("<:msg:778138053193367562>  تعداد مسیج های ارسالی:", `${messagefetch}`, true)

  message.channel.send(profile)
};

module.exports.help = { 
  name:"message",
  aliases: ["msg"]
}
