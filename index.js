const { Client, GatewayIntentBits } = require('discord.js');
const fetch = require('node-fetch');  // Required for making HTTP requests to Discord's API

// Your bot's token and the user ID
const client = new Client({
  intents: [GatewayIntentBits.Guilds],  // Correct intent for Discord.js v14+
});

client.once('ready', async () => {
  console.log('Bot is online!');

  try {
    // Fetch the user profile
    const user = await client.users.fetch(process.env.DISCORD_USER_ID);  // Fetch the user using the ID
    const avatarUrl = user.displayAvatarURL({ format: 'png', size: 1024 });  // Fetch the avatar URL

    console.log('User Avatar URL:', avatarUrl);

    // Here you can store or update the avatar URL to a file or do other actions
    // For example, write it to a file for GitHub actions to pick up
    const fs = require('fs');
    fs.writeFileSync('avatar.txt', avatarUrl);  // Save avatar URL to a text file
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);  // Use the bot's token from the environment variable
