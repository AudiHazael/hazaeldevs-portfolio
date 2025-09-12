import React from "react";
import { motion } from "framer-motion";
import { Icons } from "./Icons";

function Socials() {
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
    <div>
      <div className="flex justify-center gap-6 mb-8">
        {socials.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            {social.icon({
              className: "w-7 h-7 text-stone-300 hover:text-white transition",
            })}
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default Socials;
