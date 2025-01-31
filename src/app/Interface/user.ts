export interface User {
    id: number; 
    username?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    locationId?: number;
    location?: Location; 

}
