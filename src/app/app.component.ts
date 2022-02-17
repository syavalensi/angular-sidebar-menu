import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-menu-inline',
  template: `
    <ul nz-menu nzMode="inline">
      <li nz-submenu nzTitle="Laman Utama" nzIcon="home"></li>
        <ul>
         <li nz-submenu nzTitle="STESEN" nzIcon="inbox" nzOpen>
            <ul>
              <li nz-menu-item nzSelected>Stesen Imbasan</li>
              <li nz-menu-item>Stesen Indeks</li>
              <li nz-menu-item>Stesen QC</li>
              <li nz-menu-item>Paparan Muat Naik</li>
            </ul>
          </li>
        </ul>

        <ul>
         <li nz-submenu nzTitle="DOKUMEN" nzIcon="inbox" nzOpen>
            <ul>
              <li nz-menu-item nzSelected>Dokumen Imbasan</li>
              <li nz-menu-item>Dokumen Indeks</li>
              <li nz-menu-item>Dokumen QC</li>
              <li nz-menu-item>Paparan Muat Naik</li>
            </ul>
          </li>
        </ul>

        <ul>
         <li nz-submenu nzTitle="PAPARAN" nzIcon="inbox" nzOpen>
            <ul>
              <li nz-menu-item nzSelected>Paparan Imbasan</li>
              <li nz-menu-item>Paparan Indeks</li>
              <li nz-menu-item>Paparan QC</li>
              <li nz-menu-item>Paparan Muat Naik</li>
            </ul>
          </li>
        </ul>

        <ul>
        <li nz-submenu nzTitle="CETAK" nzIcon="printer" nzOpen>
           <ul>
             <li nz-menu-item nzSelected>Cetak Surat Akuan</li>
             <li nz-menu-item>Cetak Template</li>
           </ul>
         </li>
       </ul>
      
      <li nz-submenu nzTitle="LAPORAN" nzIcon="audit" nzOpen>
        <ul>
          <li nz-menu-item>Ringkasan Kelompok</li>
          <li nz-menu-item>Laporan HQ</li>
          <li nz-submenu nzTitle="Produktiviti">
            <ul>
              <li nz-menu-item>Imbasan</li>
              <li nz-menu-item>Indeks</li>
              <li nz-menu-item>Kawalan Kualiti</li>
              <li nz-menu-item>Semua</li>
            </ul>
          </li>
        </ul>
      </li>
      <li nz-submenu nzTitle="Penyelenggaraan" nzIcon="setting">
        <ul>
          <li nz-menu-item>Kategori Organisasi</li>
          <li nz-menu-item>Kategori Dokumen</li>
          <li nz-menu-item>Cawangan</li>
          <li nz-menu-item>Unit</li>
          <li nz-menu-item>Akses Pengguna</li>
          <li nz-menu-item>E-Polisi JDP</li>
        </ul>
      </li>
    </ul>
  `,
  styles: [
    `
      [nz-menu] {
        width: 240px;
      }
    `
  ]
})
export class NzDemoMenuInlineComponent {}
