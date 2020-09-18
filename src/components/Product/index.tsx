import React from "react";

import tshirtImage from "../../assets/tshirt.png";
import ProductAction from "../ProductAction";
import SellerInfo from "../SellerInfo";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que você está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, ea
      eum. Nihil esse tempora error accusantium, aliquam accusamus voluptatum
      facilis hic recusandae sit! Molestiae ad dolorem porro adipisci quibusdam
      doloribus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
      esse accusantium reiciendis, sequi quis enim dolores incidunt, qui ipsa,
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
      asperiores dolorem, tempora maxime ipsa cupiditate temporibus ad
      perspiciatis fugit reprehenderit officiis maiores ullam ab. Optio dolorem
      totam laboriosam vitae illo? Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Vero placeat, rerum sequi aliquam numquam sint repellat
      mollitia perspiciatis obcaecati asperiores tempore, eius esse veritatis
      repudiandae aspernatur quia, deserunt architecto earum. Lorem ipsum dolor,
      sit amet consectetur adipisicing elit. Veritatis at ullam, nemo vel
      laudantium, distinctio minima consectetur dolorem delectus amet, doloribus
      tempora reprehenderit quas sed dolor blanditiis quo inventore nesciunt.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
      accusantium harum iste amet rem quod dolor quos incidunt praesentium
      molestiae fugit facilis quasi laboriosam, quibusdam hic, eligendi nesciunt
      ab suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Cumque delectus sint quos facere repellendus nobis, fugiat reprehenderit
      maxime, laborum dolore explicabo minima assumenda quod! Est alias eveniet
      fugiat quas temporibus?
    </p>
  </Description>
);

export default Product;
