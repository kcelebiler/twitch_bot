require('dotenv').config();
const tmi = require('tmi.js');
const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'SulPetBot',
		password: 'oauth:ncf0jj1pkh9z3xp35kp6hkrxzfvkjd'
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
