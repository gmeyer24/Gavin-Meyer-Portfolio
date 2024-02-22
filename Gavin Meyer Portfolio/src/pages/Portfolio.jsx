import Project from "../components/Project";

export default function Portfolio(){
    // maybe use an object for the project
    const projects = [1, 2, 3, 4, 5, 6]
    return (
        <>
        <h1>Portfolio</h1>
        
        {projects.map((item)=> ( <Project />))}
        </>
    )
}