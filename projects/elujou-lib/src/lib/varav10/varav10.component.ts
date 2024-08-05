import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { MaakComponent } from '../maak/maak.component';
import { Maak1Component } from '../maak1/maak1.component';
import { Maak2Component } from '../maak2/maak2.component';
import { Maak3Component } from '../maak3/maak3.component';
import { Maak4Component } from '../maak4/maak4.component';
import { Maak5Component } from '../maak5/maak5.component';
import { Maak6Component } from '../maak6/maak6.component';
import { Maak7Component } from '../maak7/maak7.component';
import { Maak8Component } from '../maak8/maak8.component';
import { Maak9Component } from '../maak9/maak9.component';
import { Maak10Component } from '../maak10/maak10.component';
import { Maak11Component } from '../maak11/maak11.component';
import { Maak12Component } from '../maak12/maak12.component';
import { Maak13Component } from '../maak13/maak13.component';
import { Maak14Component } from '../maak14/maak14.component';
import { Maak15Component } from '../maak15/maak15.component';

@Component({
  selector: 'varav10',
  templateUrl: './varav10.component.html',
  styleUrls: ['./varav10.component.scss'],
  standalone: true,
  imports: [CommonModule, NgClass, MaakComponent, Maak1Component, Maak2Component, Maak3Component, Maak4Component, Maak5Component, Maak6Component, Maak7Component, Maak8Component, Maak9Component, Maak10Component, Maak11Component, Maak12Component, Maak13Component, Maak14Component, Maak15Component]
})
export class Varav10Component {
  currentIndex;

  sections = [
    {
      name: 'Maakondlike arenduskeskuste võrgustik', //https://www.arenduskeskused.ee/
      content: 'Content 1'
    },
    {
      name: 'Harju Ettevõtlus- ja Arenduskeskus', //https://www.heak.ee/
      content: '<progn1-component></progn1-component>'
    },
    {
      name: 'Hiiumaa Arenduskeskus',  //https://hiiumaaarenduskeskus.ee/
      content: ''
    },
    {
      name: 'Ida-Viru Ettevõtluskeskus', //https://ivek.ee/
      content: ''
    },
    {
      name: 'Jõgevamaa Arendus- ja Ettevõtluskeskus',  //https://www.jaek.ee/
      content: ''
    },
    {
      name: 'Sihtasutus Järvamaa',  //https://jarva.kovtp.ee/kontakt/
      content: ''
    },
    {
      name: 'Sihtasutus Läänemaa',  //https://laanemaa.ee/sihtasutus-laanemaa/organisatsioon/
      content: ''
    },
    {
      name: 'Lääne-Viru Omavalitsuste Liit',  //https://www.virol.ee/buroo
      content: ''
    },
    {
      name: 'Pärnumaa Arenduskeskus',  //https://arenduskeskus.eu/
      content: ''
    },
    {
      name: 'Põlvamaa Arenduskeskus',  //https://arenduskeskus.polvamaa.ee/arenduskeskus/
      content: ''
    },
    {
      name: 'Raplamaa Arendus- ja Ettevõtluskeskus',  //https://raek.ee/
      content: ''
    },
    {
      name: 'Saare Arenduskeskus',  //https://sasak.ee/est
      content: ''
    },
    {
      name: 'Tartu Ärinõuandla',  //https://arinouandla.ee/
      content: ''
    },
    {
      name: 'Valgamaa Arenguagentuur',  //https://www.arenguagentuur.ee/
      content: ''
    },
    {
      name: 'Viljandimaa Arenduskeskus',  //https://arenduskeskus.viljandimaa.ee/tutvustus
      content: ''
    },
    {
      name: 'Võrumaa Arenduskeskus',  //https://vorumaa.ee/
      content: ''
    }

  ];
  showComponent1: boolean = false;
  showComponent2: boolean = false;
  showComponent3: boolean = false;
  showComponent4: boolean = false;
  showComponent5: boolean = false;
  showComponent6: boolean = false;
  showComponent7: boolean = false;
  showComponent8: boolean = false;
  showComponent9: boolean = false;
  showComponent10: boolean = false;
  showComponent11: boolean = false;
  showComponent12: boolean = false;
  showComponent13: boolean = false;
  showComponent14: boolean = false;
  showComponent15: boolean = false;
  showComponent16: boolean = false;

