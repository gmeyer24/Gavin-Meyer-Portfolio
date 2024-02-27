import Project from "../components/Project";

export default function Portfolio() {
  // maybe use an object for the project
  const projects = [
    {
      id: 1,
      name: "NETFLEX",
      githubLink: "https://github.com/Project2Team1GPR/NETFLEX",
      deployedLink: "https://project2-team1-netflex.onrender.com/login",
      image: "p1.jpg",
    },
    {
      id: 2,
      name: "Recipe-Fit",
      githubLink: "https://github.com/Project1Team1GPR/Recipe-Fit",
      deployedLink: "https://project1team1gpr.github.io/Recipe-Fit/",
      image: "p2.jpg",
    },
    {
      id: 3,
      name: "Gavin's Tech Blog",
      githubLink:
        "https://github.com/gmeyer24/HW14-Model-View-Controller--MVC--Tech-Blog",
      deployedLink: "https://gavins-tech-blog.onrender.com/",
      image: "p3.jpg",
    },
    {
      id: 4,
      name: "Express.js Note Taker",
      githubLink: "https://github.com/gmeyer24/HW11-Express.js-Note-Taker",
      deployedLink: "https://express-note-taker-eatb.onrender.com/",
      image: "p4.jpg",
    },
    {
      id: 5,
      name: "Server-Side APIs Weather Dashboard",
      githubLink:
        "https://github.com/gmeyer24/HW06-Server-Side-APIs-Weather-Dashboard?tab=readme-ov-file",
      deployedLink:
        "https://gmeyer24.github.io/HW06-Server-Side-APIs-Weather-Dashboard/",
      image: "p5.jpg",
    },
    {
      id: 6,
      name: "Third-Party APIs Work-Day Scheduler",
      githubLink:
        "https://github.com/gmeyer24/HW05-Third-Party-APIs-Work-Day-Scheduler?tab=readme-ov-file",
      deployedLink:
        "https://gmeyer24.github.io/HW05-Third-Party-APIs-Work-Day-Scheduler/",
      image: "p6.jpg",
    },
  ];
  //   return (
  //     <>
  //       <h1>Portfolio</h1>

  //       {projects.map((project) => (
  //         <Project
  //           key={project.id}
  //           name={project.name}
  //           githubLink={project.githubLink}
  //           deployedLink={project.deployedLink}
  //           image={project.image}
  //         />
  //       ))}
  //     </>
  //   );
  // }

//   the below uses bootstrap and allows for the projects to be 2 to a row
  return (
    <>
      <div>
        <div className="container mt-5 mb-5 p-3 py-md-5 px-md-3">
          <h1>Portfolio</h1>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {projects.map((project) => (
              <div key={project.id} className="col">
                <Project
                  name={project.name}
                  githubLink={project.githubLink}
                  deployedLink={project.deployedLink}
                  image={project.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
