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
    description: 'Nous avons développé une boutique en ligne complète pour DIM, une marque emblématique de lingerie française qui souhaitait optimiser son expérience de vente en ligne. Notre approche a combiné un design élégant et moderne reflétant l\'identité premium de la marque avec une expérience utilisateur soigneusement optimisée pour maximiser les conversions.',
    image: '/assets/DIM.png',
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
    description: 'By G2S Immobilier, une agence immobilière basée à Bondy Paris, souhaitait développer une présence en ligne reflétant son expertise et permettant de présenter son portefeuille de biens. Notre équipe a conçu un site web élégant et fonctionnel mettant en valeur les propriétés disponibles et facilitant le contact avec les clients potentiels.',
    image: '/assets/Immobilier.png',
    link: 'https://www.byg2simmobilier.fr/',
    github: '',
    techStack: [
      techStacks.react,
      techStacks.tailwind,
      techStacks.typescript,
      techStacks.firebase,
    ],
  },
  {
    title: 'Maxi Meubles',
    description: 'Maxi Meubles souhaitait lancer une boutique en ligne pour commercialiser leur gamme de mobilier design à prix abordable. Notre équipe a conçu une plateforme e-commerce complète, mettant en valeur leur catalogue de produits et optimisant l\'expérience d\'achat pour maximiser les conversions.',
    image: '/assets/Maxi_Meubles.png',
    link: 'https://www.maxi-meubles.fr/',
    github: '',
    techStack: [
      techStacks.react,
      techStacks.tailwind,
      techStacks.typescript,
      techStacks.stripe,
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
