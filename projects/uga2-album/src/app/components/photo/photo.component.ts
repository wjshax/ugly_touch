import { Component, OnInit, Input } from '@angular/core';
import { PhotoService } from '../../photo-service/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {

  @Input() url: string;

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    console.log('PhotoComponent,url:', this.url);
  }

}
