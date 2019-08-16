const { Client } = require("discord.js");

// Declares our bot,
// the disableEveryone prevents the client to ping @everyone
const client = new Client({
    disableEveryone: true
});

// When the bot's online, what's in these brackets will be executed
client.on("ready", () => {
    console.log(`${client.user.username} Je Online!`);

    // Set the user presence
    client.user.setPresence({
        status: "dnd",
        game: {
            name: "Cracking",
        }
    }); 
})

// When a message comes in, what's in these brackets will be executed
client.on("message", async message => {
    console.log(`${message.author.username} said: ${message.content}`);

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
