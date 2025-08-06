import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import fatherStyles from "../menu/menu.module.css";
import styles from "./subMenu.module.css";
import Navbar from "../../../components/nav/Navbar";
import Footer from "../../../components/footer/Footer";
import { HorizontalCard } from "../../../components/cards/Cards";
import {
  desayunos,
  comidas,
  cenas,
  postres,
  bebidas,
} from "../../../utils/alimentos";
import classNames from "classnames";

function SubMenu() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    try {
      const site = location.state?.categoria || "";

      setCategory(site);

      switch (site) {
        case "DESAYUNOS":
          setData(desayunos);
          break;
        case "COMIDA":
          setData(comidas);
          break;
        case "CENA":
          setData(cenas);
          break;
        case "POSTRES":
          setData(postres);
          break;
        case "BEBIDAS":
          setData(bebidas);
          break;
        default:
          setData([]);
          break;
      }
    } catch (error) {
      console.error("Error decoding URI:", error);
      setCategory("");
      setData([]);
    }
  }, [location]);

  return (
    <>
      <Navbar />

      <main className="bg_container">
        <div className={fatherStyles.container}>
          <div className={fatherStyles.title_container}>
            <h1 className={fatherStyles.title}>{category}</h1>
          </div>

          <div className={classNames(styles.card_container)}>
            {data.map((comida, index) => (
              <HorizontalCard
                key={index}
                image={comida.image}
                name={comida.name}
                direccion={`/smartOrder/menu/${category.toLowerCase()}/${comida.url}`}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default SubMenu;
