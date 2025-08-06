import React from 'react';
import styles from './help.module.css';
import Navbar from '../../../components/nav/Navbar';
import Footer from '../../../components/footer/Footer';

function About() {
  return (
    <>
      <Navbar />
      <main className="bg_container">
        <div className={styles.background}>
          <div className={styles.subContainer}>
            <h1>Sobre Nosotros</h1>
            <div className={styles.centerImg}>
              {/* <img src={logo} alt="Logo" className={styles.img} /> */}
            </div>
            <p>
              SmartOrder es una plataforma innovadora diseñada para transformar la experiencia gastronómica, 
              facilitando y agilizando el proceso de pedido de alimentos en restaurantes. Nuestra misión es mejorar
              la interacción entre los clientes y el personal del restaurante a través de soluciones tecnológicas intuitivas,
              accesibles y rápidas.
            </p>
          </div>
        </div>

        <section style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
          <div style={{ width: "100%", maxWidth: "600px", height: "350px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
            <iframe
              title="UTZMG Location"
              src="https://www.google.com/maps?q=20.48347,-103.53222&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <section></section>
      </main>
      <Footer />
    </>
  );
}

export default About;