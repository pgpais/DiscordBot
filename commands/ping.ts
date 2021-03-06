import { IExecute } from "../interfaces/ICommands";

export const execute:IExecute = async (client, message, args) => {
    message.channel.send('pong!');
}

export const name = "ping";
export const description = "ping pong";

// module.exports = {
//     name: "ping",
//     description: "ping pong",
//     async execute(client, message, args) {
//         message.channel.send('pong!');
//     },
//   };