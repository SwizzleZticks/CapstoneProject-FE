import {Location} from './location';

export interface User {
    username?:  string;
    password?:  string;
    firstName?: string;
    lastName?:  string;
    email?:     string;
    locations:  Location[];
    token: string;
}
