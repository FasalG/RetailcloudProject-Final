import { Component, OnInit } from '@angular/core';
import { ngxCsv } from 'ngx-csv';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  filtereddata:any=localStorage.getItem('summary')

  summarydata:any

  

  ngOnInit(): void {
      if (this.filtereddata) {
        this.summarydata=JSON.parse(this.filtereddata)        
      }
      console.log(this.summarydata)
  }


  filedownload(){
    const csvData = this.summarydata.map((data:any) => {
      return {
        District: data.name,
        Confirmed: data.details.confirmed,
        Recovered: data.details.recovered,
        Active: data.details.active,
        Deceased: data.details.deceased,
        TotalObservations: data.details.home_obs,
        HomeObservation:data.details.hospital_obs,
        HospitalObservation:data.details.recovered,
        HospitalityToday:data.details.total_obs
  
     
      };
    });
  
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Report Data',
      useBom: true,
      noDownload: false,
      headers: ["District", " Confirmed", "Recovered", "Active","Deceased", "Total Observations","Home Observation", "Hospital Observation" ,"Hospitality Today" ]
    };
   
    new ngxCsv(csvData, 'report', options);
  }
 
}
