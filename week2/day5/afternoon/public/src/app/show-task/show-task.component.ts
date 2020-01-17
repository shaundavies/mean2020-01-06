import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-show-task",
  templateUrl: "./show-task.component.html",
  styleUrls: ["./show-task.component.css"]
})
export class ShowTaskComponent implements OnInit {
  @Input() theTaskToShow;

  constructor() {}

  ngOnInit() {}
}
