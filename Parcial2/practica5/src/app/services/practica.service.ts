import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PracticaService {

  private couchDbUrl = 'http://localhost:5984/apostador';


  private getHttpOptions(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('admin:1234')
    })
    return {headers};
  }


  constructor(private http: HttpClient) { }

  addDocument(doc:any): Observable<any>
  {
    return this.http.post(this.couchDbUrl, doc, this.getHttpOptions());
  }
  getDocument(id:string ): Observable<any>
  {
    return this.http.get(`${this.couchDbUrl}/${id}`, this.getHttpOptions());
  }
  updateDocument( id:string, doc:any): Observable<any>
  {
    return this.http.put(`${this.couchDbUrl}/${id}`, doc, this.getHttpOptions());
  }
  deleteDocument( id:string, rev:string  ): Observable<any>
  {
    return this.http.delete(`${this.couchDbUrl}/${id}?rev=${rev}`, this.getHttpOptions());
  }
  getAlldocuments(): Observable<any>
  {
    return this.http.get(`${this.couchDbUrl}/_all_docs?include_docs=true`, this.getHttpOptions());
  }

}