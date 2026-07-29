import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routers"; // Importa as rotas criadas

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Permite ler o corpo das requisições JSON enviadas pelo React
  app.use(express.json());

  // Registra as rotas da API (incluindo o /api/contact)
  app.use(routes);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html para qualquer rota que NÃO seja de API
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);