"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";


export const testimonials = [
  {
    text: "SellElite a transformé notre présence digitale. En 6 mois, notre chiffre d'affaires a augmenté de 350%. Leur approche data-driven et leur expertise sont exceptionnelles.",
    image: "/man.jpg",
    name: "Marie Dubois",
    role: "CEO, TechCorp",
  },
  {
    text: "Une équipe de professionnels qui tient ses promesses. Grâce à leur stratégie SEO, nous sommes passés de la page 3 au top 3 Google en moins de 4 mois.",
    image: "woman.jpg",
    name: "Pierre Martin",
    role: "Fondateur, InnovLab",
  },
  {
    text: "Le ROI de nos campagnes publicitaires a été multiplié par 4. SellElite maîtrise parfaitement l'art de la conversion digitale.",
    image: "/woman-girl.jpg",
    name: "Sophie Laurent",
    role: "CMO, GrowthCo",
  },
  {
    text: "Accompagnement exceptionnel du début à la fin. Leur méthodologie claire et leurs résultats rapides ont dépassé toutes nos attentes.",
    image: "man.jpg",
    name: "Thomas Bernard",
    role: "Directeur, ScalePro",
  },
  {
    text: "SellElite ne se contente pas de livrer, ils innovent constamment. Notre site e-commerce génère maintenant 5x plus de ventes.",
    image: "/woman.jpg",
    name: "Camille Rousseau",
    role: "CEO, NextGen",
  },
]

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Image
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

;