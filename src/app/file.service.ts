import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FileService {
    private requestHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
    this.requestHeaders = new HttpHeaders();
    this.requestHeaders.append('Content-Type', 'application/json');
    this.requestHeaders.append('Accept', 'application/json');
  }

  downloadFile(url: string){
      console.log(url)
		// return this.http.get('http://localhost:8080/employees/download', { headers: this.requestHeaders, responseType: ArrayBuffer });
   }
}