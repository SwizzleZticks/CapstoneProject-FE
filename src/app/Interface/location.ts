import { User } from "./user";

export interface Location {
    locationId:     number;     // Location ID for specified location
    city:           string;     // Requested City
    state:          string;     // Requested state
    users:           User[];    // Represents the ICollection<User> from Backend
}
