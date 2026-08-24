import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import mod01 from "@/assets/mod-01.png.asset.json";
import mod02 from "@/assets/mod-02.png.asset.json";
import mod03 from "@/assets/mod-03.png.asset.json";
import depo1 from "@/assets/prova-1.jpg.asset.json";
import depo2 from "@/assets/prova-2.jpg.asset.json";
import depo3 from "@/assets/prova-3.jpg.asset.json";
import depo4 from "@/assets/prova-4.jpg.asset.json";
import depo5 from "@/assets/prova-5.jpg.asset.json";
import depo6 from "@/assets/prova-6.jpg.asset.json";
import depo7 from "@/assets/prova-7.jpg.asset.json";

import bonus1Img from "@/assets/bonus-01-v2.png.asset.json";
import bonus2Img from "@/assets/bonus-02-v2.png.asset.json";
import bonus3Img from "@/assets/bonus-03-v2.png.asset.json";
import guaranteeBadge from "@/assets/7-dias-garantia.png.asset.json";
import heroMockup from "@/assets/hero-figurinhas-v2.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "50 Figurinhas Eleitorais Editáveis no Canva" },
      {
        name: "description",
        content:
          "Pack com 50 figurinhas eleitorais 100% editáveis no Canva gratuito. Troque foto, nome, número, partido, cores e textos e use no WhatsApp hoje.",
      },
      { property: "og:title", content: "50 Figurinhas Eleitorais Editáveis no Canva" },
      {
        property: "og:description",
        content:
          "Pack com 50 figurinhas eleitorais 100% editáveis no Canva gratuito. Troque foto, nome, número, partido, cores e textos e use no WhatsApp hoje.",
      },
    ],
  }),
  component: LandingPage,
});

const ASSET = "https://protocolopele7d.lovable.app/__l5e/assets-v1";
const IMG = {
  hero: `/images/mockup-saches-rgba-v6.webp`,
  wpp1: `${ASSET}/dc6d13b6-3101-4394-9588-205e7818450d/whatsapp-print.webp`,
  wpp2: `${ASSET}/4732a711-2d37-4b04-8cfa-099499dbe03b/whatsapp-juliana.webp`,
  wpp3: `${ASSET}/53a7946e-bd71-4c08-993c-726491e3657f/whatsapp-carla.webp`,
  mod1: `${ASSET}/325f438e-3e06-4325-acde-66a11db30890/modulo-01.webp`,
  mod2: `${ASSET}/0bd5f8ec-1102-4408-a396-5c46f3647cdf/modulo-02.webp`,
  mod3: `${ASSET}/a22c18f6-481c-44ec-b431-63e4512128d1/modulo-03.webp`,
  bonus1: `${ASSET}/87e71348-c73a-4a74-8689-6e8368ae73b6/bonus-01.webp`,
  bonus2: `${ASSET}/d7da0b07-3896-441d-9c31-fb167592c2d6/bonus-02.webp`,
  bonus3: `${ASSET}/62b5f1f6-0d15-469c-812a-02b0c22447ce/bonus-03.webp`,
};

const modules = [
  { n: 1, title: "Sua campanha com a sua cara", desc: "Tenha acesso a 50 modelos eleitorais organizados para diferentes situações. Personalize foto, nome, número, partido, cores e textos sem precisar começar uma arte do zero." },
  { n: 2, title: "Edite mesmo sem Canva Pro", desc: "Abra o link, escolha sua figurinha e faça as alterações diretamente no Canva gratuito. Sem software complicado e sem precisar dominar ferramentas profissionais de design." },
  { n: 3, title: "Do Canva para sua comunicação", desc: "Terminou de personalizar? Baixe os arquivos e deixe suas figurinhas prontas para usar no WhatsApp e em outros canais compatíveis com o formato." },
];

const moduleLabels = ["50 Figurinhas Editáveis", "Personalize no Canva", "Edite, Baixe e Use"];

