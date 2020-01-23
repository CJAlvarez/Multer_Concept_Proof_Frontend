import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpUrlEncodingCodec, HttpParameterCodec, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap, map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
// import { Socket } from 'ngx-socket-io';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import { Socket } from 'ngx-socket-io';
import * as socketIo from 'socket.io-client';


declare var io: {
	connect(url: string): Socket;
};

export class FormQueryEncoder implements HttpParameterCodec {
	encodeKey(k: string): string { return encodeURIComponent(k); }
	encodeValue(v: string): string { return encodeURIComponent(v); }
	decodeKey(k: string): string { return encodeURIComponent(k); }
	decodeValue(v: string): string { return encodeURIComponent(v); }
}

@Injectable()
export class AppService {
	private endpoint: string;

	observer: Observer<any>;

	flagNewComment: boolean
	flagNewChange: boolean


	constructor(private httpClient: HttpClient, public router: Router, public activeRoute: ActivatedRoute) {
		this.endpoint = "http://" + window.location.hostname + ":8000/api";
	}

	upload_file(payload) {
		return this.httpClient.post(this.endpoint + "/upload_file", payload, { responseType: 'json' })
	}

}

