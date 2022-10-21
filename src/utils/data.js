import Forbes from "../assets/logo-forbes.png";
import BBC from "../assets/logo-bbc.png";
import Techrun from "../assets/logo-techcrunch.png";
import Bi from "../assets/logo-bi.png";

// realtors
import Realtor1 from "../assets/realtor-1.jpeg";
import Realtor2 from "../assets/realtor-2.jpeg";
import Realtor3 from "../assets/realtor-3.jpeg";

// icons
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { TrophyIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { KeyIcon } from "@heroicons/react/24/outline";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
export const Logos = [
  {
    id: 1,
    logo: BBC,
  },
  {
    id: 2,
    logo: Forbes,
  },
  {
    id: 3,
    logo: Techrun,
  },
  {
    id: 4,
    logo: Bi,
  },
];

export const Realtors = [
  {
    id: 1,
    image: Realtor1,
    name: "erik feinman",
    house_sold: 245,
  },
  {
    id: 2,
    image: Realtor2,
    name: "natasha zubair",
    house_sold: 235,
  },
  {
    id: 3,
    image: Realtor3,
    name: "barak obama",
    house_sold: 230,
  },
];

export const Services = [
  {
    id: 1,
    name: "World's best luxury homes",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.",
    logo: (
      <GlobeAltIcon className='h-12 w-12 -mt-2 stroke-1 text-[#c69963]/70' />
    ),
  },
  {
    id: 2,
    name: "Only the best properties",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.",
    logo: (
      <TrophyIcon className='h-12 w-12 -mt-2 stroke-1 text-[#c69963]/70' />
    ),
  },
  {
    id: 3,
    name: "All homes in in top locations",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.",
    logo: (
      <MapPinIcon className='h-12 w-12 -mt-2 stroke-1 text-[#c69963]/70' />
    ),
  },
  {
    id: 4,
    name: "New home in one week",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.",
    logo: (
      <KeyIcon className='h-12 -rotate-180 w-12 -mt-2 stroke-1 text-[#c69963]/70' />
    ),
  },
  {
    id: 5,
    name: "Top 1% realtors",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.",
    logo: (
      <ArrowTrendingUpIcon className='h-12 w-12 -mt-2 stroke-1 text-[#c69963]/70' />
    ),
  },
  {
    id: 6,
    name: "Secure payments on nexter",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.",
    logo: (
      <ShieldCheckIcon className='h-12 w-12 -mt-2 stroke-1 text-[#c69963]/70' />
    ),
  },
];
