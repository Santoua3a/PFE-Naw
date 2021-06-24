export class JwtResponse {
    accessToken!: string;
    type!: string;
    email!: string;
    nom!:string;
    prenom!:string;
    password!:string;
    authorities!: string[];
    role: string="";
    roles!: string[];
}
