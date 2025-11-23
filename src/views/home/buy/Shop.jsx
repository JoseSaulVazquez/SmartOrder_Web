import React, { useEffect, useState } from "react";
import styles from "./shop.module.css";
import Navbar from "../../../components/nav/Navbar";
import Footer from "../../../components/footer/Footer";
import { Link } from "react-router-dom";
import { PriceCard } from "../../../components/cards/Cards";
import { packs } from "../../../utils/packs";
import classNames from "classnames";
import bg from "../../../assets/varios/shop_bg.jpg";

import google from "././../../../assets/varios/google-store.png";
import windows from "././../../../assets/varios/windows-store.png";
import apple from "././../../../assets/varios/apple-store.png";
import aptoide from "././../../../assets/varios/aptoide.jpg";
import { RightImage } from "../../../components/layouts/Layouts";

function Shop() {
  const data = packs;
  const [platform, setPlatform] = useState("Windows");

  const getPlatform = (userAgent) => {
    if (/windows/i.test(userAgent)) return "Windows";
    if (/macintosh|mac os x/i.test(userAgent)) return "MacOS";
    if (/android/i.test(userAgent)) return "Android";
    if (/iphone|ipad|ipod/i.test(userAgent)) return "iOS";
    if (/linux/i.test(userAgent)) return "Linux";

    return "Desconocido";
  };

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setPlatform(getPlatform(userAgent));
  }, [platform]);

  return (
    <>
      <Navbar />

      <main className="bg_container">
        <div className={styles.background} style={{ backgroundImage: `url(${bg})` }}>
          <div className={styles.opacity}>
            <div className={styles.subContainer}>
              <h1 className={classNames(styles.app, styles.title)}>
                smartOrder
              </h1>
              <div
                className={classNames(
                  styles.horizonralContainer,
                  styles.mbottom
                )}
              >
                
                <button className={styles.platform}>
                  <img src={aptoide} alt="aptoide" />
                </button>
              </div>

              <div className={styles.horizonralContainer}>
                <Link
                  className={classNames(styles.button, styles.download)}
                  to="https://es.aptoide.com/"
                  target="_blank"
                >
                  <div>
                    <span>Descargar App</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section className={classNames(styles.container, styles.ptop, styles.pbottom)}>
          <div className={styles.plans}>
            <h1 className={styles.title}>Planes de compra</h1>
            <div className={styles.prices}>
              {data.map((pack, index) => (
                <PriceCard
                  key={index}
                  name={pack.name}
                  price={pack.price[0]}
                  pay={pack.tipo_pago}
                  id={pack.name}
                  description={pack.description}
                  features={pack.features}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Shop;
