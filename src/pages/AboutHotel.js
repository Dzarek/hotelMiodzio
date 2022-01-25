import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useContext } from "react";
import { RoomContext } from "../roomContext";

import ServicesHome from "../components/HomeComponents/ServicesHome";

import BuildingImg from "../images/homeImages/Budynek.jpg";

const AboutHotel = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const context = useContext(RoomContext);
  const { polish } = context;
  return (
    <>
      {polish ? (
        <Wrapper>
          <div className="hotelAboutHeader">
            <div className="backgroundDark"></div>
            <div className="title">
              <h2 data-aos="zoom-in">Hotel Miodzio</h2>
              <h4 data-aos="zoom-in">luksusowe apartamenty w centrum miasta</h4>
            </div>
          </div>
          <div className="description">
            <h3>O Hotelu</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab illo
              officia eos unde dolor rem odit, impedit cumque dolores sit iure
              non et, enim ipsa quidem vero exercitationem, maiores qui
              laudantium vel dignissimos ullam consequatur. Magni tempore
              veritatis voluptas amet pariatur consequatur ullam cupiditate
              porro? Nulla ullam harum quasi voluptas, officia, ex corporis
              ducimus eaque sequi beatae asperiores. Dolor, culpa.
            </p>

            <section>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                illo officia eos unde dolor rem odit, impedit cumque dolores sit
                iure non et, enim ipsa quidem vero exercitationem, maiores qui
                laudantium vel dignissimos ullam consequatur. Magni tempore
                veritatis voluptas amet pariatur consequatur ullam cupiditate
                porro? Nulla ullam harum quasi voluptas, officia, ex corporis
                ducimus eaque sequi beatae asperiores. Dolor, culpa.
              </p>
              <img data-aos="fade-left" src={BuildingImg} alt="budynek" />
            </section>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab illo
              officia eos unde dolor rem odit, impedit cumque dolores sit iure
              non et, enim ipsa quidem vero exercitationem, maiores qui
              laudantium vel dignissimos ullam consequatur.
            </p>
          </div>
          <div className="hotelInNumbers">
            {/* <div className="backgroundhotelInNumbers"></div> */}
            <div className="inNumbers">
              <span data-aos="zoom-in-left">
                <h3>50</h3>
                <p>pokoi</p>
              </span>
              <span data-aos="zoom-in">
                <h3>150</h3>
                <p>max. osób</p>
              </span>
              <span data-aos="zoom-in-right" data-aos-offset="-200">
                <h3>15</h3>
                <p>personelu</p>
              </span>
            </div>
          </div>
        </Wrapper>
      ) : (
        <Wrapper>
          <div className="hotelAboutHeader">
            <div className="backgroundDark"></div>
            <div className="title">
              <h2 data-aos="zoom-in">Hotel Miodowa</h2>
              <h4 data-aos="zoom-in">
                luxurious apartments in the center of Cracow
              </h4>
            </div>
          </div>
          <div className="description">
            <h3>About Hotel</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab illo
              officia eos unde dolor rem odit, impedit cumque dolores sit iure
              non et, enim ipsa quidem vero exercitationem, maiores qui
              laudantium vel dignissimos ullam consequatur. Magni tempore
              veritatis voluptas amet pariatur consequatur ullam cupiditate
              porro? Nulla ullam harum quasi voluptas, officia, ex corporis
              ducimus eaque sequi beatae asperiores. Dolor, culpa.
            </p>
            <section>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                illo officia eos unde dolor rem odit, impedit cumque dolores sit
                iure non et, enim ipsa quidem vero exercitationem, maiores qui
                laudantium vel dignissimos ullam consequatur. Magni tempore
                veritatis voluptas amet pariatur consequatur ullam cupiditate
                porro? Nulla ullam harum quasi voluptas, officia, ex corporis
                ducimus eaque sequi beatae asperiores. Dolor, culpa.
              </p>
              <img data-aos="fade-left" src={BuildingImg} alt="budynek" />
            </section>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab illo
              officia eos unde dolor rem odit, impedit cumque dolores sit iure
              non et, enim ipsa quidem vero exercitationem, maiores qui
              laudantium vel dignissimos ullam consequatur.
            </p>
          </div>
          <div className="hotelInNumbers">
            <div className="inNumbers">
              <span data-aos="zoom-in-left">
                <h3>50</h3>
                <p>rooms</p>
              </span>
              <span data-aos="zoom-in">
                <h3>150</h3>
                <p>max. guests</p>
              </span>
              <span data-aos="zoom-in-right">
                <h3>15</h3>
                <p>staff</p>
              </span>
            </div>
          </div>
          <ServicesHome />
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  padding-top: 13vh;
  margin: 0 auto;
  .hotelAboutHeader {
    position: relative;
    height: 50vh;
    width: 100%;
    border-bottom: 2px solid var(--secondaryColor);

    .title {
      font-size: 1.8rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      text-shadow: 0 2px 2px black;
      color: white;
      h4 {
        text-transform: lowerCase;
        margin-top: 2vh;
      }
    }
    @media screen and (max-width: 800px) {
      h2 {
        font-size: 1.8rem;
      }
      h4 {
        font-size: 1.5rem;
      }
    }
  }
  .description {
    width: 70%;
    margin: 10vh auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
      font-size: 2.5rem;
      align-self: flex-start;
      font-family: var(--titleFont);
      color: var(--secondaryColor2);
    }
    p {
      font-family: var(--textFont);
      color: var(--primaryColor);
      font-size: 1.1rem;
      margin-top: 8vh;
      line-height: 1.3;
    }
    section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        width: 40%;
      }
      img {
        width: 35%;
        border-radius: 5px;
        margin-right: 15%;
        margin-top: 8vh;
      }
    }
    @media screen and (max-width: 800px) {
      width: 85%;
      h3 {
        font-size: 2rem;
      }
      section {
        flex-direction: column;
        width: 100vw;
        p {
          width: 85%;
          text-align: center;
        }
        img {
          width: 80%;
          margin-right: 0;
        }
      }
      p:nth-of-type(2) {
        text-align: right;
      }
    }
  }
  .hotelInNumbers {
    width: 100vw;
    height: 70vh;
    position: relative;
    margin: 20vh auto 25vh;

    .inNumbers {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      span {
        width: 150px;
        height: 150px;
        border-radius: 30%;
        background: var(--secondaryColor);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 5vw;
        text-align: center;
        font-family: var(--buttonFont);
        opacity: 0.9;
        h3 {
          font-size: 3rem;
          margin-bottom: 1vh;
        }
        p {
          font-size: 1.2rem;
        }
      }
    }
    @media screen and (max-width: 800px) {
      height: 70vh;
      .inNumbers {
        flex-direction: column;
        justify-content: space-around;
        align-items: space-around;
        span {
          width: 90px;
          height: 90px;
          margin: 2vh auto;
          h3 {
            font-size: 1.8rem;
            margin-bottom: 1vh;
          }
          p {
            font-size: 1rem;
          }
        }
      }
    }
    @media (orientation: landscape) and (max-width: 800px) {
      height: 100vh;
    }
  }
`;

export default AboutHotel;
