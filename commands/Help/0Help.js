
const ReactionMenu = require('../Information/ReactionMenu');
const { MessageEmbed } = require('discord.js');
const art = [
"** صفحه اول : راهنمای دستورات بات <:1_:778109054513578024> **\n\n** صفحه دوم  : راهنمای خرید <:2_:778109056539164724> **\n\n** صفحه چهارم : دستور اینوایت من به سرور <:3_:778109058296053833> **\n\n** صفحه پنجم : دستور پشتیبانی بات <:4_:778109059940876288> **",
"<:1_:778109054513578024>  \n\n دستورات ادمینی <:support:778192441424740362> \n `p?help-admin` \n\n بدست آوردن پی کوین <:Pvoin:778188788522418176>\n   `p?makepcoin` \n\n فروشگاه بات <:shop:778708761631391774> \n `p?store` \n\n راهنمای پروفایل <:profile:778138310664388648>  \n `p?help-profile` \n\n راهنمای اینفو <:info:778711011858448445> \n `p?help-info`",
"<:2_:778109056539164724>  \n\n خرید ارز های بات <:money:778590631307771936>\n`p?arz-store`\n\n خرید اسلحه و خرید اسکین <:gun:778594827108483072>   \n`p?gun-store` \n\n خرید پک های ایموجی <:emoji:778595734765174825>  \n`p?emoji-store`\n\n خرید کاراکتر <:character:778109077670461491>   \n`p?character-store`",
"<:3_:778109058296053833>  \n\n اینوایت من به سرور <:link:778205945934774313> \n [The Paraffin Invite](https://discord.com/api/oauth2/authorize?client_id=728328227810050061&permissions=8&scope=bot)",
"<:4_:778109059940876288>  \n\n دستور پیشنهادات و ریپورت باگ <:developer:778598505467609099> \n `p?support`",
"<:5_:778109061111087144>  \n\n دستور خرید پریمیوم بات آی آر الایت <:premium:778593199798747146> \n `p?premium <درخواست شما>`",
];

const footer = [
  "صفحه 1/6",
  "صفحه 2/6",
  "صفحه 3/6",
  "صفحه 4/6",
  "صفحه 5/6",
  "صفحه 6/6",
    ];

module.exports.run = async (bot, message, args) => {
    


    let n = 0;
    const embed = new MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
      .setTitle('**راهنمای استفاده از بات ** <:help:778600706729967647>   ')
      .setDescription(`${art[n]}`)
      
      .setColor("#f2ecec")
    
    const json = embed.toJSON();
    const previous = () => {
      (n <= 0) ? n = art.length - 1 : n--;
      return new MessageEmbed(json).setDescription(`${art[n]}`).setFooter(`${footer[n]}`);
      
    };
    const next = () => {
      (n >= art.length - 1) ? n = 0 : n++;
      return new MessageEmbed(json).setDescription(`${art[n]}`).setFooter(`${footer[n]}`);
      
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
    name:"help",
    aliases: ["h"]
  }