import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SisendInformatsioon } from './content';
import { ApiService } from './api.service';

@Component({
  selector: 'api',
  templateUrl: './api.component.html',
  styleUrls: [ './api.component.scss' ],
  standalone: true,
  imports: [ CommonModule ]
  
})
export class ApiComponent {
  sisendInfo: SisendInformatsioon;

  constructor(public apiService: ApiService) {
    this.sisendInfo = {} as SisendInformatsioon;
  }

  sisendInfo2: string;
  //esimenesisend: any;
  //mudel: any;
  
  ngOnInit(): void {
    this.apiService.getUsers().subscribe((response: SisendInformatsioon) => {
      debugger;
      console.log("minu", response);
      this.sisendInfo = response?.results[0].model1y1;
      console.log("test2", this.sisendInfo); //peaks sama massiiv olema...
      console.log("täiendatud", this.sisendInfo);

      
      this.sisendInfo2 = JSON.stringify(this.sisendInfo);
      localStorage.setItem("jada", this.sisendInfo2);
    });
  }



}