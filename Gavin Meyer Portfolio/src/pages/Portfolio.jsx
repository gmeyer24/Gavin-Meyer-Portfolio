import Project from "../components/Project";

export default function Portfolio(){
    // maybe use an object for the project
    const projectArray = [1, 2, 3, 4, 5, 6]
    return (
        <>
        <h1>This is the portfolio</h1>
        
        {projectArray.map((item)=> ( <Project />))}
        </>
    )
}