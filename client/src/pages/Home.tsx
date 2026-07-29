/**
 * Estilo: Prevenção de Precisão — editorial técnico, hierarquia assimétrica,
 * azul-marinho, branco mineral e verde de status para comunicar continuidade.
 */
import { useState } from "react";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleAlert,
  Clock3,
  Database,
  Gauge,
  Mail,
  Menu,
  Network,
  Radio,
  Server,
  ShieldCheck,
  X,
} from "lucide-react";
import { MessageCircle } from "lucide-react";

const navigation = [
  { label: "O risco", href: "#risco" },
  { label: "A solução", href: "#solucao" },
  { label: "Método", href: "#metodo" },
];

const risks = [
  {
    index: "01",
    title: "O backup existe, mas ninguém sabe se ele funciona.",
    text: "Sem validação recorrente, uma rotina concluída pode esconder arquivos corrompidos, políticas incompletas ou uma cópia impossível de restaurar.",
  },
  {
    index: "02",
    title: "A falha é descoberta quando a operação já parou.",
    text: "Quando alertas não chegam a alguém responsável, minutos de indisponibilidade se transformam em impacto financeiro, operacional e reputacional.",
  },
  {
    index: "03",
    title: "A recuperação depende de memória, não de um plano testado.",
    text: "Em um incidente real, improviso custa tempo. Sem prioridades, responsáveis e procedimentos validados, cada decisão aumenta a exposição.",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Recuperação com critério",
    text: "Planos de recuperação desenhados a partir dos seus serviços críticos, suas dependências e o tempo que sua operação suporta ficar indisponível.",
  },
  {
    icon: Radio,
    number: "02",
    title: "Falhas visíveis cedo",
    text: "Agentes de automação acompanham sinais relevantes e apontam desvios para que a equipe atue antes de uma interrupção ganhar escala.",
  },
  {
    icon: Gauge,
    number: "03",
    title: "Controle operacional contínuo",
    text: "Uma camada de acompanhamento que transforma rotinas de backup e recuperação em um processo verificável, e não em uma promessa.",
  },
  {
    icon: Network,
    number: "04",
    title: "Decisão com menos incerteza",
    text: "Visibilidade para priorizar riscos, documentar ações e conversar com diretoria e operações a partir de evidências técnicas.",
  },
];

const steps = [
  {
    no: "01",
    name: "Diagnóstico",
    label: "MAPEAR",
    text: "Identificamos ativos críticos, dependências, rotinas existentes e lacunas que podem prolongar uma parada.",
  },
  {
    no: "02",
    name: "Implementação",
    label: "ESTRUTURAR",
    text: "Definimos a arquitetura de backup, os procedimentos de recuperação, os responsáveis e os gatilhos de automação.",
  },
  {
    no: "03",
    name: "Monitoramento contínuo",
    label: "VALIDAR",
    text: "Acompanhamos sinais, exceções e testes planejados para manter a prontidão visível ao longo do tempo.",
  },
];
const supportedTechs = [
  "Microsoft 365",
  "VMware",
  "Hyper-V",
  "Linux Server",
  "Windows Server",
  "Veeam",
  "Storage NAS / SAN",
  "AWS / Azure Cloud",
];

function StatusPip({ children }: { children: React.ReactNode }) {
  return (
    <span className="status-pip">
      <span className="status-dot" />
      {children}
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formNotice, setFormNotice] = useState("");

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormNotice(
      "Formulário pronto para integração. Configure o destino com o e-mail ou CRM do especialista antes de publicar.",
    );
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar" aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="Ir ao início">
  <span className="brand-mark-wrap">
    <img 
      src="/upTime Logo cybersecurity.png" 
      alt="Logotipo da UptimeOps" 
      className="brand-mark"
      loading="lazy"
    />
  </span>
  <span className="brand-lockup">
    <span className="brand-name">UptimeOps<span className="brand-dot">.</span></span>
    <span className="brand-credential">DR / OPS</span>
  </span>
</a>

        <nav className="desktop-nav" aria-label="Seções da página">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="topbar-cta" href="#contato">
          Falar sobre o ambiente <ArrowUpRight size={15} strokeWidth={2.2} />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Menu móvel">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
            <a href="#contato" onClick={closeMenu}>Solicitar diagnóstico <ArrowUpRight size={16} /></a>
          </nav>
        )}
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-gridline hero-gridline-one" />
          <div className="hero-gridline hero-gridline-two" />
          <div className="hero-image-wrap" aria-hidden="true">
            <img src="/manus-storage/hero-dr-control-room_cb65e973.jpg" alt="" className="hero-image" />
            <div className="hero-image-overlay" />
          </div>

          <div className="hero-content content-frame">
  <div className="hero-intro-row">
    <StatusPip>PROTEÇÃO DE DADOS & CONTINUIDADE</StatusPip>
    <span className="microcopy">BACKUP / DISASTER RECOVERY / CYBERSECURITY</span>
  </div>
  
  {/* H1 reescrito para responder imediatamente O QUE VOCÊS FAZEM */}
  <h1>
    Backup Corporativo e Disaster Recovery para empresas que <em>não podem parar</em>.
  </h1>
  
  {/* Lead focado nos benefícios claros */}
  <p className="hero-lead">
    Protegemos seus servidores, máquinas virtuais e arquivos críticos contra ransomware, falhas humanas e indisponibilidade com monitoramento contínuo e recuperação rápida.
  </p>
  
  <div className="hero-actions">
    <a className="button-primary" href="#contato">
      Agendar Avaliação de Backup <ArrowDownRight size={20} />
    </a>
    <a className="text-link light-link" href="#metodo">
      Entenda o método <ArrowDownRight size={18} />
    </a>
  </div>
