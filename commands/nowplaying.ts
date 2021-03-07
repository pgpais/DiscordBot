import axios from "axios";
import { IExecute } from "../interfaces/ICommands";
import data from "../radios.json";

export const name = "nowplaying";
export const description = "get what is playing";
export const execute: IExecute = async (client, message, args) => {
  //message.channel.send('pong!');
  let radio = data[args.join(" ").toUpperCase()];
  let radioId = radio.id;

  const url: string = `https://prod.radio-api.net/stations/now-playing?stationIds=${radioId}`;

  try {
    const response = await axios.get(url);
    message.channel.send(response.data[0].title);
  } catch (exception) {
    process.stderr.write(`ERROR received from ${url}: ${exception}\n`);
  }
};