  expand(index) {
    if(this.currentIndex === index) {
      this.currentIndex = null;
      return;
    }
    this.currentIndex = index;
    //alert(this.currentIndex);
    
    if ( this.currentIndex === 0) {
      this.showComponent1 = true;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
      this.showComponent13 = false;
      this.showComponent14 = false;
      this.showComponent15 = false;
      this.showComponent16 = false;
    }
    else if ( this.currentIndex === 1) {
      this.showComponent1 = false;
      this.showComponent2 = true;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
      this.showComponent13 = false;
      this.showComponent14 = false;
      this.showComponent15 = false;
      this.showComponent16 = false;
    }
    else if ( this.currentIndex === 2) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = true;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
      this.showComponent13 = false;
      this.showComponent14 = false;
      this.showComponent15 = false;
      this.showComponent16 = false;
    }
    else if ( this.currentIndex === 3) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = true;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
      this.showComponent13 = false;
      this.showComponent14 = false;
      this.showComponent15 = false;
      this.showComponent16 = false;
    }
    else if ( this.currentIndex === 4) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = true;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
      this.showComponent13 = false;
      this.showComponent14 = false;
      this.showComponent15 = false;
      this.showComponent16 = false;
    }
    else if ( this.currentIndex === 5) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = true;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
      this.showComponent13 = false;
      this.showComponent14 = false;
      this.showComponent15 = false;
      this.showComponent16 = false;
    }
    else if ( this.currentIndex === 6) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = true;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
      this.showComponent13 = false;
      this.showComponent14 = false;
      this.showComponent15 = false;
      this.showComponent16 = false;
    }
    else if ( this.currentIndex === 7) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = true;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
      this.showComponent13 = false;
      this.showComponent14 = false;
      this.showComponent15 = false;
      this.showComponent16 = false;
    }
    else if ( this.currentIndex === 8) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = true;
      this.showComponent10 = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
      this.showComponent13 = false;
      this.showComponent14 = false;
      this.showComponent15 = false;
      this.showComponent16 = false;
    }
    else if ( this.currentIndex === 9) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = true;
      this.showComponent11 = false;
      this.showComponent12 = false;
      this.showComponent13 = false;
      this.showComponent14 = false;
      this.showComponent15 = false;
      this.showComponent16 = false;
    }
    else if ( this.currentIndex === 10) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11 = true;
      this.showComponent12 = false;
      this.showComponent13 = false;
      this.showComponent14 = false;
      this.showComponent15 = false;
      this.showComponent16 = false;
    }
    else if ( this.currentIndex === 11) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11 = false;
      this.showComponent12 = true;
      this.showComponent13 = false;
      this.showComponent14 = false;
      this.showComponent15 = false;
      this.showComponent16 = false;
    }
    else if ( this.currentIndex === 12) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
      this.showComponent13 = true;
      this.showComponent14 = false;
      this.showComponent15 = false;
      this.showComponent16 = false;
    }
    else if ( this.currentIndex === 13) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
      this.showComponent13 = false;
      this.showComponent14 = true;
      this.showComponent15 = false;
      this.showComponent16 = false;
    }
    else if ( this.currentIndex === 14) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
      this.showComponent13 = false;
      this.showComponent14 = false;
      this.showComponent15 = true;
      this.showComponent16 = false;
    }
    else if ( this.currentIndex === 15) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
      this.showComponent6 = false;
      this.showComponent7 = false;
      this.showComponent8 = false;
      this.showComponent9 = false;
      this.showComponent10 = false;
      this.showComponent11 = false;
      this.showComponent12 = false;
      this.showComponent13 = false;
      this.showComponent14 = false;
      this.showComponent15 = false;
      this.showComponent16 = true;
    }
  }

}