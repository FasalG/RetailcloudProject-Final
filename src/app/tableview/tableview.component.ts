import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';


@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.css'],
  providers:[ApiserviceService]
})
export class TableviewComponent implements OnInit {

  data:any;
  filteredDistricts: any; 


  

  constructor(private apiservice:ApiserviceService){
    
  }

  ngOnInit(): void {
    this.getData()
    
    
  }


  getData(){
    this.apiservice.getmedData().subscribe((d:any)=>{
        this.data=d
        console.log(this.data)
        this.filteredDistricts = Object.keys(this.data.summary).map((key) => ({
          name: key,
          details: this.data.summary[key],
        }));
        if (this.filteredDistricts) {
          localStorage.setItem('summary',JSON.stringify(this.filteredDistricts) )        }
        
    })
   

  
}

filedownload(){
  const csvData = this.filteredDistricts.map((data:any) => {
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

    // filterdistrict(){    
    //     this.filteredDistricts = Object.keys(this.data.summary).map((key) => ({
    //       name: key,
    //       details: this.data.summary[key],
    //     }));

    //     console.log(this.filteredDistricts)
    //   }
    
}
