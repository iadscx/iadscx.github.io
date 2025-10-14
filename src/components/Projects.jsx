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
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Análisis de COVID-19 global',
      description: 'Estudio del impacto de la pandemia a nivel mundial. Donde se realizó limpieza avanzada, tratamiento de datos faltantes, creación de indicadores y visualizaciones para entender patrones temporales y geográficos.',
      tags: ['SQL','Pandas','NumPy','Plotly','Seaborn','Excel','Power BI'],
      gradient: 'from-yellow-500 to-amber-500',
    },
    {
      title: 'Análisis de desempeño de pilotos en la Fórmula 1',
      description: 'Evaluación del rendimiento de pilotos y escuderías usando datos históricos de competencias. Se analizan métricas de desempeño, nacionalidad, posición promedio y patrones por temporada.',
      tags: ['Python','Pandas','SQLAlchemy','SQLite'],
      gradient: 'from-orange-500 to-red-600',
    },
    {
      title: 'Marketing & Sales Data Pipeline',
      description: 'Diseño de un pipeline completo para integrar datos de ventas y campañas publicitarias. Se implementa un flujo ETL automatizado que limpia, transforma y carga datos en la nube.',
      tags: ['Apache NiFi', 'Apache Airflow', 'PostgreSQL', 'Snowflake','Python'],
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Fortnite Game Analytics Pipeline',
      description: 'Construcción de un pipeline de big data que recopila y analiza estadísticas de jugadores de Fortnite desde una API. Incluye procesamiento distribuido y almacenamiento escalable en la nube.',
      tags: ['PySpark', 'Apache Airflow', 'AWS S3','BigQuery','Python', 'Python'],
      gradient: 'from-yellow-500 to-amber-500',
    },
    {
      title: 'Retail Hybrid Data Pipeline',
      description: 'Implementación de una arquitectura híbrida (local + nube) que combina bases de datos relacionales y no relacionales para manejar información de ventas y comportamiento del cliente.',
      tags: ['MongoDB','PySpark','Python', 'PostgreSQL', 'Apache Airflow'],
      gradient: 'from-orange-500 to-red-600',
    },
    {
      title: 'Análisis de Producción Petrolera',
      description: 'Análisis de datos de producción de pozos para optimizar rendimiento, usando Python y Pandas.',
      tags: ['Python', 'Pandas', 'Matplotlib'],
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Dashboard de KPIs Energéticos',
      description: 'Dashboard interactivo para monitorear KPIs de la industria energética en tiempo real.',
      tags: ['SQL', 'Plotly', 'Power BI'],
      gradient: 'from-yellow-500 to-amber-500',
    },
    {
      title: 'Pipeline de Datos (ETL)',
      description: 'Proceso automatizado de ETL para la ingesta y limpieza de datos geológicos y de producción.',
      tags: ['Python', 'PostgreSQL', 'Airflow'],
      gradient: 'from-orange-500 to-red-600',
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
                <img alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d" />
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
                  <button
                    onClick={handleProjectClick}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-sm font-semibold text-[rgb(var(--text-primary))] hover:bg-white/20 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>Código</span>
                  </button>
                  <button
                    onClick={handleProjectClick}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-sm font-semibold text-[rgb(var(--text-primary))] hover:bg-white/20 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </button>
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