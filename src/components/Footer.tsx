import React from 'react';
import { Link } from './Link';
import { SocialLinks } from './hero/SocialLinks';
import { Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#about', label: 'À propos' },
    { href: '#skills', label: 'Compétences' },
    { href: '#projects', label: 'Projets' },
    { href: '#experience', label: 'Parcours' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-6 py-12 relative">
        <div className="grid md:grid-cols-4 gap-8">

          {/* Colonne 1: Profil */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              SAIBOU ABDOU SALAM
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Étudiant en Bachelor Supply Chain et Co-Fondateur de Fiabilitech.
              Passionné par l'entrepreneuriat et la transformation digitale.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm">salamsaibou2002@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm">+33 7 67 43 87 81</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Rouen, France</span>
              </div>
            </div>
          </div>

          {/* Colonne 2: Navigation Rapide */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Navigation</h4>
            <nav className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <FooterLink key={href} href={href}>{label}</FooterLink>
              ))}
            </nav>
          </div>

          {/* Colonne 3: Fiabilitech */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Fiabilitech</h4>
            <p className="text-gray-300 text-sm mb-4">
              Agence de développement web et mobile spécialisée dans les solutions e-commerce.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-400">• Sites e-commerce</div>
              <div className="text-sm text-gray-400">• Applications mobiles</div>
              <div className="text-sm text-gray-400">• Solutions sur mesure</div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} SAIBOU ABDOU SALAM. Tous droits réservés.
              </p>
              <p className="text-gray-500 text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
                Fait avec <Heart className="w-3 h-3 text-red-400" /> pour ma recherche d'alternance
              </p>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-4">
              <SocialLinks />
            </div>

            {/* Bouton retour en haut */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
              <span className="text-sm font-medium">Haut de page</span>
            </button>
          </div>
        </div>

        {/* Status d'alternance */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/30 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-300 text-sm font-medium">
              🎯 Recherche d'alternance 2025-2026 - Bachelor Achats et Supply Chain
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
