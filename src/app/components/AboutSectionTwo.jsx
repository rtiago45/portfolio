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
        <p><i>    Dez de 2020 - Mai de 2021 · 6 meses</i></p><br></br>
        <li>Cooperação ativa com equipes multidisciplinares em metodologias ágeis, participando de reuniões <b>SCRUM</b>, sprint planning e retrospectivas.</li>
        <li>Desempenho de um papel central no processo de implantação de clientes, assegurando que todos os aspectos técnicos sejam gerenciados e documentados.</li>
        <li>Preenchimento minucioso de relatórios técnicos relacionados à implantação de clientes, garantindo documentação precisa para referência futura.</li>
        <li>Atuação como ponto focal para solicitações de chegada de arquivos por meio do FileZilla, garantindo a segurança e integridade dos dados transferidos.</li>
        <li>Colaboração direta com equipes internas e externas para validar a chegada bem-sucedida de arquivos, minimizando erros e interrupções.</li>
      </ul>

    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
        <ul className="list-disc pl-2">
        <p><i> Mai de 2021 - Ago de 2021 · 4 meses</i></p><br></br>
        <li>Criação de queries eficientes utilizando SQL Oracle para extrair e manipular dados, garantindo informações precisas para suportar as automações.</li>
        <li>Desenvolvimento e implantação de automações RPA, melhorando a eficiência operacional e reduzindo erros manuais em processos críticos.</li>
        <li>Realização de mapeamento detalhado e análise de processos de negócios, identificando oportunidades de automação e eficiência.</li>
        <li>Desenvolvimento de soluções avançadas utilizando a plataforma Automation Anywhere, incluindo automações de tarefas complexas e integração com sistemas legados.</li>
        <li>Exploração contínua de novas tecnologias relacionadas a RPA, avaliando sua viabilidade e potencial para otimizar processos de negócios.</li>
      </ul>

    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
        <ul className="list-disc pl-2">
        <p><i> Out de 2021 - Até a presente data</i></p><br></br>
        <li>Fornecer sustentação de alto nível para os sistemas da VIVO, garantindo a disponibilidade contínua e a resolução rápida de incidentes.</li>
        <li>Criar e otimizar scripts e queries em SQL para resolver chamados com SLAs restritos, assegurando a integridade dos dados e o desempenho do sistema.</li>
        <li>Gerenciar múltiplos sistemas Java com padrão MVC, identificando e solucionando problemas de forma proativa para manter a estabilidade.</li>
        <li>Utilização ágil de tecnologias REST e SOAP para integrar sistemas internos e externos, permitindo a troca segura e eficiente de dados.</li>
        <li>Realização de validação detalhada em servidores, garantindo o correto funcionamento das integrações e a conformidade com os padrões.</li>
        <li>Desenvolvimento de soluções dinâmicas usando JSP para criar interfaces de usuário interativas e responsivas, melhorando a experiência do usuário.</li>
        <li>Criação e otimização de scripts para extração de dados no SQL Developer, permitindo análises avançadas e relatórios precisos.</li>
        <li>Colaboração com equipes multidisciplinares na resolução de problemas técnicos complexos e no desenvolvimento de soluções inovadoras.</li>
        </ul>
    ),
  },
];

// ... (imports omitidos para brevidade)

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
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Experiências Profissionais</h2>
            <p className="text-base lg:text-lg">
              {/* ... (conteúdo omitido para brevidade) */}
            </p>

            <div className="flex flex-col sm:flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Concil{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Qualitat{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                {" "}
                Indra{" "}
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
