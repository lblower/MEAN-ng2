import { Component } from '@angular/core';
import { TodosService } from './service/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodosService]
})
export class AppComponent {
  title = 'Mean Stack';
}
