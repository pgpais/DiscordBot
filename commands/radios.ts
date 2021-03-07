import { IExecute } from "../interfaces/ICommands";
import { readFile } from "fs";
import data from "../radios.json";

export interface Radio {
  id: string;
  link: string;
}


export const name = "radios";
export const description = "List all radios";
export const execute: IExecute = async (client, message, args) => {

  var str = "";
  for (var radio in data) {
    let stuff:Radio = JSON.parse(radio);
      
    str += stuff.id + "\n";
  }
  message.channel.send(str);
};
