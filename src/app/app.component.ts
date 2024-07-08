import { Component, computed, effect, EffectRef, signal } from '@angular/core';
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
  multiplier: number = 0;
  effectRef: EffectRef;

  derivedCounter =  computed(() => {

    const counter = this.counter();  

    if (this.multiplier >= 10) {

      return counter * 10;

    } else {
      return 0;
    }
    
  })

  course = signal({
    id: 1,
    title: "Angular for Beginners"
  })

  courses = signal([
    "Angular For Beginners",
    "Reactive Angular Course"
  ])

  constructor(){

    //signal api asReadonly() method returns a signal copy as read only true
    //const readOnly = this.counter.asReadonly();

    this.effectRef = effect( (onCleanUp) => {

      onCleanUp(() => {
        console.log(`Cleanup occoured`);
      })

      const counterValue = this.counter();

      const derivedCounterValue = this.derivedCounter();

      console.log(` counter: ${counterValue} / derived counter: ${derivedCounterValue}`);
    }, {
      manualCleanup: true
    })


  }

  increment() {

    //this.counter.set(this.counter() + 1);

    this.counter.update(val => val + 1);

    // avoid update signal properties directly
    //this.course().title = "Hello World";
    //this.courses().push("Angular Core Deep Dive");

    this.course.set({
      id: 1,
      title: "Hello World"
    })

    this.courses.update(courses => [...courses, "Angular Core Deep Dive"]);

  }


  incrementMultiplier(){
    this.multiplier++;
  }


  onCleanUp(){

      this.effectRef.destroy();
  }
}
