const { MessageEmbed } = require('discord.js');
const ReactionMenu = require('../Information/ReactionMenu');


module.exports.run = async (bot, message, args) => {
    if (message.author.id !== '488958506280550402') {
        return message.channel.send(`شما قابلیت دلیت کردن ندارید!`)
    }

const servers = message.client.guilds.cache.array().map(guild => { return `\`${guild.id}\` - **${guild.name}**`;
  });

  const embed = new MessageEmbed()
    .setTitle('لیست سرور ها')
    .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor(message.guild.me.displayHexColor);

  if (servers.length <= 10) {
    const range = (servers.length == 1) ? '[1]' : `[1 - ${servers.length}]`;
    message.channel.send(embed.setTitle(`لیست سرور ها ${range}`).setDescription(servers.join('\n')));
  } else {
    new ReactionMenu(message.client, message.channel, message.member, embed, servers);
  }
  
}

module.exports.help = {

    name:[""],
    aliases: ["servers"]
}