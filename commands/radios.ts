import { IExecute } from "../interfaces/ICommands";
import { readFile } from "fs";
import data from "../radios.json"

export const name = "radios";
export const description = "List all radios";
export const execute:IExecute = async (client, message, args) => {
    //message.channel.send('pong!');
    var str = "";
    for(var radio in data){
        str += radio + "\n";
    }
    message.channel.send(str);
}