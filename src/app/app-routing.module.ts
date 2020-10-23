import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
  {
    path:"", component:HomeComponent
},
{
  path:"about", component:AboutComponent
},
{
  path:"travel-list", component:TravelListComponent
},
{
  path:"insurance", component:InsuranceComponent 
},
{
  path:"travels/:travelId", component:TravelDetailsComponent
},
{
  path: 'cart', component: CartComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
