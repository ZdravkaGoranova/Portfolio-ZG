import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Projects.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import Button from '@mui/material/Button';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const Projects = () => {
  return (
    <>
      <div className="container-projects">
        <h2>PERSONAL PROJECTS</h2>
        <div className="all-projects">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="swiper-slide slide-1">
              <div className="title">
                <h2>Lufthansa_APL_Effective_Panels</h2>
              </div>
              <img src="/start.jpg" />
              <div className="content">
                {/* <div className="score">
                
                </div> */}

                <div className="text">
                  <h4>Lufthansa_APL_Effective_Panels</h4>

                  <p>
                    This application is used to search for effective panels by
                    submitted documentation of a customer of Lufthansa
                    Technician Sofia. Upload the pdf documentation for a
                    particular aircraft , then upload the excel with certain
                    panels . After pressing the button submit is displayed in
                    the result section whether there are or not matches and how
                    many are .
                  </p>
                </div>

                <div className="genre">
                  <span style={{ '--i': 1 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<OpenInNewOutlinedIcon />}
                      color="white"
                    >
                      Link to Source Code
                    </Button>
                  </span>
                  <span style={{ '--i': 2 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      color="white"
                      startIcon={<OpenInNewOutlinedIcon />}
                    >
                      Live Preview
                    </Button>
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide slide-2">
              <div className="title">
                <h2>Wood-Woord-Bulgaria</h2>
              </div>
              <img src="../../../public/CatalogProfilePage.jpg" />
              <div className="content">
                {/* <div className="score">
                
                </div> */}

                <div className="text">
                  <h4>Wood-Woord-Bulgaria</h4>

                  <p>
                    Wood Woord Bulgaria is a place, where you can browse some of
                    the most popular Wood working product,tools, furnitures and
                    other product in the world and add some new product that you
                    have created. Authenticated users can like and comment on
                    products in the app. Sellers can use the platform to add,
                    update and delete products from their profile page.
                  </p>
                </div>

                <div className="genre">
                  <span style={{ '--i': 1 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<OpenInNewOutlinedIcon />}
                      color="white"
                    >
                      Link to Source Code
                    </Button>
                  </span>
                  <span style={{ '--i': 2 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      color="white"
                      startIcon={<OpenInNewOutlinedIcon />}
                    >
                      Live Preview
                    </Button>
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide slide-3">
              <div className="title">
                <h2>GBstyle-nails-By-Galya-Lazarova</h2>
              </div>
              <img src="../../../public/Home.jpg" />
              <div className="content">
                {/* <div className="score">
                
                </div> */}

                <div className="text">
                  <h4>GBstyle-nails-By-Galya-Lazarova</h4>

                  <p>
                    GBstyle-nails By Galya Lazarova is abeauty salon website.The
                    site offers various beauty treatments described in the
                    category . The GBstyle-nails By Galya Lazarova application
                    contains the following views: home page, category page,
                    about us page callery page and beauty salon page.
                  </p>
                </div>

                <div className="genre">
                  <span style={{ '--i': 1 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<OpenInNewOutlinedIcon />}
                      color="white"
                    >
                      Link to Source Code
                    </Button>
                  </span>
                  <span style={{ '--i': 2 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      color="white"
                      startIcon={<OpenInNewOutlinedIcon />}
                    >
                      Live Preview
                    </Button>
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide slide-4">
              <div className="title">
                <h2>Аmigurumi</h2>
              </div>
              <img src="../../../public/HomePage.jpg" />
              <div className="content">
                {/* <div className="score">
                
                </div> */}

                <div className="text">
                  <h4>Аmigurumi</h4>

                  <p>
                    Angular-Project-Amigurumi is a place, where you can browse
                    some of the most popular Amigurumi in the world and add some
                    new product that you have created. Authenticated users can
                    like and comment on products in the app. Sellers can use the
                    platform to add, update and delete products from their
                    profile page.
                  </p>
                </div>

                <div className="genre">
                  <span style={{ '--i': 1 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<OpenInNewOutlinedIcon />}
                      color="white"
                    >
                      Link to Source Code
                    </Button>
                  </span>
                  <span style={{ '--i': 2 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      color="white"
                      startIcon={<OpenInNewOutlinedIcon />}
                    >
                      Live Preview
                    </Button>
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide slide-5">
              <div className="title">
                <h2>Beauty-Traiding</h2>
              </div>
              <img src="/public/portFolio.jpg" />
              <div className="content">
                {/* <div className="score">
                
                </div> */}

                <div className="text">
                  <h4>Beauty-Traiding</h4>

                  <p>
                    Beauty-Traiding is a beauty traiding website.Beauty-Traiding
                    is a website for providing various types of beauty courses
                    in the beauty salon industry The Beauty-Traiding application
                    contains the following views: home page, activities page,
                    contact Us page and gallery page.
                  </p>
                </div>

                <div className="genre">
                  <span style={{ '--i': 1 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<OpenInNewOutlinedIcon />}
                      color="white"
                    >
                      Link to Source Code
                    </Button>
                  </span>
                  <span style={{ '--i': 2 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      color="white"
                      startIcon={<OpenInNewOutlinedIcon />}
                    >
                      Live Preview
                    </Button>
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide slide-6">
              <div className="title">
                <h2>Аmigurumi</h2>
              </div>
              <img src="../../../public/HomePage.jpg" />
              <div className="content">
                {/* <div className="score">
                
                </div> */}

                <div className="text">
                  <h4>Аmigurumi</h4>

                  <p>
                    Angular-Project-Amigurumi is a place, where you can browse
                    some of the most popular Amigurumi in the world and add some
                    new product that you have created. Authenticated users can
                    like and comment on products in the app. Sellers can use the
                    platform to add, update and delete products from their
                    profile page.
                  </p>
                </div>

                <div className="genre">
                  <span style={{ '--i': 1 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<OpenInNewOutlinedIcon />}
                      color="white"
                    >
                      Link to Source Code
                    </Button>
                  </span>
                  <span style={{ '--i': 2 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      color="white"
                      startIcon={<OpenInNewOutlinedIcon />}
                    >
                      Live Preview
                    </Button>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Projects;
