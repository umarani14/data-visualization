import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableauComponent } from './tableau/tableau.component';
import { VizhubComponent } from './vizhub/vizhub.component';
import { PythonComponent } from './python/python.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'home', component:HomeComponent },
  { path:'tableau', component:TableauComponent },
  { path:'vizhub', component:VizhubComponent},
  { path:'python', component:PythonComponent},
  { path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
