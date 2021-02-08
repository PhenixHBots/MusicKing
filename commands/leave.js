module.exports = {
    name: 'leave',
    description: 'stop the bot and leave the channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("You cannot use this command.");
        await voiceChannel.leave();
        await message.channel.send('Stopping audio and leaving channel.')
 
    }
}