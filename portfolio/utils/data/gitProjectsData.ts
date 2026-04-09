import type { IProject } from '../../src/Interfaces/index';
export const projects: IProject[] = [
  {
    name: 'Musicfy',
    slug: 'musicfy', // <--- Debe coincidir con el nombre de la carpeta en public/assets/
    description: 'Una plataforma de streaming...',
    repoUrl: 'https://github.com/MickePrado-DEV/musicfy',
    //demoUrl: 'https://usuario.github.io/repo',
    technologies: ['React', 'Tailwind', 'Firebase', 'Electron'],
    images: ['login.webp'], // <--- El nombre exacto del archivo con su extensión
    featured: true,
  }, {
    name: 'Mike.Shop',
    slug: 'store-lab', // <--- Debe coincidir con el nombre de la carpeta en public/assets/
    description: 'ike.Shop es una plataforma de comercio electrónico diseñada bajo el concepto de Offline-First. Implementa una arquitectura robusta que desacopla la lógica de persistencia del usuario, permitiendo que la aplicación funcione como un sistema distribuido real, pero gestionado íntegramente por un motor ORM sobre el almacenamiento local del navegador.',
    repoUrl: 'https://github.com/MickePrado-DEV/store-lab',
    demoUrl: 'https://mickeprado-dev.github.io/store-lab/',
    technologies: ['React', 'Tailwind', 'localStorage', 'Vite', 'TypeScript', "tanstack-query"],
    images: ['presentation.webp', "dashboard.webp", "perfil.webp", "store.webp"], // <--- El nombre exacto del archivo con su extensión
    featured: true,
  },
];