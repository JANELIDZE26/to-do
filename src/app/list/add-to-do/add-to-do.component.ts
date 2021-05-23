import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ChangeThemeService } from '../../services/change-theme.service';

import { ToDo } from '../../models/Todo.model';

export enum Status {
  completed,
  active,
}

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss'],
})
export class AddToDoComponent implements OnInit {
  themeIsLight$ = this.themeService.currentTheme;
  newToDo: string | undefined;
  @Output() addToDo = new EventEmitter<ToDo>();
  @ViewChild('input') input!: ElementRef;

  constructor(private themeService: ChangeThemeService) {}

  ngOnInit(): void {}

  onAddToDo(): void {
    if (this.newToDo && this.input.nativeElement.value) {
      console.log(this.newToDo);
      this.addToDo.emit(new ToDo(this.newToDo, Status.active));
      this.input.nativeElement.value = '';
    }
  }
}
