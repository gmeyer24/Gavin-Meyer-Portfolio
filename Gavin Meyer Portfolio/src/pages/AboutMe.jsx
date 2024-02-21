import myProfilePicture from '../../public/images/headshot.jpeg';

export default function AboutMe(){
    return(
        <div>
      <h1>About</h1>
      <img src={myProfilePicture} alt="My Profile" style={{ width: '200px', height: '200px' }} />
      <p>
      Professional Full Stack Developer with demonstrated experience across the Software Development Lifecycle (SDLC), emphasized in JavaScript as my primary Object-Oriented Programming Language (OOP). Earning a certificate in Full Stack Web Development from Northwestern University to hone skills in Web Development. Highly knowledgeable in diverse areas of innovation and problem solving, utilizing creative strategies to help clients. Key team player with excellent interpersonal communication skills, establishing and maintaining strong relationships with both colleagues and clients. Strong ability to multi-task while applying time management skills to reach company goals. Highly motivated, organized and detail driven, pro-actively seeking opportunities for personal and career development.
      </p>
    </div>
    )
}
