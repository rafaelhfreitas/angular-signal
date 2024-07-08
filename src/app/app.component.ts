import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

  counter = signal(0);


  course = signal({
    id: 1,
    title: "Angular for Beginners"
  })


  courses = signal([
    "Angular For Beginners",
    "Reactive Angular Course"
  ])

  constructor(){


    const readOnly = this.counter.asReadonly();
  }

  increment() {

    //this.counter.set(this.counter() + 1);

    this.counter.update(val => val + 1);

    // avoid update signal properties directly
    //this.course().title = "Hello World";

    this.course.set({
      id: 1,
      title: "Hello World"
    })

    // avoid update signal properties directly
    //this.courses().push("Angular Core Deep Dive");

    this.courses.update(courses => [...courses, "Angular Core Deep Dive"]);

  }
}
