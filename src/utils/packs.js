const packs = [
  {
    name: "Estandar",
    // image: "https://www.smartorder.mx/img/pack_default.png",
    price: [50],
    tipo_pago: "Mensual",
    description: "Tu restaurante formara parte del listado de restaurantes",
    features: [
      "Administración de pedidos via la app",
      "Soporte técnico",
    ],
  },
  // {
  //   name: "Estandar",
  //   // image: "https://www.smartorder.mx/img/pack_default.png",
  //   price: [200, 150],
  //   tipo_pago: "Mensual",
  //   description:
  //     "Paquete por defecto, incluye el sistema de pedidos y la app",
  //   features: [
  //     "Optimizacion en la toma de pedidos",
  //     "Instalación y configuración gratis",
  //     "Todo lo que se incluye en el plan Aplicación móvil",
  //   ],
  // },
  {
    name: "Premium",
    // image: "https://www.smartorder.mx/img/pack_premium.png",
    price: [500, 150],
    tipo_pago: "Mensual",
    description:
      "Paquete Premium, incluye manejo de mesas y la app con personalización",
    features: [
      "Administración de datos",
      "Verificación de sucursales",
      "Capacidad para hasta 3 sucursales",
      "Todo lo que se incluye en el plan Estandar",
    ],
  },
  {
    name: "Enterprise",
    // image: "https://www.smartorder.mx/img/pack_enterprise.png",
    price: [1000, 150],
    tipo_pago: "Mensual",
    description:
      "Paquete Enterprise, manejo de mesas sin limite, la app con personalización y soporte las 24 hrs",
    features: [
      "Analisis de datos",
      "Reportes estadisticos mensuales",
      "Personalización completa",
      "Capacidad para 15 sucursales",
      "Funciones avanzadas",
      "Integraciones personalizadas",
      "Todo lo que se incluye en el plan Premium",
    ],
  },
];

export { packs };
