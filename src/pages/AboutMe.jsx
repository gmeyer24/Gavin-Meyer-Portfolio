import myProfilePicture from "../../public/images/headshot.jpeg";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="mx-auto">
      <div className="container px-3 p-3 py-md-5 px-md-3">
        <h1 className="mb-4">About Me</h1>
        <img
          src={myProfilePicture}
          alt="My Profile"
          style={{ width: "200px", height: "200px" }}
          className="mb-4"
        />
        <p>
          Professional Full Stack Developer with demonstrated experience across
          the Software Development Lifecycle (SDLC), emphasized in JavaScript as
          my primary Object-Oriented Programming Language (OOP). Earning a
          certificate in Full Stack Web Development from Northwestern University
          to hone skills in Web Development. Highly knowledgeable in diverse
          areas of innovation and problem solving, utilizing creative strategies
          to help clients. Key team player with excellent interpersonal
          communication skills, establishing and maintaining strong
          relationships with both colleagues and clients. Strong ability to
          multi-task while applying time management skills to reach company
          goals. Highly motivated, organized and detail driven, pro-actively
          seeking opportunities for personal and career development.
        </p>
      </div>
      <div className="contact-info container my-2 pb-5">
       <div className="contact-text pb-5">
          <h2>My Contact Information</h2>
          <p>Email: gpmeyer24@gmail.com</p>
          <p>Cell: 815-353-9474</p>
       </div>
      </div>
    </div>
  );
}
