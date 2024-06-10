import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = 'http://localhost:3000/api/items';

  constructor(private http: HttpClient) {}

  getItems(search?: string, sort?: string): Observable<any[]> {
    let params = new HttpParams();
    if (search) params = params.set('search', search);
    if (sort) params = params.set('sort', sort);

    return this.http.get<any[]>(this.apiUrl, { params });
  }

  getItemById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  createItem(item: any): Observable<any> {
    return this.http.post(this.apiUrl, item);
  }

  updateItem(id: string, item: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, item);
  }

  deleteItem(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}