import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export default function Experience() {
  const experiences = [
    {
  title: 'Associate Software Engineer',
  company: 'American Premium Water System',
  duration: '03/2025 – Present',
  description: 'Working on a Flutter-based web app and ERP systems using Angular and Laravel. Contributing to frontend and backend feature development. Preparing to initiate a new ERP project using Spring Boot and Angular.',
  technologies: ['.NET Core', 'C#', 'SQL Server', 'Azure', 'RabbitMQ','laravel','Angular'],
  current: true
},

    {
      title: 'Intern Software Engineer',
      company: 'American Premium Water System',
      duration: '10/2024 - 3/2025',
      description: 'Developed mobile apps for Android, iOS, and Web enabling customers to view payments and consumption history. Built business card reader using Google Vision API and Python.',
      technologies: ['Flutter', '.Net Core', 'MSSQL', 'Azure', 'Firebase', 'Python', 'React', 'Node.js'],
      current: false
    },
    {
      title: 'Software Engineering Student',
      company: 'SLIIT',
      duration: '2023 - 2026',
      description: 'Pursuing BSc in Information Technology specializing in Software Engineering. Completed multiple projects including food delivery systems and textile management platforms.',
      technologies: ['Java', 'JavaScript', 'Python', 'Dart', 'React', 'Flutter', 'MongoDB'],
      current: true
    }
  ];

  return (
    <section className="py-20 px-4" id="experience">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-accent"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'
                } md:w-1/2 pl-16 md:pl-0`}
              >
                {/* Timeline dot */}
                <div className={`absolute w-4 h-4 rounded-full ${
                  exp.current ? 'bg-primary animate-pulse-glow' : 'bg-accent'
                } left-6 md:left-auto ${
                  index % 2 === 0 ? 'md:-right-2' : 'md:-left-1.5'
                } top-6 z-10`}></div>
                
                <Card className="card-gradient shadow-xl hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.duration}</p>
                        {exp.current && (
                          <Badge variant="default" className="mt-2">Current</Badge>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}