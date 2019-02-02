import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { LinksComponent } from './links/links.component';

const routes: Routes = [{path:"home", component:ContentComponent},
{path:"link", component:LinksComponent},
{path:"disabled", component:ContentComponent},
{path:"nav", component:ContentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
