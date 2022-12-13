import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'


const HomePage = () => {
  return (

    <>
      <section class="home">
        <div class="container">
          <div class="home__wrap">
            <div class="home-left">
              <h1>Building stellar websites for early startups</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <div class="button-block">
                <button class="home-button home-filled">View our work</button>
                <button class="home-button home-transparent">
                  <Link to="/price">
                    <span>View Pricing</span>
                    <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.2171 0L11.4132 0.840384L14.8237 4.40579H0V5.59433H14.8236L11.4132 9.15962L12.2171 10L17 5L12.2171 0Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </Link>
                </button>
              </div>
            </div>
            <div class="home-right">
              <img src="/assets/Illustration.png" alt="ill" />
            </div>
          </div>
        </div>
      </section>
      <section class="work">
        <div class="container">
          <div class="work__wrap">
            <div class="work-left">
              <h2>How we work</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <button class="work-button">
                <a href="price.html">
                  <span>Get in touch with us</span>
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2171 0L11.4132 0.840384L14.8237 4.40579H0V5.59433H14.8236L11.4132 9.15962L12.2171 10L17 5L12.2171 0Z"
                      fill="#2405f2"
                    />
                  </svg>
                </a>
              </button>
            </div>
            <div class="work-right">
              <div class="work-item">
                <img src="/assets/pointer_1.png" alt="1" />
                <h5>Strategy</h5>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>
              </div>
              <div class="work-item">
                <img src="/assets/pointer_2.png" alt="1" />
                <h5>Wireframing</h5>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>
              </div>
              <div class="work-item">
                <img src="/assets/pointer_3.png" alt="1" />
                <h5>Design</h5>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>
              </div>
              <div class="work-item">
                <img src="/assets/pointer_4.png" alt="1" />
                <h5>Development</h5>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    // <div className="container">
    //   <section id="home" className="home" >
    //     <div className="wrap">
    //       <div className="home__left">

    //         <Subtitle>Creative work, creative mind</Subtitle>
    //         <Title color="black" size="large" className="home__title">We Are Digital
    //           Creative Agency</Title>
    //         <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabi sed metus id et viverra augue.</P>
    //         <Button color="blue" className="home__button">Get in Touch</Button>

    //       </div>
    //       <div className="home__right">
    //         <div className={cn("home__image", "big")}>
    //           <img src="/assets/home_2.jpg" alt="chairs" />
    //         </div>
    //         <div className={cn("home__image", "small")}>
    //           <img src="/assets/home_1.jpg" alt="chairs" />
    //         </div>
    //       </div>
    //     </div>

    //     <div className="wrapper">
    //       {INFO_DATA.map((item, index) => (
    //         <div className="info" key={index}>
    //           <Item color={item.color} icon={item.icon} />
    //           <div className="divider">
    //             <Title size="medium" >{item.title}</Title>
    //             <P>{item.description}</P>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </section>
    //   <section id="about" className="about">
    //     <div className="wrapper">
    //       <div className="image">
    //         <img src="/assets/about_1.jpg" alt="about" />
    //       </div>
    //       <div>
    //         <Subtitle>About Us</Subtitle>
    //         <Title color="black" size="large" className="about__title">Design & Develop
    //           For Better Solution</Title>
    //         <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies mauris, habitasse nec mauris sagittis imperdiet lobortis porttitor. Ipsum mi sed uta aliquet ut. Turpis viverra volutpat sed eu porta morbi egesta ut   hac rutrum ut augue vitae, nec, ut. Nibh nibh quam</P>
    //         <Button color="blue" className="about__button">Learn More</Button>
    //       </div>
    //     </div>
    //   </section>
    //   <section id="portfolio" className="portfolio">
    //     <div className="wrapper">
    //       <div> <Subtitle>Portfolio</Subtitle>
    //         <Title color="black" size="large" className="portfolio__title">View Our Case Studies</Title></div>
    //       <div> <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies mauris, hab</P><button className="portfolio__btn">VIEw All <ArrowRight /></button></div>
    //     </div>
    //     <div className="wrap">
    //       <div className="image">
    //         <img src="/assets/port_1.jpg" alt="about" />
    //         <button className="btn"><ArrowRight /></button>
    //       </div>
    //       <div className="image">
    //         <img src="/assets/port_2.jpg" alt="about" />
    //         <button className="btn"><ArrowRight /></button>
    //       </div>
    //       <div className="image">
    //         <img src="/assets/port_3.jpg" alt="about" />
    //         <button className="btn"><ArrowRight /></button>
    //       </div>
    //     </div>
    //   </section>
    //   <section id="testimony" className="testimony">
    //     <div className="gradient" />
    //     <Subtitle>Testimony</Subtitle>
    //     <Title color="black" size="large" className="testimony__title" >What Do Our Clients Says About Us </Title>
    //     <img src="/assets/slider/Ellipse1.png" alt="test1" className="img-bg img-bg__1" />
    //     <img src="/assets/slider/Ellipse2.png" alt="test1" className="img-bg img-bg__2" />
    //     <img src="/assets/slider/Ellipse3.png" alt="test1" className="img-bg img-bg__3" />
    //     <img src="/assets/slider/Ellipse5.png" alt="test1" className="img-bg img-bg__5" />
    //     <img src="/assets/slider/Ellipse6.png" alt="test1" className="img-bg img-bg__6" />
    //     <img src="/assets/slider/Ellipse7.png" alt="test1" className="img-bg img-bg__7" />
    //     <Slider {...settings} className="slider">
    //       {SLIDER_DATA.map((item, index) => {
    //         return (<div className="slider__item" key={index}>
    //           <div className="middle-gradient" />
    //           <div className="image">
    //             <img src={item.image} alt={item.fullName} />
    //           </div>
    //           <P>{item.description}</P>
    //           <div className="slider__name">{item.fullName}</div>
    //           <div className="slider__post">{item.post}</div>
    //         </div>)
    //       })}
    //     </Slider>
    //   </section>
    //   <section id="news" className="blog">
    //     <Subtitle>Blog</Subtitle>
    //     <Title color="black" size="large" className="blog__title" >Read OurNews</Title>
    //     <div className="wrapper">
    //       <div className="card">
    //         <img src="/assets/blog_1.png" alt="blog_1" />
    //         <p className="sign">
    //           <span>09 April,2022</span>
    //           <span>by Admin</span>
    //         </p>
    //         <P>Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam </P>
    //         <button>Read More</button>
    //       </div>
    //       <div className="card">
    //         <img src="/assets/blog_2.png" alt="blog_1" />
    //         <p className="sign">
    //           <span>09 April,2022</span>
    //           <span>by Admin</span>
    //         </p>
    //         <P className="description">Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam </P>
    //         <button>Read More</button>
    //       </div>
    //       <div className="card">
    //         <img src="/assets/blog_3.png" alt="blog_1" />
    //         <p className="sign">
    //           <span>09 April,2022</span>
    //           <span>by Admin</span>
    //         </p>
    //         <P>Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam </P>
    //         <button className="card__btn">Read More</button>
    //       </div>
    //     </div>
    //   </section>
    //   <section id="contact" className="contact">
    //     <div className="wrapper">
    //       <Title color="white" size="large" style={{ fontSize: '40px' }}>We Like To Start Your Project With Us</Title>
    //       <div>
    //         <Button color="white">Get in Touch</Button>

    //       </div>
    //     </div>

    //   </section>
    // </div>
  );
};

export default HomePage;
