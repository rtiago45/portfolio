"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java (Versão 8 /Superior)- Hibernate e Testes unitários(JUnit)</li>
        <li>Spring Boot - MVC (JPA)</li>
        <li>Angular</li>
        <li>HTML / CSS3 (Styled Components / Bootstrap)</li>
        <li>Banco de dados (SQL Developer - MongoDB)</li>
        <li>AWS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>UNIP - Ciências da Computação - Dezembro/2023</li>
        <li>Wizard - Inglês - Avançado</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="h-screen flex items-center justify-center mb-8 sm:mb-0">
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/Foto-principal.jpeg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
          <p className="text-base lg:text-lg">
          Olá, sou um estudante de ciências da computação com sede em São Paulo. Minha paixão pela programação começou quando escrevi minha primeira linha de código no último ano do ensino
          médio.</p>
          <p className="text-base lg:text-lg">Possuo uma sólida base em tecnologias como Java, Hibernate, Testes unitários,
          Spring Boot e Angular. Tenho também bastante experiência em bancos de dados relacionais e não relacionais.
          Além disso, estou familiarizado com o desenvolvimento de microserviços, e uso ferramentas essenciais como Maven e AWS.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educação{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AboutSection;
