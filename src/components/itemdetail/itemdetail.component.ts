import { Component, OnInit } from '@angular/core';
import { Item } from 'src/shared/item';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.scss'],
})
export class ItemdetailComponent implements OnInit {
  item: Item;
  constructor() {
    this.item = item;
  }

  ngOnInit() {
    console.log(this.item);
  }
}

const item: Item = {
  id: '1',
  name: 'Name 1',
  image: 'https://picsum.photos/1000',
  category: 'Category 1',
  label: 'Label 1',
  price: '100$',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
  featured: true,
  comments: [
    {
      rating: 1,
      comment:
        'Lorem Ipsum is simply dummy text',
      author: 'A. D.',
      date: '2020-04-25T11:16:13.556094Z',
    },
    {
      rating: 1,
      comment:
        'Lorem Ipsum is simply dummy text',
      author: 'D. A.',
      date: '2021-01-28T11:16:13.556094Z',
    },
    {
      rating: 3,
      comment:
        'Lorem Ipsum is simply dummy text',
      author: 'F. H.',
      date: '2021-04-25T15:16:13.556094Z',
    },
    {
      rating: 5,
      comment:
        'Lorem Ipsum is simply dummy text',
      author: 'AQ. DG.',
      date: '2020-04-25T11:20:13.556094Z',
    },
    {
      rating: 4,
      comment:
        'Lorem Ipsum is simply dummy text',
      author: 'GRA. DG.',
      date: '2021-04-25T11:16:13.556094Z',
    },
    {
      rating: 2,
      comment:
        'Lorem Ipsum is simply dummy text',
      author: 'WA. DA.',
      date: '2020-05-25T11:16:13.556094Z',
    },
  ],
};
