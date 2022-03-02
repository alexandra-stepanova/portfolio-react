import russian_travel from "../videos/russian-travel.mov";
import how_learn from "../videos/how-to-learn.mov";
import mesto from "../videos/mesto.mov";
import movies from "../videos/movieSearcher.mp4";

const projectsInformation = [
  {
    name: "Russian travel",
    video: russian_travel,
    link: "https://github.com/alexandra-stepanova/russian-travel",
    stack: "HTML, CSS, BEM methology, adaptive website",
    discription: "Landing project about traveling from Moscow to Baikal by train",
    id: "1",
  },
  {
    name: "How to learn",
    video: how_learn,
    link: "https://github.com/alexandra-stepanova/how-to-learn",
    stack: "HTML, CSS, BEM methology, adaptive website",
    discription: "Landing project about stydy",
    id: "2",
  },
  {
    name: "Mesto",
    video: mesto,
    link: "https://github.com/alexandra-stepanova/mesto",
    stack: "HTML, CSS, Reactjs, JS, Nodejs, Express, MongoDB, Mongose",
    discription: "An Instagram-like platform (light version)",
    id: "3",
  },
  {
    name: "Movies explorer",
    video: movies,
    link: "https://github.com/alexandra-stepanova/movies-explorer-frontend",
    stack: "HTML, SCSS, Reactjs, JS, Nodejs, Express, MongoDB, Mongose",
    discription: "A movie search platform",
    id: "4",
  },
];

export default projectsInformation;
