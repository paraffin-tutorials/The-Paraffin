const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
 

let Embed5 = new Discord.MessageEmbed()
.setColor("#11383e")
.setDescription(`شما جزو دولوپر های الایت نیستید **|** <:TickNo:764816791699980318>   `);

let green2colore = db.fetch(`bd_${message.author.id}`)

if (green2colore < 0) return message.channel.send(Embed5)


    if (!args[0]) return message.reply('قربان،لطفا اسم فایل مورد نظر خود را هم بنویسید')
  
    let user = message.mentions.users.first() || message.author
    message.channel.send('با موفقیت انتقال یافت ' + args[0] + ' ' + user)
    db.set(`${args[0]}_${user.id}`, args[1])

}

module.exports.help = {

    name:[""],
    aliases: ["#66"]
}