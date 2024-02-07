import { v4 as uuidv4 } from 'uuid';
import GameStashImg from '../images/game-stash-image.jpg';
import FoTotoImg from '../images/fototo-image.jpg';
import OuroborosImg from '../images/ouroboros-image.jpg';
import NoteTakerImg from '../images/note-taker-image.jpg';
import NationalParksImg from '../images/national-state-parks-image.jpg';
import EmployeeTrackerImg from '../images/employee-tracker-image.jpg';
import WorkoutTrackerImg from '../images/workout-tracker-image.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Game Stash',
    desc: 'Game Stash - Elevate your gaming experience with my latest project, Game Stash, a cutting-edge React Native mobile app designed for seamless video game collection management. This revolutionary app not only enhances organization but also provides an intuitive and user-friendly platform for gaming enthusiasts to manage their collections effortlessly. ',
    img: GameStashImg,
    link: 'https://drive.google.com/file/d/1DFmWu4baNEOG9hjY2FdKuNqx9aUJDCkH/view?usp=sharing',
  },
  {
    id: uuidv4(),
    name: 'Friends of Toto',
    desc: 'Connect with fellow pet enthusiasts on "Friends of Toto"! Unleash the social side of your pets by creating personalized accounts, sharing adorable photos, and engaging in a vibrant community. Follow your favorite pets, leave heartwarming comments, and let the furry friendships flourish!',
    img: FoTotoImg,
    link: 'https://myfriendsoftoto.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Ouroboros',
    desc: 'Elevate your mental well-being with "Ouroboros" – a revolutionary app that transforms self-improvement into a daily adventure. Embark on a journey of intrinsic goals, paving the way for a loop reward system that turns personal growth into a gratifying ritual. Embrace progress, cultivate habits, and unlock your true potential.',
    img: OuroborosImg,
    link: 'https://ouroboros.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Note Taker',
    desc: 'Unleash your creativity and boost productivity with "Note Taker"! Seamlessly capture and organize your thoughts with this intuitive note-taking app. Kickstart your note-taking journey by adding titles and content effortlessly. Stay organized, stay inspired – your ideas, your way.',
    img: NoteTakerImg,
    link: 'https://fast-shelf-21917.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Natonal Parks Day Trip Planner',
    desc: 'Embark on an adventure with the "National Parks Day Trip Planner"! Immerse yourself in the beauty of state parks by planning personalized trips. Discover three random activities, check the five-day forecast, and explore park locations with an interactive map. Make every nature getaway an unforgettable experience!',
    img: NationalParksImg,
    link: 'https://trivera777.github.io/National-Parks-Day-Trip-Planner/',
  },
  {
    id: uuidv4(),
    name: 'Employee Tracker',
    desc: 'Take command of your business with the "Employee Tracker"! Effortlessly manage departments, roles, and employees, bringing organizational excellence to your company. From viewing vital details to adding new team members, empower yourself with the tools to streamline operations and foster growth.',
    img: EmployeeTrackerImg,
    link: 'https://github.com/ZestyLimones/Employee-Tracker',
  },
  {
    id: uuidv4(),
    name: 'Workout Tracker',
    desc: 'Sculpt your fitness journey with "Work Tracker" – an intuitive app to create, track, and elevate your daily workouts. Log multiple exercises with details like type, weight, sets, reps, and cardio distances. Your personalized fitness companion, forging a stronger, healthier you.',
    img: WorkoutTrackerImg,
    link: 'https://thawing-island-83507.herokuapp.com/',
  },
];

export default projects;
