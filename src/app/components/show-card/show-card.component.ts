import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-show-card',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.css'
})
export class ShowCardComponent {


  @Output()
  public deleteCard : EventEmitter<string> = new EventEmitter();


  @Input()
  public program: Show = {
    name: "",
    year: 0,
    episodes: 0,
    image: "",
    description: "",
    genre: "",
    likes: []
  };

  public select: boolean = false;

  public selectDesign(): void {
    this.select = !this.select;
  }

  public onDeleteCard() {
    this.deleteCard.emit(this.program.name);
  }

  
  
}
