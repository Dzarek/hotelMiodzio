import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { TiInfoLarge } from "react-icons/ti";
import { BiCookie } from "react-icons/bi";
import { useContext } from "react";
import { RoomContext } from "../roomContext";

const RodoPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const context = useContext(RoomContext);
  const { polish } = context;
  return (
    <Wrapper>
      <div className="title">
        <h1>
          <TiInfoLarge />
        </h1>
        <h2>
          {" "}
          <TiInfoLarge />
        </h2>
        <h3>
          {" "}
          <TiInfoLarge />
        </h3>

        <h2 data-aos="fade-up">
          {polish ? "rodo i cookies" : "rodo and cookies"} <br />
        </h2>
        <h3>
          {" "}
          <BiCookie />
        </h3>
        <h2>
          {" "}
          <BiCookie />
        </h2>
        <h1>
          {" "}
          <BiCookie />
        </h1>
      </div>
      <h4>RODO</h4>
      {polish ? (
        <>
          <div className="content">
            <h3>Szanowni Państwo,</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              2.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              3.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolore deserunt dolorum maiores tenetur,
              adipisci delectus aspernatur earum quis sint. Quisquam at quas cum
              ea ab modi velit! Adipisci inventore, qui minus beatae hic, rem ad
              delectus cumque iure minima sunt quaerat repellat eaque similique
              accusamus. Suscipit minus facilis illum rem?
            </p>
            <p>
              5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              6.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              7. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolore deserunt dolorum maiores tenetur,
              adipisci delectus aspernatur earum quis sint. Quisquam at quas cum
              ea ab modi velit! Adipisci inventore, qui minus beatae hic, rem ad
              delectus cumque iure minima sunt quaerat repellat eaque similique
              accusamus. Suscipit minus facilis illum rem?
            </p>
            <p>
              8. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?.
            </p>
            <p>
              9. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              10.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              11. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolore deserunt dolorum maiores tenetur, adipisci delectus
              aspernatur earum quis sint. Quisquam at quas cum ea ab modi velit!
              Adipisci inventore, qui minus beatae hic, rem ad delectus cumque
              iure minima sunt quaerat repellat eaque similique accusamus.
              Suscipit minus facilis illum rem?
            </p>
            <p>
              12. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolore deserunt dolorum maiores tenetur, adipisci delectus
              aspernatur earum quis sint. Quisquam at quas cum ea ab modi velit!
              Adipisci inventore, qui minus beatae hic, rem ad delectus cumque
              iure minima sunt quaerat repellat eaque similique accusamus.
              Suscipit minus facilis illum rem?
            </p>
            <p>
              13. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolore deserunt dolorum maiores tenetur, adipisci delectus
              aspernatur earum quis sint. Quisquam at quas cum ea ab modi velit!
              Adipisci inventore, qui minus beatae hic, rem ad delectus cumque
              iure minima sunt quaerat repellat eaque similique accusamus.
              Suscipit minus facilis illum rem?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolore deserunt dolorum maiores
              tenetur, adipisci delectus aspernatur earum quis sint. Quisquam at
              quas cum ea ab modi velit! Adipisci inventore, qui minus beatae
              hic, rem ad delectus cumque iure minima sunt quaerat repellat
              eaque similique accusamus. Suscipit minus facilis illum rem?
            </p>
            <p>
              14. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolore deserunt dolorum maiores tenetur, adipisci delectus
              aspernatur earum quis sint. Quisquam at quas cum ea ab modi velit!
              Adipisci inventore, qui minus beatae hic, rem ad delectus cumque
              iure minima sunt quaerat repellat eaque similique accusamus.
              Suscipit minus facilis illum rem?
            </p>
          </div>
          <h4>Polityka Cookies</h4>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              2.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              3.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolore deserunt dolorum maiores tenetur,
              adipisci delectus aspernatur earum quis sint. Quisquam at quas cum
              ea ab modi velit! Adipisci inventore, qui minus beatae hic, rem ad
              delectus cumque iure minima sunt quaerat repellat eaque similique
              accusamus. Suscipit minus facilis illum rem?
            </p>
            <p>
              5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              6.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              7. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolore deserunt dolorum maiores tenetur,
              adipisci delectus aspernatur earum quis sint. Quisquam at quas cum
              ea ab modi velit! Adipisci inventore, qui minus beatae hic, rem ad
              delectus cumque iure minima sunt quaerat repellat eaque similique
              accusamus. Suscipit minus facilis illum rem?
            </p>
            <p>
              8. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?.
            </p>
            <p>
              9. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              10.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              11. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolore deserunt dolorum maiores tenetur, adipisci delectus
              aspernatur earum quis sint. Quisquam at quas cum ea ab modi velit!
              Adipisci inventore, qui minus beatae hic, rem ad delectus cumque
              iure minima sunt quaerat repellat eaque similique accusamus.
              Suscipit minus facilis illum rem?
            </p>
            <p>
              12. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolore deserunt dolorum maiores tenetur, adipisci delectus
              aspernatur earum quis sint. Quisquam at quas cum ea ab modi velit!
              Adipisci inventore, qui minus beatae hic, rem ad delectus cumque
              iure minima sunt quaerat repellat eaque similique accusamus.
              Suscipit minus facilis illum rem?
            </p>
            <p>
              13. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolore deserunt dolorum maiores tenetur, adipisci delectus
              aspernatur earum quis sint. Quisquam at quas cum ea ab modi velit!
              Adipisci inventore, qui minus beatae hic, rem ad delectus cumque
              iure minima sunt quaerat repellat eaque similique accusamus.
              Suscipit minus facilis illum rem?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolore deserunt dolorum maiores
              tenetur, adipisci delectus aspernatur earum quis sint. Quisquam at
              quas cum ea ab modi velit! Adipisci inventore, qui minus beatae
              hic, rem ad delectus cumque iure minima sunt quaerat repellat
              eaque similique accusamus. Suscipit minus facilis illum rem?
            </p>
            <p>
              14. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolore deserunt dolorum maiores tenetur, adipisci delectus
              aspernatur earum quis sint. Quisquam at quas cum ea ab modi velit!
              Adipisci inventore, qui minus beatae hic, rem ad delectus cumque
              iure minima sunt quaerat repellat eaque similique accusamus.
              Suscipit minus facilis illum rem?
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              2.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              3.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolore deserunt dolorum maiores tenetur,
              adipisci delectus aspernatur earum quis sint. Quisquam at quas cum
              ea ab modi velit! Adipisci inventore, qui minus beatae hic, rem ad
              delectus cumque iure minima sunt quaerat repellat eaque similique
              accusamus. Suscipit minus facilis illum rem?
            </p>
            <p>
              5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              6.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              7. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolore deserunt dolorum maiores tenetur,
              adipisci delectus aspernatur earum quis sint. Quisquam at quas cum
              ea ab modi velit! Adipisci inventore, qui minus beatae hic, rem ad
              delectus cumque iure minima sunt quaerat repellat eaque similique
              accusamus. Suscipit minus facilis illum rem?
            </p>
            <p>
              8. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?.
            </p>
            <p>
              9. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              10.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              11. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolore deserunt dolorum maiores tenetur, adipisci delectus
              aspernatur earum quis sint. Quisquam at quas cum ea ab modi velit!
              Adipisci inventore, qui minus beatae hic, rem ad delectus cumque
              iure minima sunt quaerat repellat eaque similique accusamus.
              Suscipit minus facilis illum rem?
            </p>
            <p>
              12. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolore deserunt dolorum maiores tenetur, adipisci delectus
              aspernatur earum quis sint. Quisquam at quas cum ea ab modi velit!
              Adipisci inventore, qui minus beatae hic, rem ad delectus cumque
              iure minima sunt quaerat repellat eaque similique accusamus.
              Suscipit minus facilis illum rem?
            </p>
            <p>
              13. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolore deserunt dolorum maiores tenetur, adipisci delectus
              aspernatur earum quis sint. Quisquam at quas cum ea ab modi velit!
              Adipisci inventore, qui minus beatae hic, rem ad delectus cumque
              iure minima sunt quaerat repellat eaque similique accusamus.
              Suscipit minus facilis illum rem?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolore deserunt dolorum maiores
              tenetur, adipisci delectus aspernatur earum quis sint. Quisquam at
              quas cum ea ab modi velit! Adipisci inventore, qui minus beatae
              hic, rem ad delectus cumque iure minima sunt quaerat repellat
              eaque similique accusamus. Suscipit minus facilis illum rem?
            </p>
            <p>
              14. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolore deserunt dolorum maiores tenetur, adipisci delectus
              aspernatur earum quis sint. Quisquam at quas cum ea ab modi velit!
              Adipisci inventore, qui minus beatae hic, rem ad delectus cumque
              iure minima sunt quaerat repellat eaque similique accusamus.
              Suscipit minus facilis illum rem?
            </p>
          </div>
          <h4> Cookies Policy </h4>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              2.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              3.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolore deserunt dolorum maiores tenetur,
              adipisci delectus aspernatur earum quis sint. Quisquam at quas cum
              ea ab modi velit! Adipisci inventore, qui minus beatae hic, rem ad
              delectus cumque iure minima sunt quaerat repellat eaque similique
              accusamus. Suscipit minus facilis illum rem?
            </p>
            <p>
              5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              6.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              7. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolore deserunt dolorum maiores tenetur,
              adipisci delectus aspernatur earum quis sint. Quisquam at quas cum
              ea ab modi velit! Adipisci inventore, qui minus beatae hic, rem ad
              delectus cumque iure minima sunt quaerat repellat eaque similique
              accusamus. Suscipit minus facilis illum rem?
            </p>
            <p>
              8. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?.
            </p>
            <p>
              9. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              10.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt dolorum maiores tenetur, adipisci delectus aspernatur
              earum quis sint. Quisquam at quas cum ea ab modi velit! Adipisci
              inventore, qui minus beatae hic, rem ad delectus cumque iure
              minima sunt quaerat repellat eaque similique accusamus. Suscipit
              minus facilis illum rem?
            </p>
            <p>
              11. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolore deserunt dolorum maiores tenetur, adipisci delectus
              aspernatur earum quis sint. Quisquam at quas cum ea ab modi velit!
              Adipisci inventore, qui minus beatae hic, rem ad delectus cumque
              iure minima sunt quaerat repellat eaque similique accusamus.
              Suscipit minus facilis illum rem?
            </p>
            <p>
              12. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolore deserunt dolorum maiores tenetur, adipisci delectus
              aspernatur earum quis sint. Quisquam at quas cum ea ab modi velit!
              Adipisci inventore, qui minus beatae hic, rem ad delectus cumque
              iure minima sunt quaerat repellat eaque similique accusamus.
              Suscipit minus facilis illum rem?
            </p>
            <p>
              13. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolore deserunt dolorum maiores tenetur, adipisci delectus
              aspernatur earum quis sint. Quisquam at quas cum ea ab modi velit!
              Adipisci inventore, qui minus beatae hic, rem ad delectus cumque
              iure minima sunt quaerat repellat eaque similique accusamus.
              Suscipit minus facilis illum rem?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolore deserunt dolorum maiores
              tenetur, adipisci delectus aspernatur earum quis sint. Quisquam at
              quas cum ea ab modi velit! Adipisci inventore, qui minus beatae
              hic, rem ad delectus cumque iure minima sunt quaerat repellat
              eaque similique accusamus. Suscipit minus facilis illum rem?
            </p>
            <p>
              14. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolore deserunt dolorum maiores tenetur, adipisci delectus
              aspernatur earum quis sint. Quisquam at quas cum ea ab modi velit!
              Adipisci inventore, qui minus beatae hic, rem ad delectus cumque
              iure minima sunt quaerat repellat eaque similique accusamus.
              Suscipit minus facilis illum rem?
            </p>
          </div>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  padding-top: 13vh;
  margin: 0 auto;
  h4 {
    text-decoration: uppercase;
    font-size: 2rem;
    color: var(--secondaryColor2);
    text-align: center;
    margin: 10vh auto 5vh;
  }
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
      font-size: 2.8rem;
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
  .content {
    width: 80vw;
    margin: 15vh auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: var(--textFont);
    h3 {
      margin-bottom: 5vh;
    }
    p {
      margin: 1vh auto 1vh 0;
      letter-spacing: 1.3;
    }
  }
`;

export default RodoPage;
