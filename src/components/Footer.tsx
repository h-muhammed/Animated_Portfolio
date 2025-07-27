import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 items-center"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient">Hussain Muhammed</span>
            </h3>
            <p className="text-muted-foreground">
              Full-Stack Developer crafting digital experiences with passion and precision.
            </p>
          </div>
          
          <div className="flex justify-center md:justify-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:scale-125 transition-transform">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-125 transition-transform">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-125 transition-transform">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground flex items-center justify-center md:justify-end">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" /> 
              using React & Three.js
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © 2025 Hussain Muhammed. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}