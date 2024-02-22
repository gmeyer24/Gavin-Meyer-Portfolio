export default function Contact() {
  return (
    <div>
      <h1>Contact Form</h1>
      <form action="">
        Name: <input type="name" />
        Email: <input type="email" name="email" id="email" />
        Message: <input type="text" name="message" id="message" />
      </form>
      <div>
        <h2>My Contact Information</h2>
        <p>
          Email: gpmeyer24@gmail.com
          Cell: 815-353-9474
        </p>
      </div>
    </div>
  );
}
