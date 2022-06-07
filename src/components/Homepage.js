import React from "react";

function Homepage() {
  return (
    <div className="homepage">
      <header>
        <div class="header">
          <img
            src="https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="laptop"
          />
        </div>
      </header>

      <h1>Asel Williams</h1>

      <p>
        Seytech student, web developer- <strong>software engineer.</strong>{" "}
        Thank you for visiting my website.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eum, qui accusantium voluptas alias deserunt officia
        veritatis obcaecati, minima vel voluptatum placeat accusamus praesentium
        doloribus fuga dicta incidunt facilis! Rem, quisquam.List of things I am
        learning: <span class="title bold">HTML</span>,{" "}
        <span class="title bold">CSS</span>,{" "}
        <span class="title">Javasscript</span>, <span class="title">React</span>
      </p>

      <h2>About Me</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        <span class="title bold">Facilis</span>, corporis totam? Nobis ipsam
        corporis iusto laudantium illum repellendus porro ipsa nihil quos
        impedit sunt modi, voluptatem accusamus praesentium quaerat nemo!
      </p>
      <h2>My Goals</h2>

      <ol>
        <li>Learning HTML/CSS</li>
        <li>Learning Javascript</li>
        <li>Learning React</li>
        <li>Finding a Software Engineer job</li>
      </ol>
    </div>
  );
}

export default Homepage;
