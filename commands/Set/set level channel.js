const Discord = require('discord.js')

const db = require("quick.db")

module.exports.run = async (bot, message, args) => {

	let permission = message.member.hasPermission("ADMINISTRATOR");

if(!permission) return message.channel.send("شما پریمیشن ادمینستوری را ندارید `ADMINISTRATOR`")

 let cArgs = args[0]
 
 if(isNaN(cArgs)) return message.channel.send(' لطفا یک آیدی عددی صحیح را وارد کنید')
	
 db.set(`${message.guild.id}lvl`, cArgs)
 
 message.channel.send("شما با موفقیت این چنل را به عنوان چنل رنک آپ های سرور انتخاب کردید <#" + cArgs + "> **|** <:tik:780138062578712646>")
return;
 }
 
module.exports.help = {
  name:"levelup-channel",
  aliases: [""]
}