import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChangeThemeService {
  currentTheme = new BehaviorSubject<boolean>(true);

  constructor() {}
}
