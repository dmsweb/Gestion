export class User {
    id:       number;
    username: string;
    password: string;
    isActive: boolean;
    profile:  string;
    token?:   string;
    roles?:    string[];
}
