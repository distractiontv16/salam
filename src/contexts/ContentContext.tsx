import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ContentData {
  // Hero Section
  hero: {
    name: string;
    roles: string[];
    email: string;
    phone: string;
    location: string;
  };
  
  // About Section
  about: {
    intro: string;
    description1: string;
    description2: string;
    callToAction: string;
    sections: {
      whoIAm: string[];
      whatIDo: string[];
      myGoals: string[];
      myPhilosophy: string[];
    };
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    description: string;
    email: string;
    phone: string;
    linkedin: string;
    successMessage: string;
    errorMessage: string;
  };
  
  // Projects Section
  projects: {
    title: string;
    fiablitechDescription: string;
    projects: Array<{
      id: string;
      title: string;
      description: string;
      link: string;
      technologies: string[];
    }>;
  };
  
  // Skills Section
  skills: {
    title: string;
    categories: string[];
    commercialSkills: Array<{
      name: string;
      level: number;
      description: string;
    }>;
    technicalSkills: Array<{
      name: string;
      level: number;
      description: string;
    }>;
    softSkills: string[];
  };
  
  // Experience Section
  experience: {
    title: string;
    experiences: Array<{
      id: string;
      title: string;
      company: string;
      period: string;
      description: string[];
    }>;
  };
  
  // Education Section
  education: {
    title: string;
    educations: Array<{
      id: string;
      degree: string;
      institution: string;
      period: string;
      status: string;
      description: string;
      skills: string[];
    }>;
  };
  
  // Languages Section
  languages: {
    title: string;
    note: string;
    languages: Array<{
      name: string;
      level: string;
      percentage: number;
    }>;
  };
  
  // Footer Section
  footer: {
    name: string;
    description: string;
    email: string;
    phone: string;
    location: string;
    copyright: string;
    madeWith: string;
  };
}

