import { Router } from 'express';
import { Resend } from 'resend';

const router = Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/api/contact', async (req, res) => {
  const { nome, empresa, email, prioridade, contexto } = req.body;

  try {
    await resend.emails.send({
      from: 'Site UptimeOps <onboarding@resend.dev>',
      to: ['UPTIMEOPSINFRA.COM.BR'], // Coloque seu e-mail de recebimento aqui
      replyTo: email,
      subject: `[Novo Diagnóstico] ${empresa} - ${nome}`,
      html: `
        <h2>Nova Solicitação de Diagnóstico Inicial</h2>
        <p><strong>Solicitante:</strong> ${nome}</p>
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>E-mail do Cliente:</strong> ${email}</p>
        <p><strong>Prioridade Crítica:</strong> ${prioridade || 'Não informada'}</p>
        <p><strong>Contexto do Ambiente:</strong> ${contexto || 'Nenhum contexto fornecido'}</p>
      `,
    });

    return res.status(200).json({ success: true, message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar via Resend:', error);
    return res.status(500).json({ error: 'Erro ao processar envio' });
  }
});

export default router;