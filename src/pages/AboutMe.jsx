import myProfilePicture from "../../src/assets/images/headshot.jpeg";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="mx-auto  about-container">
      <div className="container px-3 p-3 py-md-5 px-md-3">
        <h1 className="mb-4">About Me</h1>
        <img
          src={myProfilePicture}
          alt="My Profile"
          style={{ width: "200px", height: "200px" }}
          className="mb-4"
        />
        <p>
        Professional Full Stack Developer and Data Analyst with a focus on the Software Development Lifecycle (SDLC) and proficiency in JavaScript as my primary Object-Oriented Programming Language (OOP). Earned a Full Stack Web Development Certificate from Northwestern University, enhancing skills in web development and data analytics. Strong background in innovation and creative problem-solving with a track record of successful client collaboration. A key team player with excellent interpersonal communication skills, adept at multitasking and applying effective time management to achieve company goals. Motivated, organized and detail driven, actively seeking opportunities for personal and career development.
        </p>
      </div>
      <div className="contact-info container my-2 pb-5">
        <div className="contact-text pb-5">
          <h2>My Contact Information</h2>
          <p>Email: gpmeyer24@gmail.com</p>
          <p>Cell: 815-353-9474</p>
          <p>GitHub: gmeyer24</p>
        </div>
      </div>
    </div>
  );
}
