import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
 
  modal:boolean=false

  constructor(){}

  filtereddata:any=localStorage.getItem('summary')

  summarydata:any

  

  ngOnInit(): void {
      if (this.filtereddata) {
        this.summarydata=JSON.parse(this.filtereddata)        
      }
      console.log(this.summarydata)
  }




  modalToggle(){
    this.modal=!this.modal
  }
 
  check:boolean=false
  testarray:any

  selectedDistrict(event: any){
    if (event) {

      this.testarray=event.target.value
      console.log(this.testarray)
      this.check=true
    } else {
      console.log("errro")
    }  
        
    
  }

}
