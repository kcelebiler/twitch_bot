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
let movies = ['American Physco', 'The Signal', 'The Terminal', 'The Runaways', 'The Dirt', 'Taxi Driver',
'Soul', 'Sound of Metal', 'Nomadland', 'School of Rock', 'Parasite', 'Event Horizon', 'Full Metal Jacket', 'Marriage Story',
'Hacksaw Ridge','Mad Max: Fury Road', 'Matrix Trilogy', 'Sonic The Hedgehog', 'Edge of Tomorrow', 'Whiplash', 'Nick and Norah\'s Infinite Playlist', 
'Dunkirk', 'Venom', '1917', 'Pawn Sacrifice', 'Source Code', 'The Place Beyond the Pines', 'Brothers', 'Ford v Ferrari',
'Snowpiercer', 'Green Street Holigans', 'The Shack', 'The Man from Earth', 'Spiderman Trilogy', 'Star Wars Movies', 'Forrest Gump', 
'Life is Beautiful', 'Batman Trilogy', 'The Truman Show', 'Drive', 'The Boy in the Striped Pyjamas', 'Transcendence', 'A Quiet Place',
'Batman: The Dark Knight Returns Part 1 & 2', 'Never Back Down 1 & 2', 'The Lord Of the Rings Trilogy', 'Hobbit Trilogy', 'Prince of Persia: The Sands of Time',
'Percy Jackson & the Olympians: The Lightning Thief', 'Harry Potter Movies', 'Passengers', 'First Man', 'The Notebook', 'Up',
'Once Upon a Time... in Hollywood', 'The Theory of Everything', 'Downfall', 'Ratatouille', 'WALL·E', 'Constantine', 'Pearl Harbor',
'Enemy at the Gates', 'Bird Box', 'Atonement', 'Blue Valentine', 'La La Land', 'Contact', 'Spider-Man: Into the Spider-Verse',
'Gravity', 'Ex Machina', 'Arrival', 'Back to the Future Trilogy', 'Blade Runner Movies', 'Oblivion', 'I, Robot', 
'Elysium', 'Pacific Rim', 'Chappie', 'District 9', '2001: A Space Odyssey', 'Watchmen', 'Crazy, Stupid, Love',
'Good Will Hunting', 'Eternal Sunshine of the Spotless Mind', 'Zootopia', '3 Idiots', 'I Am Legend', 'Lucy', 'The Imitation Game',
'Dead Poets Society', '127 Hours', 'Inception', 'Saving Private Ryan', 'The Martian', 'The Pianist', 'V for Vendetta',
'Bohemian Rhapsody', 'The Shawshank Redemption', 'The Pursuit of Happyness', 'The Green Mile']
let tvseries = ['Friends', 'The Office', 'How I Met Your Mother', 'Invincible', 'Key and Peele', 'After Life',
'The Falcon and the Winter Soldier', 'WandaVision', 'Brooklyn Nine-Nine', 'The Witcher', 'Solar Opposites', 'Cosmos: A Spacetime Odyssey',
'The Mandalorian', 'Oz', 'Agent Carter', 'Merlin', 'Inside Bill\'s Brain: Decoding Bill Gates', 'Smallville', 
'Rick and Morty', 'Taboo', 'The Big Bang Theory', 'Constantine', 'Avatar The Last Airbender', 'Sherlock', 'Black Mirror',
'The Pacific', 'Chernobly', 'Peaky Blinders', 'Sons of Anarchy', 'When They See Us', 'Devs', 'See', 'Generation War', 'Dogs of Berlin', 'You', 
'Band of Brothers', 'The Boys', 'Queens Gambit', '11.22.63']
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
    if(message.toLowerCase() === '!recommendmovie'){
        var movie_index=Math.floor(Math.random() * movies.length);
        client.say(channel, movies[movie_index]);
    }
    if(message.toLowerCase() === '!recommendtvseries'){
        var tvseries_index=Math.floor(Math.random() * tvseries.length);
        client.say(channel, tvseries[tvseries_index]);
    }
});
