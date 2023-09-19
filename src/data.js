import image1 from './images/tour-1.jpeg'
import image2 from './images/tour-2.jpeg'
import image3 from './images/tour-3.jpeg'
import image4 from './images/tour-4.jpeg'
import image5 from './images/tour-5.jpeg'
import image6 from './images/tour-6.jpeg'
export const pageLinks = [
  { id: 1, href: '#Home', title: 'Home' },
  { id: 2, href: '#About-us', title: 'About' },
  { id: 3, href: '#Services', title: 'Services' },
  { id: 4, href: '#Tours', title: 'Tours' },
]
export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.instagram.com', icon: 'fab fa-instagram' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.`,
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.`,
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.`,
  },
]

export const tours = [
  {
    id: 1,
    image: image1,
    alt: 'tour1',
    date: 'August 26th,2023',
    title: 'tibet adventure',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                illo similique sequi quidem possimus blanditiis ipsum ad!
                Dolorum praesentium similique odit earum ab cumque, iusto ea
                minus deserunt, eos quisquam?`,
    Country: 'China',
    price: 2100,
    days: 6,
  },
  {
    id: 2,
    image: image2,
    alt: 'tour2',
    date: 'August 27th,2023',
    title: 'best of java',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                illo similique sequi quidem possimus blanditiis ipsum ad!
                Dolorum praesentium similique odit earum ab cumque, iusto ea
                minus deserunt, eos quisquam?`,
    Country: 'Indonesia',
    price: 2200,
    days: 7,
  },
  {
    id: 3,
    image: image3,
    alt: 'tour1',
    date: 'August 28th,2023',
    title: 'Explore hong kong',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                illo similique sequi quidem possimus blanditiis ipsum ad!
                Dolorum praesentium similique odit earum ab cumque, iusto ea
                minus deserunt, eos quisquam?`,
    Country: 'hong kong',
    price: 2400,
    days: 9,
  },
  {
    id: 4,
    image: image4,
    alt: 'tour4',
    date: 'August 30th,2023',
    title: 'kenya highlights',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                illo similique sequi quidem possimus blanditiis ipsum ad!
                Dolorum praesentium similique odit earum ab cumque, iusto ea
                minus deserunt, eos quisquam?`,
    Country: 'Kenya',
    price: 3300,
    days: 20,
  },
  {
    id: 5,
    image: image5,
    alt: 'tour5',
    date: 'September 26th,2023',
    title: 'Visit South Africa',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                illo similique sequi quidem possimus blanditiis ipsum ad!
                Dolorum praesentium similique odit earum ab cumque, iusto ea
                minus deserunt, eos quisquam?`,
    Country: 'South Africa',
    price: 4000,
    days: 7,
  },
  {
    id: 6,
    image: image6,
    alt: 'tour6',
    date: 'August 15th,2023',
    title: 'Explore India',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                illo similique sequi quidem possimus blanditiis ipsum ad!
                Dolorum praesentium similique odit earum ab cumque, iusto ea
                minus deserunt, eos quisquam?`,
    Country: 'India',
    price: 6000,
    days: 10,
  },
]
