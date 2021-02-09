
const ReactionMenu = require('../Information/ReactionMenu');
const { MessageEmbed } = require('discord.js');

  const art = [
  '',
  'https://cdn.discordapp.com/attachments/749123968455147542/760011801994723348/pngwave_7.png',
  'https://cdn.discordapp.com/attachments/749123968455147542/760011816033452053/pngwave_5.png',
  'https://cdn.discordapp.com/attachments/749123968455147542/760011791077474344/pngwave_8.png',
  'https://cdn.discordapp.com/attachments/749123968455147542/760011831292067840/pngwave_6.png',
  'https://cdn.discordapp.com/attachments/749123968455147542/760037427284148224/pngwave_10.png',
  'https://cdn.discordapp.com/attachments/749123968455147542/760037406602035200/pngwave_9.png',
  'https://cdn.discordapp.com/attachments/749123968455147542/760037783955570708/pngwave_14.png',
  'https://cdn.discordapp.com/attachments/749123968455147542/760012666781171742/pngwave_2.png',
  'https://cdn.discordapp.com/attachments/749123968455147542/760021784392761355/Untitled-1.png',
  'https://cdn.discordapp.com/attachments/749123968455147542/760012847467069490/pngwave_1.png'
    ];

 const name = [
'.',
'Salah',
'Johansen',
'Alexander',
'Eric',
'Richard',
'Barbara',
'Susan',
'Atan',
'David',
'Paraffin'
    ];
    
 const name2 = [
    '.',
    '\`p?buy-character salah\`',
    '\`p?buy-character johansen\`',
    '\`p?buy-character alexander\`',
    '\`p?buy-character eric\`',
    '\`p?buy-character richard\`',
    '\`p?buy-character barbara\`',
    '\`p?buy-character susan\`',
    '\`p?buy-character atan\`',
    '\`p?buy-character david\`',
    '\`غیر قابل خرید\`'
        ];

const power = [ 
'.',
'60',
'65',
'70',
'75',
'80',
'85',
'90',
'95',
'100',
'150'
];

module.exports.run = async (bot, message, args) => {
    
    const member = message.mentions.members.last() || message.member;

    let n = 0;
    const embed = new MessageEmbed()
    .setThumbnail(member.user.displayAvatarURL())

      .setTitle('**راهنمای استفاده از کارکتر  ** <:help:778600706729967647>   ')
      .setImage(`${art[n]}`)
      .setColor("#f2ecec")
    
    const json = embed.toJSON();
    const previous = () => {
      (n <= 0) ? n = art.length - 1 : n--;
      return new MessageEmbed(json).setImage(`${art[n]}`).addField(`نام :`, `${name[n]}`).addField(`قدرت :`, `${power[n]}`).addField(`خرید :`, `${name2[n]}`);
      
    };
    const next = () => {
      (n >= art.length - 1) ? n = 0 : n++;
      return new MessageEmbed(json).setImage(`${art[n]}`).addField(`نام :`, `${name[n]}`).addField(`قدرت :`, `${power[n]}`).addField(`خرید :`, `${name2[n]}`);
      
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
    name:"character-store",
    aliases: [""]
  }