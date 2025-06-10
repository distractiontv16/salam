import { Github, Linkedin } from 'lucide-react';
import { FaWhatsapp, FaThreads } from 'react-icons/fa6';

const links = [
  {
    href: 'https://www.linkedin.com/in/abdou-saibou',
    icon: <Linkedin className="w-6 h-6 text-[#0077B5]" />,
    label: 'LinkedIn',
  },
  {
    href: 'https://www.threads.com/@ldn_h24',
    icon: <FaThreads className="w-6 h-6 text-gray-900 dark:text-white" />,
    label: 'Threads',
  },
  {
    href: 'https://wa.me/33651104334',
    icon: <FaWhatsapp className="w-6 h-6 text-[#25D366]" />,
    label: 'WhatsApp',
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {links.map(({ href, icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:scale-110 transform transition-transform duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          <div>{icon}</div>
        </a>
      ))}
    </div>
  );
}
