import React from 'react';
import styles from './features.module.css';
import Navbar from '../../../components/nav/Navbar';
import Footer from '../../../components/footer/Footer';

function Features() {
  return (
    <>
      <Navbar />
      <main className={styles.bgContainer}>
        <div className={styles.headerSection}>
          <h1>Características de SmartOrder</h1>
        </div>
        
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h2>Órdenes Rápidas y Eficientes</h2>
            <p>Optimiza la toma de pedidos en restaurantes mediante una interfaz intuitiva y ágil.</p>
          </div>

          <div className={styles.featureCard}>
            <h2>Compatibilidad con Dispositivos</h2>
            <p>Funciona en smartwatch, smartTV, móviles y asistentes de voz para una experiencia integral.</p>
          </div>

          <div className={styles.featureCard}>
            <h2>Personalización del Menú</h2>
            <p>Permite a los restaurantes modificar y actualizar su menú en tiempo real.</p>
          </div>

          <div className={styles.featureCard}>
            <h2>Integración con Pagos Digitales</h2>
            <p>Facilita los pagos con tarjetas, billeteras electrónicas y códigos QR.</p>
          </div>

          <div className={styles.featureCard}>
            <h2>Gestión de Reservas</h2>
            <p>Permite a los clientes realizar y administrar reservas de manera eficiente.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Features;