import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
  res.render('pages/page', {
    banner: {
      title: 'All pets',
      background: 'allpets.jpg',
    },
  });
};

export const dogs = (req: Request, res: Response) => {
  res.render('pages/page', {
    banner: {
      title: 'Dogs',
      background: 'banner_dog.jpg',
    },
  });
};

export const cats = (req: Request, res: Response) => {
  res.render('pages/page', {
    banner: {
      title: 'Cats',
      background: 'banner_cat.jpg',
    },
  });
};

export const fish = (req: Request, res: Response) => {
  res.render('pages/page', {
    banner: {
      title: 'Fish',
      background: 'banner_fish.jpg',
    },
  });
};
