import Project from "../components/Project";

export default function Portfolio() {
  // maybe use an object for the project
  const projects = [
    {
      id: 1,
      name: "NETFLEX",
      githubLink: "https://github.com/Project2Team1GPR/NETFLEX",
      deployedLink: "https://project2-team1-netflex.onrender.com/login",
    },
    {
      id: 2,
      name: "Recipe-Fit",
      githubLink: "https://github.com/Project1Team1GPR/Recipe-Fit",
      deployedLink: "https://project1team1gpr.github.io/Recipe-Fit/",
    },
    {
      id: 3,
      name: "Recipe-Fit",
      githubLink: "https://github.com/Project1Team1GPR/Recipe-Fit",
      deployedLink: "https://project1team1gpr.github.io/Recipe-Fit/",
    },
    {
      id: 4,
      name: "Recipe-Fit",
      githubLink: "https://github.com/Project1Team1GPR/Recipe-Fit",
      deployedLink: "https://project1team1gpr.github.io/Recipe-Fit/",
    },
    {
      id: 5,
      name: "Recipe-Fit",
      githubLink: "https://github.com/Project1Team1GPR/Recipe-Fit",
      deployedLink: "https://project1team1gpr.github.io/Recipe-Fit/",
    },
    {
      id: 6,
      name: "Recipe-Fit",
      githubLink: "https://github.com/Project1Team1GPR/Recipe-Fit",
      deployedLink: "https://project1team1gpr.github.io/Recipe-Fit/",
    },
  ];
  return (
    <>
      <h1>Portfolio</h1>

      {projects.map((project) => (
        <Project
          key={project.id}
          name={project.name}
          githubLink={project.githubLink}
          deployedLink={project.deployedLink}
        />
      ))}
    </>
  );
}
