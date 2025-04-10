// index.js
const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once('ready', async () => {
  console.log('Bot is online!');

  try {
    const user = await client.users.fetch(process.env.DISCORD_USER_ID);
    const avatarUrl = user.displayAvatarURL({ format: 'png', size: 1024 });
    console.log('User Avatar URL:', avatarUrl);

    fs.writeFileSync('avatar.txt', avatarUrl);
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }

  // Exit so the workflow can commit the file
  process.exit(0);
});

client.login(process.env.DISCORD_BOT_TOKEN);
