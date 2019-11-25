import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(private _http: HttpClient) { }


  /**
   * Get people from remote
   */
  getPeople(): Observable<any> { 
    return this._http.get(environment.getPeople);
  }

}
