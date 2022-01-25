import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import MyForm from "../components/MyForm";
import { useContext } from "react";
import { RoomContext } from "../roomContext";

import { MdMail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const context = useContext(RoomContext);
  const { polish } = context;

  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 800;
  return (
    <Wrapper>
      <div className="title">
        <h1>
          <FaPhoneAlt />
        </h1>
        <h2>
          {" "}
          <MdMail />
        </h2>

        <h3>
          <FaMapMarkerAlt />
        </h3>

        <h2 data-aos="fade-up">{polish ? "Kontakt" : "Contact"}</h2>
        <h3>
          <FaMapMarkerAlt />
        </h3>
        <h2>
          <MdMail />
        </h2>
        <h1>
          <FaPhoneAlt />
        </h1>
      </div>
      <div className="contactContent">
        <section className="form">
          <MyForm polish={polish} />
        </section>
        <section className="social">
          <div data-aos="fade-left" className="adressPhoneEmail">
            <span>
              <FaMapMarkerAlt />
              <p>ul. Jakaś 12, 31-000 Kraków</p>
            </span>
            <span>
              <FaPhoneAlt />
              {!isMobile ? (
                <p>+48 12 3456789, +48 123 456 789</p>
              ) : (
                <p>
                  +48 12 3456789, <br /> +48 123 456 789
                </p>
              )}
            </span>
            <span>
              <MdMail />
              <p>rezerwacja@hotel.pl</p>
            </span>
          </div>
          <div className="bankDetails">
            <h2>Bank</h2>
            <p>Miodek Sp z.o.o.</p>
            <p>ul. Jakaś 12</p>
            <p>31-000 Kraków</p>
            <p>00 0000 0000 0000 0000 0000 0000</p>
            <br />
            <p>IBAN: PL 00 0000 0000 0000 0000 0000 0000</p>
            <p>SWIFT/BIC kod: XXXXXXXXX</p>
          </div>
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14488.97922290798!2d19.933687012994792!3d50.06168339277652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471644c0354e18d1%3A0xb46bb6b576478abf!2zS3Jha8Ozdw!5e0!3m2!1spl!2spl!4v1643123136138!5m2!1spl!2spl"
        className="Map"
        title="mapa"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  padding-top: 13vh;
  margin: 0 auto;
  .title {
    padding-top: 10vh;
    padding-bottom: 10vh;
    width: 100vw;
    background: #eee;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #444;
    h2 {
      color: var(--secondaryColor);
      letter-spacing: 10px;
      text-align: center;
    }
    @media screen and (max-width: 800px) {
      h1:nth-of-type(2) {
        display: none;
      }

      h2:nth-of-type(3) {
        display: none;
      }
      h3:nth-of-type(2) {
        display: none;
      }
      h1 {
        font-size: 1.8rem;
      }
      h2 {
        font-size: 1.8rem;
        letter-spacing: 5px;
      }
      h3 {
        font-size: 1.8rem;
      }
    }
  }
  .Map {
    width: 100%;
    height: 60vh;
    position: relative;
    bottom: 0;
    left: 0;
    filter: saturate(0);
    margin-bottom: -21vh;
    margin-top: 15vh;
    transition: 0.6s;
    border-top: 2px solid var(--secondaryColor);
    :hover {
      filter: saturate(1);
    }
  }
  .contactContent {
    display: flex;
    justify-content: space-between;
    width: 80vw;
    max-width: 1360px;
    position: relative;
    margin: 15vh auto 5vh;
    .form {
      width: 50%;
    }
    @media screen and (max-width: 800px) {
      width: 90vw;
      flex-direction: column;
      form {
        width: 90vw;
      }
    }
  }
  .social {
    display: flex;
    flex-direction: column;
    width: 40%;
    @media screen and (max-width: 800px) {
      width: 100%;
    }
    .adressPhoneEmail {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      justify-content: center;
      font-family: var(--buttonFont);
      @media screen and (max-width: 800px) {
        margin-top: 10vh;
      }
      span {
        display: flex;
        align-items: center;
        border-radius: 5px;
        background: var(--secondaryColor);
        padding: 10px 20px;
        font-size: 1.2rem;
        margin: 2vh auto;
        width: 23vw;

        :nth-of-type(1) {
          margin-left: -2vw;
          background: var(--secondaryColor2);
        }
        :nth-of-type(3) {
          margin-right: -2vw;
          background: var(--bookBtnColor);
        }

        p {
          margin-left: 15px;
          text-align: center;
        }
        @media screen and (max-width: 800px) {
          width: 90vw;
          padding: 5px 10px;

          :nth-of-type(1) {
            margin-left: 0vw;
            margin: 2vh auto;
            background: var(--bookBtnColor);
          }
          :nth-of-type(2) {
            width: 60vw;
            background: var(--bookBtnColor);
          }
          :nth-of-type(3) {
            margin-right: 0vw;
            margin: 2vh auto;
          }

          p {
            margin-left: 0px;
            margin: 2vh auto;
            text-align: center;
            font-size: 1.1rem;
          }
        }
      }
    }
    .bankDetails {
      margin-top: 10vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: var(--buttonFont);
      font-size: 1.2rem;
      margin-left: -3vw;
      h2 {
        margin-bottom: 3vh;
        color: var(--secondaryColor2);
        text-transform: uppercase;
      }
      p {
        margin-bottom: 1vh;
      }
      @media screen and (max-width: 800px) {
        margin-left: 0;
        margin: 10vh auto 0;
        align-items: flex-start;
      }
    }
  }
`;

export default ContactPage;
