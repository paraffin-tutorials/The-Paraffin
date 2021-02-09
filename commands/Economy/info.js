const { MessageEmbed } = require("discord.js");
const db = require("quick.db");


module.exports.run = async (client, message, args) => {
  let member11 = message.member;
let member22 = message.mentions.members.first();
  let user = message.mentions.members.first() || message.author;
  const member = message.mentions.members.last() || message.member;


  let vote = await db.fetch(`vote_${user.id}`)
  if (vote === null) vote = 0;

  let teamfootball = db.fetch(`${user.id}fteam` ) || `انتخاب نشده`

  let firstname = db.fetch(`${user.id}fname` ) || `انتخاب نشده`

  let lastname = db.fetch(`${user.id}lname` ) || `انتخاب نشده`

  let song = db.fetch(`${user.id}song` ) || `انتخاب نشده`

  let agee = db.fetch(`${user.id}age` ) || `انتخاب نشده`

  let pcity = db.fetch(`${user.id}pcity` ) || `انتخاب نشده`

  let color = db.fetch(`${user.id}coloor` ) || `f2ecec`

  let pic = db.fetch(`${user.id}pic` ) || `https://cdn.discordapp.com/attachments/772072791402217473/772113571306930186/Loading.gif`
 
  let disc = db.fetch(`${user.id}disc` ) || `انتخاب نشده`

  let spotify = db.fetch(`${user.id}spotify` ) || `انتخاب نشده`

  let gmail = db.fetch(`${user.id}gmail` ) || `انتخاب نشده`

  let instagram = db.fetch(`${user.id}instagram` ) || `انتخاب نشده`

  let youtube = db.fetch(`${user.id}youtube` ) || `انتخاب نشده`

  let phonenumber = db.fetch(`${user.id}phonenumber` ) || `انتخاب نشده`

    const embed = new MessageEmbed()
  .setColor(`${color}`)
  .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512}))
	.setDescription(`**اطلاعات ${user}**`)
  .addField(`نام 💠`, `${firstname}`)
  .addField(`نام خانوادگی 💫`, `${lastname}`)
  .addField(`سن 🔞`, `${agee}`)
  .addField(`شهر 🌆`, `${pcity}`)
  .addField(`تعداد رای اعتماد 💖 `, `${vote}`)
  .addField(`خواننده مورد علاقه 🎶`, `**${song}**`)
  .addField(`فوتبالیست و یا تیم مورد علاقه ⚽`, `**${teamfootball}**`)
  .addField(`بیو 🌐`, `${disc}`)
  .addField('شماره 📱', `${phonenumber}`)
  .setImage(`${pic}`)
  .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
  
    const page2 = new MessageEmbed()
  .setColor(`${color}`)
  .setDescription(`**شبکه های مجازی ${user}**`)
  .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512}))
	.addField('جیمیل <:gmail:773945082326810665>', `${gmail}`)
  .addField('اینستاگرام <:ig:773944358156238849> ', `${instagram}`)
  .addField('یوتیوب <:Youtube:766036743534542850> ', `${youtube}`)
  .addField('اسپاتیفای <:spotify:747084576534560769> ', `${spotify}`)
  .setFooter('درخواست شده توسط' + message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
  
		message.channel.send(embed).then(msg => {
			setTimeout(function () {
				msg.react("⬅")
			}, 500)
			setTimeout(function () {
				msg.react("➡")
			}, 1000)
			const collector = msg.createReactionCollector((r, u) => (r.emoji.name === "⬅", "➡") && (u.id !== '728328227810050061' && u.id === message.author.id))
			collector.on("collect", r => {
				r.users.remove(message.author.id)
				switch (r.emoji.name) {
					case "⬅":
						msg.edit(embed)
						break
					case "➡":
						msg.edit(page2)
				}
			})
		})
	}


module.exports.help = { 
  name:"info",
  aliases: ["information"]
}
