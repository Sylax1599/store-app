import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private storageService: StorageService) { }

  setJsonValue(key: string, value: any) {
    this.storageService.secureStorage.setItem(key, value);
  }
  getJsonValue(key: string) {
    return this.storageService.secureStorage.getItem(key);
  }
  clearStorage() {
    clearTimeout(this.storageService.secureStorage.getItem('IdTimeOut'));
    return this.storageService.secureStorage.clear();
  }

  removeItem(key: string) {
    return this.storageService.secureStorage.removeItem(key);
  }
}
