const Discord = require('discord.js');
const webhookClient = new Discord.WebhookClient("780139861826863173", "lcVfZR6sebN2Oj_UCcj8q5HjX_qz1xAh9uBA8xMVzB3DJuxXF2Aou7vJzsIBiKiVV3bS");

module.exports.run = async (client, message, args) => {
    if(!args.join(" ")){
        return message.channel.send("لطفا مشکل خودتون رو تو بات رو بنویسید!")
      }
	try {
		webhookClient.send(`${args.join(" ")}`, {
			username: `${message.member.displayName}`,
			avatarURL: `${message.member.user.displayAvatarURL({ dynamic: true, size: 512})}`,
		});
	} catch (error) {
		console.error('Error trying to send: ', error);
    }
    
    message.channel.send(`> مشکل شما برای ادیمن های بات ارسال شد تشکر از همکاری شما در مسیر بهترین شدن \n > ${args.join(" ")} `);
    message.delete();
};


module.exports.help = {
    name:"bug",
    aliases: [""]
  }
