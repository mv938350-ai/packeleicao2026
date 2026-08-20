import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import mod01 from "@/assets/mod-01.jpg";
import mod02 from "@/assets/mod-02.jpg";
import mod03 from "@/assets/mod-03.jpg";
import mod04 from "@/assets/mod-04.jpg";
import mod05 from "@/assets/mod-05.jpg";
import mod06 from "@/assets/mod-06.jpg";
import depo1 from "@/assets/depo-1.png.asset.json";
import depo2 from "@/assets/depo-2.png.asset.json";
import depo3 from "@/assets/depo-3.png.asset.json";
import depo4 from "@/assets/depo-4.png.asset.json";
import depo5 from "@/assets/depo-5.png.asset.json";
import depo6 from "@/assets/depo-6.png.asset.json";
import depo7 from "@/assets/depo-7.png.asset.json";
import depo8 from "@/assets/depo-8.png.asset.json";
import bonus1Img from "@/assets/bonus-01.png.asset.json";
import bonus2Img from "@/assets/bonus-02.png.asset.json";
import bonus3Img from "@/assets/bonus-03.png.asset.json";
import guaranteeBadge from "@/assets/7-dias-garantia.png.asset.json";
import womanMakingSachets from "@/assets/woman-making-sachets.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Método Trouxinhas Aromáticas Passo a Passo" },
      {
        name: "description",
        content:
          "Do absoluto zero às suas primeiras Trouxinhas Aromáticas prontas para vender e faturar seus primeiros R$300,00.",
      },
      { property: "og:title", content: "Método Trouxinhas Aromáticas Passo a Passo" },
      {
        property: "og:description",
        content:
          "Do absoluto zero às suas primeiras Trouxinhas Aromáticas prontas para vender e faturar seus primeiros R$300,00.",
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
  { n: 1, title: "O Segredo da Base Perfeita", desc: "Aprenda a criar a base ideal para que sua trouxinha tenha o caimento perfeito e encante logo no primeiro olhar." },
  { n: 2, title: "Aromas que Vendem Sozinhos", desc: "Descubra a combinação exata de fragrâncias que grudam na memória dos seus clientes e fazem eles quererem mais." },
  { n: 3, title: "Acabamentos de Luxo", desc: "O passo a passo para fazer laços e finalizações que transformam materiais simples em peças de alto valor percebido." },
  { n: 4, title: "Produção em Escala", desc: "Como organizar seu tempo e materiais para produzir dezenas de trouxinhas em poucas horas, sem perder a qualidade." },
  { n: 5, title: "Onde Encontrar Materiais Baratos", desc: "Minha lista pessoal de onde comprar tecidos, fitas e essências pelo menor preço para garantir seu lucro." },
  { n: 6, title: "Sua Primeira Venda em 48 Horas", desc: "Um plano de ação simples para você oferecer suas trouxinhas e fazer suas primeiras vendas assim que terminar o curso." },
];

const moduleCovers = [mod01, mod02, mod03, mod04, mod05, mod06];

const bonuses = [
  { img: IMG.bonus1, tag: "🎁 Bônus 01 - Incluso na oferta completa", title: "Calculadora do Preço Certo", desc: "Nunca mais tenha dúvida de quanto cobrar. Coloque o custo do material e ela te dá o preço final com lucro.", value: "R$ 47,00" },
  { img: IMG.bonus2, tag: "🎁 Bônus 02 - Incluso na oferta completa", title: "Catálogo Pronto Para Vender", desc: "Fotos profissionais e modelos de textos para você postar e já começar a receber encomendas.", value: "R$ 67,00" },
  { img: IMG.bonus3, tag: "🎁 Bônus 03 - Incluso na oferta completa", title: "Primeiros Clientes no WhatsApp", desc: "O que falar e como oferecer para pessoas próximas sem parecer que está 'empurrando' nada.", value: "R$ 37,00" },
];

const faqs = [
  { q: "Preciso ter máquina de costura?", a: "Não! As trouxinhas são feitas totalmente à mão com uma técnica simples de montagem." },
  { q: "Em quanto tempo consigo vender?", a: "Muitas alunas conseguem produzir e vender suas primeiras peças nos primeiros 2 a 3 dias seguindo o método." },
  { q: "Os materiais são caros?", a: "Pelo contrário. Você usa retalhos de tecidos e materiais que encontra em qualquer armarinho por centavos." },
  { q: "Como recebo o curso?", a: "O acesso é enviado para o seu e-mail imediatamente após a confirmação do pagamento." },
  { q: "O acesso é vitalício?", a: "Sim! Você paga uma única vez e tem acesso para sempre, inclusive às futuras atualizações." },
];

