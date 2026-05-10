import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";

import { SectionContainer } from "../components/sectionContainer";
import { SectionHeading } from "../components/sectionHeading";
import Button from "../components/button";
import { TourCard, type TourCardProps } from "../components/tourCard";

type Product = TourCardProps & {
  id: number;
};

export function Directions() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="directions">
      <SectionContainer>
        <div className="directions__content">
          <SectionHeading>
            <Typography variant="h2" component="h2">
              по версии отдыхающих
            </Typography>
            <Typography variant="h1" component="h1">
              Популярные направления
            </Typography>
          </SectionHeading>

          <div
            className="directions__cards"
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            {products.slice(0, 3).map((product) => (
              <TourCard
                key={product.id}
                image={`http://localhost:3002${product.image}`}
                rating={product.rating}
                title={product.title}
                subtitle={product.subtitle}
                price={product.price}
                currency={product.currency}
              />
            ))}
          </div>

          <Button>Рейтинг направлений</Button>
        </div>
      </SectionContainer>
    </section>
  );
}
