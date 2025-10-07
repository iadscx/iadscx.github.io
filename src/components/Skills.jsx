import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code, BarChart3, Wrench, Workflow, Languages, Cloud, Server } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: 'Programación',
      items: ['Python', 'Pandas', 'NumPy', 'Java'],
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: Database,
      title: 'Bases de Datos (SQL)',
      items: ['PostgreSQL', 'MySQL', 'SQLServer', 'OracleDB', 'SQLite'],
      color: 'from-amber-500 to-yellow-600'
    },
    {
      icon: Server,
      title: 'Bases de Datos (NoSQL)',
      items: ['MongoDB', 'DynamoDB', 'Cassandra'],
      color: 'from-yellow-400 to-lime-500'
    },
    {
      icon: Workflow,
      title: 'Procesos ETL/ELT',
      items: ['Pentaho', 'Apache Airflow', 'Data Cleaning', 'Storytelling'],
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: Cloud,
      title: 'Cloud & Big Data',
      items: ['AWS', 'Azure', 'Google Dataflow', 'BigQuery'],
      color: 'from-sky-500 to-blue-600'
    },
    {
      icon: BarChart3,
      title: 'Visualización',
      items: ['Matplotlib', 'Seaborn', 'Plotly', 'Power BI'],
      color: 'from-yellow-600 to-orange-500'
    },
    {
      icon: Wrench,
      title: 'Herramientas',
      items: ['Jupyter Notebook', 'Git', 'Excel'],
      color: 'from-amber-400 to-yellow-500'
    },
    {
      icon: Languages,
      title: 'Idiomas',
      items: ['Español (Nativo)', 'Inglés (Avanzado)'],
      color: 'from-yellow-500 to-amber-400'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const IconWrapper = ({ icon: Icon, color }) => (
    <motion.div 
      className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
      whileHover={{y: -5, rotate: 15}}
    >
      <Icon className="w-7 h-7 text-white" />
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 px-4 relative bg-black/10">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Habilidades" subtitle="Tecnologías y herramientas que estoy dominando" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.05 }}
              className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <IconWrapper icon={skill.icon} color={skill.color} />
              <h3 className="text-xl font-bold mb-3 text-[rgb(var(--text-primary))]">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-[rgb(var(--text-secondary))] flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color} opacity-70`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;