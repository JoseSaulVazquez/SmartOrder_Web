const packs = [
  {
    name: "Aplicación móvil",
    // image: "https://www.smartorder.mx/img/pack_default.png",
    price: [50],
    tipo_pago: "Mensual",
    description: "Tu restaurante formara parte del listado de restaurantes",
    features: [
      "Administración de pedidos via la app",
      "Administración de reservas para tu restaurante",
      "Soporte técnico",
    ],
  },
  {
    name: "Estandar",
    // image: "https://www.smartorder.mx/img/pack_default.png",
    price: [200, 150],
    tipo_pago: "Mensual",
    description:
      "Paquete por defecto, incluye el asistente de pedidos y la app",
    features: [
      "Optimizacion en la toma de pedidos",
      "Instalación y configuración gratis",
      "Capacida de 1 asistente de pedidos",
      "Todo lo que se incluye en el plan Aplicación móvil",
    ],
  },
  {
    name: "Premium",
    // image: "https://www.smartorder.mx/img/pack_premium.png",
    price: [500, 150],
    tipo_pago: "Mensual",
    description:
      "Paquete Premium, incluye el asistente de pedidos, manejo de mesas (hasta 10 mesas maximo), y la app con personalización",
    features: [
      "Administración de datos",
      "Costo de instalación variable",
      "Verificación de sucursales",
      "Capacidad para 14 mesas y hasta 3 sucursales",
      "Todo lo que se incluye en el plan Estandar",
    ],
  },
  {
    name: "Enterprise",
    // image: "https://www.smartorder.mx/img/pack_enterprise.png",
    price: [1000, 150],
    tipo_pago: "Mensual",
    description:
      "Paquete Enterprise. Incluye el asistente de pedidos, manejo de mesas sin limite, la app con personalización y soporte las 24 hrs",
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
