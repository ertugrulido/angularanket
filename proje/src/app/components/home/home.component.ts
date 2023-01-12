import { HotToastService } from '@ngneat/hot-toast';
import { Gorev } from '../../models/Gorev';
import { FbservisService } from './../../services/fbservis.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mevcutGorevler: Gorev[] = [];
  eskiGorevler: Gorev[] = [];
  frm: FormGroup = new FormGroup({
    baslik: new FormControl(),
    aciklama: new FormControl(),
    tamam: new FormControl()
  });
  constructor(
    public fbservis: FbservisService,
    public htoast: HotToastService
  ) { }

  ngOnInit() {
    
  }
  
  
}
