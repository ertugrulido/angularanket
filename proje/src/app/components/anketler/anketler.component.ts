import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Anketler } from 'src/app/models/anketler';
import { Kategori } from 'src/app/models/Kategori';
import { Modal } from 'bootstrap';
import * as bootstrap from 'bootstrap';
import { FbservisService } from 'src/app/services/fbservis.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-anketler',
  templateUrl: './anketler.component.html',
  styleUrls: ['./anketler.component.css']
})
export class AnketlerComponent implements OnInit {
  kategoriler!: Kategori[];
  modal!: Modal;
  modalBaslik: string = "";
  secAnket!: Anketler;
  mevcutAnketler!:Anketler[];

  frm: FormGroup = new FormGroup({
    anketAdi: new FormControl(),
    kayTarih: new FormControl(),
    duzTarih: new FormControl(),
  });

  duzenleForm: FormGroup = new FormGroup({
    anketAdi: new FormControl(),
  });
  constructor(
    public fbservis: FbservisService,
    public htoast: HotToastService
  ) { }

  ngOnInit() {
    this.anketListele();
  }

  Ekle(el: HTMLElement) {
    this.frm.reset();
    this.modal = new bootstrap.Modal(el);
    this.modalBaslik = "Anket Ekle";
    this.modal.show();
  }


  anketListele() {
    this.fbservis.AnketListele().subscribe(d => {
      this.mevcutAnketler = d;
    });
  }

  Kaydet() {
    var tarih = new Date();
    this.frm.value.kayTarih = tarih.getTime().toString();
    this.frm.value.duzTarih=tarih.getTime().toString();
    console.log(this.frm.value);
    this.fbservis.AnketEkle(this.frm.value)
      .pipe(
        this.htoast.observe({
          success: 'Anket Eklendi',
          loading: 'Anket Ekleniyor...',
          error: ({ message }) => `${message}`
        })
      )
      .subscribe();
      this.modal.toggle();
}
anketSil() {
  this.fbservis.AnketSil(this.secAnket).then(() => {
    this.modal.toggle();
  });
}

anketDuzenle() {
  var tarih = new Date();
  this.secAnket.duzTarih = tarih.getTime().toString();
  this.secAnket.anketAdi = this.duzenleForm.value.anketAdi;
  console.log(this.duzenleForm.value.anketAdi)
  this.fbservis.AnketDuzenle(this.secAnket).then(() => {

  });
}
Duzenle(anket: Anketler, el: HTMLElement) {
  this.frm.patchValue(anket);
  this.modalBaslik = "Anket Düzenle";
  this.modal = new bootstrap.Modal(el);
  this.secAnket = anket;
  this.modal.show();
}
Sil(anket: Anketler, el: HTMLElement) {
  this.secAnket = anket;
  this.modalBaslik = "Anket Sil";
  this.modal = new bootstrap.Modal(el);
  this.modal.show();
}

}