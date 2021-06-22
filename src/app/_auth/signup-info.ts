export class SignUpInfo {
    nom: string;
    prenom : string;
    username: string;
    email: string;
    roles: string[];
    password: string;

    constructor(nom: string, prenom: string,username: string, email: string, password: string) {
        this.nom = nom;
        this.prenom = prenom;
        this.username = username;
        this.email = email;
        this.password = password;
        this.roles= ['user'];
    }
}
