import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '../interfaces/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private http = inject(HttpClient);
  baseUrl = 'https://localhost:7074/api/locations/';

  getAllLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.baseUrl);
  }

  getLocationById(id: number): Observable<Location> {
    return this.http.get<Location>(`${this.baseUrl}${id}`);
  }

  addLocation(newLocation: Location): Observable<Location> {
    return this.http.post<Location>(this.baseUrl, newLocation);
  }

 /* updateLocation(updatedLocation: Location): Observable<Location> {
    return this.http.put<Location>(`${this.baseUrl}${updatedLocation.locationId}`, updatedLocation);
  }*/

  deleteLocation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${id}`);
  }
}
