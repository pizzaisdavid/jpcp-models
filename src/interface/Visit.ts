
import { Bird } from './Bird';
import { Feeder } from './Feeder';

export interface Visit {
  bird: string | Bird;
  feeder: string | Feeder;
  visitTimestamp: number;
}