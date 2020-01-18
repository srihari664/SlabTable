import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlabDetailsComponent } from './slab/slab-details/slab-details.component';
import { SlabListComponent } from './slab/slab-list/slab-list.component';
import { UpdateSlabComponent } from './slab/update-slab/update-slab.component';

@NgModule({
  declarations: [
    AppComponent,
    SlabDetailsComponent,
    SlabListComponent,
    UpdateSlabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
