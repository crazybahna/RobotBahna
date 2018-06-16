const Discord = require('discord.js');
const bot = new Discord.Client();

const fs = require("fs"); 


bot.on('message', function (message){
	if(message.content ==='!ibahna'){
		message.reply('Ouiiiiiiii ?');

	}else if (message.content ==='!Telwyn'){
		message.reply('On ne dérange pas le Maître !');
	}else if(message.content ==='!events'){
        message.channel.sendMessage('Toi, tu as des envies de bastons. Bouge pas ! ^^')
        	var eventData = JSON.parse(fs.readFileSync('Storage/eventsData.json', 'utf-8'));
        	
              message.channel.send( 'Ce '+ eventData[1].eventDate + ', un petit **' + eventData[1].eventLabel + '** est prévu ! (' +eventData[1].eventInscrits +' inscrits)')
           
	}

	var userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf-8'));
	var sender = message.author;
	var msg = message.content.toUpperCase();
	var prefix = '>'
 
 
if(msg === prefix + 'USERSTATS') {
    message.channel.send( userData[sender.id].username + 'Vous avez envoyé **' + userData[sender.id].messagesSent + '** messages !' )
}
 
 
if (!userData[sender.id]) userData[sender.id] = {
    messageSent: 0 , 
    username: sender.u
}
 
userData[sender.id].messagesSent++;
 
fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
    if (err) console.error(err);
});
})


bot.login('process.env.BOT_TOKEN');


 
