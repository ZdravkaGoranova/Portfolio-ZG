import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Projects.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const BootstrapButton = styled(Button)(({ theme }) => ({
  boxShadow: 'none',
  textTransform: 'none',
  lineHeight: 1.5,
  fontSize: '12px',
  padding: '4px 8px',
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: 'transparent',
  color: theme.palette.mode === 'dark' ? 'white' : 'black', // Адаптивен цвят на текста
  borderColor: '#cba75b',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#ffbf00',
    borderColor: '#ffbf00',
    boxShadow: 'none',
    color: 'white',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#ffbf00',
    borderColor: '#ffbf00',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
}));

const Projects = ({ theme }) => {
  console.log('Current theme class:', theme);
  const textColor = theme === 'dark' ? 'white' : 'black';
  const borderColor = theme === 'dark' ? '#cba75b' : '#cba75b';

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
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <a
                      href="https://github.com/ZdravkaGoranova/Lufthansa_APL_Effective_Panels"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex' }}
                    >
                      <BootstrapButton
                        variant="outlined"
                        size="small"
                        startIcon={<OpenInNewOutlinedIcon />}
                        sx={{
                          color: textColor,
                          borderColor: borderColor,
                          '&:hover': {
                            backgroundColor: '#ffbf00',
                            color: 'white',
                            borderColor: '#ffbf00',
                          },
                        }}
                      >
                        Link to Source Code
                      </BootstrapButton>
                    </a>

                    <a
                      href="https://lufthansa-pdf.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex' }}
                    >
                      <BootstrapButton
                        variant="outlined"
                        size="small"
                        startIcon={<OpenInNewOutlinedIcon />}
                        sx={{
                          color: textColor,
                          borderColor: borderColor,
                          '&:hover': {
                            backgroundColor: '#ffbf00',
                            color: 'white',
                            borderColor: '#ffbf00',
                          },
                        }}
                      >
                        Live Preview
                      </BootstrapButton>
                    </a>
                  </Stack>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide slide-2">
              <div className="title">
                <h2>Wood-Woord-Bulgaria</h2>
              </div>
              <img src="/CatalogProfilePage.jpg" />
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
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <a
                      href="https://github.com/ZdravkaGoranova/My-React-Prodject-2023-Wood-Woord-Bulgaria"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex' }}
                    >
                      <BootstrapButton
                        variant="outlined"
                        size="small"
                        startIcon={<OpenInNewOutlinedIcon />}
                        sx={{
                          color: textColor,
                          borderColor: borderColor,
                          '&:hover': {
                            backgroundColor: '#ffbf00',
                            color: 'white',
                            borderColor: '#ffbf00',
                          },
                        }}
                      >
                        Link to Source Code
                      </BootstrapButton>
                    </a>

                    <a
                      href="https://react-wood-working.web.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex' }}
                    >
                      <BootstrapButton
                        variant="outlined"
                        size="small"
                        startIcon={<OpenInNewOutlinedIcon />}
                        sx={{
                          color: textColor,
                          borderColor: borderColor,
                          '&:hover': {
                            backgroundColor: '#ffbf00',
                            color: 'white',
                            borderColor: '#ffbf00',
                          },
                        }}
                      >
                        Live Preview
                      </BootstrapButton>
                    </a>
                  </Stack>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide slide-3">
              <div className="title">
                <h2>GBstyle-nails-By-Galya-Lazarova</h2>
              </div>
              <img src="/Home.jpg" />
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
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <a
                      href="https://github.com/ZdravkaGoranova/GBstyle-nails-By-Galya-Lazarova"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex' }}
                    >
                      <BootstrapButton
                        variant="outlined"
                        size="small"
                        startIcon={<OpenInNewOutlinedIcon />}
                        sx={{
                          color: textColor,
                          borderColor: borderColor,
                          '&:hover': {
                            backgroundColor: '#ffbf00',
                            color: 'white',
                            borderColor: '#ffbf00',
                          },
                        }}
                      >
                        Link to Source Code
                      </BootstrapButton>
                    </a>

                    <a
                      href="https://gbstyle-nails-galya-lazarova.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex' }}
                    >
                      <BootstrapButton
                        variant="outlined"
                        size="small"
                        startIcon={<OpenInNewOutlinedIcon />}
                        sx={{
                          color: textColor,
                          borderColor: borderColor,
                          '&:hover': {
                            backgroundColor: '#ffbf00',
                            color: 'white',
                            borderColor: '#ffbf00',
                          },
                        }}
                      >
                        Live Preview
                      </BootstrapButton>
                    </a>
                  </Stack>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide slide-4">
              <div className="title">
                <h2>Аmigurumi</h2>
              </div>
              <img src="/HomePage.jpg" />
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
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <a
                      href="https://github.com/ZdravkaGoranova/Angular-Project-Amigurumi"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex' }}
                    >
                      <BootstrapButton
                        variant="outlined"
                        size="small"
                        startIcon={<OpenInNewOutlinedIcon />}
                        sx={{
                          color: textColor,
                          borderColor: borderColor,
                          '&:hover': {
                            backgroundColor: '#ffbf00',
                            color: 'white',
                            borderColor: '#ffbf00',
                          },
                        }}
                      >
                        Link to Source Code
                      </BootstrapButton>
                    </a>

                    <a
                      href="https://amugurumiusers.web.app/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex' }}
                    >
                      <BootstrapButton
                        variant="outlined"
                        size="small"
                        startIcon={<OpenInNewOutlinedIcon />}
                        sx={{
                          color: textColor,
                          borderColor: borderColor,
                          '&:hover': {
                            backgroundColor: '#ffbf00',
                            color: 'white',
                            borderColor: '#ffbf00',
                          },
                        }}
                      >
                        Live Preview
                      </BootstrapButton>
                    </a>
                  </Stack>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide slide-5">
              <div className="title">
                <h2>Beauty-Traiding</h2>
              </div>
              <img src="/portFolio.jpg" />
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
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <a
                      href="https://github.com/ZdravkaGoranova/Beauty-Traiding"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex' }}
                    >
                      <BootstrapButton
                        variant="outlined"
                        size="small"
                        startIcon={<OpenInNewOutlinedIcon />}
                        sx={{
                          color: textColor,
                          borderColor: borderColor,
                          '&:hover': {
                            backgroundColor: '#ffbf00',
                            color: 'white',
                            borderColor: '#ffbf00',
                          },
                        }}
                      >
                        Link to Source Code
                      </BootstrapButton>
                    </a>

                    <a
                      href="https://beauty-training.web.app/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex' }}
                    >
                      <BootstrapButton
                        variant="outlined"
                        size="small"
                        startIcon={<OpenInNewOutlinedIcon />}
                        sx={{
                          color: textColor,
                          borderColor: borderColor,
                          '&:hover': {
                            backgroundColor: '#ffbf00',
                            color: 'white',
                            borderColor: '#ffbf00',
                          },
                        }}
                      >
                        Live Preview
                      </BootstrapButton>
                    </a>
                  </Stack>
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
Projects.propTypes = {
  theme: PropTypes.string.isRequired,
};
