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
        <div className="home-info">
          <h1>Zdravka Goranova</h1>
          <h2>I&apos;m a Frontend Developer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            explicabo, reprehenderit laboriosam, officia vero delectus dolores
            numquam doloremque debitis eius quas praesentium enim accusamus!
            Cumque illo dolorum maxime porro perferendis.
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

        <div className="home-img">
          <div className="img-box">
            <div className="img-item">
              <img src="./image-zdr.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
