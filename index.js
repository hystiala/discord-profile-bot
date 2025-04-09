const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

const client = new Client({ intents: [] });  // No intents needed!

// Use GitHub secret for the bot token
const token = process.env.DISCORD_BOT_TOKEN;  // Fetches token from GitHub Secrets
const userId = '1025536714590146601'; // Your friend's Discord ID

client.once('ready', async () => {
  console.log('Bot is online!');

  const user = await client.users.fetch(userId);

  const avatarUrl = user.displayAvatarURL({ format: 'png', size: 1024 });

  console.log('Avatar URL:', avatarUrl);

  // Save to file
  fs.writeFileSync('avatar.txt', avatarUrl);

  process.exit(); // Exit after saving
});

client.login(token);
