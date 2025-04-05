export interface Social {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'x';
}

export const socials: Social[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/debiprasad',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/debiprasad/',
    icon: 'linkedin'
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/debiprasad',
    icon: 'x'
  }
]
