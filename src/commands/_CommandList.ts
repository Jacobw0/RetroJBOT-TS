import { CommandInterface } from "../interfaces/command";
import { ping } from "./ping.js";
import { binarytotext } from "./binarytotext.js";
import { about } from "./about.js";
import { help } from "./help.js";
import { dice } from "./dice.js";
import { uselessweb } from "./uselessweb.js";


export const CommandList: CommandInterface[] = [ping, binarytotext, about, help, dice, uselessweb];
