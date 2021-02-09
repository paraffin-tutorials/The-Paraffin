
const ReactionMenu = require('../Information/ReactionMenu');
const { MessageEmbed } = require('discord.js');
const art = [
'https://cdn.discordapp.com/attachments/747798345145122816/747803339139579995/87275964-7c80-4a94-a643-2ef5d0d78c4f.png',
'https://cdn.discordapp.com/attachments/749123968455147542/765442042360234014/pngkey.com-balance-png-500311.png',
'https://cdn.discordapp.com/attachments/747798345145122816/747799351614505030/1024px-AK-47.png',
'https://cdn.discordapp.com/attachments/747798345145122816/747802928995106816/pngbarn_1.png',
'https://cdn.discordapp.com/attachments/749123968455147542/759811276007800862/pngbarn_5.png',
'https://cdn.discordapp.com/attachments/749123968455147542/760003373432176660/pngbarn_14.png',
'https://cdn.discordapp.com/attachments/749123968455147542/760004528703143956/pngbarn_7.png',
'https://cdn.discordapp.com/attachments/749123968455147542/760821216315047976/hiclipart.com_5.png',
'https://cdn.discordapp.com/attachments/749123968455147542/760823002668597265/pngegg_1.png',
'https://cdn.discordapp.com/attachments/749123968455147542/760819457810759700/hiclipart.com_1.png',
'https://cdn.discordapp.com/attachments/749123968455147542/760823963294236682/Daco_1250105.png',
]
  const footer = [
    "صفحه 1/11",
    "صفحه 2/11",
    "صفحه 3/11",
    "صفحه 4/11",
   "صفحه 5/11",
   "صفحه 6/11",
   "صفحه 7/11",
   "صفحه 8/11",
   "صفحه 9/11",
   "10/11 صفحه",
   "11/11 صفحه"
    ];
    
  const dis = [
   "**Scar** \n خرید : `p?buy-gun scar` ",
   "**AUG** \n خرید : `p?buy-gun aug` ",
   "**AK-47** \n خرید : `p?buy-gun ak-47` ",
   "**Kar98** \n خرید : `p?buy-gun kar98` ",
   "**M16** \n خرید : `p?buy-gun m16` ",
   "**MP5** \n خرید : `p?buy-gun mp5` ",
   "**Famas** \n خرید : `p?buy-gun famas` ",
   "**UMP** \n خرید : `p?buy-gun ump` ",
   "**P90** \n خرید : `p?buy-gun p90` ",
   "**Colt1911** \n خرید : `p?buy-gun colt1911` ",
   "**Desert Eagle** \n خرید : `p?buy-gun desert-eagle` ",
     ];
 

module.exports.run = async (bot, message, args) => {
    


    let n = 0;
    const embed = new MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
      .setTitle('**راهنمای خرید اسلحه از بات ** <:help:778600706729967647>   ')
      .setDescription(`${dis[n]}`)
      .setImage(`${art[n]}`)
      .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setColor("#f2ecec")
    
    const json = embed.toJSON();
    const previous = () => {
      (n <= 0) ? n = art.length - 1 : n--;
      return new MessageEmbed(json).setImage(`${art[n]}`).setDescription(`${dis[n]}`).setFooter(`${footer[n]}`);
      
    };
    const next = () => {
      (n >= art.length - 1) ? n = 0 : n++;
      return new MessageEmbed(json).setImage(`${art[n]}`).setDescription(`${dis[n]}`).setFooter(`${footer[n]}`);
      
    };

    const reactions = {
      '◀️': previous,
      '▶️': next,
      
    };

    const menu = new ReactionMenu(
      message.client,
      message.channel,
      message.member,
      embed,
      null,
      null,
      reactions,
      180000
    );

    menu.reactions['⏹️'] = menu.stop.bind(menu);
    
}


module.exports.help = {
    name:"gun-store",
    aliases: [""]
  }