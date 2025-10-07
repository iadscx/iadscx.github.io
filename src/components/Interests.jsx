import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import { CheckCircle2 } from 'lucide-react';

const Interests = () => {
    const interests = [
        "Análisis de datos (Python, Pandas, SQL, Power BI)",
        "Procesamiento y limpieza de datos [ETL/ELT]",
        "Pipelines y automatización de flujos (Airflow, Prefect)",
        "Almacenamiento, modelado y calidad de datos",
        "Análisis de calidad de datos",
        "Optimización de procesos basados en información"
    ];

    const tools = [
        { category: "Lenguajes", items: "Python, SQL, Java, HTML, CSS, Javascript" },
        { category: "Librerías", items: "Pandas, NumPy, Matplotlib, Seaborn" },
        { category: "Bases de datos", items: "PostgreSQL, BigQuery, MySQL, SQLite" },
        { category: "Herramientas de visualización", items: "Power BI" },
        { category: "Pipeline y ETL", items: "Airflow, PySpark (aprendiendo)" },
        { category: "Control de versiones", items: "GitHub" },
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
                <SectionTitle title="Áreas de Interés y Herramientas" subtitle="Mis pasiones y las tecnologías que utilizo para darles vida" />

                <div className="grid lg:grid-cols-2 gap-16">
                    <motion.div
                        {...fadeInUp}
                    >
                        <h3 className="text-3xl font-bold mb-6 text-gradient-gold" style={{ fontFamily: "'Playfair Display', serif" }}>Áreas de Interés 🤓</h3>
                        <ul className="space-y-4">
                            {interests.map((interest, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start gap-3 text-lg"
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
                                >
                                    <CheckCircle2 className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                                    <span className="text-[rgb(var(--text-secondary))]">{interest}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                         {...fadeInUp}
                         transition={{delay: 0.2}}
                    >
                        <h3 className="text-3xl font-bold mb-6 text-gradient-gold" style={{ fontFamily: "'Playfair Display', serif" }}>Herramientas que He Aprendido</h3>
                        <div className="glass-effect rounded-xl overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-white/5">
                                    <tr>
                                        <th className="p-4 font-semibold text-[rgb(var(--text-primary))]">Categoría</th>
                                        <th className="p-4 font-semibold text-[rgb(var(--text-primary))]">Herramientas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tools.map((tool, index) => (
                                        <tr key={index} className="border-t border-white/10">
                                            <td className="p-4 font-medium text-[rgb(var(--text-primary))]">{tool.category}</td>
                                            <td className="p-4 text-[rgb(var(--text-secondary))]">{tool.items}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Interests;