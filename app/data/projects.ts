export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A modern web application built with Next.js and TypeScript. Features include real-time data synchronization, responsive design, and seamless user experience.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    imageUrl: '/projects/project1.jpg',
    liveUrl: 'https://project1.com',
    githubUrl: 'https://github.com/yourusername/project1'
  },
  {
    title: 'Project Two',
    description: 'Full-stack application with robust backend API, authentication, and database integration. Implements modern security practices and efficient data handling.',
    tags: ['Node.js', 'Express', 'MongoDB', 'React'],
    imageUrl: '/projects/project2.jpg',
    liveUrl: 'https://project2.com',
    githubUrl: 'https://github.com/yourusername/project2'
  },
  {
    title: 'Project Three',
    description: 'Mobile-first web application focusing on performance and accessibility. Includes offline capabilities and progressive enhancement.',
    tags: ['React Native', 'Redux', 'GraphQL'],
    imageUrl: '/projects/project3.jpg',
    githubUrl: 'https://github.com/yourusername/project3'
  }
]
