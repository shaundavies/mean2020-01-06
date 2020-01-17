import { Component } from "@angular/core";
import { HttpService } from "./http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  tasks = [];
  taskToShowDetailsFor = {};
  newTask = {
    title: "",
    description: "",
    completed: false
  };

  constructor(private _http: HttpService) {}

  getTasksOnClick() {
    this._http.getTasks().subscribe((tasks: any) => {
      console.log("tasks object: ", tasks);
      this.tasks = tasks["tasks"];
    });
  }

  showTaskDetails(task) {
    console.log("the task you found is: ", task);
    this.taskToShowDetailsFor = task;
  }

  handleSubmit() {
    console.log("submitted!");
    this._http.createTask(this.newTask).subscribe((task: any) => {
      console.log("created task: ", task);
      this.newTask = {
        title: "",
        description: "",
        completed: false
      };
    });
  }
}