</div>

          <aside className="hero-status-panel" aria-label="Resumo da solução">
            <div className="panel-header">
              <span>SINAL DE CONTINUIDADE</span>
              <Activity size={16} />
            </div>
            <div className="pulse-visual" aria-hidden="true">
              <svg viewBox="0 0 384 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 34H66L82 34L94 13L111 55L128 34H186L204 34L215 20L228 48L244 34H384" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <div className="status-readout">
              <div><span>BACKUP</span><strong>VALIDÁVEL</strong></div>
              <div><span>ALERTAS</span><strong>ACIONÁVEIS</strong></div>
              <div><span>RECUPERAÇÃO</span><strong>PLANEJADA</strong></div>
            </div>
          </aside>

          <div className="hero-footer content-frame">
            <p>Contingência não é um documento arquivado. É uma capacidade que precisa ser testada, acompanhada e sustentada.</p>
            <a href="#risco" className="scroll-cue"><span>Role para diagnosticar</span><ChevronDown size={17} /></a>
          </div>
        </section>
{/* Barra de Prova Técnica e Tecnologias Atendidas */}
<section className="tech-bar-section" aria-label="Tecnologias e Ambientes Suportados">
  <div className="content-frame">
    <p className="tech-bar-title">PROTEÇÃO E BACKUP COMPATÍVEL COM O SEU AMBIENTE CORPORATIVO:</p>
    <div className="tech-tags-grid">
      {supportedTechs.map((tech) => (
        <span key={tech} className="tech-tag">
          <Check size={14} className="tech-tag-icon" /> {tech}
        </span>
      ))}
    </div>
  </div>
