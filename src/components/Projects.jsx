import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import SectionTitle from '@/components/SectionTitle';

const Projects = () => {
  const { toast } = useToast();

  const projects = [
    {
      title: 'Análisis de Ventas Minoristas (Retail Sales Analytics)',
      description: 'Exploración y análisis de datos históricos de ventas para identificar patrones, productos más vendidos, desempeño por tienda y estacionalidad. Optimizando decisiones comerciales basadas en evidencia.',
      tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn','SQLite','Visual BI', 'Excel'],
      gradient: 'from-amber-500 to-gray-600',
      image: 'images/sales1.png',  // Imagen específica para este proyecto
    },
    {
      title: 'Análisis de COVID-19 global',
      description: 'Estudio del impacto de la pandemia a nivel mundial. Donde se realizó limpieza avanzada, tratamiento de datos faltantes, creación de indicadores y visualizaciones para entender patrones temporales y geográficos.',
      tags: ['SQL','Pandas','NumPy','Plotly','Seaborn','Excel','Power BI'],
      gradient: 'from-yellow-500 to-gray-500',
      image: 'images/covid.png',  // Imagen específica para este proyecto
    },
    {
      title: 'Análisis de desempeño de pilotos en la Fórmula 1',
      description: 'Evaluación del rendimiento de pilotos y escuderías usando datos históricos de competencias. Se analizan métricas de desempeño, nacionalidad, posición promedio y patrones por temporada.',
      tags: ['Python','Pandas','SQLAlchemy','SQLite'],
      gradient: 'from-orange-500 to-gray-600',
      image: 'images/f1.png',  // Imagen específica para este proyecto
    },
    {
      title: 'Marketing & Sales Data Pipeline',
      description: 'Este proyecto demuestra la construcción de un pipeline de datos completo aplicado a marketing y ventas. Los datos provienen de datasets simulados de clientes, productos y ventas, y se procesan para generar información estructurada lista para análisis. Se realiza extracción, limpieza, transformación y carga (ETL) en PostgreSQL, preparando los datos para consultas analíticas y visualización de métricas clave como ingresos por campaña, top clientes y comportamiento de ventas.',
      tags: ['PostgreSQL','Python'], 
      gradient: 'from-amber-500 to-gray-600',
      image: 'images/marketing.png',  // Imagen específica para este proyecto
    },
    {
      title: 'Game Analytics Pipeline',
      description: 'Construcción de un pipeline de big data que recopila y analiza estadísticas de jugadores de Fortnite desde una API. Incluye procesamiento distribuido y almacenamiento escalable en la nube.',
      tags: ['PySpark', 'Apache Airflow', 'AWS S3','BigQuery','Python'],
      gradient: 'from-yellow-500 to-amber-500',
      image: 'images/gameAna.png',  // Imagen específica para este proyecto
    },
    {
      title: 'Retail Hybrid Data Pipeline',
      description: 'Implementación de una arquitectura híbrida (local + nube) que combina bases de datos relacionales y no relacionales para manejar información de ventas y comportamiento del cliente.',
      tags: ['MongoDB','PySpark','Python', 'PostgreSQL', 'Apache Airflow'],
      gradient: 'from-orange-500 to-gray-600',
      image: 'images/retailHyb.png',  // Imagen específica para este proyecto
    }
  ];

  const handleProjectClick = () => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
      duration: 3000,
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Proyectos" subtitle="Algunos de mis trabajos realizados en ingeniería y análisis de datos" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden group border-2 border-transparent hover:border-amber-500/50 transition-all duration-300"
            >
              <div className="h-56 relative overflow-hidden">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  src={project.image}  
                />{/* Usando la URL de la imagen específica para cada proyecto */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-30 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[rgb(var(--text-primary))]">{project.title}</h3>
                <p className="text-[rgb(var(--text-secondary))] mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/10 text-xs rounded-full text-[rgb(var(--text-secondary))]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {/* Botón de GitHub con link distinto por proyecto */}
                  <a
                    href={
                      index === 0 ? 'https://github.com/iadscx/Data-Projects' :
                      index === 1 ? 'https://github.com/iadscx/Data-Projects' :
                      index === 2 ? 'https://github.com/iadscx/Data-Projects' :
                      index === 3 ? 'https://github.com/iadscx/Data-Projects' :
                      index === 4 ? 'https://github.com/iadscx/Data-Projects/tree/main/Ingenieria_De_datos/Game%20Analytics%20Pipeline' :
                      index === 5 ? 'https://github.com/iadscx/Data-Projects/tree/main/Ingenieria_De_datos/Retail%20Hybrid%20Data%20Pipeline' :
                      '#'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-sm font-semibold text-[rgb(var(--text-primary))] hover:bg-white/20 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>Código</span>
                  </a>

                  {/* Botón Demo comentado para poder restaurarlo después */}
                  {/*
                  <button
                    onClick={handleProjectClick}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-sm font-semibold text-[rgb(var(--text-primary))] hover:bg-white/20 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </button>
                  */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
