import React from 'react';
import { Link } from './Link';
import { SocialLinks } from './hero/SocialLinks';
import { FaReact } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { href: '#home', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#skills', label: 'Compétences' },
    { href: '#projects', label: 'Projets' },
    { href: '#experience', label: 'Expérience' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#education', label: 'Formation' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="relative bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />

      <div className="container mx-auto px-6 py-8 relative">
        <div className="flex flex-col items-center gap-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-4 justify-center">
            {links.map(({ href, label }) => (
              <FooterLink key={href} href={href}>{label}</FooterLink>
            ))}
          </nav>

          {/* Social Links */}
          <div className="scale-90">
            <SocialLinks />
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
            <p>© {currentYear} SAIBOU ABDOU SALAM. Tous droits réservés.</p>
            <p className="flex items-center justify-center gap-2">
              Développé avec <FaReact className="w-6 h-6 text-blue-500 animate-spin" /> et
              <SiVite className="w-6 h-6 text-yellow-500 animate-pulse" />
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
