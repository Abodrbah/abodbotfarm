const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("599335574532259850")
setInterval(function() {
channel.send(`Abod Abod Abod`);
}, 20)
})

client.login(process.env.BOT_TOKEN);
