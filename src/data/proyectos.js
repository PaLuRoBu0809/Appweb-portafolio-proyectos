// src/data/proyectos.js
export const proyectos = [
  {
    slug: "stardogs-ai-ordering-bot",
    title: "StarDogs™ AI Ordering Bot",
    subtitle: "Automatización de servicio al cliente con agentes de IA en WhatsApp",
    bannerImage: "/images/logowspp.png", 
    description: "Sistema multiagente desplegado en producción que automatiza completamente la toma de pedidos de un restaurante vía WhatsApp, eliminando la necesidad de atención humana en el proceso.",
    queHace: [
      "Recibe pedidos por texto y notas de voz, consulta el menú en tiempo real, registra cada comanda y notifica a cocina automáticamente",
      "Soporta domicilios y consumo en restaurante con flujos diferenciados",
      "Tres agentes de IA especializados que se comunican entre sí (arquitectura A2A)"
    ],
    stack: ["N8N", "WAHA", "OpenRouter", "Groq", "Whisper", "PostgreSQL", "Google Sheets", "Airtable", "Gotify", "Render"],
    highlights: [
      "Pipeline de audio: conversión OGA → OGG + transcripción con Whisper v3",
      "Memoria conversacional persistente en PostgreSQL con aislamiento por sesión",
      "100% auto-hospedado en infraestructura gratuita (Render)"
    ],
    meta: {
      estado: "Producción",
      tipo: "Proyecto personal",
      documentacion: "Disponible"
    },
    descargas: [
      { nombre: "Documentacion", sub: "Archivo de documento", link: "#" },
      { nombre: "Workflow de N8N", sub: "Archivo JSON", link: "#" }
    ]
  }
];