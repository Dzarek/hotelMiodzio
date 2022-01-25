import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useContext } from "react";
import { RoomContext } from "../roomContext";

const RegulationsPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const context = useContext(RoomContext);
  const { polish } = context;
  return (
    <Wrapper>
      <div className="title">
        <h1>!</h1>
        <h2>!</h2>
        <h3>!</h3>

        <h2 data-aos="fade-up">
          {polish ? "regulamin" : "regulations"} <br />
        </h2>
        <h3>!</h3>
        <h2>!</h2>
        <h1>!</h1>
      </div>
      {polish ? (
        <div className="content">
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            itaque non facere sequi, ratione laboriosam molestias earum
            perspiciatis nesciunt recusandae nisi! Accusamus eveniet, inventore
            excepturi ratione quae dolores. Voluptatibus, iure?
          </h2>
          <h3>
            I ZAMELDOWANIE <br /> <br /> § 1
          </h3>
          <p>
            1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            delectus.
          </p>
          <p>
            2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            quis ullam ea laboriosam eveniet sit!
          </p>
          <p>
            3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et saepe
            non voluptas quae commodi inventore, numquam, quia officiis ipsa
            laboriosam odio repellendus qui culpa vel repellat ratione, incidunt
            aliquid esse similique a voluptatum sed perspiciatis natus. Fugit
            eius vel praesentium!
          </p>
          <h3>§ 2</h3>
          <p>
            1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            explicabo voluptatibus sit, impedit provident quae.
          </p>
          <p>
            2.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            explicabo voluptatibus sit, impedit provident quae.
          </p>
          <p>
            3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate odio modi hic dolorem magnam? Quis exercitationem
            mollitia cupiditate officia sapiente? Accusantium eaque inventore
            error perspiciatis harum incidunt totam quibusdam, enim assumenda
            odit quia facere, alias doloremque beatae quo cupiditate fugit non
            iure obcaecati dignissimos! Sunt id consectetur dicta eum
            repellendus.
          </p>
          <p>
            4. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate odio modi hic dolorem magnam? Quis exercitationem
            mollitia cupiditate officia sapiente? Accusantium eaque inventore
            error perspiciatis harum incidunt totam quibusdam, enim assumenda
            odit quia facere, alias doloremque beatae quo cupiditate fugit non
            iure obcaecati dignissimos! Sunt id consectetur dicta eum
            repellendus.
          </p>
          <p>
            5. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate odio modi hic dolorem magnam? Quis exercitationem
            mollitia cupiditate officia sapiente? Accusantium eaque inventore
            error perspiciatis harum incidunt totam quibusdam, enim assumenda
            odit quia facere, alias doloremque beatae quo cupiditate fugit non
            iure obcaecati dignissimos! Sunt id consectetur dicta eum
            repellendus.
          </p>
          <h3>§ 3</h3>
          <p>
            1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
            voluptatum, cumque tempora aspernatur unde reprehenderit.
          </p>
          <p>
            2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate odio modi hic dolorem magnam? Quis exercitationem
            mollitia cupiditate officia sapiente? Accusantium eaque inventore
            error perspiciatis harum incidunt totam quibusdam, enim assumenda
            odit quia facere, alias doloremque beatae quo cupiditate fugit non
            iure obcaecati dignissimos! Sunt id consectetur dicta eum
            repellendus.
          </p>
          <p>
            3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate odio modi hic dolorem magnam? Quis exercitationem
            mollitia cupiditate officia sapiente? Accusantium eaque inventore
            error perspiciatis harum incidunt totam quibusdam, enim assumenda
            odit quia facere, alias doloremque beatae quo cupiditate fugit non
            iure obcaecati dignissimos! Sunt id consectetur dicta eum
            repellendus.
          </p>
          <h3>§ 4</h3>
          <p>
            1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            similique ullam velit distinctio quas maxime perferendis laudantium
            facere assumenda in.
          </p>
          <p>
            2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            praesentium itaque accusamus! Laudantium, quis sint?
          </p>
          <h3>
            II PRAWA I OBOWIĄZKI GOŚCI HOTELU <br /> <br />§ 5
          </h3>
          <p>
            1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate odio modi hic dolorem magnam? Quis exercitationem
            mollitia cupiditate officia sapiente? Accusantium eaque inventore
            error perspiciatis harum incidunt totam quibusdam, enim assumenda
            odit quia facere, alias doloremque beatae quo cupiditate fugit non
            iure obcaecati dignissimos! Sunt id consectetur dicta eum
            repellendus.
          </p>
          <h3>§ 6</h3>
          <p>
            1.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate odio modi hic dolorem magnam? Quis exercitationem
            mollitia cupiditate officia sapiente? Accusantium eaque inventore
            error perspiciatis harum incidunt totam quibusdam, enim assumenda
            odit quia facere, alias doloremque beatae quo cupiditate fugit non
            iure obcaecati dignissimos! Sunt id consectetur dicta eum
            repellendus.
          </p>
          <p>
            2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate odio modi hic dolorem magnam? Quis exercitationem
            mollitia cupiditate officia sapiente? Accusantium eaque inventore
            error perspiciatis harum incidunt totam quibusdam, enim assumenda
            odit quia facere, alias doloremque beatae quo cupiditate fugit non
            iure obcaecati dignissimos! Sunt id consectetur dicta eum
            repellendus.
          </p>
        </div>
      ) : (
        <div className="content">
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            itaque non facere sequi, ratione laboriosam molestias earum
            perspiciatis nesciunt recusandae nisi! Accusamus eveniet, inventore
            excepturi ratione quae dolores. Voluptatibus, iure?
          </h2>
          <h3>
            I ZAMELDOWANIE <br /> <br /> § 1
          </h3>
          <p>
            1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            delectus.
          </p>
          <p>
            2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            quis ullam ea laboriosam eveniet sit!
          </p>
          <p>
            3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et saepe
            non voluptas quae commodi inventore, numquam, quia officiis ipsa
            laboriosam odio repellendus qui culpa vel repellat ratione, incidunt
            aliquid esse similique a voluptatum sed perspiciatis natus. Fugit
            eius vel praesentium!
          </p>
          <h3>§ 2</h3>
          <p>
            1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            explicabo voluptatibus sit, impedit provident quae.
          </p>
          <p>
            2.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            explicabo voluptatibus sit, impedit provident quae.
          </p>
          <p>
            3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate odio modi hic dolorem magnam? Quis exercitationem
            mollitia cupiditate officia sapiente? Accusantium eaque inventore
            error perspiciatis harum incidunt totam quibusdam, enim assumenda
            odit quia facere, alias doloremque beatae quo cupiditate fugit non
            iure obcaecati dignissimos! Sunt id consectetur dicta eum
            repellendus.
          </p>
          <p>
            4. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate odio modi hic dolorem magnam? Quis exercitationem
            mollitia cupiditate officia sapiente? Accusantium eaque inventore
            error perspiciatis harum incidunt totam quibusdam, enim assumenda
            odit quia facere, alias doloremque beatae quo cupiditate fugit non
            iure obcaecati dignissimos! Sunt id consectetur dicta eum
            repellendus.
          </p>
          <p>
            5. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate odio modi hic dolorem magnam? Quis exercitationem
            mollitia cupiditate officia sapiente? Accusantium eaque inventore
            error perspiciatis harum incidunt totam quibusdam, enim assumenda
            odit quia facere, alias doloremque beatae quo cupiditate fugit non
            iure obcaecati dignissimos! Sunt id consectetur dicta eum
            repellendus.
          </p>
          <h3>§ 3</h3>
          <p>
            1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
            voluptatum, cumque tempora aspernatur unde reprehenderit.
          </p>
          <p>
            2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate odio modi hic dolorem magnam? Quis exercitationem
            mollitia cupiditate officia sapiente? Accusantium eaque inventore
            error perspiciatis harum incidunt totam quibusdam, enim assumenda
            odit quia facere, alias doloremque beatae quo cupiditate fugit non
            iure obcaecati dignissimos! Sunt id consectetur dicta eum
            repellendus.
          </p>
          <p>
            3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate odio modi hic dolorem magnam? Quis exercitationem
            mollitia cupiditate officia sapiente? Accusantium eaque inventore
            error perspiciatis harum incidunt totam quibusdam, enim assumenda
            odit quia facere, alias doloremque beatae quo cupiditate fugit non
            iure obcaecati dignissimos! Sunt id consectetur dicta eum
            repellendus.
          </p>
          <h3>§ 4</h3>
          <p>
            1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            similique ullam velit distinctio quas maxime perferendis laudantium
            facere assumenda in.
          </p>
          <p>
            2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            praesentium itaque accusamus! Laudantium, quis sint?
          </p>
          <h3>
            II PRAWA I OBOWIĄZKI GOŚCI HOTELU <br /> <br />§ 5
          </h3>
          <p>
            1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate odio modi hic dolorem magnam? Quis exercitationem
            mollitia cupiditate officia sapiente? Accusantium eaque inventore
            error perspiciatis harum incidunt totam quibusdam, enim assumenda
            odit quia facere, alias doloremque beatae quo cupiditate fugit non
            iure obcaecati dignissimos! Sunt id consectetur dicta eum
            repellendus.
          </p>
          <h3>§ 6</h3>
          <p>
            1.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate odio modi hic dolorem magnam? Quis exercitationem
            mollitia cupiditate officia sapiente? Accusantium eaque inventore
            error perspiciatis harum incidunt totam quibusdam, enim assumenda
            odit quia facere, alias doloremque beatae quo cupiditate fugit non
            iure obcaecati dignissimos! Sunt id consectetur dicta eum
            repellendus.
          </p>
          <p>
            2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate odio modi hic dolorem magnam? Quis exercitationem
            mollitia cupiditate officia sapiente? Accusantium eaque inventore
            error perspiciatis harum incidunt totam quibusdam, enim assumenda
            odit quia facere, alias doloremque beatae quo cupiditate fugit non
            iure obcaecati dignissimos! Sunt id consectetur dicta eum
            repellendus.
          </p>
        </div>
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
    h2,
    h3 {
      margin: 5vh auto;
      align-self: center;
      color: var(--secondaryColor2);
      text-align: center;
      font-family: var(--buttonFont);
    }

    p {
      margin: 1vh auto 1vh 0;
      letter-spacing: 1.3;
    }
  }
`;

export default RegulationsPage;
