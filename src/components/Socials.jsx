import React from "react";
import { motion } from "framer-motion";
import { Icons } from "./Icons";

function Socials({ size = "md", gap = 6, color = "text-stone-300" }) {
  // Define size styles
  const sizeClasses = {
    sm: "w-5 h-5", // small
    md: "w-7 h-7", // medium (default)
    lg: "w-9 h-9", // large
    xl: "w-12 h-12", // extra large
  };

  const socials = [
    {
      href: "https://github.com/AudiHazael/",
      label: "GitHub",
      icon: Icons.Github,
    },
    {
      href: "#",
      label: "LinkedIn",
      icon: Icons.LinkedIn,
    },
    {
      href: "mailto:hazaeldevs@gmail.com",
      label: "Email",
      icon: Icons.Mail,
    },
    {
      href: "https://www.facebook.com/share/16YLCxt6fX/",
      label: "Facebook",
      icon: Icons.Facebook,
    },
    {
      href: "https://www.instagram.com/hd_webdesigner?igsh=NjNjYm9hY2s2d3cw",
      label: "Instagram",
      icon: Icons.Instagram,
    },
  ];

  return (
    <div className={`flex justify-center gap-${gap} mb-8`}>
      {socials.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          viewport={{ once: false, amount: 0.5 }}
          className="transition-transform hover:scale-110"
        >
          {social.icon({
            className: `${sizeClasses[size]} ${color} hover:text-white transition`,
          })}
        </motion.a>
      ))}
    </div>
  );
}

export default Socials;
