import React from "react";
import { I } from "../lib/icons";

const FAQS = [
  { q: "Preciso de encaminhamento médico para fazer fisioterapia?", a: "Não precisa. Fisioterapia é autônoma — dá pra agendar direto na clínica, sem encaminhamento. Se na avaliação aparecer algo que precise de médico, a equipe orienta." },
  { q: "Qual é o valor da sessão?", a: "A clínica não tem tabela fixa. Cada caso tem complexidade e frequência diferentes. Na primeira sessão, avaliamos, montamos o plano e você já sai sabendo o custo. Sem surpresa no final." },
  { q: "Quantas sessões vou precisar?", a: "Depende do caso. Lesões agudas costumam resolver rápido. Dores crônicas levam mais tempo. Na clínica, ninguém fica em tratamento além do necessário — e a evolução é comunicada desde o começo." },
  { q: "Vocês atendem pelo plano de saúde?", a: "A clínica atende particular. Se você tem plano, vale checar com a operadora — algumas cobrem com reembolso mediante nota fiscal. A equipe pode te ajudar com as informações que eles pedem." },
  { q: "Já fiz fisioterapia antes e não resolvi. Por que seria diferente?", a: "A maioria dos casos sem resultado vem de tratamento que só trata o sintoma. Aqui começa pela avaliação do seu caso específico — não de uma lombar genérica. Se houver uma abordagem melhor com outro profissional, a clínica indica." },
  { q: "Atende só atletas?", a: "Não. A clínica atende qualquer pessoa com dor ou limitação de movimento. A formação esportiva significa analisar o corpo em movimento — útil pra qualquer caso, seja atleta ou não." },
  { q: "Como funciona a primeira sessão?", a: "A primeira sessão é a avaliação. A equipe ouve sua história, faz a análise completa e monta o plano de tratamento. Você sai sabendo o que está acontecendo e o que será feito. Não é sessão de aparelho — é onde entendemos o problema." },
];
const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" style={{ padding: "180px 0", borderTop: "1px solid var(--line)" }}>
      <div className="container">
        <div className="fg faq-grid" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.4fr", gap: 80, alignItems: "start" }}>
          <div className="reveal faq-sticky" style={{ position: "sticky", top: 120 }}>
            <div className="eyebrow" style={{ marginBottom: 24 }}>(07) Perguntas</div>
            <h2 className="display" style={{ fontSize: "clamp(40px, 6vw, 84px)" }}>
              Antes de marcar,<br/>
              <span className="serif" style={{ fontWeight: 400, fontStyle: "italic", color: "var(--accent)" }}>tira essas dúvidas.</span>
            </h2>
            <p style={{ color: "var(--ink-3)", fontSize: 16, lineHeight: 1.5, marginTop: 24, maxWidth: 360 }}>Não achou a resposta? Manda no WhatsApp. Leonardo responde pessoalmente.</p>
          </div>
          <div className="reveal reveal-1">
            {FAQS.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={i} style={{ borderTop: "1px solid var(--line)", borderBottom: i === FAQS.length - 1 ? "1px solid var(--line)" : "none" }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, padding: "28px 0", textAlign: "left" }}>
                    <span style={{ fontSize: 19, fontWeight: 500, letterSpacing: "-0.01em" }}>{it.q}</span>
                    <span style={{ width: 36, height: 36, borderRadius: 999, border: "1px solid var(--line-2)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: isOpen ? "var(--ink)" : "transparent", color: isOpen ? "#fff" : "var(--ink-2)", transform: isOpen ? "rotate(45deg)" : "rotate(0)", transition: "all .4s var(--ease)" }}><I.plus/></span>
                  </button>
                  <div style={{ maxHeight: isOpen ? 420 : 0, overflow: "hidden", transition: "max-height .4s var(--ease)" }}>
                    <p style={{ margin: 0, padding: "0 0 28px", color: "var(--ink-3)", fontSize: 18, lineHeight: 1.6, maxWidth: 720 }}>{it.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    <style>{`
      @media(max-width:860px){
        .faq-grid{grid-template-columns:1fr !important; gap:40px !important}
        .faq-sticky{position:relative !important; top:auto !important}
      }
    `}</style>
    </section>
  );
};

export default FAQ;
