const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    
      bot.user.setActivity("Cracking"
    
  //bot.user.setGame("on SourceCade!");                           
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
