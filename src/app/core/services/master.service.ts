import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/enviroments/environment.dev';
import { AuthenticateService } from 'src/app/modules/auth/services/authenticate.service';

@Injectable({
  providedIn: 'any',
  deps: [AuthenticateService]
})
export abstract class MasterService {

  protected readonly defaultHeaders = new HttpHeaders()
      .append('Authorization', `basic ` + btoa('codigo-x'))
      .append('Content-Type', 'text/plain');
  protected readonly defaultHeadersPublic = new HttpHeaders()
      .append('Content-Type', 'text/plain');
  protected readonly defaultBaseUrl = environment.apiUrl;
  protected readonly defaultBaseUrlPublic = `${environment.apiUrl}/public`;

  baseUrlMethod: string;

  constructor(protected auth: AuthenticateService) {
  }

}
