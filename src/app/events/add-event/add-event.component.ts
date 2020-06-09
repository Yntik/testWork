import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as eventActions from '../event.actions';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  eventForm: FormGroup;
  mapReaderStatus = {
    notLoaded: 'notLoaded',
    inProgress: 'inProgress',
    loaded: 'loaded',
    notValidFormat: 'notValidFormat',
    error: 'error'
  };
  readerStatus: string;
  reader: FileReader;
  selectedDate = '';
  constructor(private fb: FormBuilder, private store: Store, private router: Router, private _location: Location) {
    this.eventForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      picture: new FormControl(null, [Validators.required])
    });

    this.readerStatus = this.mapReaderStatus.notLoaded;

    this.reader = new FileReader();

    this.reader.onloadstart = () => this.readerStatus = this.mapReaderStatus.inProgress;
    this.reader.onerror = () => this.readerStatus = this.mapReaderStatus.error;
    this.reader.onload = () => {
      this.readerStatus = this.mapReaderStatus.loaded;
      this.eventForm.patchValue({
        picture: this.reader.result
      });
    };
  }

  ngOnInit(): void {}

  addEvent(): void {
    this.store.dispatch(eventActions.CreateEvent({
      payload: Event = { ...this.eventForm.value }
    }));
    this.router.navigate(['event-list']);
  }

  backHistory(): void {
    this._location.back();
  }

  uploadFile(input: HTMLInputElement): void {
    if (input.files && input.files.length ) {
      const file = input.files[0];
      if (file.type.match(/image.*/)) {
        this.reader.readAsDataURL(file);
      } else {
        this.readerStatus = this.mapReaderStatus.notValidFormat;
      }
    }
  }
}
