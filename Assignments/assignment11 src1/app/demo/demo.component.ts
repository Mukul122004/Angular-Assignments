import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmatic.service';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers : [ArithmeticService]
})
export class DemoComponent 
{
  public Result1 : number;
  public Result2 : number; 

  constructor(private obj : ArithmeticService)
  {
    this.Result1 = 0;
    this.Result2 = 0;
    this.Result1 = this.obj.Add(1, 11);
    this.Result2 = this.obj.Subtract(22, 11);
  }
}