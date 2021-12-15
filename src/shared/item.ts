import { Comment } from './comment';
export class Item {
  id: string;
  name: string;
  image: string;
  category: string;
  label: string;
  price: string;
  description: string;
  featured: boolean;

  comments: Comment[];
}
