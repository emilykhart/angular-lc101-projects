import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Pictures of Awesome Things and Stuff';
  image1 = 'https://scontent-ort2-2.xx.fbcdn.net/v/t39.30808-6/284414574_10160048517784559_4926341236050727455_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WSBKQjR8P6oAX_FtdBt&_nc_ht=scontent-ort2-2.xx&oh=00_AT-r5Kud8GONkSw4i-ubu3I8x4g98Re1AIiS7itK_jzkzQ&oe=62D87395';
  image2 = 'https://scontent-ort2-2.xx.fbcdn.net/v/t39.30808-6/293729507_585400289819983_3441515374894352638_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FVm7QeyAazsAX-ZHw47&_nc_ht=scontent-ort2-2.xx&oh=00_AT-xgqrFZ_lBA8_eS-uUU2Aa9BCR_nmxfFYe5EJVts4nAg&oe=62D80921';
  image3 = 'https://scontent-ort2-2.xx.fbcdn.net/v/t39.30808-6/277368621_10222886210926340_8365494558667233894_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=2JXqgRhM5WcAX-rMTfk&_nc_ht=scontent-ort2-2.xx&oh=00_AT8EaWWnA5j2UBsVWA2c6u0SuNRMCJSsuWMrI2LT1T1Zpw&oe=62D809DE';

  constructor() { }

  ngOnInit() {
  }

}