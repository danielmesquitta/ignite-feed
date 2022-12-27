import { PostProps } from '../components/Post';

export const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/danielmesquitta.png',
      name: 'Daniel Mesquita',
      role: 'Full-stack Developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Hello World!',
      },

      {
        type: 'paragraph',
        content:
          "I'm Daniel, a full-stack developer prepared to be a lifelong learner. Passionate about technology, programming and mainly, becoming a better version of myself every day.",
      },

      {
        type: 'paragraph',
        content: 'Curently working on projects with React, React Native and Node.js.',
      },

      {
        type: 'link',
        content: 'https://github.com/danielmesquitta',
      },
    ],
    publishedAt: new Date(),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO na Rocketseat',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },

      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },

      {
        type: 'link',
        content: 'https://github.com/diego3g',
      },
    ],
    publishedAt: new Date(),
  },

  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Instrutor na Rocketseat',
    },
    content: [
      {
        type: 'paragraph',
        content: "Hi , I'm Mayk Brito",
      },

      {
        type: 'paragraph',
        content: '🔥 Sênior Web Developer & Instructor focused on helping people start programming',
      },

      {
        type: 'link',
        content: 'https://github.com/maykbrito',
      },
    ],
    publishedAt: new Date(),
  },
];
