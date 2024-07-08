import { Component, computed, effect, EffectRef, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

  derivedCounter =  computed(() => {

    const counter = this.counterService.counter();
    return counter * 10;
    
  })



  constructor(public counterService: CounterService){


  }

  increment() {


    this.counterService.increment();

  }




}
