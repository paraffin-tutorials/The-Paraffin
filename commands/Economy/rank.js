const math = require('mathjs')
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
  let customcolor = await db.fetch(`customcrank_${user.id}`) || '#faf8f8'
    if(colorred === null) color = 'faf8f8'
    
    if(colordb === true) color = customcolor
    if(colorblue === true) color = '0005ff'
    if(colorgreen === true) color = '167100'
    if(coloryel === true) color = 'fdff00'
    if(colorpur === true) color = '7a00ff'
    if(coloror === true) color = 'ff7500'
    if(colorred === true) color = 'ff0000'
    if(colorblack === true) color = '030303'
    if(colorrealm === true) color = 'dcdad6'
    if(colorpers === true) color = 'ff0021'
    if(coloreste === true) color = '0020ff'
    if(colorjuve === true) color = '09090b'
    if(colorbarca === true) color = '770a0a'
    if(colorwhite === true) color = 'faf8f8'
   

  let vip1 = await db.fetch(`vipl1_${user.id}`)
  let vip2 = await db.fetch(`vipl2_${user.id}`)
  let vip3 = await db.fetch(`vipl3_${user.id}`)
  let vip4 = await db.fetch(`vipl4_${user.id}`)
  let vip5 = await db.fetch(`vipl5_${user.id}`)
  let vip6 = await db.fetch(`vipl6_${user.id}`)
  let bh = await db.fetch(`bh_${user.id}`)
  let prt = await db.fetch(`prt_${user.id}`)
  let developer = await db.fetch(`bd_${user.id}`)
    if(vip1 === null) rank = 'Member'
    if(vip1 === true) rank = 'VIP 1'
    if(vip2 === true) rank = 'VIP 2'
    if(vip3 === true) rank = 'VIP 3'
    if(vip4 === true) rank = 'VIP 4'
    if(vip5 === true) rank = 'VIP 5'
    if(vip6 === true) rank = 'VIP 6'
    
    if(bh === true) rank = 'Technician'
    if(prt === true) rank = 'PARTNER '
    if(developer === true) rank = 'DEVELOPER'
    
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
    let customwallpaper = await db.fetch(`customwrank_${user.id}`) || 'https://dynamic.brandcrowd.com/asset/logo/af6ee65c-c9a1-4758-8a7b-b181cbdeb807/logo?v=4&text=custom+wallpaper'
    
        if(wall1=== null) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778107284555038730/bandicam_2020-11-17_07-30-19-229.jpg'
        if(walldeveloper === null) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778107284555038730/bandicam_2020-11-17_07-30-19-229.jpg'
        if(wall2 === null) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778107284555038730/bandicam_2020-11-17_07-30-19-229.jpg'
        if(walljuve === null) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778107284555038730/bandicam_2020-11-17_07-30-19-229.jpg'
        if(wallbarc === null) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778107284555038730/bandicam_2020-11-17_07-30-19-229.jpg'
        if(wall3 === null) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778107284555038730/bandicam_2020-11-17_07-30-19-229.jpg'
        if(wall4 === null) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778107284555038730/bandicam_2020-11-17_07-30-19-229.jpg'
        if(wall5 === null) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778107284555038730/bandicam_2020-11-17_07-30-19-229.jpg'
        if(wall6 === null) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778107284555038730/bandicam_2020-11-17_07-30-19-229.jpg'
        if(wall7 === null) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778107284555038730/bandicam_2020-11-17_07-30-19-229.jpg'
        if(wall8 === null) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778107284555038730/bandicam_2020-11-17_07-30-19-229.jpg'
        if(wall9 === null) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778107284555038730/bandicam_2020-11-17_07-30-19-229.jpg'
        if(wall10 === null) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778107284555038730/bandicam_2020-11-17_07-30-19-229.jpg'
        if(wallpe === null) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778107284555038730/bandicam_2020-11-17_07-30-19-229.jpg'
        if(walles === null) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778107284555038730/bandicam_2020-11-17_07-30-19-229.jpg'
        if(wallrealm === null) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778107284555038730/bandicam_2020-11-17_07-30-19-229.jpg'
    
        
        if(wall1 === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(wall2 === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(wall3 === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(wall4 === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(wall5 === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(wall6 === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(wall7 === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(wall8 === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(wall9 === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(wall10 === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(wallpe === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(walles === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(wallpubge === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(wallat === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(wallwow === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(wallpsg === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(wallmilan === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(wallmanc === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(wallliv === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(wallfifa === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(wallpes === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(wallcod === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(walljuve === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(wallrealm === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(wallbarc === true) wallpaper = 'https://cdn.discordapp.com/attachments/771946788995072040/778148081883283467/rankcard2.jpg'
        if(walldeveloper === true) wallpaper = customwallpaper

        
  let messagefetch = db.fetch(`messages_${message.guild.id}_${user.id}`)
  if(messagefetch == null) messagefetch = '0';

  let levelfetch = db.fetch(`level_${message.guild.id}_${user.id}`)
  if(levelfetch == null) xp = '0';


     let resp = math.evaluate(`${messagefetch}-${levelfetch*1000}`);
   
  const member = message.mentions.members.last() || message.member;


    const card = `https://vacefron.nl/api/rankcard?username=${encodeURIComponent(member.user.username)}&avatar=${member.user.displayAvatarURL({ dynamic: true, size: 512})}&level=${levelfetch}&rank=${rank}&currentxp=${resp}&nextlevelxp=1000&previouslevelxp=1&custombg=${wallpaper}&xpcolor=${color}&isboosting=false`
  
    message.channel.send({
        files: [{
          attachment: card,
          name: 'Paraffin-Rank-Card.jpg'
        }]
      })
        .catch(console.error);
};

module.exports.help = { 
  name:"rank",
  aliases: [""]
}
