import { User } from "./user";

export interface Task {
    id: number;
    nom: string;
    dated: Date;
    datef: Date;
    etat: string;
    commercial: User;
    gerant: User; 
}
