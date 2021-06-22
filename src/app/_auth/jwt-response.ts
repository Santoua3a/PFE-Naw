export class JwtResponse {
    accessToken!: string;
    type!: string;
    email!: string;
    authorities!: string[];
    roles!: string[];
}
