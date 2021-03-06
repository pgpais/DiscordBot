module.exports = {
    name: "ping",
    description: "ping pong",
    async execute(client, message, args) {
        message.channel.send('pong!');
    },
  };