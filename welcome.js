client.on('guildMemberAdd', member => {
client.on('message', 

member.guild.channels.get('603540390917701632').send({embed: {
color: 3447003,
title: "**World Cracking** Welcome!",
url: "WorldCracking.ga",
description: "Welcome *" + member + "* to the **World Cracking** discord server!",
fields: [{
    name: "Information",
    value: "Some info on the server"
  }
],
timestamp: new Date(),
footer: {
  icon_url: client.user.avatarURL,
  text: "© ReportMeOnBadlion All Rights Reserved"
}
}}); });
