import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';
import {
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPrisma,
  SiShadcnui,
  SiFramer,
  SiSocketdotio,
  SiStripe,
  SiAppwrite,
} from 'react-icons/si';

// Define reusable tech stack icons & colors
const techStacks = {
  react: { icon: SiReact, name: "React", color: '#00cfff' },
  node: { icon: SiNodedotjs, name: "Node.js", color: '#228b22' },
  firebase: { icon: SiFirebase, name: "Firebase", color: '#fbbf00' },
  tailwind: { icon: SiTailwindcss, name: "Tailwind CSS", color: '#06b6d4' },
  typescript: { icon: SiTypescript, name: "TypeScript", color: '#1f6feb' },
  next: { icon: SiNextdotjs, name: "Next.js", color: '#' },
  mongodb: { icon: SiMongodb, name: "MongoDB", color: '#10b981' },
  prisma: { icon: SiPrisma, name: "Prisma", color: '#186997' },
  shadcn: { icon: SiShadcnui, name: "ShadCN", color: '#6366f1' },
  framer: { icon: SiFramer, name: "Framer Motion", color: '#2563eb' },
  socket: { icon: SiSocketdotio, name: "Socket.io", color: '#' },
  stripe: { icon: SiStripe, name: "Stripe", color: '#5b4df1' },
  appwrite: { icon: SiAppwrite, name: "Appwrite", color: '#ff3d00' },
};

// Define projects data
const projects = [
  {
    title: 'DIM',
    description: 'Boutique en ligne complète pour DIM, marque emblématique de lingerie française. Design élégant et moderne reflétant l\'identité premium de la marque avec une expérience utilisateur optimisée pour maximiser les conversions.',
    image: 'https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=DIM+E-commerce',
    link: 'https://www.dim.com/',
    github: '',
    techStack: [
      techStacks.react,
      techStacks.tailwind,
      techStacks.typescript,
      techStacks.stripe,
    ],
  },
  {
    title: 'By G2S Immobilier',
    description: 'Site web élégant et fonctionnel pour une agence immobilière basée à Bondy Paris. Présentation du portefeuille de biens avec recherche avancée et galerie photo pour faciliter le contact avec les clients potentiels.',
    image: 'https://via.placeholder.com/800x400/8B5CF6/FFFFFF?text=G2S+Immobilier',
    link: 'https://www.byg2simmobilier.fr/',
    github: '',
    techStack: [
      techStacks.react,
      techStacks.tailwind,
      techStacks.typescript,
      techStacks.firebase,
    ],
  },

];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Projets Fiabilitech</SectionTitle>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
