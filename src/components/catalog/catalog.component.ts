import { Component, OnInit } from '@angular/core';
import { Item } from '../../shared/item';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  catalog: Item[] = [];

  constructor() {}

  ngOnInit() {
    items.forEach((val) => this.catalog.push(Object.assign({}, val)));
  }
}

const items: Item[] = [
  {
    id: '1',
    name: 'Name 1',
    image: 'https://loremflickr.com/640/360',
    category: 'Category 1',
    label: 'Label 1',
    price: '100$',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    featured: true,
    comments: [],
  },
  {
    id: '2',
    name: 'Name 2',
    image: 'https://loremflickr.com/640/360',
    category: 'Category 2',
    label: 'Label 2',
    price: '200$',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    featured: true,
    comments: [],
  },
  {
    id: '3',
    name: 'Name 3',
    image: 'https://loremflickr.com/640/360',
    category: 'Category 3',
    label: 'Label 3',
    price: '300$',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    featured: true,
    comments: [],
  },
  {
    id: '4',
    name: 'Name 4',
    image: 'https://loremflickr.com/640/360',
    category: 'Category 4',
    label: 'Label 4',
    price: '400$',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    featured: false,
    comments: [],
  },
  {
    id: '5',
    name: 'Name 5',
    image: 'https://loremflickr.com/640/360',
    category: 'Category 5',
    label: 'Label 5',
    price: '500$',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    featured: false,
    comments: [],
  },
  {
    id: '6',
    name: 'Name 6',
    image: 'https://loremflickr.com/640/360',
    category: 'Category 6',
    label: 'Label 6',
    price: '600$',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    featured: false,
    comments: [],
  },
];
