import { NgModule } from '@angular/core';
import { Routes, RouterModule, NavigationStart, Router } from '@angular/router';

import { LoginGuard } from './app.loginguards';
import { AppService } from './app.service';
import { AppComponent } from './app.component';

// Profile

const routes: Routes = [
	{
		path: '',
		component: AppComponent,
		pathMatch: 'full'
	},	
	{
		path: '**',
		redirectTo: '/404',
		pathMatch: 'full'
	}
];
// *******************************************************************************
//

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
	exports: [RouterModule]
})

export class AppRoutingModule {

}
