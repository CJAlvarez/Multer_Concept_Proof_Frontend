import { Component, OnInit, Input, Output, ViewChild, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from './app.service';
import { FileUploadControl } from '@iplab/ngx-file-upload';
@Component({
	selector: 'app-minton',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	@ViewChild('formUpdates', { static: false }) formUpdates: NgForm;

	@Output() update_status = new EventEmitter();
	submittedUpload: boolean
	public uploadedFiles: File;

	constructor(private appService: AppService) {
		this.submittedUpload = false
	}
	public fileUploadControl = new FileUploadControl();

	ngOnInit() {
		
	}
	ngOnDestroy() {
	}

	enviar() {
		this.submittedUpload = true
		if (this.formUpdates.valid) {
			const formData = new FormData()
			formData.append("file", this.uploadedFiles[0], this.uploadedFiles[0]['name'])
			this.appService.upload_file(formData).subscribe(
				result => {
					this.update_status.emit(true)
					this.submittedUpload = false
				},
				error => {
				},
				() => {
					this.fileUploadControl.removeFile(this.uploadedFiles[0])
					this.formUpdates.reset()
				}
			);
		}
	}

}
