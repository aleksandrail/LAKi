const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
client.on('message', 


var role = member.guild.roles.find('name', 'Beginner role name'); // Variable to get channel ID
member.addRole(role); // Adds the default role to members

member.guild.channels.get('JOIN/LEAVE Channel ID').send({embed: {
color: 3447003,
title: "**SERVER NAME** Welcome Bot!",
url: "WEBSITE URL",
description: "Welcome *" + member + "* to the **Server name** discord server!",
fields: [{
    name: "Information",
    value: "Some info on the server"
  }
],
timestamp: new Date(),
footer: {
  icon_url: client.user.avatarURL,
  text: "© NAME OF SERVER 2018 - 2019"
}
}}); });


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
