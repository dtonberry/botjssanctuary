const { Client, Intents, MessageEmbed, DiscordAPIError, MessageActionRow, Message, MessageButton, MessageSelectMenu } = require('discord.js');
const hmtai = require('hmtai');
const Nuggies = require('nuggies');

//new instance
let client = new Client({ intents: [Intents.FLAGS.GUILDS] });

//run this only once, when the client is ready
client.once('ready', () => {
    console.log('Ready');
});

const token = process.env.TOKEN;

//login with the bot
client.login(token);

//do a command or something

client.on('interactionCreate', async interaction => {
    const embed = new MessageEmbed();
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'waifu') {

        embed.setImage(hmtai.wallpaper());
        // return interaction.channel.send(embed);

        await interaction.reply(hmtai.mobileWallpaper());
    } else if (commandName === 'erowaifu') {
        await interaction.reply({ content: hmtai.nsfw.hentai(), ephemeral: true });
    } else if (commandName === 'doggo') {} else if (commandName === 'raid') {
        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId('select')
                .setPlaceholder('Raid Stuff')
                .addOptions([{
                    label: 'Raid Days',
                    description: 'Days we raid this week',
                    value: 'raid_days'
                }, ]),
            );

        await interaction.reply({ rows: row });
    }
})