const testimonials = [depo1.url, depo2.url, depo3.url, depo4.url, depo5.url, depo6.url, depo7.url, depo8.url];

function LandingPage() {
  const [showUpsell, setShowUpsell] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">

      <TopBar className="bg-[#4A2E1F] text-[#FBF7F2]" />


      {/* Hero */}
      <section className="section-pad py-[64px] md:py-[80px] lg:py-[100px]">
        <div className="mx-auto max-w-5xl flex flex-col items-center text-center">
          <div className="w-full flex justify-center items-center bg-transparent overflow-visible">
            <img
              id="hero-lcp"
              src={womanMakingSachets.url}
              alt="Mulher confeccionando Trouxinhas Aromáticas"
              width="450"
              height="600"
              loading="eager"
              decoding="async"
              {...({ fetchpriority: "high" } as Record<string, string>)}
              className="block w-full max-w-[450px] aspect-[3/4] rounded-[18px] bg-transparent object-cover object-center shadow-lg"
            />
          </div>
          <h1 className="mt-8 font-bold max-w-3xl text-balance px-4 sm:px-0" style={{ fontSize: "28px", lineHeight: "1.2", color: "var(--text)" }}>
            Fature seus primeiros <span className="highlight">R$300,00</span> criando Trouxinhas Aromáticas, mesmo que você{" "}
            <span className="highlight">Nunca Tenha Feito Artesanato.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground text-[15px] leading-[1.6] sm:text-[17px] md:text-lg text-pretty px-4 sm:px-0">
            Descubra como criar trouxinhas perfumadas que parecem produtos de luxo e comece a ter sua própria renda, sem precisar pedir dinheiro ao marido.
          </p>
          <ul className="mt-4 flex flex-col items-start gap-2 text-left text-muted-foreground text-[15px] leading-[1.5] sm:text-[16px] px-4 sm:px-0 sm:mx-auto">
            <li>✅ Sem precisar de máquina de costura</li>
            <li>✅ Materiais baratos e fáceis</li>
            <li>✅ Trabalhe no conforto da sua casa</li>
            <li>✅ Ideal para quem busca uma renda</li>
          </ul>
          <a
            href="#oferta"
            className="btn-primary mt-8 inline-flex items-center justify-center uppercase tracking-wider cta-fx"
          >
            QUERO COMEÇAR AGORA
          </a>
          <p className="mt-4 text-xs text-muted-foreground">Acesso imediato • Garantia de 7 dias</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background-soft section-pad py-[64px] md:py-[80px] lg:py-[100px] overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-semibold" style={{ fontSize: "24px", lineHeight: "1.2" }}>Elas começaram. Fizeram suas primeiras trouxinhas.<br />E estes são alguns dos resultados.</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto px-4">
            Você não precisa ser artesã profissional para começar. Veja como pessoas comuns estão transformando tecidos e essências em uma nova fonte de renda.
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
              A próxima pode ser a sua.
            </p>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="section-pad py-[64px] md:py-[80px] lg:py-[100px]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-semibold" style={{ fontSize: "24px", lineHeight: "1.2" }}>Do absoluto zero às suas primeiras<br />Trouxinhas Aromáticas prontas para vender</h2>
          <ModulesCarousel />
        </div>
      </section>

      {/* Bonuses */}
      <section className="section-pad bg-background-soft py-[64px] md:py-[80px] lg:py-[100px]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-semibold" style={{ fontSize: "24px", lineHeight: "1.2" }}>Fazer é só o começo.<br />Agora você precisa saber vender.</h2>
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
                <div className="mt-4 text-sm font-semibold">Valor: <span className="line-through decoration-2" style={{ color: "var(--price-strike)", textDecorationColor: "var(--price-strike)" }}>{b.value}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="oferta" className="section-pad py-[64px] md:py-[80px] lg:py-[100px]">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-semibold" style={{ fontSize: "24px", lineHeight: "1.2" }}>Escolha como você quer começar.</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-[14px] border border-border bg-[#FFFDFC] p-8 flex flex-col items-start text-left shadow-sm">
              <h3 className="text-2xl font-bold w-full text-center">Oferta Simples</h3>
              <p className="mt-4 font-semibold w-full text-center">Para quem quer apenas aprender a fazer:</p>
              <ul className="mt-2 divide-y divide-border text-muted-foreground w-full">
                <li className="flex items-center gap-2 py-2"><span>✅</span> <span>Curso Completo</span></li>
                <li className="flex items-center gap-2 py-2"><span>✅</span> <span>Acesso Vitalício + atualizações</span></li>
              </ul>
              <div className="mt-6 w-full text-center">
                <div className="text-sm font-bold">Apenas</div>
                <div className="whitespace-nowrap">
                  <span className="text-4xl font-bold text-primary">R$ 9,90</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowUpsell(true)}
                className="btn-secondary mt-6 inline-flex items-center justify-center uppercase tracking-wider w-full"
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
                <p className="mt-4 font-semibold w-full text-center">Para quem quer fazer para vender:</p>
                <ul className="mt-2 divide-y divide-border text-muted-foreground w-full">
                  <li className="flex items-center gap-2 py-2"><span>✅</span> <span>Curso Completo</span></li>
                  <li className="flex items-center gap-2 py-2"><span>✅</span> <span>Acesso Vitalício + atualizações</span></li>
                  <li className="flex items-center gap-2 py-2"><span>🎁</span> <span>Bônus 01 <span className="text-xs line-through" style={{ textDecorationColor: "var(--price-strike)" }}>(R$ 47,00)</span></span></li>
                  <li className="flex items-center gap-2 py-2"><span>🎁</span> <span>Bônus 02 <span className="text-xs line-through" style={{ textDecorationColor: "var(--price-strike)" }}>(R$ 67,00)</span></span></li>
                  <li className="flex items-center gap-2 py-2"><span>🎁</span> <span>Bônus 03 <span className="text-xs line-through" style={{ textDecorationColor: "var(--price-strike)" }}>(R$ 37,00)</span></span></li>
                </ul>
                <div className="mt-6 w-full text-center">
                  <div className="text-sm line-through decoration-2" style={{ textDecorationColor: "var(--price-strike)" }}>De R$ 170,90</div>
                  <div className="text-sm font-bold">Hoje apenas</div>
                  <div className="whitespace-nowrap">
                    <span className="text-4xl font-bold text-primary">R$ 19,90</span>
                  </div>
                </div>
                <a
                  href="https://pay.cakto.com.br/fj79seh_973428"
                  className="btn-primary mt-6 inline-flex items-center justify-center uppercase tracking-wider cta-fx w-full"
                >
                  OFERTA COMPLETA
                </a>
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
          <h2 className="mt-6 font-semibold" style={{ fontSize: "24px", lineHeight: "1.2" }}>Garantia Incondicional de 7 Dias.</h2>
          <p className="mt-2 text-muted-foreground" style={{ fontSize: "16px", lineHeight: "24px" }}>
            Se em até 7 dias você assistir às aulas do Método Trouxinhas Aromáticas Passo a Passo e achar que ele não é para você, eu devolvo 100% do seu dinheiro. Sem perguntas e sem letras miúdas. O risco é todo meu.
          </p>
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
      <div aria-hidden className="h-16 w-full" style={{ background: "linear-gradient(to bottom, transparent, #1A1A1A)" }} />

      <footer
        className="w-full"
        style={{ backgroundColor: "#1A1A1A", color: "#B8B8B8", paddingTop: "60px", paddingBottom: "60px" }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center" style={{ fontSize: "15px", lineHeight: "1.75" }}>
          <p className="mb-5 md:mb-6">
            Copyright © 2026 | Método Trouxinhas Aromáticas Passo a Passo | Todos os direitos reservados.
          </p>
          <p className="mb-5 md:mb-6">
            Este site não é afiliado, administrado ou patrocinado pela Meta Platforms, Facebook, Instagram, WhatsApp ou qualquer uma de suas empresas.
          </p>
          <p>
            Os resultados apresentados são individuais e podem variar de pessoa para pessoa. Não garantimos resultados específicos, pois o sucesso depende da dedicação, prática e esforço de cada aluno.
          </p>

          <div className="mx-auto my-10 h-px w-full max-w-xl" style={{ backgroundColor: "#FFFFFF", opacity: 0.1 }} />

          <nav className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10" style={{ fontSize: "14px" }}>
            <a href="/politica-de-privacidade" className="footer-link" style={{ color: "var(--gold)", transition: "color 0.2s" }}>Política de Privacidade</a>
            <a href="/termos-de-uso" className="footer-link" style={{ color: "var(--gold)", transition: "color 0.2s" }}>Termos de Uso</a>
            <a href="/politica-de-reembolso" className="footer-link" style={{ color: "var(--gold)", transition: "color 0.2s" }}>Política de Reembolso</a>
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
            style={{ border: "1px solid var(--gold)" }}
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
              <div className="text-xl sm:text-2xl font-bold tracking-wide" style={{ color: "#4A2E1F" }}>🎁 ESPERE!</div>
              <div className="mt-1 text-[13px] sm:text-sm font-medium" style={{ color: "#4A2E1F", opacity: 0.9 }}>
                Você desbloqueou uma oferta exclusiva.
              </div>
            </div>

            <div className="px-[18px] pt-5 pb-7 sm:px-6 sm:py-6 text-left">
              {/* Texto */}
              <p className="text-[14px] sm:text-[15px] leading-[1.6]" style={{ color: "#4A2F26" }}>
                Você escolheu o <strong>Plano Básico</strong>.
                <br />
                Antes de finalizar, me responda uma coisa:
              </p>
              <p className="mt-2.5 text-[14px] sm:text-[15px] leading-[1.6]" style={{ color: "#4A2F26" }}>
                <strong>Depois que suas primeiras peças estiverem prontas, você vai saber quanto cobrar para ter lucro e onde encontrar os primeiros clientes?</strong>
              </p>
              <p className="mt-2.5 text-[14px] sm:text-[15px] leading-[1.6]" style={{ color: "#4A2F26" }}>
                Por apenas R$ 5,00 a mais, você garante o Kit Completo Para Vender.
              </p>

              {/* Checklist */}
              <ul className="mt-4 space-y-2 rounded-[12px] bg-white p-3 sm:p-4 text-[15px] sm:text-[14px]" style={{ border: "1px solid #EFE5DB", color: "#4A2F26" }}>
                <li className="flex items-start gap-2"><span style={{ color: "#16a34a" }}>✔</span><span>Curso Completo</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#16a34a" }}>✔</span><span>Acesso Vitalício + atualizações</span></li>
                <li className="flex items-start gap-2"><span>🎁</span><span>Bônus 01</span></li>
                <li className="flex items-start gap-2"><span>🎁</span><span>Bônus 02</span></li>
                <li className="flex items-start gap-2"><span>🎁</span><span>Bônus 03</span></li>
              </ul>

              {/* Selo + Preço */}
              <div className="mt-5 sm:mt-6 flex flex-col items-center">
                <span
                  className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white"
                  style={{ background: "#D6A54C" }}
                >
                  Oferta Exclusiva
                </span>
                <div className="mt-3 text-xs line-through" style={{ color: "#A0857A" }}>De R$170,90</div>
                <div className="text-sm font-semibold" style={{ color: "#4A2F26" }}>Hoje apenas</div>
                <div className="mt-1 text-[44px] sm:text-5xl font-extrabold leading-none" style={{ color: "var(--brand)" }}>
                  R$14,90
                </div>
              </div>

              {/* Botões */}
              <div className="mt-5 sm:mt-6 flex flex-col gap-2.5 sm:gap-3">
                <a
                  href="https://pay.cakto.com.br/zftygb8"
                  className="btn-primary w-full inline-flex items-center justify-center uppercase tracking-wider"
                >
                  SIM! QUERO DESBLOQUEAR TUDO
                </a>
                <a
                  href="https://pay.cakto.com.br/nvc9952"
                  className="w-full inline-flex items-center justify-center rounded-[16px] bg-white px-6 py-3 text-sm font-medium transition hover:bg-[#F7EFE7]"
                  style={{ border: "1px solid #D8C7BA", color: "#5E4A42" }}
                >
                  Continuar apenas com o Plano de R$ 9,90
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
      <div className="mt-4 text-sm font-semibold highlight">Módulo {String(m.n).padStart(2, "0")}</div>
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
