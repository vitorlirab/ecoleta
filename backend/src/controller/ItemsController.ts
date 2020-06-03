import { Request, Response } from 'express';
import knex from '../database/connection';

interface IItems {
  id: Number;
  title: String;
  image: String;
}

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');

    const serializedItems = items.map((item: IItems) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://localhost:3333/items/${item.image}`,
      };
    });

    return response.json(serializedItems);
  }
}
export default new ItemsController();
