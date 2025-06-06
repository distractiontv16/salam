import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    title: "Certification PIX",
    issuer: "Plateforme nationale",
    date: "2022",
    link: "#",
    image: "/assets/Certification_PIX.jpg",
    description: "Certification des compétences numériques selon le référentiel européen DIGCOMP.",
    skills: [
      "Maîtrise des outils numériques",
      "Communication et collaboration",
      "Création de contenu digital",
      "Protection des données",
      "Résolution de problèmes techniques"
    ]
  },
  {
    title: "Certification Techniques Commerciales",
    issuer: "Centre de Formation Professionnelle",
    date: "2023",
    link: "#",
    image: "https://via.placeholder.com/400x300/10B981/FFFFFF?text=Techniques+Commerciales",
    description: "Certification professionnelle sur les techniques de vente et négociation commerciale.",
    skills: [
      "Techniques de vente",
      "Négociation commerciale",
      "Gestion de la relation client",
      "Prospection commerciale"
    ]
  },
];

export function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Certifications</SectionTitle>
        <Slider {...settings} className="max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.title} className="px-4">
              <CertificationCard {...cert} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