const defaultContent: ContentData = {
  hero: {
    name: "SAIBOU ABDOU SALAM",
    roles: [
      "Étudiant en Bachelor Supply Chain",
      "Co-Fondateur Fiabilitech",
      "Spécialiste en Gestion Commerciale",
      "Passionné d'Entrepreneuriat",
      "Expert en Relations Client"
    ],
    email: "salamsaibou2002@gmail.com",
    phone: "+33 06 51 10 43 34",
    location: "Rouen, France"
  },
  
  about: {
    intro: "About Me",
    description1: "Passionné par la tech et l'entrepreneuriat, j'ai lancé Fiabilitech avec une conviction : le digital doit être puissant, fluide et aligné avec vos objectifs.",
    description2: "Aujourd'hui, je transforme cette vision en solutions web et mobile sur mesure, en combinant rigueur technique, gestion de projet agile et une obsession : vos résultats.",
    callToAction: "Besoin d'un partenaire qui allie créativité et exécution sans compromis?",
    sections: {
      whoIAm: [
        "Étudiant en Bachelor Supply Chain passionné par la gestion commerciale.",
        "Co-fondateur de Fiabilitech, agence de développement web et mobile.",
        "Jeune entrepreneur déterminé avec un excellent sens relationnel."
      ],
      whatIDo: [
        "Gestion commerciale et relation client dans l'immobilier.",
        "Développement de solutions digitales avec Fiabilitech.",
        "Optimisation des processus d'achat et de supply chain."
      ],
      myGoals: [
        "Valider mon Bachelor Supply Chain avec excellence.",
        "Développer Fiabilitech et créer des solutions innovantes.",
        "Acquérir une expertise en gestion des achats et approvisionnement."
      ],
      myPhilosophy: [
        "L'innovation doit servir l'efficacité commerciale.",
        "L'excellence relationnelle est la clé du succès.",
        "L'apprentissage continu ouvre toutes les opportunités."
      ]
    }
  },
  
  contact: {
    title: "Contactez-moi",
    subtitle: "Restons en contact",
    description: "Je suis toujours ouvert aux discussions sur de nouveaux projets, des idées créatives, ou des opportunités d'alternance en Supply Chain.",
    email: "salamsaibou2002@gmail.com",
    phone: "+33 06 51 10 43 34",
    linkedin: "linkedin.com/in/abdou-saibou",
    successMessage: "Message envoyé ! Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
    errorMessage: "Une erreur s'est produite. Veuillez réessayer plus tard."
  },
  
  projects: {
    title: "Projets Fiabilitech",
    fiablitechDescription: "Agence de développement web et mobile spécialisée dans les solutions e-commerce innovantes",
    projects: [
      {
        id: "dim",
        title: "DIM",
        description: "Nous avons développé une boutique en ligne complète pour DIM, une marque emblématique de lingerie française qui souhaitait optimiser son expérience de vente en ligne. Notre approche a combiné un design élégant et moderne reflétant l'identité premium de la marque avec une expérience utilisateur soigneusement optimisée pour maximiser les conversions.",
        link: "https://www.dim.com/",
        technologies: ["React", "Tailwind CSS", "TypeScript", "Stripe"]
      },
      {
        id: "byg2s",
        title: "By G2S Immobilier",
        description: "By G2S Immobilier, une agence immobilière basée à Bondy Paris, souhaitait développer une présence en ligne reflétant son expertise et permettant de présenter son portefeuille de biens. Notre équipe a conçu un site web élégant et fonctionnel mettant en valeur les propriétés disponibles et facilitant le contact avec les clients potentiels.",
        link: "https://www.byg2simmobilier.fr/",
        technologies: ["React", "Tailwind CSS", "TypeScript", "Firebase"]
      },
      {
        id: "maxi-meubles",
        title: "Maxi Meubles",
        description: "Maxi Meubles souhaitait lancer une boutique en ligne pour commercialiser leur gamme de mobilier design à prix abordable. Notre équipe a conçu une plateforme e-commerce complète, mettant en valeur leur catalogue de produits et optimisant l'expérience d'achat pour maximiser les conversions.",
        link: "https://www.maxi-meubles.fr/",
        technologies: ["React", "Tailwind CSS", "TypeScript", "Stripe"]
      }
    ]
  },
  
  skills: {
    title: "Compétences",
    categories: ["Toutes", "Commerciales", "Techniques"],
    commercialSkills: [
      {
        name: "Communication client",
        level: 90,
        description: "Capacité à communiquer efficacement avec les clients et comprendre leurs besoins"
      },
      {
        name: "Vente omnicanal",
        level: 75,
        description: "Maîtrise des techniques de vente à travers différents canaux (physique, digital)"
      },
      {
        name: "Études commerciales",
        level: 70,
        description: "Analyse et exploitation des études de marché et comportements clients"
      }
    ],
    technicalSkills: [
      {
        name: "Développement Web & Mobile",
        level: 85,
        description: "Création d'applications et sites web responsive avec des technologies modernes et performantes"
      },
      {
        name: "Design UI/UX",
        level: 80,
        description: "Conception d'interfaces utilisateur intuitives et esthétiques offrant une expérience utilisateur exceptionnelle"
      },
      {
        name: "Gestion Commerciale",
        level: 90,
        description: "Management de projets, relation client et stratégies commerciales pour optimiser la croissance et la satisfaction client"
      }
    ],
    softSkills: [
      "Excellent sens relationnel",
      "Esprit d'équipe",
      "Adaptabilité",
      "Leadership",
      "Communication",
      "Gestion du stress",
      "Créativité",
      "Sens de l'organisation"
    ]
  },
  
  experience: {
    title: "Expérience Professionnelle",
    experiences: [
      {
        id: "alternance-immobilier",
        title: "Alternance Immobilier",
        company: "Agence immobilière « Agence de la gare »",
        period: "2024-2025",
        description: [
          "Accueil et orientation des clients : premier point de contact à l'entrée de l'agence",
          "Organisation de visites guidées : accompagnement des clients lors des visites de biens",
          "Estimation de biens immobiliers : participation à l'évaluation de la valeur des propriétés",
          "Gestion administrative : suivi et mise à jour des dossiers clients",
          "Communication digitale : gestion des réseaux sociaux de l'agence",
          "Prospection commerciale : recherche de nouveaux clients et prise de mandats",
          "Valorisation des biens : mise en valeur des annonces en vitrine"
        ]
      }
    ]
  },
  
  education: {
    title: "Formation",
    educations: [
      {
        id: "bts-mco",
        degree: "BTS Management Commercial Opérationnel",
        institution: "Institut Les TOURELLES",
        period: "2023 - 2025",
        status: "En cours",
        description: "Formation en gestion d'unité commerciale, management d'équipe, gestion de la relation client, et animation et dynamisation de l'offre commerciale.",
        skills: [
          "Développement de la relation client",
          "Animation et dynamisation de l'offre commerciale",
          "Management opérationnel de l'équipe commerciale",
          "Gestion opérationnelle",
          "Communication commerciale"
        ]
      }
    ]
  },
  
  languages: {
    title: "Langues",
    note: "Ouvert aux opportunités internationales",
    languages: [
      {
        name: "Français",
        level: "Natif",
        percentage: 100
      },
      {
        name: "Anglais",
        level: "Intermédiaire",
        percentage: 70
      }
    ]
  },
  
  footer: {
    name: "SAIBOU ABDOU SALAM",
    description: "Étudiant en Bachelor Supply Chain et Co-Fondateur de Fiabilitech. Passionné par l'entrepreneuriat et la transformation digitale.",
    email: "salamsaibou2002@gmail.com",
    phone: "+33 06 51 10 43 34",
    location: "Rouen, France",
    copyright: "Tous droits réservés.",
    madeWith: "pour ma recherche d'alternance"
  }
};

interface ContentContextType {
  content: ContentData;
  updateContent: (section: keyof ContentData, data: any) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<ContentData>(() => {
    const saved = localStorage.getItem('portfolio-content');
    return saved ? JSON.parse(saved) : defaultContent;
  });

  useEffect(() => {
    localStorage.setItem('portfolio-content', JSON.stringify(content));
  }, [content]);

  const updateContent = (section: keyof ContentData, data: any) => {
    setContent(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const resetContent = () => {
    setContent(defaultContent);
    localStorage.removeItem('portfolio-content');
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