</section>
        <section className="risk-section section-shell" id="risco">
          <div className="system-axis" aria-hidden="true"><span>RISCO / 01</span></div>
          <div className="content-frame section-grid risk-grid">
            <div className="section-kicker-column">
              <span className="section-index">[ 01 / O RISCO ]</span>
              <h2>O problema raramente começa no momento da queda.</h2>
              <p>Ele começa quando uma rotina crítica opera sem validação, alerta e dono claramente definido.</p>
              <div className="risk-note"><CircleAlert size={18} /><span>A ausência de sinal também é um risco.</span></div>
            </div>
            <div className="risk-list">
              {risks.map((risk) => (
                <article className="risk-item" key={risk.index}>
                  <div className="risk-number">{risk.index}</div>
                  <div>
                    <h3>{risk.title}</h3>
                    <p>{risk.text}</p>
                  </div>
                  <ArrowUpRight className="risk-arrow" size={20} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="solution-section" id="solucao">
          <div className="solution-marker" aria-hidden="true">SISTEMA / 02</div>
          <div className="system-axis" aria-hidden="true"><span>SISTEMA / 02</span></div>
          <div className="content-frame solution-layout">
            <div className="solution-visual">
              <div className="diagnostic-map" role="img" aria-label="Mapa de diagnóstico operacional que conecta rotina de backup, agente de monitoramento e alerta de ação.">
                <div className="diagnostic-map-header"><span><i />VERIFICAÇÃO DE PRONTIDÃO</span><span>MAPA 02A</span></div>
                <div className="diagnostic-map-canvas">
                  <svg viewBox="0 0 520 315" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M118 77H199C221 77 224 156 250 156H314" />
                    <path d="M118 236H198C219 236 225 156 250 156H314" />
                    <path d="M382 156H420" />
                    <circle cx="250" cy="156" r="5" />
                  </svg>
                  <div className="map-node backup-node"><span>01</span><strong>ROTINA DE<br />BACKUP</strong><small>VALIDAÇÃO</small></div>
                  <div className="map-node agent-node"><span>02</span><strong>AGENTE DE<br />MONITORAMENTO</strong><small>LEITURA DE SINAL</small></div>
                  <div className="map-node alert-node"><span>03</span><strong>ALERTA E<br />AÇÃO</strong><small>RESPONSÁVEL</small></div>
                  <div className="map-junction"><i /></div>
                </div>
                <div className="diagnostic-map-footer"><span><i />SINAIS PRIORITÁRIOS</span><span>BACKUP / LATÊNCIA / DISPONIBILIDADE</span></div>
              </div>
              <div className="signal-caption"><span className="signal-line" />SINAL CRÍTICO → AÇÃO ORIENTADA</div>
            </div>
            <div className="solution-copy">
              <span className="section-index dark-index">[ 02 / A SOLUÇÃO ]</span>
              <h2>Backup, recuperação e monitoramento deixam de funcionar como peças isoladas.</h2>
              <p className="solution-lead">A solução une arquitetura de backup, plano de Disaster Recovery e agentes de automação que acompanham a saúde do ambiente e sinalizam eventos que exigem atenção.</p>
              <div className="solution-points">
                <div><Database size={18} /><p><strong>Backup com propósito de recuperação.</strong> A estratégia considera o que precisa voltar, em qual ordem e dentro de qual janela.</p></div>
                <div><Server size={18} /><p><strong>Plano que conversa com a operação.</strong> Procedimentos, responsáveis e prioridades são definidos para reduzir improviso.</p></div>
                <div><Activity size={18} /><p><strong>Automação que antecipa o silêncio.</strong> Agentes ampliam a visibilidade sobre falhas, atrasos e instabilidades relevantes.</p></div>
              </div>
              <a className="text-link dark-link" href="#contato">Mapear exposição do ambiente <ArrowDownRight size={18} /></a>
            </div>
          </div>
        </section>

        <section className="benefits-section section-shell" id="beneficios">
          <div className="system-axis dark-axis" aria-hidden="true"><span>RESULTADO / 03</span></div>
          <div className="content-frame">
            <div className="benefits-heading">
              <div>
                <span className="section-index">[ 03 / O QUE MUDA ]</span>
                <h2>Continuidade que pode ser acompanhada antes de ser necessária.</h2>
              </div>
              <p>Quando a proteção dos dados se torna uma operação visível, o time deixa de torcer para que o backup funcione e passa a administrar a prontidão.</p>
            </div>
            <div className="benefits-grid">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <article className="benefit-card" key={benefit.number}>
                    <div className="benefit-top"><span>{benefit.number}</span><Icon size={22} /></div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                    <span className="benefit-line" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="method-section" id="metodo">
          <div className="system-axis" aria-hidden="true"><span>MÉTODO / 04</span></div>
          <div className="method-topline content-frame"><span className="section-index">[ 04 / MÉTODO ]</span><span>DO RISCO MAPEADO À ROTINA VERIFICÁVEL</span></div>
          <div className="content-frame method-layout">
            <div className="method-heading">
              <h2>Uma sequência para reduzir incerteza, não apenas instalar ferramentas.</h2>
              <p>O trabalho parte do ambiente real da empresa e evolui para um modelo de continuidade que possa ser acompanhado por quem responde pela operação.</p>
              <div className="recovery-schematic" role="img" aria-label="Esquema de priorização da recuperação por níveis de criticidade.">
                <div className="schematic-header"><span><i />SEQUÊNCIA DE RECUPERAÇÃO</span><span>RTO / RPO</span></div>
                <div className="schematic-rows"><div><b>01</b><span>SERVIÇOS CRÍTICOS</span><i>RECUPERAR PRIMEIRO</i></div><div><b>02</b><span>OPERAÇÕES ESSENCIAIS</span><i>DEPENDÊNCIAS MAPEADAS</i></div><div><b>03</b><span>CAMADAS DE SUPORTE</span><i>RETORNO PLANEJADO</i></div></div>
                <div className="schematic-footer"><i />ORDEM DEFINIDA ANTES DO INCIDENTE</div>
              </div>
            </div>
            <ol className="method-list">
              {steps.map((step) => (
                <li key={step.no}>
                  <div className="step-rail"><span>{step.no}</span><i /></div>
                  <div className="step-main">
                    <span className="step-label">{step.label}</span>
                    <h3>{step.name}</h3>
                    <p>{step.text}</p>
                  </div>
                  <ArrowDownRight className="step-icon" size={21} />
                </li>
              ))}
            </ol>
          </div>
        </section>

      <section className="expert-section section-shell" id="especialista">
  <div className="system-axis" aria-hidden="true">
    <span>PESSOA / 05</span>
  </div>
  <div className="content-frame expert-layout">
  {/* Imagem vinda da pasta public/ */}
  <div className="expert-portrait-wrapper">
    <img 
      src="/Analista de Backup especialista.png" 
      alt="Fotografia profissional do especialista" 
      className="expert-portrait-img"
      loading="lazy"
    />
  </div>
    <div className="expert-copy">
      <span className="section-index">[ 05 / QUEM RESPONDE ]</span>
      <h2>Dados críticos exigem uma responsabilidade técnica que tenha nome e contexto.</h2>
      <p>Esta é uma consultoria conduzida de perto: diagnóstico do cenário, definição de prioridades e comunicação objetiva sobre o que está protegido — e o que ainda precisa de atenção.</p>
      <p>A atuação é fundamentada na aplicação rigorosa de boas práticas, continuidade de negócios e governança de dados, garantindo estabilidade e mitigação de riscos para o seu ambiente.</p>
      <div className="expert-callout">
        <Check size={18} />
        <span>Atendimento direto com especialista focado em arquitetura e mitigação de riscos.</span>
      </div>
    </div>
  </div>
</section>

        <section className="contact-section" id="contato">
          <div className="system-axis dark-axis" aria-hidden="true"><span>PRÓXIMO / 06</span></div>
          <div className="contact-background-word" aria-hidden="true">Uptime</div>
          <div className="content-frame contact-layout">
            <div className="contact-intro">
              <StatusPip>PRÓXIMO PASSO</StatusPip>
              <h2>Vamos identificar o que ainda pode interromper o seu negócio.</h2>
              <p>Conte um pouco sobre o seu ambiente. A primeira conversa serve para entender criticidade, dependências e os pontos que merecem atenção imediata.</p>
              <div className="contact-details"><Mail size={18} /><span>Use o seu canal corporativo para configurar o recebimento dos contatos.</span></div>
            </div>
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-row"><label>Nome<input name="nome" autoComplete="name" required placeholder="Como podemos chamar você?" /></label><label>Empresa<input name="empresa" autoComplete="organization" required placeholder="Nome da empresa" /></label></div>
              <label>E-mail corporativo<input name="email" type="email" autoComplete="email" required placeholder="nome@empresa.com.br" /></label>
             <label>
  O que é mais crítico hoje?
  <span className="select-wrap">
    <select name="prioridade" defaultValue="">
      <option value="" disabled>Selecione uma prioridade para o ambiente</option>
      <option>Backup Imutável / Proteção Anti-Ransomware</option>
      <option>Backup de Servidores (VMware / Hyper-V / Linux / Windows)</option>
      <option>Backup de Microsoft 365 e Nuvem</option>
      <option>Plano de Disaster Recovery (DRaaS)</option>
      <option>Auditoria / Diagnóstico de Backups Atuais</option>
    </select>
  </span>
</label>
              <label>Contexto do ambiente<textarea name="contexto" rows={3} placeholder="Ex.: sistemas críticos, volume de dados, maior preocupação ou incidente recente." /></label>
              <button className="form-submit" type="submit">Solicitar diagnóstico inicial <ArrowUpRight size={19} /></button>
              {formNotice && <p className="form-notice" role="status">{formNotice}</p>}
              <p className="form-footnote">Ao enviar, você inicia uma conversa técnica. Não há promessa automática de solução antes do diagnóstico.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-frame footer-inner">
          <a className="brand footer-brand" href="#inicio" aria-label="Ir ao início">
  <span className="brand-mark-wrap">
    <img 
      src="/upTime Logo cybersecurity.png" 
      alt="Logotipo da UptimeOps" 
      className="brand-mark"
      loading="lazy"
    />
  </span>
  <span className="brand-lockup">
    <span className="brand-name">UptimeOps<span className="brand-dot">.</span></span>
    <span className="brand-credential">DR / OPS</span>
  </span>
</a>
          <p>Backup • Disaster Recovery • Automação de monitoramento</p>
          <div className="footer-right">
            <a className="whatsapp-link" href="https://wa.me/5511987654321" target="_blank" rel="noopener noreferrer" aria-label="Falar com especialista via WhatsApp"><MessageCircle size={18} /><span>WhatsApp</span></a>
            <span>© {new Date().getFullYear()} — Estruture a continuidade antes do incidente.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
