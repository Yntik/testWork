import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  eventForm: FormGroup
  mapReaderStatus = {
    'notLoaded': 'notLoaded',
    'inProgress': 'inProgress',
    'loaded': 'loaded',
    'notValidFormat': 'notValidFormat'
  }
  readerStatus: string
  reader: FileReader
  event = {
    id: 2,
    name: "Project",
    address: "Windstorm",
    date: "2001-06-08",
    picture: "data:image/png;base64,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",
  }
  selectedDate: string = ''
  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      eventName: new FormControl('', [Validators.required]),
      address: new FormControl(''),
      date: new FormControl('', [Validators.required]),
      file: new FormControl(null, [Validators.required])
    })
    console.log(this.mapReaderStatus)
    this.readerStatus = this.mapReaderStatus['notLoaded']

    this.reader = new FileReader()

    this.reader.onloadstart = () => this.readerStatus = this.mapReaderStatus['inProgress']
    this.reader.onerror = () => this.readerStatus = this.mapReaderStatus['error']
    this.reader.onload = () => {
      this.readerStatus = this.mapReaderStatus['loaded']
      this.eventForm.patchValue({
        file: this.reader.result
      })
    }
  }

  ngOnInit(): void {
    
  }

  addEvent() {
    console.log(this.eventForm.value)
  }

  uploadFile(input) {
    if(input.files && input.files.length ) {
      const [ file ] = input.files
      if (file.type.match(/image.*/)) {
        this.reader.readAsDataURL(file)
      } else {
        this.readerStatus = this.mapReaderStatus['notValidFormat']
      }
      
      
    }
    console.log(input.files[0])
  }
}
