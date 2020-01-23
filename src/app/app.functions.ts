import { Injectable } from '@angular/core';

@Injectable()
export class AppFunctions {
	get_month_string(month){
		return ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"][parseInt(month + "")];
	}
}
