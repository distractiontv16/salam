import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useContent } from '../../contexts/ContentContext';

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

function ContactItem({ icon, text, href }: ContactItemProps) {
  const Component = href ? 'a' : 'div';
  return (
    <Component
      href={href}
      className={`flex items-center gap-2 px-4 py-1 ${href ? 'hover:scale-105' : ''} transition-transform duration-200`}
    >
      <span className="text-blue-600 dark:text-blue-400">{icon}</span>
      <span className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
        {text}
      </span>
    </Component>
  );
}

export function ContactInfo() {
  const { content } = useContent();
  const { phone, email, location } = content.hero;

  return (
    <div className="flex flex-col items-center gap-0">
      <ContactItem
        icon={<Phone className="w-5 h-5" />}
        text={phone}
        href={`tel:${phone.replace(/\s/g, '')}`}
      />
      <ContactItem
        icon={<Mail className="w-5 h-5" />}
        text={email}
        href={`mailto:${email}`}
      />
      <ContactItem
        icon={<MapPin className="w-5 h-5" />}
        text={location}
      />
    </div>
  );
}
