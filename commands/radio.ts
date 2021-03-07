import ytdl from "ytdl-core";
import { IExecute } from "../interfaces/ICommands";

export const name = "radio";
export const description = "radio stuff";
export const execute: IExecute = async (client, message, args: string[]) => {
  const voiceChannel = message.member.voice.channel;

  if (!voiceChannel)
    return message.channel.send("Join a voice channel you dweeb");

  const permissions = voiceChannel.permissionsFor(message.client.user);

  if (!permissions.has("CONNECT") || !permissions.has("SPEAK"))
    return message.channel.send("you don't have permissions");

  if (!args.length) return message.channel.send("Wrong number of args");

  // console.log(video.url);

  let radio: string = " ";

  switch (args[0].toLowerCase()) {
    case "bob":
      radio = process.env.DISCORD_BOB;
    default:
      break;
  }

  if (radio !== " ") {
    const connection = await voiceChannel.join();
    connection
      .play(ytdl(radio, { filter: "audioonly" }), { seek: 0, volume: 1 })
      .on("finish", () => {
        voiceChannel.leave();
      });

    await message.reply(`${args[0].toUpperCase()} is playing`);
  }
};
