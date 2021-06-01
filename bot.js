require('dotenv').config();
const tmi = require('tmi.js');
const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'Sulphure_Pet_Bot',
		password: 'oauth:nmovp2gj6apq8iy7j89x5ifles8dio'
	},
	channels: [ 'sulphured' ]
});
client.connect().catch(console.error);

client.on('message', (channel, tags, message, self) => {
	if(self) return;
    if(message.toLowerCase() === '!pet') {
        try{
            if (tags.badges.broadcaster==1){
                client.say(channel, `PETTHESTREAMER`);
            }
            else if (tags.badges.moderator==1){
                client.say(channel, `PETTHEMODS`);
            }
            else if (tags.badges.vip==1){
                client.say(channel, `PETTHEVIPS`);
            }
            else if (tags.badges.subscriber==1){
                client.say(channel, `PETTHESUBS`);
            }
        }
        catch(err){
            client.say(channel, `PETTHEVIEWERS`);
        }
	}
});
