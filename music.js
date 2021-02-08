const Discord = require('discord.js');

const client = new Discord.Client();
 
const prefix = '+';
 
client.once('ready', () => {
    console.log('Phenixxer is online!');
});
 
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'play'){
        client.commands.get('play').execute(message, args);
    } else if(command === 'leave'){
        client.commands.get('leave').execute(message, args)
    }
});
 
 
 
client.login('ODA4MjI1MjU0NTg1NDAxMzU1.YCDcbA.HdZDJjKxTfwJfilaUdMg_tVNLRw');