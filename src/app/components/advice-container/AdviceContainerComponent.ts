import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-advice-container',
  standalone: true,
  imports: [],
  templateUrl: './advice-container.component.html',
  styleUrl: './advice-container.component.scss'
})
export class AdviceContainerComponent implements OnInit {

  constructor(private api: ApiService) { }

  public advice:any;
  public generatedNumber: number = 1;

  ngOnInit() {
    this.getChar(this.generatedNumber);
  }



  public generateAdvice() {
    this.generatedNumber = Math.floor(Math.random() * 224) + 1;
    this.getChar(this.generatedNumber);
  }

  getChar(id: number){
    this.api.getAdvice(id).subscribe({
      next: (res) => {
        this.advice = res.slip;
      },
      error: (err) => {console.log(err)}
    });
  }
}
