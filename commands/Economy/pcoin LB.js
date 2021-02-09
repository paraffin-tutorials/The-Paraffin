const db = require("quick.db");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    const data = db
      .fetchAll()
      .filter((da) => da.ID.startsWith(`pcoin_${message.guild.id}_`))
      .sort((a, b) => b.data - a.data)
      .slice(0, 10);

    const embed = new MessageEmbed()
      .setTitle(`${message.guild.name} برترین های سرور`)
      .setColor("#f2ecec")
      .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    for (let i = 0; i < data.length; i++) {
      const guildId = message.guild.id;
      const userId = data[i].ID.replace(`pcoin_${message.guild.id}_`, ""); // get user id
      const user = bot.users.cache.get(userId); // Get user
      if (user) {
        embed.addField(user.username, `\`${data[i].data}\` <:Pvoin:778188788522418176> PCoins`, true);
      }
    }

    message.channel.send(embed);
  }

module.exports.help = {
    name:"pcoin-leaderboard",
    aliases: ["plb"]
  }
  