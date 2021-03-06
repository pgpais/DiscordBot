const fs = require("fs");

module.exports = (client, Discord) => {
  const command_files = fs
    .readdirSync("./commands/")
    .filter((file) => file.endsWith(".ts"));

  for (const file of command_files) {
    console.log(file);
    const command = require(`../commands/${file}`);
    if (command.name) {
      client.commands.set(command.name, command);
    } else continue;
  }
};
