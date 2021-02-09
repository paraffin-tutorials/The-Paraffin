const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission('MANAGE_SERVER')) return message.reply("شما پریمیشن `MANAGE_SERVER` را ندارید");

    let icon = args[0]

		if (message.attachments.first()) {
			icon = message.attachments.first().url
			message.guild.setIcon(icon).then(() => {
                let embed1 = new Discord.MessageEmbed()
                .setColor("#f2ecec")
                .addField("اسم سرور ✅", `${message.guild.name}`, true)
                .addField("تغییر دهنده عکس سرور ✅", `${message.author}`, true)
                .setDescription("**🎴 عکس سرور عوض شد🎴**")
                .setImage(icon)
				message.channel.send(embed1)
			})
		} else {
			if (!icon) return message.chinoReply("error")
			message.guild.setIcon(icon).then(() => {
                let embed2 = new Discord.MessageEmbed()
        .setColor("#f2ecec")
        .addField("اسم سرور ✅", `${message.guild.name}`, true)
        .addField("تغییر دهنده عکس سرور ✅", `${message.author}`, true)
        .setDescription("**🎴 عکس سرور عوض شد 🎴**")
        .setImage(icon)
				message.channel.send(embed2)
            })
        }
    }
    
module.exports.help = {
    name:"set-icon",
    aliases: [""]
  }
  