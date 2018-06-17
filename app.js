const Discord = require('discord.js');
const bot = new Discord.Client();

const fs = require("fs"); 
bot.login(process.env.BOT_TOKEN);

bot.on('message', function (message){
	if(message.content ==='!ibahna'){
		message.reply('Ouiiiiiiii ?');
	} 
 
});
