import { Injectable } from '@angular/core'; // Importamos el decorador Injectable para definir un servicio que se puede inyectar en otros componentes
import { HttpClient } from '@angular/common/http'; // Importamos el cliente HTTP para realizar peticiones HTTP
import { Observable } from 'rxjs'; // Importamos la clase Observable para trabajar con observables

// Definimos el servicio ItemService que se proporciona en el árbol de inyección de dependencias en la raíz de la aplicación
@Injectable({
  providedIn: 'root',
})
export class ItemService {
  // URL base para las peticiones HTTP a la API de items
  private apiUrl = 'http://localhost:3000/api/items';

  // Constructor del servicio que inyecta el cliente HTTP
  constructor(private http: HttpClient) {}

  // Método que devuelve una observable que contiene la lista de items
  getItems(): Observable<any> {
    // Realizamos una petición GET a la URL base para obtener la lista de items
    return this.http.get(this.apiUrl);
  }

  // Método que devuelve una observable que contiene un item específico por su ID
  getItemById(id: string): Observable<any> {
    // Construimos la URL para la petición GET con el ID del item
    const url = `${this.apiUrl}/${id}`;
    // Realizamos la petición GET a la URL construida
    return this.http.get(url);
  }

  // Método que crea un nuevo item y devuelve una observable que contiene el resultado
  createItem(item: any): Observable<any> {
    // Realizamos una petición POST a la URL base con el item a crear
    return this.http.post(this.apiUrl, item);
  }

  // Método que actualiza un item existente y devuelve una observable que contiene el resultado
  updateItem(id: string, item: any): Observable<any> {
    // Construimos la URL para la petición PUT con el ID del item
    const url = `${this.apiUrl}/${id}`;
    // Realizamos la petición PUT a la URL construida con el item actualizado
    return this.http.put(url, item);
  }

  // Método que elimina un item existente y devuelve una observable que contiene el resultado
  deleteItem(id: string): Observable<any> {
    // Construimos la URL para la petición DELETE con el ID del item
    const url = `${this.apiUrl}/${id}`;
    // Realizamos la petición DELETE a la URL construida
    return this.http.delete(url);
  }
}