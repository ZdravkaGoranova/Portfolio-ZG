import './Home.css';

const Home = () => {
  return (
    <>
      <div className="bars-animation">
        <div className="bar" style={{ '--i': 6 }}></div>
        <div className="bar" style={{ '--i': 5 }}></div>
        <div className="bar" style={{ '--i': 4 }}></div>
        <div className="bar" style={{ '--i': 3 }}></div>
        <div className="bar" style={{ '--i': 2 }}></div>
        <div className="bar" style={{ '--i': 1 }}></div>
      </div>

      <section className="home">
        <div className="home-img">
          <div className="img-box">
            <div className="img-item">
              <img src="./image-zdr-ND.png" alt="" />
            </div>
          </div>
        </div>
        <div className="home-info">
          <h5>Hello, It&apos; s ME</h5>
          <h1>Zdravka Goranova</h1>
          <h2>
            I&apos;m a
            <span
              style={{ '--i': 2, marginLeft: '10px' }}
              data-text="Frontend Developer"
            >
              Frontend Developer
            </span>
            <span
              style={{ '--i': 1, marginLeft: '10px' }}
              data-text="Web Developer"
            >
              {' '}
              Web Developer
            </span>
          </h2>
          <p>
            I own a wide range of technologies, including JavaScript, React,
            Angular, and Node.js. My skills include working with databases such
            as MongoDB and MySQL, as well as using tools such as Git, GitHub,
            Visual Studio Code, and others. I combine my technical knowledge
            with analytical skills and attention to detail.
          </p>
          <div className="btn-sci">
            <a href="" className="btn">
              Download CV
            </a>
            <div className="sci">
              <a href="#">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="#">
                <i className="bx bxl-github"></i>
              </a>

              <a href="#">
                <i className="bx bxl-gitlab"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
