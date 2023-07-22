import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetTextService {

  private textOne: String = "Thats the first text to try.";
  private textTwo: String = "Thats the second text to try.";
  private textArray = [this.textOne, this.textTwo];

  constructor() { }

   private randomNumber(min: number, max: number) {
      return Math.random() * (max - min) + min;
  }
  public getText() {
      const index = Math.floor(Math.random() * this.textArray.length)
      
      return this.textArray[index];
 }
}