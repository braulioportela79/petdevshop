type PetType = 'dog' | 'cat' | 'fish';
type PetGender = 'Male' | 'Female';

type Pet = {
  type: PetType;
  image: string;
  name: string;
  color: string;
  gender: PetGender;
};

const data: Pet[] = [
  {
    type: 'dog',
    image: 'german-shepherd.jpg',
    name: 'German Shepherd',
    color: 'Black & Tan',
    gender: 'Male',
  },
  {
    type: 'dog',
    image: 'labrador.jpg',
    name: 'Labrador Retriever',
    color: 'Yellow',
    gender: 'Male',
  },
  {
    type: 'dog',
    image: 'zwergspitz.jpg',
    name: 'Zwergspitz',
    color: 'Yellow',
    gender: 'Female',
  },
  {
    type: 'dog',
    image: 'husky.jpg',
    name: 'Siberian Husky',
    color: 'Black & White',
    gender: 'Male',
  },
  {
    type: 'dog',
    image: 'golden.jpg',
    name: 'Golden Retriever',
    color: 'Dark Golden',
    gender: 'Male',
  },
  {
    type: 'dog',
    image: 'poodle.jpg',
    name: 'Poodle',
    color: 'White',
    gender: 'Female',
  },
  {
    type: 'dog',
    image: 'bulldog.jpg',
    name: 'Bulldog',
    color: 'Red & White',
    gender: 'Male',
  },
  {
    type: 'cat',
    image: 'persa.jpg',
    name: 'Persa',
    color: 'White',
    gender: 'Male',
  },
  {
    type: 'cat',
    image: 'mainecoon.jpg',
    name: 'Maine Coon',
    color: 'White & Black',
    gender: 'Male',
  },
  {
    type: 'cat',
    image: 'bengal.jpg',
    name: 'Bengal',
    color: 'Brown',
    gender: 'Female',
  },
  {
    type: 'cat',
    image: 'siamese.jpg',
    name: 'Siamese',
    color: 'Seal Point',
    gender: 'Male',
  },
  {
    type: 'cat',
    image: 'sphynx.jpg',
    name: 'Sphynx',
    color: 'White',
    gender: 'Male',
  },
  {
    type: 'fish',
    image: 'neon.jpg',
    name: 'Neon Tetra',
    color: 'Red & Blue',
    gender: 'Male',
  },
  {
    type: 'fish',
    image: 'serpae.jpg',
    name: 'Serpae Tetra',
    color: 'Red',
    gender: 'Male',
  },
  {
    type: 'fish',
    image: 'dwarf-sucking.jpg',
    name: 'Dwarf Sucking Catfish',
    color: 'Dark',
    gender: 'Male',
  },
  {
    type: 'fish',
    image: 'white-cloud.jpg',
    name: 'White Cloud',
    color: 'Red',
    gender: 'Male',
  },
  {
    type: 'fish',
    image: 'angelfish.jpg',
    name: 'Angelfish',
    color: 'White & Black',
    gender: 'Male',
  },
];

export const Pet = {
  getAll: (): Pet[] => {
    return data;
  },
  getFromType: (type: PetType): Pet[] => {
    return data.filter((item) => item.type === type);
  },
  getFromName: (name: string): Pet[] => {
    return data.filter(
      (item) =>
        item.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1
    );
  },
};
