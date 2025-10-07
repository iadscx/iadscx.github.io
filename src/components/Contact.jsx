import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import SectionTitle from '@/components/SectionTitle';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Mensaje no enviado",
      description: "La funcionalidad de formulario de contacto aún no está implementada.",
      variant: "destructive",
      duration: 4000,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSocialClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    } else {
      toast({
        title: "🚧 Enlace no disponible",
        description: "Este enlace se configurará pronto. ¡Gracias por tu paciencia!",
        duration: 3000,
      });
    }
  };

  const handleDownloadCV = () => {
    toast({
      title: "🚧 CV no disponible",
      description: "¡Pronto podrás descargar mi CV desde aquí! Solicita esta función si es urgente.",
      duration: 3000,
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };
  
  const socialLinks = {
    email: 'mailto:tu.email@ejemplo.com',
    linkedin: 'https://linkedin.com/in/tuperfil',
    github: 'https://github.com/tuusuario'
  }

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Contacto" subtitle="¿Tienes un proyecto en mente? ¡Hablemos!" />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-[rgb(var(--text-primary))]">Conectemos</h3>
            <p className="text-[rgb(var(--text-secondary))]">Estoy disponible para colaboraciones y nuevas oportunidades. No dudes en contactarme a través de estos canales o usando el formulario.</p>
            
            <div className="space-y-4">
              <button onClick={() => handleSocialClick(socialLinks.email)} className="w-full flex items-center gap-4 p-4 glass-effect rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"><Mail className="w-6 h-6" /></div>
                <div className="text-left"><p className="font-semibold text-[rgb(var(--text-primary))]">Email</p><p className="text-sm text-[rgb(var(--text-secondary))]">Envíame un correo</p></div>
              </button>
              <button onClick={() => handleSocialClick(socialLinks.linkedin)} className="w-full flex items-center gap-4 p-4 glass-effect rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-amber-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"><Linkedin className="w-6 h-6" /></div>
                <div className="text-left"><p className="font-semibold text-[rgb(var(--text-primary))]">LinkedIn</p><p className="text-sm text-[rgb(var(--text-secondary))]">Mi perfil profesional</p></div>
              </button>
              <button onClick={() => handleSocialClick(socialLinks.github)} className="w-full flex items-center gap-4 p-4 glass-effect rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"><Github className="w-6 h-6" /></div>
                <div className="text-left"><p className="font-semibold text-[rgb(var(--text-primary))]">GitHub</p><p className="text-sm text-[rgb(var(--text-secondary))]">Mis repositorios</p></div>
              </button>
            </div>
             <motion.button
                {...fadeInUp}
                transition={{ delay: 0.4 }}
                onClick={handleDownloadCV}
                className="w-full mt-6 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <Download className="w-6 h-6" />
                Descargar CV
              </motion.button>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-[rgb(var(--text-secondary))]">Nombre</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 text-[rgb(var(--text-primary))]" placeholder="Tu nombre" required />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-[rgb(var(--text-secondary))]">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 text-[rgb(var(--text-primary))]" placeholder="tu@email.com" required />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-[rgb(var(--text-secondary))]">Mensaje</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 resize-none text-[rgb(var(--text-primary))]" placeholder="Cuéntame sobre tu proyecto..." required />
              </div>

              <button type="submit" className="w-full px-6 py-4 bg-gradient-to-r from-amber-600 to-orange-700 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;