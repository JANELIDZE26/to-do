import { Component, OnInit } from '@angular/core';
import { ChangeThemeService } from '../services/change-theme.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  themeIsLight$ = this.themeService.currentTheme;

  constructor(private themeService: ChangeThemeService) {}

  ngOnInit(): void {}
}
