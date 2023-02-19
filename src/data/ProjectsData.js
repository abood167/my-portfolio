import cub3d from "../assets/images/portfolio/cub3d.jpeg";
import Push_swap from "../assets/images/portfolio/Push_swap.jpeg";
import philospher from "../assets/images/portfolio/philospher.jpeg";
import MiniShell from "../assets/images/portfolio/MiniShell.jpeg";

const ProjectsPreviewData = [
  {
    id: "cub3d",
    img: cub3d,
    name: "cub3d",
    stack: [],

    source: "https://github.com/abood167/cub3d",
    description:
      "This game is done using the raycasting way where I sent vectors from the starting position of the player that checks everytime it hits a grid till it reaches a wall or door or ene and then calculate the exact distance by taking the grid size as a 1 unit. Depending on the distance from the player to the wall, the vertical size of the wall is calculated and then the wall is drawn on the screen.",
  },
  {
    id: "philospher",
    img: philospher,
    name: "philospher",
    stack: [],
    source: "https://github.com/abood167/philospher/tree/main/philo_upllod",
    description:
    "This project is about solving the philosophers problem who sits all together on a round table and have two forks, one on the right and one on the left, as the number of the forks is the same as the number of philosophers. In addition to that, each philosopher needs to eat with two forks so while some philosophers are eating, the others will be waiting them to finish so they can use the forks. As a result, I used threads to be able to run multiple philosophers as processes so they can all go through different tasks to do at the same time, and mutexes as forks to be able to lock them and protect the values from data races ,./philo [Number Of Philosophers] [Time To Die] [Time To Eat] [Time To Sleep] [Number Of Rounds]",
  },

  {
    id: "Push_swap",
    img: Push_swap,
    name: "Push_swap",
    stack: [""],
    source: "https://github.com/abood167/push_swap/tree/main/fff",
    description:
      "This project involves sorting data on a stack, with a limited set of instructions, and the smallest number of moves. To make this happen, you will have to manipulate various sorting algorithms and choose the most appropriate solution(s) for optimized data sorting",
  },
  {
    id: "MiniShell",
    img: MiniShell,
    name: "MiniShell",
    stack: ["< Vanilla JS />", "< CSS3 />", "< HTML5 />"],
    source: "https://github.com/catherineisonline/bankist",
    description:
      "Recreated a shell similar to Bash Shell that includes displaying a prompt then parse and search for the given command whether it is a relative or absolute path. In addition to, implementing redirections including 'HereDoc' for the shell.",
  },
];

const ProjectsData = [
  {
    id: "cub3d",
    img: cub3d,
    name: "cub3d",
    stack: ["c  ,mlx"],
    source: "https://github.com/abood167/cub3d",
    description:
      "This game is done using the raycasting way where I sent vectors from the starting position of the player that checks everytime it hits a grid till it reaches a wall or door or ene and then calculate the exact distance by taking the grid size as a 1 unit. Depending on the distance from the player to the wall, the vertical size of the wall is calculated and then the wall is drawn on the screen.",  },
  {
    id: "philospher",
    img: philospher,
    name: "philospher",
    stack: [],
    source: "https://github.com/abood167/philospher/tree/main/philo_upllod",
    description:
    "This project is about solving the philosophers problem who sits all together on a round table and have two forks, one on the right and one on the left, as the number of the forks is the same as the number of philosophers. In addition to that, each philosopher needs to eat with two forks so while some philosophers are eating, the others will be waiting them to finish so they can use the forks. As a result, I used threads to be able to run multiple philosophers as processes so they can all go through different tasks to do at the same time, and mutexes as forks to be able to lock them and protect the values from data races ,./philo [Number Of Philosophers] [Time To Die] [Time To Eat] [Time To Sleep] [Number Of Rounds]",
  },
  {
    id: "Push_swap",
    img: Push_swap,
    name: "Push_swap",
    stack: [""],
    source: "https://github.com/abood167/push_swap/tree/main/fff",
    description:
      "This project involves sorting data on a stack, with a limited set of instructions, and the smallest number of moves. To make this happen, you will have to manipulate various sorting algorithms and choose the most appropriate solution(s) for optimized data sorting",  },
  {
    id: "MiniShell",
    img: MiniShell,
    name: "MiniShell",
    stack: [""],
    source: "https://github.com/catherineisonline/bankist",
    description:
      "Recreated a shell similar to Bash Shell that includes displaying a prompt then parse and search for the given command whether it is a relative or absolute path. In addition to, implementing redirections including 'HereDoc' for the shell.",
  },
];

export { ProjectsData, ProjectsPreviewData };
