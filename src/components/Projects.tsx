import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, Play, X, Smartphone } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';

export default function Projects() {
  const projects = [
    {
      title: 'MyAPWS – Selfcare Mobile App',
      description:
        'Cross-platform app for utility customers to view payment history, usage, and invoices. Developed during internship.',
      image: '/images/myapws.png',
      tech: ['Flutter', '.NET Core', 'MSSQL', 'Firebase', 'Azure'],
      github: '',
      live: 'https://apwsselfcare.americanholdings.lk/',
      video: '/videos/myapws-demo.mp4',
      appStore: 'https://apps.apple.com/us/app/american-water/id6742320691',
      playStore: 'https://play.google.com/store/apps/details?id=com.americanpremiumwater.myapws',
      featured: true,
    },
    {
      title: 'TastyTrail – Food Ordering & Delivery',
      description:
        'Multi-role food delivery system with user, driver, and admin apps. Supports real-time tracking and secure authentication.',
      image: '/api/placeholder/600/400',
      tech: ['Flutter', 'Firebase', 'Node.js', 'React', 'Docker'],
      github: 'https://github.com/mushrifahamed/TastyTrail.git',
      live: '',
      featured: true,
    },
    {
      title: 'Textile Management System',
      description:
        'Implemented demand-based price adjustment and secure role-based authentication using JWT.',
      image: '/api/placeholder/600/400',
      tech: ['React', 'Vite', 'MongoDB', 'Node.js'],
      github: 'https://github.com/yashodalasith/Textile-Management-System.git',
      live: '',
      featured: false,
    },
    {
      title: 'GCJM Collection App',
      description:
        'Real-world mobile app for tracking mosque donations with area-based logging and SMS confirmation.',
      image: '/api/placeholder/600/400',
      tech: ['Flutter', 'Firebase'],
      github: 'https://github.com/IT22609212/GCJM_ColectionAPP.git',
      live: '',
      featured: false,
    },
    {
      title: 'Business Card Reader with OCR',
      description:
        'Python app using Google Vision API and SpaCy to extract and format data from business cards. Frontend in React and backend in Node.js.',
      video: '/videos/joozy-app.mp4',
      image: '/api/placeholder/600/400',
      tech: ['Python', 'Google Vision API', 'SpaCy', 'React', 'Node.js'],
      github: '',
      live: '',
      featured: false,
    },
  ];

  return (
    <section className="py-20 px-4" id="projects">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of real-world and academic projects showcasing my skills in full-stack and mobile development.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`card-gradient shadow-xl overflow-hidden group hover:scale-105 transition-all duration-300 ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}>
                <div className="relative overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-6xl opacity-20">🚀</div>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <CardHeader>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 flex-wrap">
                    {project.video && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="flex-1 min-w-[120px]">
                            <Play className="mr-2 h-4 w-4" />
                            Demo Video
                          </Button>
                        </DialogTrigger>
                       <DialogContent className="max-w-4xl p-0">
  <div className="w-full max-h-[90vh] flex justify-center items-center p-4">
    <video
      controls
      className="max-h-[80vh] w-auto rounded-md"
      src={project.video}
    >
      Your browser does not support the video tag.
    </video>
  </div>
</DialogContent>

                      </Dialog>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[120px]">
                        <Button variant="outline" size="sm" className="w-full">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[120px]">
                        <Button variant="default" size="sm" className="w-full">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                    {project.appStore && (
                      <a href={project.appStore} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[120px]">
                        <Button variant="outline" size="sm" className="w-full">
                          <Smartphone className="mr-2 h-4 w-4" />
                          App Store
                        </Button>
                      </a>
                    )}
                    {project.playStore && (
                      <a href={project.playStore} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[120px]">
                        <Button variant="outline" size="sm" className="w-full">
                          <Smartphone className="mr-2 h-4 w-4" />
                          Play Store
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="neon" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}