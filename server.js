const express = require('express');
const prisma = require('@prisma/client').PrismaClient;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config(); // Para carregar variáveis do arquivo .env

const app = express();
const prismaClient = new prisma();

// Middleware
app.use(express.json());
app.use(cors());

// Configurações do JWT
const JWT_SECRET = process.env.JWT_SECRET || 'seuSegredoAqui'; // Usando a variável de ambiente

// Função para gerar JWT
const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
}

// Rota de Registro
app.post('/api/register', async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(senha, 10);

    const newUser = await prismaClient.user.create({
      data: {
        name: nome,
        email: email,
        password: hashedPassword
      }
    });

    const token = generateToken(newUser);
    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao registrar usuário.' });
  }
});

// Rota de Login
app.post('/api/authenticate', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const user = await prismaClient.user.findUnique({
      where: { email: email }
    });

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado.' });
    }

    const validPassword = await bcrypt.compare(senha, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: 'Senha incorreta.' });
    }

    const token = generateToken(user);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao autenticar.' });
  }
});
// Rota para salvar uma nova mensagem de contato
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Por favor, preencha todos os campos.' });
  }

  try {
    const newContact = await prismaClient.contact.create({
      data: {
        name: name,
        email: email,
        message: message
      }
    });

    res.status(201).json({ contact: newContact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao salvar mensagem de contato.' });
  }
});


// Função middleware para verificar o JWT
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Extrair o token do cabeçalho
  
  if (!token) {
    return res.status(401).json({ error: 'Acesso não autorizado.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET); // Verifica o token com a chave secreta
    req.userId = decoded.id; // Supondo que o userId está no token
    next();
  } catch (error) {
    res.status(403).json({ error: 'Token inválido.' });
  }
};

// Rota para adicionar um comentário
app.post('/api/comments', verifyToken, async (req, res) => {
  const { content } = req.body; // O conteúdo do comentário enviado no corpo da requisição
  
  if (!content) {
    return res.status(400).json({ error: 'Conteúdo do comentário é obrigatório.' });
  }

  try {
    const newComment = await prismaClient.comment.create({
      data: {
        content,
        userId: req.userId, // Associando o comentário ao usuário logado
      },
    });

    res.status(201).json({ comment: newComment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar comentário.' });
  }
});

// Rota para buscar os comentários
app.get('/api/comments', async (req, res) => {
  try {
    const comments = await prismaClient.comment.findMany({
      include: {
        user: {
          select: { email: true }, // Incluir o e-mail do usuário que fez o comentário
        },
      },
    });
    res.status(200).json({ comments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar comentários.' });
  }
});




// Rota para listar todas as notícias
app.get('/api/news', async (req, res) => {
  try {
    const newsList = await prismaClient.news.findMany();
    res.status(200).json({ news: newsList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao listar notícias.' });
  }
});

// Rota para listar todos os tutoriais
app.get('/api/tutorial', async (req, res) => {
  try {
    const tutorialList = await prismaClient.tutorial.findMany();
    res.status(200).json({ tutorials: tutorialList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao listar tutoriais.' });
  }
});
// Rota para listar todos os usuários
app.get('/api/users', async (req, res) => {
  try {
    const users = await prismaClient.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true
      }
    });

    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar usuários.' });
  }
});
// Criar uma nova notícia
app.post('/api/noticias', async (req, res) => {
  const { titulo, conteudo, imagem } = req.body;

  if (!titulo || !conteudo) {
    return res.status(400).json({ error: 'Título e conteúdo são obrigatórios.' });
  }

  try {
    const noticia = await prismaClient.noticia.create({
      data: {
        titulo: titulo,
        conteudo: conteudo,
        imagem: imagem || null,  // Imagem pode ser nula
      }
    });

    res.status(201).json({ noticia });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar notícia.' });
  }
});

// Criar um novo tutorial
app.post('/api/tutorial', async (req, res) => {
  const { titulo, conteudo, imagem, videoUrl } = req.body;

  if (!titulo || !conteudo) {
    return res.status(400).json({ error: 'Título e conteúdo são obrigatórios.' });
  }

  try {
    const tutorial = await prismaClient.tutorial.create({
      data: {
        titulo: titulo,
        conteudo: conteudo,
        imagem: imagem || null,  // Imagem pode ser nula
        videoUrl: videoUrl || null,  // URL do vídeo pode ser nulo
      }
    });

    res.status(201).json({ tutorial });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar tutorial.' });
  }
});
// Rota para listar todas as notícias
app.get('/api/noticias', async (req, res) => {
  try {
    const noticias = await prismaClient.noticia.findMany();
    res.status(200).json({ noticias });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar notícias.' });
  }
});
// Rota para listar todos os tutoriais
app.get('/api/tutorial', async (req, res) => {
  try {
    const tutorial = await prismaClient.tutorial.findMany();
    res.status(200).json({ tutorials });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar tutoriais.' });
  }
});

// Rota para adicionar uma nova notícia
app.post('/api/noticias', async (req, res) => {
  const { titulo, conteudo, imagem } = req.body;

  // Verifique se o título e conteúdo foram fornecidos
  if (!titulo || !conteudo) {
    return res.status(400).json({ error: 'Título e conteúdo são obrigatórios.' });
  }

  try {
    // Criação da notícia no banco de dados
    const noticia = await prismaClient.noticia.create({
      data: {
        titulo: titulo,
        conteudo: conteudo,
        imagem: imagem || null,  // A imagem é opcional, então podemos deixar como null
      }
    });

    // Retorna a notícia criada
    res.status(201).json({ noticia });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar notícia.' });
  }
});
// Rota para adicionar um novo tutorial
app.post('/api/tutorial', async (req, res) => {
  const { titulo, conteudo, imagem, videoUrl } = req.body;

  // Verifique se o título e conteúdo foram fornecidos
  if (!titulo || !conteudo) {
    return res.status(400).json({ error: 'Título e conteúdo são obrigatórios.' });
  }

  try {
    // Criação do tutorial no banco de dados
    const tutorial = await prismaClient.tutorial.create({
      data: {
        titulo: titulo,
        conteudo: conteudo,
        imagem: imagem || null,  // A imagem é opcional
        videoUrl: videoUrl || null,  // A URL do vídeo é opcional
      }
    });

    // Retorna o tutorial criado
    res.status(201).json({ tutorial });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar tutorial.' });
  }
});


// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
