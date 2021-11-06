const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
        new SlashCommandBuilder().setName('waifu').setDescription('Replies with a waifu!'),
        new SlashCommandBuilder().setName('erowaifu').setDescription('Replies with a naked waifu doing unspeakable things!'),
        new SlashCommandBuilder().setName('doggo').setDescription('Replies with a cute doggo to make your day.'),
        new SlashCommandBuilder().setName('raid').setDescription('Useful raid stuff.')

    ]
    .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);