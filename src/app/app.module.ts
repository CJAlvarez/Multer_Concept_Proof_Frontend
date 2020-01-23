import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es-hn');
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
defineLocale('es-hn', esLocale);
import { NgxMaskModule } from 'ngx-mask';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbAlertModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AmazingTimePickerModule } from 'amazing-time-picker';

import { AppService } from './app.service';
import { AppFunctions } from './app.functions';
import { LoginGuard } from './app.loginguards';


import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbDropdownModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ArchwizardModule } from 'angular-archwizard';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		NgbModalModule,
		BsDatepickerModule.forRoot(),
		AmazingTimePickerModule,
		NgbDropdownModule,
		NgbDatepickerModule,
		NgSelectModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		NgbAlertModule,
		NgbModule,
		ReactiveFormsModule,
		AppRoutingModule,
		InfiniteScrollModule,
		FormsModule,
		ArchwizardModule,
		FileUploadModule,
		Ng2SearchPipeModule,
		NgxMaskModule.forRoot(),
		CommonModule,
		ToastrModule.forRoot({
			positionClass: 'toast-top-right',
			preventDuplicates: true,
		}), // ToastrModule added,
	],
	providers: [
		AppService,
		AppFunctions
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }