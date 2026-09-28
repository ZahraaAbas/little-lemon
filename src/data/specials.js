import greekSalad from '../assets/greek-salad.jpg';
import bruschetta from '../assets/bruschetta.jpg';
import lemonDessert from '../assets/lemon-dessert.jpg';

// Weekly specials shown on the homepage.
// Kept as a local array of objects instead of an API, as suggested in the course.
const specials = [
  {
    id: 1,
    name: 'Greek Salad',
    price: '$12.99',
    description:
      'Crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: greekSalad,
    alt: 'A bowl of Greek salad with feta cheese, olives and peppers',
  },
  {
    id: 2,
    name: 'Bruschetta',
    price: '$5.99',
    description:
      'Grilled bread smeared with garlic and seasoned with salt and olive oil, topped with fresh tomatoes and basil.',
    image: bruschetta,
    alt: 'Slices of grilled bread topped with tomatoes and herbs',
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    price: '$5.00',
    description:
      "This comes straight from grandma's recipe book. Every ingredient has been sourced and is as authentic as can be imagined.",
    image: lemonDessert,
    alt: 'A slice of lemon cake on a plate',
  },
];

export default specials;