import './Home.css';
import PropTypes from 'prop-types';

const Home = ({
  description,
  github,
  gitlab,
  linkedin,
  name,
  role1,
  role2,
}) => {
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
          <h1>{name}</h1>
          <h2>
            I&apos;m a
            <span style={{ '--i': 2, marginLeft: '10px' }} data-text={role1}>
              {role1}
            </span>
            <span style={{ '--i': 1, marginLeft: '10px' }} data-text={role2}>
              {role2}
            </span>
          </h2>
          <p>{description}</p>

          <div className="btn-sci">
            <a
              href="/Zdrvavka_Goranova_CV.pdf"
              className="btn"
              download="Zdrvavka_Goranova_CV.pdf"
            >
              Download CV
            </a>

            <div className="sci">
              <a href={linkedin}>
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href={github}>
                <i className="bx bxl-github"></i>
              </a>

              <a href={gitlab}>
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
Home.propTypes = {
  // data: PropTypes.array.isRequired,

  description: PropTypes.string,
  github: PropTypes.string,
  gitlab: PropTypes.string,
  linkedin: PropTypes.string,
  name: PropTypes.string,
  role1: PropTypes.string,
  role2: PropTypes.string,
};
