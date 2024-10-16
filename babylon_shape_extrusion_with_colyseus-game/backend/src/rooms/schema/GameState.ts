import { Schema, MapSchema, type, ArraySchema, filter } from '@colyseus/schema';
import gameConfig from '../../game.config';


export class Player extends Schema {

  @type("number") x: number;
  @type("number") y: number;
  @type("number") z: number;
  
}

export class GameState extends Schema {
  @type({ map: Player }) players = new MapSchema<Player>();
}

