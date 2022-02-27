require('dotenv').config()
const {
  Client,
  Intents
} = require('discord.js');

const bot = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]
});

bot.on('ready', () => {
  console.log(`Bot ${bot.user.tag} is logged in!`);
})

bot.login(process.env.BOT_TOKEN)

bot.on('guildMemberAdd', (member) => {
  const channelId = '947493723493789727';
  const welcomeMessage = `Hey <@${member.id}>! Welcome to Snoozle Studio NFT server!`;
  member.guild.channels.fetch(channelId).then(channel =>{
    channel.send(welcomeMessage)
  });
});