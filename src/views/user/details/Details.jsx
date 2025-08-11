import React, { useEffect, useState } from "react";
import fatherStyles from "../menu/menu.module.css";
import styles from "./details.module.css";
import classNames from "classnames";
import Navbar from "../../../components/nav/Navbar";
import Footer from "../../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import { detalles } from "../../../utils/detalles";
import {
  desayunos,
  comidas,
  cenas,
  postres,
  bebidas,
} from "../../../utils/alimentos";
import { HorizontalCard, SpecsCard } from "../../../components/cards/Cards";

function Details() {
  const location = useLocation();
  const [food, setFood] = useState([]);
  const [data, setData] = useState([]);
  const [specs, setSpecs] = useState([]);

  const [price, setPrice] = useState(0);

  useEffect(() => {
    const site = location.state?.categoria || "";
    const fatherSite = location.pathname.split("/")[3] || "";

    switch (fatherSite.toUpperCase()) {
      case "DESAYUNOS":
        setFood(desayunos.filter((item) => item.name === site)[0]);
        break;
      case "COMIDA":
        setFood(comidas.filter((item) => item.name === site)[0]);
        break;
      case "CENA":
        setFood(cenas.filter((item) => item.name === site)[0]);
        break;
      case "POSTRES":
        setFood(postres.filter((item) => item.name === site)[0]);
        break;
      case "BEBIDAS":
        setFood(bebidas.filter((item) => item.name === site)[0]);
        break;
      default:
        setFood([]);
        break;
    }

    const specs = detalles
      .filter((item) => item.foods.includes(site))
      .reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      }, {});

    setData(specs);
    // console.log("Detalles:", specs);
  }, [location]);

  useEffect(() => {
    if (food) {
      setPrice(food.price);
    }
  }, [food]);

  function addSpec(category, value) {
    const ingredients = {
      category: category,
      value: value,
    }
    
    console.log(ingredients);
  }

  return (
    <>
      <Navbar />

      <main className="bg_container">
        <div className={fatherStyles.container}>
          <div className={fatherStyles.title_container}>
            <h1 className={fatherStyles.title}>{food.name}</h1>
          </div>

          <div className={styles.details_container}>
            <div className={styles.food_container}>
              <div className={styles.food_image}>
                <img src={food.image} alt={food.name} />
              </div>
              <div className={styles.food_info}>
                <div className={styles.food_name}>
                  <p className={styles.food_name}>
                    {food.name} - ${price}.00
                  </p>
                </div>
                <div className={styles.food_specs}>
                  <p>Especificaciones: </p>
                  <span>{specs}</span>
                </div>
              </div>
            </div>

            <div className={styles.mid}>especificaciones</div>

            <div className={classNames(styles.card_container)}>
              {Object.entries(data).map(([category, items], index) => (
                <SpecsCard key={index} name={category}>
                  {items.map((item, subIndex) => (
                    <div
                      key={`${category}-${subIndex}`}
                      className={styles.specs}
                    >
                      <div className={styles.specName}>
                        <label>
                          <input
                            type="radio"
                            name={category}
                            onClick={() => {addSpec(category, item.name)}}
                          />{" "}
                          {item.name}
                        </label>
                        <span>
                          {item.price > 0 ? "+$" + item.price + ".00" : ""}
                        </span>
                      </div>
                    </div>
                  ))}
                </SpecsCard>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Details;
