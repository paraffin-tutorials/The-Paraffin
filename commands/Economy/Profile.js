const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  

  let user = message.mentions.members.first() || message.author;

  let money = await db.fetch(`pcoin_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

  let bank = await db.fetch(`bank_${user.id}`)
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
  let customcolor = await db.fetch(`customc_${user.id}`) || '#faf8f8'
    if(colorred === null) color = 'RANDOM'
    
    if(colordb === true) color = customcolor
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
   
let wall1 = await db.fetch(`#001w_${user.id}`)
let wall2 = await db.fetch(`#002w_${user.id}`)
let wall3 = await db.fetch(`#003w_${user.id}`)
let wall4 = await db.fetch(`#004w_${user.id}`)
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

let wallat = await db.fetch(`atleticomadridw_${user.id}`)
let wallwow = await db.fetch(`wowww_${user.id}`)
let wallpsg = await db.fetch(`psgw_${user.id}`)
let wallmilan = await db.fetch(`milanw_${user.id}`)
let wallmanc = await db.fetch(`mancityw_${user.id}`)
let wallliv = await db.fetch(`liverpoolw_${user.id}`)
let wallcod = await db.fetch(`codw_${user.id}`)
let wallpes = await db.fetch(`pesw_${user.id}`)
let wallfifa = await db.fetch(`fifaw_${user.id}`)
let wallpubge = await db.fetch(`pubgw_${user.id}`)
let walldeveloper = await db.fetch(`bd_${user.id}`)
let customwallpaper = await db.fetch(`customw_${user.id}`) || 'https://dynamic.brandcrowd.com/asset/logo/af6ee65c-c9a1-4758-8a7b-b181cbdeb807/logo?v=4&text=custom+wallpaper'

    if(wall1=== null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(walldeveloper === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(wall2 === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(walljuve === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(wallbarc === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(wall3 === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(wall4 === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(wall5 === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(wall6 === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(wall7 === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(wall8 === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(wall9 === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(wall10 === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(wallpe === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(walles === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'
    if(wallrealm === null) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/751760086036381787/1_96QTHkf1C0iz-F9zxH_x3A.png'

    if(walldeveloper === true) wallpaper = customwallpaper
    if(wall1 === true) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/749085987761684550/Stars_1.jpg'
    if(wall2 === true) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/749101179480440914/29dee2294baaa21998ced7b496ad8267.jpg'
    if(wall3 === true) wallpaper = 'https://i.pinimg.com/originals/4f/50/38/4f503844d9a44b0350c25eeefae028d3.jpg'
    if(wall4 === true) wallpaper = 'https://newevolutiondesigns.com/images/freebies/cool-4k-wallpaper-1.jpg'
    if(wall5 === true) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/749085905314381835/concerto-test.jpg'
    if(wall6 === true) wallpaper = 'https://cdn.discordapp.com/attachments/760765093075484672/771377804067471360/fortnite-battle-bus-3760.webp'
    if(wall7 === true) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/750610226822119425/floating-astronaut-colorful-nebula-dreamy-orange-two-paths-space.jpeg'
    if(wall8 === true) wallpaper = 'https://cdn.discordapp.com/attachments/749123968455147542/759812889996820490/Californias-IoT-Law.-The-First-State-to-Protect-IoT-Devices-from-Hackers-700x475.jpeg'
    if(wall9 === true) wallpaper = 'https://cdn.discordapp.com/attachments/749123968455147542/759814748870148146/325138.png'
    if(wall10 === true) wallpaper = 'https://cdn.discordapp.com/attachments/749123968455147542/759814609279516693/classy-cool-wallpapers-for-desktop-39.jpg'
    if(wallpe === true) wallpaper = 'https://besthqwallpapers.com/Uploads/15-5-2019/92113/thumb-jalal-hosseini-iranian-footballers-persepolis-fc-soccer-persian-gulf-pro-league.jpg'
    if(walles === true) wallpaper = 'https://cdn.discordapp.com/attachments/749123968455147542/759787973734039592/mehdi-ghayedi-2020-iranian-footballers-esteghlal-fc-soccer.jpg'
    if(wallpubge === true) wallpaper = ' https://pluc.tv/wp-content/uploads/2020/09/144028-games-feature-pubg-image1-zkpdntqgbc.jpg'
    if(wallat === true) wallpaper = 'https://wallpapercave.com/wp/1OROQXm.jpg'
    if(wallwow === true) wallpaper = 'https://i.imgur.com/nUVMyf1.jpg'
    if(wallpsg === true) wallpaper = 'https://wallpapercave.com/wp/wp6015129.jpg'
    if(wallmilan === true) wallpaper = 'https://www.soccerbible.com/media/113069/milan-2-min.jpg'
    if(wallmanc === true) wallpaper = 'https://2.bp.blogspot.com/-PQGX94pm5Rg/XxAALhzkCaI/AAAAAAACXtw/Kfoeqxy-0okl_UwlI6opHMiV23kpPlYVQCLcBGAsYHQ/s738/manchester-city-20-21-home-kit-3.jpg'
    if(wallliv === true) wallpaper = 'https://besthqwallpapers.com/Uploads/1-10-2020/142494/thumb2-mohamed-salah-liverpool-fc-egyptian-footballer-liverpool-2021-uniforms-soccer.jpg'
    if(wallfifa === true) wallpaper = 'https://talksport.com/wp-content/uploads/sites/5/2020/09/FIFA21STANDARDEDITION10.jpeg?strip=all&w=960&quality=100'
    if(wallpes === true) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/771658323049054218/3725793-pes.jfif.jpg'
    if(wallcod === true) wallpaper = 'https://cdn.discordapp.com/attachments/780103310190444544/780498112799571968/2_5350787862151301901.jpg'
    if(walljuve === true) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/771658294267084811/maillot-domicile-juventus-2020-2021-img5.jpg'
    if(wallrealm === true) wallpaper = 'https://cdn.discordapp.com/attachments/749123968455147542/759787772826484756/thumb2-4k-eden-hazard-belgian-footballers-2019-real-madrid-fc.jpg'
    if(wallbarc === true) wallpaper = 'https://cdn.discordapp.com/attachments/747798345145122816/771656909161496616/messi-new-barcelona-kit.png'
   

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
let mat = await db.fetch(`mat_${user.id}`)
let mmwow = await db.fetch(`mwow_${user.id}`)
let mmpsg = await db.fetch(`mpsg_${user.id}`)
let mmilan = await db.fetch(`milanm_${user.id}`)
let mmanc = await db.fetch(`mcitym_${user.id}`)
let mliv = await db.fetch(`mliver_${user.id}`)
let mcod = await db.fetch(`mcallod_${user.id}`)
let mpubg = await db.fetch(`mpubg_${user.id}`)
let mpes = await db.fetch(`mpes_${user.id}`)
let mfifa = await db.fetch(`mfifa_${user.id}`)
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
    if(mmwow === null) medalwow = ''
    if(mmpsg === null) medalpsg = ''
    if(mmilan === null) medalmilan = ''
    if(mmanc === null) medalmanc = ''
    if(mliv === null) medalliv = ''
    if(mcod === null) medalcod = ''
    if(mpubg === null) medalpubg = ''
    if(mpes === null) medalpes = ''
    if(mfifa === null) medalfifa = ''
    if(mat === null) medalat = ''

    
    if(m1 === true) medal1 = ' <a:m1:750315651830382673> **|**'
    if(m2 === true) medal2 = ' <a:m2:750315657773449316> **|**'
    if(m3 === true) medal3 = ' <a:m3:750315691990843422> **|**'
    if(mpers === true) mpers = ' <:perspolis:759791259148615701> **|**'
    if(mest === true) mest = ' <:esteghlal:759812389885182012> **|**'
    if(mjuve === true) mjuve = ' <:juve:759791264429637662> **|**'
    if(mrealm === true) mrealm = ' <:realmadrid:759791266652487750> **|**'
    if(mbarca === true) mbarca = ' <:barcelona:759791287720214538> **|**'
    if(mbh === true) medalbh = ' <:theParaffinlogo:778851015445315614> **|**'
    if(mprt === true) medalprt = ' <:theParaffinlogo:778851015445315614> **|**'
    if(mmwow === true) medalwow = ' <:wow:771672750019837962> **|**'
    if(mmpsg === true) medalpsg = ' <:psg:771671884961939476> **|**'
    if(mmilan === true) medalmilan = ' <:milan:771671486288887870> **|**'
    if(mmanc === true) medalmanc = ' <:mancity:771671408275226624> **|**'
    if(mliv === true) medalliv = ' <:liv:771671114816159774> **|**'
    if(mcod === true) medalcod = ' <:cod:771673490025742346> **|**'
    if(mpubg === true) medalpubg = ' <:pubg:771672039307476992> **|**'
    if(mpes === true) medalpes = ' <:pes:771671115910610964> **|**'
    if(mfifa === true) medalfifa = ' <:EA_Sports:771674505894166528> **|**'
    if(mat === true) medalat = ' <:Atletico_Madrid:771668927457132544> **|**'
    if(mbd === true) medalbd = ' <:theParaffinlogo:778851015445315614>  **|**'


  let vip1 = await db.fetch(`vipl1_${user.id}`)
  let vip2 = await db.fetch(`vipl2_${user.id}`)
  let vip3 = await db.fetch(`vipl3_${user.id}`)
  let vip4 = await db.fetch(`vipl4_${user.id}`)
  let vip5 = await db.fetch(`vipl5_${user.id}`)
  let vip6 = await db.fetch(`vipl6_${user.id}`)
  let bh = await db.fetch(`bh_${user.id}`)
  let prt = await db.fetch(`prt_${user.id}`)
  let developer = await db.fetch(`bd_${user.id}`)
    if(vip1 === null) rank = ' <:emoji:778595734765174825> Member'
    if(vip1 === true) rank = ' <:vip1:778704122319994910>  VIP 1'
    if(vip2 === true) rank = ' <:vip2:778704129882062908>  VIP 2'
    if(vip3 === true) rank = ' <:vip3:778704130654732328>  VIP 3'
    if(vip4 === true) rank = ' <:vip4:778704131862298634>  VIP 4'
    if(vip5 === true) rank = ' <:vip5:778704160748339261>  VIP 5'
    if(vip6 === true) rank = ' <:vip6:778704166918553640>  VIP 6'
    
    if(bh === true) rank = '<:theParaffinlogo:778851015445315614> Technician'
    if(prt === true) rank = '<:theParaffinlogo:778851015445315614> PARTNER '
    if(developer === true) rank = '<:theParaffinlogo:778851015445315614> DEVELOPER'
    

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
  .setDescription(`**پروفایلِ ${user}**`)
  .addField(`<:rank:778138045454614579> رنک`, `${rank}`, true)
  .addField(`<:level:778138052987715594> لول پیام شما`, `${levelfetch}`, true)
  .addField("<:msg:778138053193367562> پیام های ارسالی", `${messagefetch}`, true)
  .addField(`<:vote:778138051926294598> رای اعتماد`, `${vote}`, true)
  .addField(`<:Pvoin:778188788522418176> پیکوین`, `${money}`, true)
  .addField(`<:Pbank:778138053197561857> بانک`, `${bank}`, true)
  .addField(`<:medal:778189281444888586> مدال های شما`, `**|** ${medalbd} ${medalprt} ${medalbh} ${mbarca} ${mrealm} ${mjuve} ${mest} ${mpers} ${medal3} ${medal2} ${medal1} `)
  .setImage(`${wallpaper}`)
  .setFooter('درخواست شده توسط | ' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
  message.channel.send(profile)
};

module.exports.help = { 
  name:"profile",
  aliases: ["pro"]
}
