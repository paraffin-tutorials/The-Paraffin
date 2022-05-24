const PF6Config = require("./Config.json");
const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const {
  token,
  prefix
} = require("./Config.json")
const bot = new Discord.Client({disableEveryone: true});

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();


fs.readdir("./commands/Bot/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/Bot/${f}`);
    console.log(`| --------Bot-------- `);
    console.log(`| ✅ ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
    });
  });
})

fs.readdir("./commands/Buy/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/Buy/${f}`);
    console.log(`| --------Buy-------- `);
    console.log(`| ✅ ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})

fs.readdir("./commands/Developer/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/Developer/${f}`);
    console.log(`| --------Dev-------- `);
    console.log(`| ✅ ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})

fs.readdir("./commands/Economy/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/Economy/${f}`);
    console.log(`| --------Eco-------- `);
    console.log(`| ✅ ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})

fs.readdir("./commands/Sell/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/Sell/${f}`);
    console.log(`| --------Sell-------- `);
    console.log(`| ✅ ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})

fs.readdir("./commands/Help/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/Help/${f}`);
    console.log(`| --------Hel-------- `);
    console.log(`| ✅ ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})

fs.readdir("./commands/Info/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/Info/${f}`);
    console.log(`| --------Inf-------- `);
    console.log(`| ✅ ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})

fs.readdir("./commands/Set/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/Set/${f}`);
    console.log(`| --------Set-------- `);
    console.log(`| ✅ ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})


bot.on('ready', () => {
    
    
  console.log(`Logged in as ${bot.user.tag}!`);
 
setInterval(function() {

  let fackeping = Math.floor(Math.random() * 150) + 1;


  bot.user.setActivity(`The Paraffin | The First & Best Iranian Economy Bot`, { type: 'PLAYING' });
  bot.user.setActivity(`The Paraffin | Ping : ${fackeping}`, { type: 'WATCHING' });
  bot.user.setActivity(`The Paraffin | ${bot.guilds.cache.size} Servers`, { type: 'WATCHING' });
  bot.user.setActivity('The Paraffin | p?help', { type: 'LISTENING' });
}, 5000)
});

bot.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
     
    let Paraffinprefix = db.fetch(`${message.guild.id}prefix`) || "lljjjiygkj215";

    let msgcoin = db.fetch(`${message.guild.id}msgcoin`) || "1";
    
    let prefix = Paraffinprefix;
    let messageArray = message.content.split(" ");
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let commandfile;

    db.add(`messages_${message.guild.id}_${message.author.id}`, 1)
    db.add(`pcoin_${message.guild.id}_${message.author.id}`, msgcoin)
    let messagefetch = db.fetch(`messages_${message.guild.id}_${message.author.id}`)
  
    let messages;
    if (messagefetch == 1) messages = 1; //Level 1
    else if (messagefetch == 2) messages = 2; // Level 2
    else if (messagefetch == 3) messages = 3; // Level 3
    else if (messagefetch == 4) messages = 4; // Level 4
    else if (messagefetch == 5) messages = 5; // Level 5
    else if (messagefetch == 6000) messages = 6000; // Level 6
    else if (messagefetch == 7000) messages = 7000; // Level 7
    else if (messagefetch == 8000) messages = 8000; // Level 8
    else if (messagefetch == 9000) messages = 9000; // Level 9
    else if (messagefetch == 10000) messages = 10000; // Level 10
    else if (messagefetch == 11000) messages = 11000; // Level 11
    else if (messagefetch == 12000) messages = 12000; // Level 12
    else if (messagefetch == 13000) messages = 13000; // Level 13
    else if (messagefetch == 14000) messages = 14000; // Level 14
    else if (messagefetch == 15000) messages = 15000; // Level 15
    else if (messagefetch == 16000) messages = 16000; // Level 16
    else if (messagefetch == 17000) messages = 17000; // Level 17
    else if (messagefetch == 18000) messages = 18000; // Level 18
    else if (messagefetch == 19000) messages = 19000; // Level 19
    else if (messagefetch == 20000) messages = 20000; // Level 20
    else if (messagefetch == 21000) messages = 21000; // Level 21
    else if (messagefetch == 22000) messages = 22000; // Level 22
    else if (messagefetch == 23000) messages = 23000; // Level 23
    else if (messagefetch == 24000) messages = 24000; // Level 24
    else if (messagefetch == 25000) messages = 25000; // Level 25
    else if (messagefetch == 26000) messages = 26000; // Level 26
    else if (messagefetch == 27000) messages = 27000; // Level 27
    else if (messagefetch == 28000) messages = 28000; // Level 27
    else if (messagefetch == 29000) messages = 29000; // Level 27
    else if (messagefetch == 30000) messages = 30000; // Level 27
    let replies = [
      'https://media.tenor.com/images/c8106eb745691718c2c6c38bb37aba29/tenor.gif',
      'https://mir-s3-cdn-cf.behance.net/project_modules/disp/cba46377293863.5c8bfb5cbd55b.gif',
      'https://media3.giphy.com/media/kv4BJO6ejblmgML29X/giphy.gif',
      'https://thumbs.gfycat.com/WeeMagnificentAlligatorgar-size_restricted.gif',
      'https://thumbs.gfycat.com/PepperyInfiniteArmedcrab-small.gif',
      'https://mir-s3-cdn-cf.behance.net/project_modules/disp/8e670377155929.5c8f6372ec827.gif',
      'https://media2.giphy.com/media/lp6ZTYkgesS5fP0xRT/giphy.gif',
      'https://media.tenor.com/images/4ab61cccc28dc774c4f718c3080f8ccb/tenor.gif',
      'https://media1.tenor.com/images/b2134e9b42bac5fc705e45be2a552a20/tenor.gif?itemid=16478581',
      'https://cdn.discordapp.com/attachments/747798345145122816/749253392940925020/LastingIdealCatfish-size_restricted.gif'
      ,'https://cdn.discordapp.com/attachments/747798345145122816/749253601725251623/2ddfce77419693.5cab8d4f80b90.gif'
      ,'https://cdn.discordapp.com/attachments/747798345145122816/749254275116433434/source_1.gif'
      ,'https://cdn.discordapp.com/attachments/747798345145122816/749254347921162360/ObedientAcidicAmericangoldfinch-size_restricted.gif'
      ,'https://cdn.discordapp.com/attachments/747798345145122816/749254391047127060/1530361668_qgpcufH.gif'
    ]
    let result = Math.floor((Math.random() * replies.length));
    if (!isNaN(messages)) {
      db.add(`level_${message.guild.id}_${message.author.id}`, 1)
      db.add(`pcoin_${message.guild.id}_${message.author.id}`, 500)
      let levelfetch = db.fetch(`level_${message.guild.id}_${message.author.id}`)
  
    const LChan = db.fetch(`${message.guild.id}lvl`)

    const levelembed = new Discord.MessageEmbed()
    .setDescription(`<:level:778138052987715594>  ${message.author},لول شما ارتقا پیدا کرد ، به **.${levelfetch}.**`)
    .setImage(`${replies[result]}`)
    .setColor("#f2ecec")
    message.guild.channels.cache.get(LChan).send(`${message.author}`)
    message.guild.channels.cache.get(LChan).send(levelembed)


           if(levelfetch == '5'){

      const member2 = message.author;
      const role1fetch = db.fetch(`lvl5_${message.guild.id}`)
const role1 = this.getRoleFromMention(message.guild.roles.cache.get(role1fetch));

      member2.roles.add(role1).catch(console.error);
      
    } else if(levelfetch == '10'){
      
      const role1fetch = db.fetch(`lvl10_${message.guild.id}`)
      const member = message.author;
const role1 = this.getRoleFromMention(message.guild.roles.cache.get(role1fetch));
      
      member.roles.add(role1).catch(console.error);
    } else if(levelfetch == '15'){
      
      const role1fetch = db.fetch(`lvl15_${message.guild.id}`)
      const member = message.author;
const role1 = this.getRoleFromMention(message.guild.roles.cache.get(role1fetch));
      
      member.roles.add(role1).catch(console.error);
    } else if(levelfetch == '20'){
      
      const role1fetch = db.fetch(`lvl20_${message.guild.id}`)
      const member = message.author;
const role1 = this.getRoleFromMention(message.guild.roles.cache.get(role1fetch));
      
      member.roles.add(role1).catch(console.error);
    } else if(levelfetch == '25'){
      
      const role1fetch = db.fetch(`lvl25_${message.guild.id}`)
      const member = message.author;
const role1 = this.getRoleFromMention(message.guild.roles.cache.get(role1fetch));
      
      member.roles.add(role1).catch(console.error);
    } else if(levelfetch == '30'){
      
      const role1fetch = db.fetch(`lvl30_${message.guild.id}`)
      const member = message.author;
const role1 = this.getRoleFromMention(message.guild.roles.cache.get(role1fetch));
      
      member.roles.add(role1).catch(console.error);
    } else if(levelfetch == '35'){
      
      const role1fetch = db.fetch(`lvl35_${message.guild.id}`)
      const member = message.author;
const role1 = this.getRoleFromMention(message.guild.roles.cache.get(role1fetch));
      
      member.roles.add(role1).catch(console.error);
    }
    }

    if (bot.commands.has(cmd)) {
      commandfile = bot.commands.get(cmd);
  } else if (bot.aliases.has(cmd)) {
    commandfile = bot.commands.get(bot.aliases.get(cmd));
  }
  
      if (!message.content.startsWith(prefix)) return;

          
  try {
    commandfile.run(bot, message, args);
  
  } catch (e) {
  }}
  )

bot.on("message", async message => {
    
    let Paraffinprefix = PF6Config.prefix;

    let prefix = Paraffinprefix;
    let messageArray = message.content.split(" ");
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let commandfile;

    if (bot.commands.has(cmd)) {
      commandfile = bot.commands.get(cmd);
  } else if (bot.aliases.has(cmd)) {
    commandfile = bot.commands.get(bot.aliases.get(cmd));
  }
  
      if (!message.content.startsWith(prefix)) return;

          
  try {
    commandfile.run(bot, message, args);
  
  } catch (e) {
  }}
  )

bot.login(token);
