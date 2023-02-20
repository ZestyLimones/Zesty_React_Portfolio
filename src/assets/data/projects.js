import { v4 as uuidv4 } from 'uuid';
import FoTotoImg from '../images/fototo-image.jpg';
import OuroborosImg from '../images/ouroboros-image.jpg';
import NoteTakerImg from '../images/note-taker-image.jpg';
import NationalParksImg from '../images/national-state-parks-image.jpg';
import EmployeeTrackerImg from '../images/employee-tracker-image.jpg';
import WorkoutTrackerImg from '../images/workout-tracker-image.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Friends of Toto',
    desc: 'Friends of Toto is a website designed to bring pets together! Here you can create an account for your pet, upload photos, and interact with other pet users. The application allows you to follower users and you are able to add comments to posts.',
    img: FoTotoImg,
    link: 'https://myfriendsoftoto.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Ouroboros',
    desc: 'A mental health app to track daily progress creating intrinsic goals for our user. Our app sets up a loop reward system creating daily patterns.',
    img: OuroborosImg,
    link: 'https://ouroboros.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Note Taker',
    desc: 'This application allows a user to take notes they can reference later. When the user first visits the site they will be promted to start taking notes. Once on the following screen, the user will add a title for the notes then they can start adding content.',
    img: NoteTakerImg,
    link: 'https://fast-shelf-21917.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Natonal Parks Day Trip Planner',
    desc: 'Plan a trip to a State Park within a specific state and be presented with 3 random activities available  in that park, a five day forcast, and map of the location.',
    img: NationalParksImg,
    link: 'https://trivera777.github.io/National-Parks-Day-Trip-Planner/',
  },
  {
    id: uuidv4(),
    name: 'Employee Tracker',
    desc: 'This application allows a business owner to view and manage the departments, roles, and employees within their company so they can organize and plan their business. Business owner is able to view and add departments, roles, and employees.',
    img: EmployeeTrackerImg,
    link: 'https://github.com/ZestyLimones/Employee-Tracker',
  },
  {
    id: uuidv4(),
    name: 'Workout Tracker',
    desc: 'This application allows a user to view, create, and track daily workouts. The user can log multiple exercises in a workout on a given day and can track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, it will allso track distance traveled.',
    img: WorkoutTrackerImg,
    link: 'https://thawing-island-83507.herokuapp.com/',
  },
];

export default projects;
