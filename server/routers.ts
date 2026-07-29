import express from 'express';
import { Resend } from 'resend';

const app = express();
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

// Rota que o formulário vai chamar
app.post('/api/contact', async (req, res) => {
  const { nome, empresa, email, prioridade, contexto } = req.body;

  try {
    await resend.emails.send({
      from: 'Contato Site <onboarding@resend.dev>', // Ou seu domínio
      to: ['jacksonsantos.tec@gmail.com'], // E-mail onde você vai receber os contatos
      replyTo: email,
      subject: `[Novo Lead] ${empresa} - ${nome}`,
      html: `
        <h2>Novo pedido de diagnóstico</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Prioridade:</strong> ${prioridade}</p>
        <p><strong>Contexto:</strong> ${contexto}</p>
      `,
    });

    return res.status(200).json({ message: 'E-mail enviado com sucesso' });
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao enviar e-mail' });
  }
});