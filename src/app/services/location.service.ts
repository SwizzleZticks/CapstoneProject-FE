import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '../interfaces/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private baseUrl = 'http://localhost:5001/api/Location'; 

  private states: string[] = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID',
    'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',
    'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK',
    'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV',
    'WI', 'WY'
  ];

  constructor(private http: HttpClient) {}

  getAllLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.baseUrl);
  }

  getLocationById(id: number): Observable<Location> {
    return this.http.get<Location>(`${this.baseUrl}/${id}`);
  }

  addLocation(newLocation: Location): Observable<Location> {
    return this.http.post<Location>(this.baseUrl, newLocation);
  }

  deleteLocation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getStates(): string[] {
    return this.states;
  }
}
