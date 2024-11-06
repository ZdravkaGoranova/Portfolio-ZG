import './Home.css';

const Home = () => {
  return (
    <>
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
      </section>
    </>
  );
};

export default Home;
