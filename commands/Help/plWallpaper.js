const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    


    let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle("لیست ولپیپر های قابل خرید برای پروفایل <:help:778600706729967647>   ")
    .addField("والپیپر های معمولی <:wallpaper:778696161414217738> ", "[001](https://cdn.discordapp.com/attachments/747798345145122816/749085987761684550/Stars_1.jpg) | [002](https://cdn.discordapp.com/attachments/747798345145122816/749101179480440914/29dee2294baaa21998ced7b496ad8267.jpg) | [003](https://i.pinimg.com/originals/4f/50/38/4f503844d9a44b0350c25eeefae028d3.jpg) | [004](https://newevolutiondesigns.com/images/freebies/cool-4k-wallpaper-1.jpg) | [005](https://cdn.discordapp.com/attachments/747798345145122816/749085905314381835/concerto-test.jpg) ")
    .addField("والپیپر های معمولی <:wallpaper:778696161414217738> ", "[006](https://cdn.discordapp.com/attachments/760765093075484672/771377804067471360/fortnite-battle-bus-3760.webp) | [007](https://cdn.discordapp.com/attachments/747798345145122816/750610226822119425/floating-astronaut-colorful-nebula-dreamy-orange-two-paths-space.jpeg) | [008](https://cdn.discordapp.com/attachments/749123968455147542/759812889996820490/Californias-IoT-Law.-The-First-State-to-Protect-IoT-Devices-from-Hackers-700x475.jpeg) | [009](https://cdn.discordapp.com/attachments/749123968455147542/759814748870148146/325138.png) | [010](https://cdn.discordapp.com/attachments/749123968455147542/759814609279516693/classy-cool-wallpapers-for-desktop-39.jpg)")
    .addField("والپیپر های خاص <:wallpaper:778696161414217738>", "[barcelona](https://cdn.discordapp.com/attachments/747798345145122816/771656909161496616/messi-new-barcelona-kit.png) **|** [real-madrid](https://cdn.discordapp.com/attachments/749123968455147542/759787772826484756/thumb2-4k-eden-hazard-belgian-footballers-2019-real-madrid-fc.jpg) **|** [juve](https://cdn.discordapp.com/attachments/747798345145122816/771658294267084811/maillot-domicile-juventus-2020-2021-img5.jpg) **|** [esteghlal](https://cdn.discordapp.com/attachments/749123968455147542/759787973734039592/mehdi-ghayedi-2020-iranian-footballers-esteghlal-fc-soccer.jpg) **|** [perspolis](https://cdn.discordapp.com/attachments/749123968455147542/759787792652959744/thumb2-shoja-khalilzadeh-4k-iranian-footballers-persepolis-fc-soccer.jpg)")
    .addField("والپیپر های خاص <:wallpaper:778696161414217738>", "[psg](https://wallpapercave.com/wp/wp6015129.jpg) | [liverpool](https://besthqwallpapers.com/Uploads/1-10-2020/142494/thumb2-mohamed-salah-liverpool-fc-egyptian-footballer-liverpool-2021-uniforms-soccer.jpg) | [milan](https://www.soccerbible.com/media/113069/milan-2-min.jpg) | [mancity](https://2.bp.blogspot.com/-PQGX94pm5Rg/XxAALhzkCaI/AAAAAAACXtw/Kfoeqxy-0okl_UwlI6opHMiV23kpPlYVQCLcBGAsYHQ/s738/manchester-city-20-21-home-kit-3.jpg) | [atletico-madrid](https://wallpapercave.com/wp/1OROQXm.jpg)")
    .addField("والپیپر های خاص <:wallpaper:778696161414217738>", "[pes](https://cdn.discordapp.com/attachments/747798345145122816/771658323049054218/3725793-pes.jfif.jpg) | [fifa](https://talksport.com/wp-content/uploads/sites/5/2020/09/FIFA21STANDARDEDITION10.jpeg?strip=all&w=960&quality=100) | [cod](https://cdn.discordapp.com/attachments/780103310190444544/780498112799571968/2_5350787862151301901.jpg) | [pubg](https://pluc.tv/wp-content/uploads/2020/09/144028-games-feature-pubg-image1-zkpdntqgbc.jpg) | [wow](https://i.imgur.com/nUVMyf1.jpg)")
    .addField("دستور خرید والپیپر <:buy:778138002139381770>", "<:cmd:778602422490103868>  `p?buy-wallpaper <#001>`")
    .addField("دستور فروش والپیپر <:sell:778188790228320266> ", "<:cmd:778602422490103868>  `p?sell-wallpaper <#001>`")

    .setColor("#f2ecec")
    message.channel.send(embed)




}

module.exports.help = {
  name:"lwallpaper",
  aliases: [""]
}