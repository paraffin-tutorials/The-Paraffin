const Discord = require('discord.js');
const webhookClient = new Discord.WebhookClient("783245890327543818", "N6GHUbwHLE4CTOAjRIiQ9RnMh8g_XYnOzAY49aOPwJKrF-5IhTaRqhbjnrsKNTtQKhs5");

module.exports.run = async (client, message, args) => {
    
	try {
		webhookClient.send(`${args.join(" ")}`, {
			username: `${message.member.displayName}`,
			avatarURL: `${message.member.user.displayAvatarURL({ dynamic: true, size: 512})}`,
		});
	} catch (error) {
		console.error('Error trying to send: ', error);
    }
    
    message.channel.send(`شما درخواست خرید را دادید ساپرتر های ما به شما پیام میدهند \n > ${args.join(" ")} `);
    message.delete();
};


module.exports.help = {
    name:"buy-premium",
    aliases: [""]
  }