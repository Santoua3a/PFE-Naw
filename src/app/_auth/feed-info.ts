export class FeedInfo {
    username! : string;
    msg! : string;

    constructor(username: string, msg: string){
        this.username=username;
        this.msg=msg;
    }
}