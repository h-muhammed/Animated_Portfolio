import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export default function About() {
  const skills = [
    'Java', 'JavaScript', 'Python', 'Dart', 'React', 'Flutter', 
    'Node.js', 'Firebase', 'MySQL', 'MongoDB', 'Docker', 'Kubernetes'
  ];

  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about building innovative solutions that make a difference
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a 4th-year Software Engineering undergraduate at SLIIT with hands-on experience 
              in software development through internships and academic projects. I specialize in 
              mobile application development, database management, and modern programming practices.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently working as an Intern Software Engineer at American Premium Water System, 
              where I develop mobile apps and web applications using cutting-edge technologies. 
              I'm passionate about creating innovative solutions that make a real impact.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="secondary" className="text-sm py-1 px-3 hover:scale-105 transition-transform">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="card-gradient p-8 shadow-xl">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-full mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">HM</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Hussain Muhammed</h3>
                  <p className="text-primary font-medium">Software Engineer</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">3+</div>
                    <div className="text-sm text-muted-foreground">Years Study</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">12+</div>
                    <div className="text-sm text-muted-foreground">Tech Stack</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Dedication</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}