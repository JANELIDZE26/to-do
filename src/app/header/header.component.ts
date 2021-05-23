import { Component, OnInit } from '@angular/core';
import { ChangeThemeService } from '../services/change-theme.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  themeLight = true;
  isScreenSmall = false;
  constructor(
    private themeService: ChangeThemeService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.breakpointObserver.observe('(max-width: 768px)').subscribe(value => this.isScreenSmall = value.matches);
  }

  onChangeTheme(): void {
    this.themeLight = !this.themeLight;
    this.themeService.currentTheme.next(this.themeLight);
  }
}
