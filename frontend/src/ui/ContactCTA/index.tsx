"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  IoCall,
  IoMail,
  IoLogoWhatsapp,
  IoArrowForward,
} from "react-icons/io5";
import Link from "next/link";

interface ContactCTAProps {
  variant?: "light" | "dark" | "blue";
  showTitle?: boolean;
}

const ContactCTA: React.FC<ContactCTAProps> = ({
  variant = "blue",
  showTitle = true,
}) => {
  const styles = {
    light: {
      bg: "bg-white",
      text: "text-gray-900",
      subtext: "text-gray-600",
      cardBg: "bg-gray-50",
      cardHover: "hover:bg-gray-100",
      border: "border-gray-200",
      iconBg: "bg-[#2563eb]",
      iconColor: "text-white",
    },
    dark: {
      bg: "bg-gray-900",
      text: "text-white",
      subtext: "text-gray-400",
      cardBg: "bg-gray-800",
      cardHover: "hover:bg-gray-700",
      border: "border-gray-700",
      iconBg: "bg-[#2563eb]",
      iconColor: "text-white",
    },
    blue: {
      bg: "bg-[#2563eb]",
      text: "text-white",
      subtext: "text-blue-100",
      cardBg: "bg-white/10",
      cardHover: "hover:bg-white/20",
      border: "border-white/20",
      iconBg: "bg-white",
      iconColor: "text-[#2563eb]",
    },
  };

  const current = styles[variant];

  const contacts = [
    {
      icon: <IoCall size={24} />,
      title: "Zəng edin",
      value: "+994 50 123 45 67",
      href: "tel:+994501234567",
      label: "Həftə içi 9:00 - 18:00",
    },
    {
      icon: <IoLogoWhatsapp size={24} />,
      title: "WhatsApp",
      value: "+994 50 123 45 67",
      href: "https://wa.me/994501234567",
      label: "Sürətli cavab",
    },
    {
      icon: <IoMail size={24} />,
      title: "Email göndərin",
      value: "info@neyman.az",
      href: "mailto:info@neyman.az",
      label: "24 saat ərzində cavab",
    },
  ];

  return (
    <section
      className={`relative py-16 lg:py-20 overflow-hidden ${current.bg}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2
              className={`text-3xl lg:text-4xl font-bold ${current.text} mb-4`}
            >
              Bizimlə əlaqə saxlayın
            </h2>
            <p className={`${current.subtext} max-w-2xl mx-auto`}>
              Layihəniz haqqında danışmaq və ya suallarınız üçün bizə müraciət
              edin
            </p>
          </motion.div>
        )}

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {contacts.map((contact) => (
            <Link
              key={contact.title}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={
                contact.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className={`group p-6 lg:p-8 rounded-2xl ${current.cardBg} ${current.cardHover} border ${current.border} transition-all duration-300`}
            >
              <div
                className={`w-14 h-14 rounded-xl ${current.iconBg} ${current.iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {contact.icon}
              </div>

              <h3 className={`text-lg font-bold ${current.text} mb-2`}>
                {contact.title}
              </h3>

              <p className={`text-2xl font-bold ${current.text} mb-1`}>
                {contact.value}
              </p>

              <p className={`text-sm ${current.subtext}`}>{contact.label}</p>
            </Link>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
              variant === "blue"
                ? "bg-white text-[#2563eb] hover:bg-blue-50"
                : "bg-[#2563eb] text-white hover:bg-blue-700"
            } shadow-lg group`}
          >
            Əlaqə formunu doldurun
            <IoArrowForward
              className="group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
