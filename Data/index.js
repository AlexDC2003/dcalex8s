const Discord = require('discord.js');
const bot = new Discord.Client();

const { prefix, token } = require('./config.json');

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
  });

  bot.on('message', msg => {
    if (msg.content === '!start8s') {
        if (msg.member.voice.channelID && msg.member.voice.channel.members.array().length == 8)
        {
          let membersArr = shuffle(msg.member.voice.channel.members.array());
          membersArr.splice(0, 4).forEach(member => member.voice.setChannel("759882250635968512"));
          membersArr.splice(-4).forEach(member => member.voice.setChannel("759882318726430750"));
        }
        msg.reply('Split into teams');
    }
  })

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;

    
  }
  

bot.login(token);