const Discord = require('discord.js')
const db = require("quick.db");

module.exports.run = async (client, message, args) => {

    message.delete();

    
    let premuimserver = db.fetch(`${message.guild.id}premium`)
   
    let Paraffinprefix = db.fetch(`${message.guild.id}prefix`) || "p?";

    const Loading = new Discord.MessageEmbed().setColor('').setTitle('Loading...')
    message.channel.send(Loading)
    .then((message1) => {
      setInterval(function() {
        message1.edit(new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()) .setAuthor('Paraffin ™',  `https://cdn.discordapp.com/avatars/728328227810050061/815b60f0ee00342b70ef7b1d85838215.png?size=1024`).setColor("#f2ecec")
            .addFields(
                {
                    name: 'تعداد سرور های فعال <:server:778950784787546112>  ',
                    value: `فعال در **${client.guilds.cache.size}** سرور`,
                    inline: true
                },
            
                {
                    name: 'پینگ ربات <:ping:778598506545152000> ',
                    value: `**${Math.round(client.ws.ping)}ms**`,
                    inline: true
                },
                
                {
                    name: '<:Paraffinprefix:778138009996361788>  پریفیکس در سرور',
                    value: `**p?**`,
                    inline: true
                },
                {
                    name: 'وضعیت بات در سرور <:premium:778593199798747146>  ',
                    value: `**${premuimserver}**`,
                    inline: true
                },               
                {
                    name: 'دستور اینوایت من <:link:778205945934774313>  ',
                    value: '**p?invite**',
                    inline: true
                }
            ))
            message1.edit(new Discord.MessageEmbed().setThumbnail(client.user.displayAvatarURL()) .setAuthor('Paraffin ™',  `https://cdn.discordapp.com/avatars/728328227810050061/815b60f0ee00342b70ef7b1d85838215.png?size=1024`).setColor("#f2ecec")
            .addFields(
                {
                    name: 'تعداد سرور های فعال <:server:778950784787546112>  ',
                    value: `فعال در **${client.guilds.cache.size}** سرور`,
                    inline: true
                },
            
                {
                    name: 'پینگ ربات <:ping:778598506545152000> ',
                    value: `**${Math.round(client.ws.ping)}ms**`,
                    inline: true
                },
                {
                    name: 'پریفیکس در سرور <:Paraffinprefix:778138009996361788>  ',
                    value: `**${Paraffinprefix}**`,
                    inline: true
                },
                {
                    name: 'وضعیت بات در سرور <:premium:778593199798747146>  ',
                    value: `**${premuimserver}**`,
                    inline: true
                },
                               
                {
                    name: 'دستور اینوایت من <:link:778205945934774313>  ',
                    value: '**p?invite**',
                    inline: true
                }
            ))
        }, 50000)})
    
    }
 
    module.exports.help = {
        name:"#bottiinfo",
        aliases: [""]
      }