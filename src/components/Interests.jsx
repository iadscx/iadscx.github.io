import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import { CheckCircle2, Sliders, Waypoints, Target } from 'lucide-react';

const Interests = () => {
    const interests = [
        {
            title: "Análisis de datos (Python, Pandas, SQL, Power BI)",
            tools: [
                "Python", "Pandas", "SQL", "Power BI", "Jupyter Notebook"
            ]
        },
        {
            title: "Procesamiento y limpieza de datos [ETL/ELT]",
            tools: [
                "Data Cleaning", "Pyspark", "Apache NiFi", "Docker"
            ]
        },
        {
            title: "Pipelines y automatización de flujos (Airflow)",
            tools: [
                "Apache Airflow", "DVC"
            ]
        },
        {
            title: "Almacenamiento, modelado y calidad de datos",
            tools: [
                "AWS S3", "Google Dataflow", "BigQuery", "Snowflake"
            ]
        },
        {
            title: "Análisis de calidad de datos",
            tools: [
                "SQLServer",  "SQLite"
            ]//"OracleDB",
        },
        {
            title: "Optimización de procesos basados en información",
            tools: [
                "Git", "Excel"
            ]
        }
    ];

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <section id="interests" className="py-20 px-4 relative bg-black/10">
            <div className="max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Título general para la sección */}
                    <motion.div {...fadeInUp} className="space-y-6">
                        <h3 className="text-4xl font-bold mb-5 text-gradient-gold">Áreas de Interés</h3>

                        <ul className="space-y-8">
                            {interests.map((interest, index) => (
                                <motion.li
                                    key={index}
                                    className="flex flex-col gap-2"
                                    custom={index}
                                    variants={{
                                        initial: { opacity: 0, x: -20 },
                                        whileInView: i => ({
                                            opacity: 1,
                                            x: 0,
                                            transition: { delay: i * 0.1 }
                                        })
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }} // Añadimos el efecto hover
                                >
                                    <div className="flex items-center gap-3 text-lg">
                                        <CheckCircle2 className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                                        <span className="text-[rgb(var(--text-secondary))]">{interest.title}</span>
                                    </div>

                                    {/* Mostrar las herramientas como chips o tags debajo de cada interés */}
                                    <div className="flex flex-wrap gap-1 mt-1">
                                        {interest.tools.map((tool, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-gray-500/30 to-orange-600/70 text-white"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex flex-col space-y-6">
                        {/* Recuadro 1: Experiencia */}
                        <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="glass-effect rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                                <Sliders className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[rgb(var(--text-primary))]">Experiencia</h3>
                            <p className="text-[rgb(var(--text-secondary))]">Sólida base en análisis técnico y resolución de problemas de la ingeniería petrolera.</p>
                        </motion.div>

                        {/* Recuadro 2: Transición */}
                        <motion.div {...fadeInUp} transition={{ delay: 0.5 }} className="glass-effect rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                                <Waypoints className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[rgb(var(--text-primary))]">Transición</h3>
                            <p className="text-[rgb(var(--text-secondary))]">En constante formación en tecnologías de datos: Python, SQL, MongoDB, y herramientas de análisis.</p>
                        </motion.div>

                        {/* Recuadro 3: Objetivo */}
                        <motion.div {...fadeInUp} transition={{ delay: 0.6 }} className="glass-effect rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform duration-300">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[rgb(var(--text-primary))]">Objetivo</h3>
                            <p className="text-[rgb(var(--text-secondary))]">Convertirme en un experto en ingeniería de datos y contribuir a proyectos innovadores.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Interests;
