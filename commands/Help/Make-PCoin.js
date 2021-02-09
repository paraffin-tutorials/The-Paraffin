const axios = require('axios');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setTitle("راهنمای بدست آوردن پی کوین در بات IE <:Pvoin:778188788522418176> ")
    .setThumbnail(bot.user.displayAvatarURL())
    .addField('پیکوین چیست؟:', 'پیکوین یک واحد پول در بات IE هست که باش میتونید کلی کار خفن کنید!')
    .addField("جایزه هفتگی <:Pvoin:778188788522418176> ", "<:cmd:778602422490103868>  `p?weekly`", true)
    .addField("جایزه روزانه <:Pvoin:778188788522418176> ", "<:cmd:778602422490103868>  `p?daily`", true)
    .addField("کار کردن <:work:778192442134364162> ", "<:cmd:778602422490103868>  `p?work`")
    .addField("گدایی <:cadge:778326650806992916> ", "<:cmd:778602422490103868>  `p?cadge`")
    .addField("هدیه دادن <:gift:778138012272951306> ", "<:cmd:778602422490103868>  `p?gift <منشن شخص مورد نظر>`")
    .addField("قمار <:slots:778109535683477524> ", "<:cmd:778602422490103868>  `p?slots <مبلغ مورد نظر>`")
    .addField(" دزدی کردن از دیگران <:rob:778188789100707840> ", "<:cmd:778602422490103868>  `p?rob <منشن شخص مورد نظر>`")
    .addField(" حمله به اکانت دیگران <:attack:778109062482100250> ", "<:cmd:778602422490103868>  `p?attack <منشن شخص مورد نظر>`")
    .addField("چت کردن <:msg:778138053193367562>", "<:cmd:778602422490103868>  `Chat چت کنید و پی کوین بگیرید`")
    .addField("لول آپ شدن <:level:778138052987715594>  ", "<:cmd:778602422490103868>   `Lvl Upبا چت کردن لول آپ  شوید`")
    .addField('دستور انتقال پیکوین <:sell:778188790228320266>', '<:cmd:778602422490103868>  `p?pay <مبلغ مورد نظر> <شخص مورد نظر>`')
    .addField('دستور فروشگاه بات <:buy:778138002139381770>', '<:cmd:778602422490103868>  `p?store`')
    .setColor("#f2ecec")

    message.channel.send(embed)





}
    module.exports.help = {
        name:"makepcoin",
        aliases: [""]
    }