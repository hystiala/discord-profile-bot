// index.js
const { Client, Intents } = require('discord.js');
const fs = require('fs');
require('dotenv').config();

// Create a new Discord client
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', async () => {
    console.log('Logged in as ' + client.user.tag);

    // Replace with the actual Discord user ID you want to get the avatar for
    const userId = process.env.DISCORD_USER_ID;

    try {
        const user = await client.users.fetch(userId);
        const avatarUrl = user.displayAvatarURL({ size: 1024 });

        console.log('Avatar URL:', avatarUrl);

        // Save the avatar URL to a file
        fs.writeFileSync('avatar.txt', avatarUrl);

        console.log('Avatar URL has been saved to avatar.txt');
    } catch (error) {
        console.error('Error fetching avatar:', error);
    }
});

// Login using the Discord bot token
client.login(process.env.DISCORD_BOT_TOKEN);
