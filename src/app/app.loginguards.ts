import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Injectable()
export class LoginGuard implements CanActivate {

	valid: boolean = false;

	constructor(private router: Router, private appService: AppService) {
		
	}

	canActivate = (): boolean => false;
}