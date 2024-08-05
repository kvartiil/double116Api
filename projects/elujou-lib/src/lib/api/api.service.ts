import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { SisendInformatsioon } from './content';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<SisendInformatsioon> {
    const url = 'https://randomapi.com/api/63o7ci12?key=FD5H-6GAY-LIWY-U43A';
    return this.http.get<SisendInformatsioon>(url);
  }
} 