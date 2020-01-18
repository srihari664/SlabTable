import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlabListComponent } from './slab/slab-list/slab-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'slabs', pathMatch: 'full' },
  { path: 'slabs', component: SlabListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
