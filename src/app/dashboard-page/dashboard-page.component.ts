import { MyServiceService } from './../my-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  countries =[];
  selectedCountries = [];
  itemsCopy = [];
  NameOfTheMostPop ="";
  NameofTheLeastPop = "";
  MostHb:any = "";
  LeastHb:any = "";
  sortedCountries = [];
  DifferanceInPop:any = 0;
  @Input() search='';
  countriesCounter = 0;

  constructor(private service: MyServiceService) { }

  ngOnInit() {
    this.service.getCountries().subscribe(
      (responsiveData) => {
        for(let key in responsiveData){
          this.countries.push({Name: responsiveData[key].name, Population: responsiveData[key].population})
        }
        
      }
    )
  }

  addCountry(name:string, pop:string) {
      this.selectedCountries.push({Name: name, Population: pop});
      this.countriesCounter++;
      if(this.selectedCountries.length > 4){
        return;
      }
      console.log(this.selectedCountries);
  }

  onSubmit(form: NgForm) {
    //1.Sorting countries from most hab to least hab
    //2.Pushing that countries in sortedCountries Array
    //3.Because The First item in the array is with the highest population i simply put that to be = to prop nameofthemostpop and mosthb
    //4.I extract last item in the array because that item is with lower populations

      //1.)
     let sorted = this.selectedCountries.sort((a,b) => {
         return b.Population - a.Population
     });

      //2.)
      for(let key in sorted){
        this.sortedCountries.push({name: sorted[key].Name, pop: sorted[key].Population})
      }

      //3.)
      this.NameOfTheMostPop = this.sortedCountries[0].name;
      this.MostHb = this.sortedCountries[0].pop;

      //4.)
      this.LeastHb = this.selectedCountries[this.selectedCountries.length - 1].Population;
      this.NameofTheLeastPop = this.selectedCountries[this.selectedCountries.length - 1].Name;     
      this.DifferanceInPop = this.MostHb - this.LeastHb;
  }

  //for searching using a filter method with localelowercase
  SearchCounty() {
    if(this.search != "") {
      this.countries = this.countries.filter( res => {
        return res.Name.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
      })
    }else if(this.search == ""){
      this.ngOnInit();
    }
  }

  //reseting whole page
  ResetForm() {
    window.location.reload();
  }
}
