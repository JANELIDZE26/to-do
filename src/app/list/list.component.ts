import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeThemeService } from '../services/change-theme.service';
import { ToDo } from '../models/Todo.model';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Status } from './add-to-do/add-to-do.component';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('fade', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(200)]),
    ]),
  ],
})
export class ListComponent implements OnInit {
  themeIsLight$ = this.themeService.currentTheme;
  toDoArr: ToDo[] = [];
  actives = 0;
  filterValue!: number | string;

  constructor(
    private themeService: ChangeThemeService,
    private router: ActivatedRoute
  ) {}

  get completed(): number {
    return Status.completed;
  }

  get active(): number {
    return Status.active;
  }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params: Params) => (this.filterValue = params.status)
    );
  }

  drop(event: CdkDragDrop<string[]>): void {
    if (this.toDoArr) {
      moveItemInArray(this.toDoArr, event.previousIndex, event.currentIndex);
    }
  }

  onAdd(event: ToDo): void {
    if (this.toDoArr) {
      this.toDoArr.unshift(event);
    }
    this.actives++;
  }

  onDelete(todo: ToDo, index: number): void {
    console.log(todo);
    this.toDoArr.splice(this.toDoArr.indexOf(todo), 1);
    if (todo.status === Status.active) {
      this.actives--;
    }
  }

  onClearCompleted(): void {
    this.toDoArr = this.toDoArr.filter((todo) => todo.status === Status.active);
  }

  updateStatus(todo: ToDo): void {
    if (todo.status === Status.completed) {
      todo.status = Status.active;
      this.actives++;
    } else {
      todo.status = Status.completed;
      this.actives--;
    }
  }
}