const moduleCovers = [mod01.url, mod02.url, mod03.url];

const bonuses = [
  { img: IMG.bonus1, tag: "🎁 Bônus 01 - Incluso na Oferta Completa", title: "Pack de Frases Eleitorais", desc: "Pare de perder tempo pensando no que escrever. Biblioteca de frases e chamadas para adaptar às figurinhas e acelerar a criação das mensagens da campanha.", value: "R$ 9,90" },
  { img: IMG.bonus2, tag: "🎁 Bônus 02 - Incluso na Oferta Completa", title: "Guia de Personalização Rápida", desc: "Deixe os 50 modelos com a identidade da campanha. Um guia objetivo mostrando como trocar foto, nome, número, partido, textos e cores no Canva gratuito.", value: "R$ 9,90" },
  { img: IMG.bonus3, tag: "🎁 Bônus 03 - Incluso na Oferta Completa", title: "Novas Figurinhas Eleitorais", desc: "Receba novos modelos durante o período eleitoral. A Oferta Completa inclui acesso às atualizações do pack conforme novos modelos forem disponibilizados.", value: "R$ 19,90" },
];

const faqs = [
  { q: "Preciso ter Canva Pro?", a: "Não. Os modelos foram pensados para serem personalizados utilizando o Canva gratuito." },
  { q: "O que consigo editar nas figurinhas?", a: "Você poderá personalizar elementos como foto, nome, número, partido, cores e textos, adaptando os modelos conforme sua preferência." },
  { q: "Como recebo as figurinhas depois da compra?", a: "Você receberá o acesso ao material para abrir os modelos no Canva, fazer suas alterações e baixar os arquivos personalizados." },
  { q: "Preciso saber design para editar?", a: "Não é necessário dominar programas profissionais de design. Os modelos já estão prontos e você parte da estrutura existente para fazer as personalizações no Canva." },
  { q: "Qual a diferença entre a Oferta Simples e a Completa?", a: "A Oferta Simples entrega o pack principal com as 50 figurinhas e acesso vitalício ao material adquirido. A Oferta Completa adiciona os 3 bônus, atualizações liberadas durante o período eleitoral e suporte pelo WhatsApp para questões de acesso e edição." },
];

const testimonials = [depo1.url, depo2.url, depo3.url, depo4.url, depo5.url, depo6.url, depo7.url];

