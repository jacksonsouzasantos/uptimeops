import { useState } from "react";
import {
  ShieldCheck,
  Check,
  Menu,
  X,
  ArrowUpRight,
  MessageCircle,
  Instagram,
  Mail,
  Server,
  Database,
  Lock,
  Clock,
  CircleAlert,
} from "lucide-react";

const navigation = [
  { label: "O Risco", href: "#risco" },
  { label: "Como Ajudamos", href: "#solucao" },
  { label: "Especialista", href: "#especialista" },
];

const mainBenefits = [
  {
    icon: Lock,
    title: "Proteção Anti-Ransomware",
    text: "Cópias de segurança imutáveis que nem hackers conseguem deletar ou criptografar.",
  },
  {
    icon: Clock,
    title: "Recuperação Rápida (DR)",
    text: "Minimiza o tempo de paralisação da sua empresa com planos de restauração testados.",
  },
  {
    icon: Database,
    title: "Monitoramento Ativo",
    text: "Verificação diária dos backups para garantir que os arquivos realmente funcionam.",
  },
];

const supportedTechs = [
  "Microsoft 365",
  "VMware / Hyper-V",
  "Linux / Windows Server",
  "Storages NAS / SAN",
  "Nuvem AWS / Google cloud",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formNotice, setFormNotice] = useState("");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormNotice('Solicitação enviada com sucesso! Entraremos em contato em breve.');
        e.currentTarget.reset();
      } else {
        setFormNotice('Ocorreu um erro. Tente novamente.');
      }
    } catch (error) {
      setFormNotice('Erro ao conectar ao servidor.');
    }
  };

  return (
    <div className="site-shell">
      {/* Topbar / Navegação */}
      <header className="topbar">
        <a className="brand" href="#inicio">
          <span className="brand-mark-wrap">
            <img src="/upTime Logo cybersecurity.png" alt="Logotipo UptimeOps" className="brand-mark" loading="lazy" />
          </span>
          <span className="brand-lockup">
            <span className="brand-name">UptimeOps<span className="brand-dot">.</span></span>
            <span className="brand-credential">DR / BACKUP</span>
          </span>
        </a>

        <nav className="desktop-nav">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="topbar-cta" href="#contato">
          Diagnóstico Gratuito <ArrowUpRight size={15} />
        </a>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {menuOpen && (
          <nav className="mobile-nav">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
            <a href="#contato" onClick={() => setMenuOpen(false)}>Solicitar Diagnóstico</a>
          </nav>
        )}
      </header>

      <main>
        {/* Hero Section Simplificado */}
        <section className="hero" id="inicio">
          <div className="content-frame hero-main-wrapper">
            <div className="hero-left-column">
              <div className="status-pip">
                <span className="status-dot" /> CONTINUIDADE PARA PMEs
              </div>
              
              <h1>
                Backup Corporativo e Proteção contra Paradas para a sua empresa.
              </h1>

              <p className="hero-lead">
                Garanta a segurança dos seus servidores, nuvem e arquivos vitais com backup imutável, restauração rápida e monitoramento preventivo.
              </p>

              <div className="hero-actions">
                <a className="button-primary" href="#contato">
                  Avaliar Meu Ambiente <ArrowUpRight size={18} />
                </a>
                <a className="whatsapp-btn-hero" href="https://wa.me/5583998766447" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} /> Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Barra de Tecnologias */}
        <section className="tech-bar-section">
          <div className="content-frame">
            <p className="tech-bar-title">Compatível com a infraestrutura da sua empresa:</p>
            <div className="tech-tags-grid">
              {supportedTechs.map((tech) => (
                <span key={tech} className="tech-tag">
                  <Check size={14} className="tech-tag-icon" /> {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* O Risco (Dores do PME) */}
        <section className="section-shell" id="risco">
          <div className="content-frame">
            <div className="section-header">
              <span className="section-index">[ O RISCO ]</span>
              <h2>O seu backup realmente funciona quando você precisa?</h2>
            </div>
            <div className="risk-grid-simple">
              <div className="risk-card">
                <CircleAlert className="risk-icon" size={24} />
                <h3>Ataques de Ransomware</h3>
                <p>Hackers hoje atacam primeiro os backups. Sem imutabilidade, seus arquivos de segurança também são criptografados.</p>
              </div>
              <div className="risk-card">
                <CircleAlert className="risk-icon" size={24} />
                <h3>Backup "Cego" sem Testes</h3>
                <p>Um backup concluído com sucesso não garante que os dados possam ser restaurados sem erros em uma emergência.</p>
              </div>
              <div className="risk-card">
                <CircleAlert className="risk-icon" size={24} />
                <h3>Prejuízo por Hora Parada</h3>
                <p>Ficar horas ou dias sem sistema paralisa vendas, faturamento e atendimento, destruindo a reputação do seu negócio.</p>
              </div>
            </div>
          </div>
        </section>

        {/* A Solução / Benefícios */}
        <section className="section-shell bg-mineral" id="solucao">
          <div className="content-frame">
            <div className="section-header">
              <span className="section-index">[ A SOLUÇÃO ]</span>
              <h2>Como a UptimeOps protege o seu negócio</h2>
            </div>
            <div className="benefits-grid-simple">
              {mainBenefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div className="benefit-card-simple" key={idx}>
                    <Icon size={28} className="benefit-icon" />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Especialista */}
        <section className="section-shell" id="especialista">
          <div className="content-frame expert-layout">
            <div className="expert-portrait-wrapper">
              <img src="/Analista de Backup especialista.png" alt="Especialista em TI UptimeOps" className="expert-portrait-img" loading="lazy" />
            </div>
            <div className="expert-copy">
              <span className="section-index">[ ESPECIALISTA DIRETO ]</span>
              <h2>Atendimento técnico humanizado e sem intermediários.</h2>
              <p>Tratamos o seu ambiente de TI de forma personalizada. Sem suporte engessado de grandes operadoras — você fala diretamente com quem resolve e monitora a sua infraestrutura.</p>
              <div className="expert-callout">
                <ShieldCheck size={20} />
                <span>Gestão preventiva com foco em segurança de dados e alta disponibilidade.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Form/Contato */}
        <section className="section-shell bg-dark" id="contato">
          <div className="content-frame contact-layout">
            <div className="contact-intro">
              <span className="status-pip"><span className="status-dot" /> PRÓXIMO PASSO</span>
              <h2>Solicite um Diagnóstico Inicial do seu Backup</h2>
              <p>Preencha os campos abaixo para entendermos a criticidade do seu ambiente e indicarmos a melhor solução.</p>
            </div>
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-row">
                <label>Nome<input name="nome" required placeholder="Seu nome" /></label>
                <label>Empresa<input name="empresa" required placeholder="Nome da sua empresa" /></label>
              </div>
              <div className="form-row">
                <label>E-mail corporativo<input name="email" type="email" required placeholder="seuemail@empresa.com.br" /></label>
                <label>O que precisa proteger hoje?
                  <select name="prioridade" required defaultValue="">
                    <option value="" disabled>Selecione uma opção</option>
                    <option>Backup Anti-Ransomware</option>
                    <option>Servidores (VMware / Windows / Linux)</option>
                    <option>Microsoft 365 e Nuvem</option>
                    <option>Diagnóstico / Avaliação de Backup Atual</option>
                  </select>
                </label>
              </div>
              <label>Conte brevemente sobre o seu ambiente<textarea name="contexto" rows={3} placeholder="Ex: Quantidade de servidores, sistemas críticos ou principais preocupações..." /></label>
              <button className="form-submit" type="submit">Solicitar Diagnóstico <ArrowUpRight size={19} /></button>
              {formNotice && <p className="form-notice">{formNotice}</p>}
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="content-frame footer-inner">
          <div className="brand footer-brand">
            <span className="brand-name">UptimeOps<span className="brand-dot">.</span></span>
          </div>
          <p>© {new Date().getFullYear()} UptimeOps — Backup & Disaster Recovery para PMEs.</p>
          <div className="social-links">
            <a className="social-link" href="https://wa.me/5583998766447" target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> WhatsApp</a>
            <a className="social-link" href="http://instagram.com/uptimeopsinfra/" target="_blank" rel="noopener noreferrer"><Instagram size={18} /> Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}