function LandingPage() {
  const [showUpsell, setShowUpsell] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">

      <TopBar className="bg-[#061A32] text-white" />


      {/* Hero */}
      <section className="section-pad py-[64px] md:py-[80px] lg:py-[100px]">
        <div className="mx-auto max-w-5xl flex flex-col items-center text-center">
          <div className="w-full flex justify-center items-center bg-transparent overflow-visible">
            <img
              id="hero-lcp"
              src={heroMockup.url}
              alt="Figurinhas eleitorais no WhatsApp e edição no Canva"
              width="640"
              height="427"
              loading="eager"
              decoding="async"
              {...({ fetchpriority: "high" } as Record<string, string>)}
              className="block w-full max-w-[720px] rounded-[18px] bg-transparent object-contain object-center shadow-lg"
            />
          </div>
          <h1 className="mt-8 font-bold max-w-3xl text-balance px-4 sm:px-0" style={{ fontSize: "28px", lineHeight: "1.2", color: "var(--text)" }}>
            50 Figurinhas Eleitorais Prontas Para <span className="highlight">Personalizar no Canva</span> e Usar no WhatsApp <span className="highlight">Ainda Hoje</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground text-[15px] leading-[1.6] sm:text-[17px] md:text-lg text-pretty px-4 sm:px-0">
            Troque foto, nome, número, partido, cores e textos pelo Canva gratuito e tenha um pack personalizado para sua comunicação eleitoral sem precisar criar cada figurinha do zero.
          </p>
          <ul className="mt-4 flex flex-col items-start gap-2 text-left text-muted-foreground text-[15px] leading-[1.5] sm:text-[16px] px-4 sm:px-0 sm:mx-auto">
            <li>✅ 50 modelos</li>
            <li>✅ 100% editáveis</li>
            <li>✅ Acesso vitalício</li>
          </ul>
          <a
            href="#oferta"
            className="btn-primary mt-8 inline-flex items-center justify-center uppercase tracking-wider cta-fx"
          >
            QUERO MINHAS 50 FIGURINHAS
          </a>
          <p className="mt-4 text-xs text-muted-foreground">Personalize no Canva gratuito e baixe quantas vezes precisar.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background-soft section-pad py-[64px] md:py-[80px] lg:py-[100px] overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-semibold" style={{ fontSize: "24px", lineHeight: "1.2" }}>Veja como o Pack de Figurinhas Eleitoral está facilitando a comunicação de quem trabalha com campanhas</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto px-4">
            Modelos prontos para diferentes momentos da campanha, fáceis de editar e rápidos de colocar em uso.
          </p>
          <div className="relative mt-10 mx-auto w-full overflow-hidden">
            <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-6">
              {[...testimonials, ...testimonials].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Depoimento ${(i % testimonials.length) + 1}`}
                  className="w-[240px] sm:w-[280px] aspect-[9/16] object-cover rounded-[10px] shrink-0 bg-background"
                  loading="lazy"
                  decoding="async"
                  width={280}
                  height={498}
                />
              ))}
            </div>
            <p className="mt-8 text-center font-bold highlight italic">
              A sua campanha pode ser a próxima.
            </p>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="section-pad py-[64px] md:py-[80px] lg:py-[100px]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-semibold" style={{ fontSize: "24px", lineHeight: "1.2" }}>Tudo pronto para você personalizar e começar a usar ainda hoje</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto px-4">
            Você recebe acesso aos modelos pelo Canva e pode adaptar cada figurinha à identidade da campanha.
          </p>
          <ModulesCarousel />
        </div>
      </section>

      {/* Bonuses */}
      <section className="section-pad bg-background-soft py-[64px] md:py-[80px] lg:py-[100px]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-semibold" style={{ fontSize: "24px", lineHeight: "1.2" }}>Leve a Oferta Completa e desbloqueie mais 3 materiais para sua campanha</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {bonuses.map((b) => (
              <div key={b.title} className="rounded-[10px] bg-card p-6 flex flex-col items-start text-left">
                {b.img === IMG.bonus1 ? (
                  <img src={bonus1Img.url} alt={b.title} loading="lazy" decoding="async" width={320} height={320} className="w-full max-w-xs aspect-square mx-auto rounded-[10px] object-cover" />
                ) : b.img === IMG.bonus2 ? (
                  <img src={bonus2Img.url} alt={b.title} loading="lazy" decoding="async" width={320} height={320} className="w-full max-w-xs aspect-square mx-auto rounded-[10px] object-cover" />
                ) : b.img === IMG.bonus3 ? (
                  <img src={bonus3Img.url} alt={b.title} loading="lazy" decoding="async" width={320} height={320} className="w-full max-w-xs aspect-square mx-auto rounded-[10px] object-cover" />
                ) : (
                  <ImagePlaceholder label={`${b.tag} 320×320`} className="w-full max-w-xs aspect-square mx-auto" />
                )}
                <div className="mt-4 text-sm font-semibold highlight">{b.tag}</div>
                <h3 className="mt-2 text-xl md:text-3xl font-semibold">{b.title}</h3>
                <p className="mt-3 text-muted-foreground" style={{ fontSize: "16px", lineHeight: "24px" }}>{b.desc}</p>
                <div className="mt-4 text-sm font-semibold">Valor: <span className="line-through decoration-2" style={{ color: "var(--destructive)", textDecorationColor: "var(--destructive)" }}>{b.value}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="oferta" className="section-pad py-[64px] md:py-[80px] lg:py-[100px]">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-semibold" style={{ fontSize: "24px", lineHeight: "1.2" }}>Escolha como você quer começar</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-[14px] border border-border bg-white p-8 flex flex-col items-start text-left shadow-sm">
              <h3 className="text-2xl font-bold w-full text-center">Oferta Simples</h3>
              <p className="mt-4 font-semibold w-full text-center">Pack de Figurinhas Eleitoral</p>
              <ul className="mt-2 divide-y divide-border text-muted-foreground w-full">
                <li className="flex items-center gap-2 py-2"><span>✅</span> <span>50 figurinhas eleitorais</span></li>
                <li className="flex items-center gap-2 py-2"><span>✅</span> <span>Modelos 100% editáveis</span></li>
                <li className="flex items-center gap-2 py-2"><span>✅</span> <span>Edição pelo Canva gratuito</span></li>
              </ul>
              <div className="mt-6 w-full text-center">
                <div className="text-sm line-through decoration-2" style={{ textDecorationColor: "var(--price-strike)" }}>De R$ 29,90</div>
                <div className="text-sm font-bold">Hoje por</div>
                <div className="whitespace-nowrap">
                  <span className="text-4xl font-bold text-primary">R$ 9,90</span>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">Pagamento único.</div>
              </div>
              <button
                type="button"
                onClick={() => setShowUpsell(true)}
                className="btn-simple mt-6 inline-flex items-center justify-center uppercase tracking-wider w-full"
              >
                OFERTA SIMPLES
              </button>
            </div>

            <div className="relative">
              <span className="badge-featured absolute -top-4 left-1/2 z-10 -translate-x-1/2 px-6 py-2 text-xs font-bold uppercase tracking-wider">
                MAIS VENDIDO
              </span>
              <div className="offer-featured p-8 flex flex-col items-start text-left">
                <h3 className="text-2xl font-bold w-full text-center">Oferta Completa</h3>
                <p className="mt-4 font-semibold w-full text-center">Tudo da Oferta Simples + os materiais extras</p>
                <ul className="mt-2 divide-y divide-border text-muted-foreground w-full">
                  <li className="flex items-center gap-2 py-2"><span>✅</span> <span>50 figurinhas eleitorais</span></li>
                  <li className="flex items-center gap-2 py-2"><span>✅</span> <span>Modelos 100% editáveis</span></li>
                  <li className="flex items-center gap-2 py-2"><span>✅</span> <span>Canva gratuito</span></li>
                  <li className="flex items-center gap-2 py-2"><span>✅</span> <span>Acesso vitalício</span></li>
                  <li className="flex items-center gap-2 py-2"><span>🎁</span> <span>Bônus 01&nbsp;<span className="text-xs line-through" style={{ textDecorationColor: "var(--price-strike)" }}>(R$ 9,90)</span></span></li>
                  <li className="flex items-center gap-2 py-2"><span>🎁</span> <span>Bônus 02&nbsp;<span className="text-xs line-through" style={{ textDecorationColor: "var(--price-strike)" }}>(R$ 9,90)</span></span></li>
                  <li className="flex items-center gap-2 py-2"><span>🎁</span> <span>Bônus 03&nbsp;<span className="text-xs line-through" style={{ textDecorationColor: "var(--price-strike)" }}>(R$ 19,90)</span></span></li>
                  <li className="flex items-center gap-2 py-2"><span>✅</span> <span>Atualizações</span></li>
                  <li className="flex items-center gap-2 py-2"><span>✅</span> <span>Suporte pelo WhatsApp</span></li>
                </ul>
                <div className="mt-6 w-full text-center">
                  <div className="text-sm line-through decoration-2" style={{ textDecorationColor: "var(--price-strike)" }}>Valor percebido: R$ 69,60</div>
                  <div className="text-sm font-bold">Hoje por apenas</div>
                  <div className="whitespace-nowrap">
                    <span className="text-4xl font-bold text-primary">R$ 19,90</span>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">Pagamento único.</div>
                </div>
                <a
                  href="https://pay.cakto.com.br/fj79seh_973428"
                  className="btn-primary mt-6 inline-flex items-center justify-center uppercase tracking-wider cta-fx w-full"
                >
                  OFERTA COMPLETA
                </a>
                <p className="mt-3 w-full text-center text-xs text-muted-foreground">Receba o acesso após a confirmação da compra.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-background-soft section-pad py-[64px] md:py-[80px] lg:py-[100px]">
        <div className="mx-auto max-w-3xl text-center">
          <img
            src={guaranteeBadge.url}
            alt="Selo 7 dias de garantia"
            loading="lazy"
            decoding="async"
            width={144}
            height={144}
            className="mx-auto h-32 w-32 md:h-36 md:w-36 object-contain"
          />
          <h2 className="mt-6 font-semibold" style={{ fontSize: "24px", lineHeight: "1.2" }}>Você tem 7 dias para acessar e avaliar</h2>
          <p className="mt-2 text-muted-foreground" style={{ fontSize: "16px", lineHeight: "24px" }}>
            Sua compra está protegida por uma garantia de 7 dias. Acesse o material, conheça os modelos e veja se o Pack de Figurinhas Eleitoral atende ao que foi apresentado nesta página. Caso decida que o produto não é para você dentro do prazo da garantia, solicite o reembolso conforme as condições aplicáveis à compra.
          </p>
          <p className="mt-4 text-sm font-bold uppercase tracking-wider highlight">Risco reduzido para você começar hoje</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad py-[64px] md:py-[80px] lg:py-[100px]">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-semibold" style={{ fontSize: "24px", lineHeight: "1.2" }}>Perguntas frequentes</h2>
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <Accordion key={f.q} title={f.q}>
                <p className="text-muted-foreground" style={{ fontSize: "16px", lineHeight: "24px" }}>{f.a}</p>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      {/* Fade transition to footer */}
      <div aria-hidden className="h-16 w-full" style={{ background: "linear-gradient(to bottom, transparent, #061A32)" }} />

      <footer
        className="w-full"
        style={{ backgroundColor: "#061A32", color: "rgba(255,255,255,0.72)", paddingTop: "60px", paddingBottom: "60px" }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center" style={{ fontSize: "15px", lineHeight: "1.75" }}>
          <p className="mb-5 md:mb-6">
            Copyright © 2026 | Pack de Figurinhas Eleitoral | Todos os direitos reservados.
          </p>
          <p className="mb-5 md:mb-6">
            Este site não é afiliado, administrado ou patrocinado pela Meta Platforms, Facebook, Instagram, WhatsApp ou qualquer uma de suas empresas.
          </p>
          <p>
            Os resultados apresentados são individuais e podem variar. Não garantimos resultados específicos, pois o desempenho depende da aplicação e do contexto de cada campanha.
          </p>

          <div className="mx-auto my-10 h-px w-full max-w-xl" style={{ backgroundColor: "#FFFFFF", opacity: 0.1 }} />

          <nav className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10" style={{ fontSize: "14px" }}>
            <a href="/politica-de-privacidade" className="footer-link" style={{ color: "#FFFFFF", transition: "color 0.2s" }}>Política de Privacidade</a>
            <a href="/termos-de-uso" className="footer-link" style={{ color: "#FFFFFF", transition: "color 0.2s" }}>Termos de Uso</a>
            <a href="/politica-de-reembolso" className="footer-link" style={{ color: "#FFFFFF", transition: "color 0.2s" }}>Política de Reembolso</a>
          </nav>
        </div>
        <style>{`.footer-link:hover{color:#FFFFFF !important;}`}</style>
      </footer>

      {showUpsell && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-3 sm:p-4 animate-fade-in"
          style={{ background: "var(--overlay)", backdropFilter: "blur(7px)" }}
          onClick={() => setShowUpsell(false)}
        >
          <div
            className="relative mx-auto my-auto w-[92vw] max-w-[420px] max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-[17px] bg-background text-center shadow-xl animate-scale-in"
            style={{ border: "1px solid var(--border)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowUpsell(false)}
              aria-label="Fechar"
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white transition hover:bg-black/40"
            >
              <X className="h-5 w-5" />
            </button>
            {/* Cabeçalho */}
            <div className="px-5 py-4 sm:px-6 sm:py-5 text-white" style={{ background: "var(--brand)" }}>
              <div className="text-xl sm:text-2xl font-bold tracking-wide" style={{ color: "#FFFFFF" }}>🎁 ESPERA! ANTES DE FICAR APENAS COM O PACK...</div>
              <div className="mt-1 text-[13px] sm:text-sm font-medium" style={{ color: "#FFFFFF", opacity: 0.9 }}>
                Por mais R$ 10, leve a Oferta Completa
              </div>
            </div>

            <div className="px-[18px] pt-5 pb-7 sm:px-6 sm:py-6 text-left">
              {/* Texto */}
              <p className="text-[14px] sm:text-[15px] leading-[1.6]" style={{ color: "var(--text)" }}>
                Você já vai levar as <strong>50 figurinhas</strong>.
              </p>
              <p className="mt-2.5 text-[14px] sm:text-[15px] leading-[1.6]" style={{ color: "var(--text)" }}>
                <strong>Mas adicionando apenas R$ 10, você também desbloqueia os 3 bônus, recebe as atualizações liberadas durante o período eleitoral e ainda conta com suporte pelo WhatsApp para acesso e edição.</strong>
              </p>
              <p className="mt-2.5 text-[14px] sm:text-[15px] leading-[1.6]" style={{ color: "var(--text)" }}>
                Oferta Completa com tudo incluído:
              </p>

              {/* Checklist */}
              <ul className="mt-4 space-y-2 rounded-[12px] bg-white p-3 sm:p-4 text-[15px] sm:text-[14px]" style={{ border: "1px solid var(--border)", color: "var(--text)" }}>
                <li className="flex items-start gap-2"><span style={{ color: "#10A94B" }}>✔</span><span>50 figurinhas editáveis</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#10A94B" }}>✔</span><span>Acesso vitalício ao material adquirido</span></li>
                <li className="flex items-start gap-2"><span>🎁</span><span>Pack de Frases Eleitorais</span></li>
                <li className="flex items-start gap-2"><span>🎁</span><span>Guia de Personalização Rápida</span></li>
                <li className="flex items-start gap-2"><span>🎁</span><span>Novas Figurinhas Eleitorais</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#10A94B" }}>✔</span><span>Atualizações durante o período eleitoral</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#10A94B" }}>✔</span><span>Suporte pelo WhatsApp</span></li>
              </ul>

              {/* Selo + Preço */}
              <div className="mt-5 sm:mt-6 flex flex-col items-center">
                <span
                  className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                  style={{ background: "#F5B82E", color: "#061A32" }}
                >
                  Upgrade Especial
                </span>
                <div className="mt-3 text-xs line-through" style={{ color: "#8A96A6" }}>De R$ 19,90</div>
                <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>Upgrade especial</div>
                <div className="mt-1 text-[44px] sm:text-5xl font-extrabold leading-none" style={{ color: "var(--brand)" }}>
                  R$ 14,90
                </div>
              </div>

              {/* Botões */}
              <div className="mt-5 sm:mt-6 flex flex-col gap-2.5 sm:gap-3">
                <a
                  href="https://pay.cakto.com.br/zftygb8"
                  className="btn-primary w-full inline-flex items-center justify-center uppercase tracking-wider"
                >
                  SIM, QUERO APROVEITAR O UPGRADE
                </a>
                <a
                  href="https://pay.cakto.com.br/nvc9952"
                  className="w-full inline-flex items-center justify-center rounded-[16px] bg-white px-6 py-3 text-sm font-medium transition hover:bg-[#F5F8FC]"
                  style={{ border: "1px solid var(--border)", color: "var(--text)" }}
                >
                  Não, quero somente a Oferta Simples
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TopBar({ className }: { className?: string }) {
  const [date, setDate] = useState<{ day: string; month: string; year: number } | null>(null);

  useEffect(() => {
    const now = new Date();
    setDate({
      day: String(now.getDate()).padStart(2, "0"),
      month: String(now.getMonth() + 1).padStart(2, "0"),
      year: now.getFullYear(),
    });
  }, []);

  if (!date) return <div className={`section-pad py-4 h-[48px] ${className || ""}`} />;

  return (
    <div className={`section-pad py-4 text-center text-xs font-semibold uppercase tracking-widest ${className || ""}`}>
      ⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE: {date.day}/{date.month}/{date.year}
    </div>
  );
}

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-[10px] border border-border bg-card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold"
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="text-xl highlight">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-5 pb-5">{children}</div>}
    </div>
  );
}

function ImagePlaceholder({ label, className }: { label?: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label || "Espaço reservado para imagem"}
      className={`bg-muted border-2 border-dashed border-border rounded-[10px] flex items-center justify-center text-xs sm:text-sm text-muted-foreground text-center p-2 ${className || ""}`}
    >
      {label || "Imagem"}
    </div>
  );
}

function ModuleCard({ module: m, cover }: { module: { n: number; title: string; desc: string }; cover: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-[10px] bg-card p-6 flex flex-col items-start text-left">
      <img src={cover} alt={`Módulo ${m.n} - ${m.title}`} loading="lazy" decoding="async" width={1024} height={1024} className="w-full max-w-xs aspect-square mx-auto rounded-[10px] object-cover" />
      <div className="mt-4 text-sm font-semibold highlight">Módulo {String(m.n).padStart(2, "0")} — {moduleLabels[m.n - 1]}</div>
      <h3 className="mt-2 text-xl md:text-3xl font-semibold">{m.title}</h3>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-4 flex w-full items-center justify-between gap-4 rounded-[10px] border border-border bg-background section-pad py-2 text-sm font-semibold"
        aria-expanded={open}
      >
        <span>{open ? "Ocultar descrição" : "Clique aqui para ver descrição"}</span>
        <span className="text-lg highlight">{open ? "−" : "+"}</span>
      </button>
      <div
        className={`grid w-full transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}
      >
        <p className="overflow-hidden text-muted-foreground text-left" style={{ fontSize: "16px", lineHeight: "24px" }}>{m.desc}</p>
      </div>
    </div>
  );
}

function ModulesCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-module-card]");
    const delta = (card?.offsetWidth ?? 320) + 24;
    el.scrollBy({ left: dir * delta, behavior: "smooth" });
  };
  return (
    <div className="mt-10 relative">
      {/* Mobile: Grid (stacked) | Desktop: Scrollable Row */}
      <div
        ref={ref}
        className="grid grid-cols-1 gap-6 md:flex md:overflow-x-auto md:snap-x md:snap-mandatory md:scroll-smooth md:[scrollbar-width:none] md:[-ms-overflow-style:none] md:[&::-webkit-scrollbar]:hidden md:-mx-4 md:sm:-mx-6 md:lg:-mx-8 md:px-4 md:sm:px-6 md:lg:px-8"
      >
        {modules.map((m, i) => (
          <div
            key={m.n}
            data-module-card
            className="md:snap-start md:shrink-0 w-full md:w-[360px] md:w-[380px]"
          >
            <ModuleCard module={m} cover={moduleCovers[i]} />
          </div>
        ))}
      </div>

      {/* Navigation Buttons (Desktop Only) */}
      <button
        type="button"
        aria-label="Anterior"
        onClick={() => scroll(-1)}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Próximo"
        onClick={() => scroll(1)}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
