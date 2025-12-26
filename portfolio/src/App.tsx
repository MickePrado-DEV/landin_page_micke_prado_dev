import React, { useState, useEffect } from 'react';
import {
	// Github,
	// Linkedin,
	Mail,
	Moon,
	Sun,
	Code,
	Terminal,
	Cpu,
	Briefcase,
	GraduationCap,
	Download,
	Folder,
	// Star,
	// GitFork,
} from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { SkillCard } from './components/SkillCard';

export default function App() {
	const [darkMode, setDarkMode] = useState(false);

	// Toggle dark mode
	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [darkMode]);

	const toggleTheme = () => setDarkMode(!darkMode);

	const skills = {
		languages: [
			'TypeScript',
			'JavaScript',
			'C#',
			'Java',
			'Python',
			'PHP',
			'SQL',
		],
		frameworks: [
			'React.js',
			'Next.js',
			'Flutter',
			'.NET MAUI',
			'Laravel',
			'Express.js',
			'Tailwind CSS',
		],
		tools: [
			'Git',
			'GitHub Actions',
			'Fastlane',
			'Firebase',
			'Clean Architecture',
			'CI/CD',
			'Scrum',
		],
	};

	const experiences = [
		{
			company: 'MOSBIT',
			role: 'Flutter Developer & .NET MAUI Developer',
			period: 'Feb 2025 - Presente',
			description:
				'Desarrollo de aplicaciones móviles multiplataforma usando Flutter y .NET MAUI. Implementación de Clean Architecture, gestión de estado con Riverpod y BLOC. Arquitectura de pipelines CI/CD con GitHub Actions y Fastlane.',
			tags: ['Flutter', 'Dart', '.NET MAUI', 'Firebase', 'CI/CD'],
		},
		{
			company: 'Colabora',
			role: 'Frontend Developer',
			period: 'Jul 2021 - Presente',
			description:
				'Especialista en React.js, responsable del diseño UI e integración de APIs (.NET/Express). Uso de TailwindCSS, PrimeReact y principios de Clean Architecture. Implementación de autenticación MSAL.',
			tags: ['React', 'TypeScript', 'Tailwind', 'Azure', 'Formik'],
		},
		{
			company: 'Evalúa',
			role: 'Full Stack Developer',
			period: 'Feb 2022 - Feb 2023',
			description:
				'Desarrollo de plataforma de gestión de encuestas. Trabajo full stack con React.js en frontend y Node.js/Express en backend. Exportación de datos y autenticación.',
			tags: ['React', 'Node.js', 'Sequelize', 'MySQL'],
		},
		{
			company: 'Roles Previos',
			role: 'Mobile Developer & SysAdmin',
			period: '2018 - 2019',
			description:
				'Desarrollo con React Native en Mosbit y administración de sistemas en Materiales Tornero.',
			tags: ['React Native', 'Redux', 'Hardware'],
		},
	];

	const education = [
		{
			school: 'Universidad de Guadalajara',
			degree: 'Maestría en Ingeniería de Software',
			period: 'Ago 2019 - Jul 2021',
			detail:
				'Especialización en backend con Laravel y MySQL. Análisis de requerimientos y arquitectura de sistemas.',
		},
		{
			school: 'Universidad de Guadalajara',
			degree: 'Licenciatura en Tecnologías de la Información',
			period: 'Jul 2015 - Jul 2019',
			detail: 'Fundamentos sólidos en POO con Java y desarrollo web/móvil.',
		},
	];

	// Datos de ejemplo para proyectos (Reemplazar con datos reales de GitHub)
	const projects = [
		{
			name: 'Compact Survey Platform',
			description:
				'Plataforma de gestión y análisis de encuestas con exportación a PDF/Excel. Arquitectura escalable.',
			tech: ['React', 'Node.js', 'Express', 'Sequelize'],
			stars: 12,
			forks: 4,
			link: '#',
		},
		{
			name: 'Flutter Mobile Architecture',
			description:
				'Template base para apps Flutter usando Clean Architecture, Riverpod y configuración CI/CD lista para usar.',
			tech: ['Flutter', 'Dart', 'GitHub Actions', 'Fastlane'],
			stars: 25,
			forks: 8,
			link: '#',
		},
		{
			name: 'Mickeprado Portfolio',
			description:
				'Este portafolio minimalista construido con React y Tailwind CSS, optimizado para GitHub Pages.',
			tech: ['React', 'Vite', 'Tailwind CSS'],
			stars: 5,
			forks: 1,
			link: '#',
		},
	];

	return (
		<div
			className={`min-h-screen transition-colors duration-300 ${
				darkMode ? 'bg-slate-900 text-slate-200' : 'bg-slate-50 text-slate-800'
			}`}>
			{/* Navigation / Header */}
			<nav
				className={`fixed w-full z-10 backdrop-blur-md border-b transition-colors duration-300 ${
					darkMode
						? 'bg-slate-900/80 border-slate-800'
						: 'bg-white/80 border-slate-200'
				}`}>
				<div className='max-w-4xl mx-auto px-6 py-4 flex justify-between items-center'>
					<h1 className='font-bold text-xl tracking-tight'>
						MAPG<span className='text-blue-500'>.dev</span>
					</h1>
					<button
						onClick={toggleTheme}
						className={`p-2 rounded-full transition-colors ${
							darkMode
								? 'hover:bg-slate-800 text-yellow-400'
								: 'hover:bg-slate-100 text-slate-600'
						}`}
						aria-label='Toggle Theme'>
						{darkMode ? <Sun size={20} /> : <Moon size={20} />}
					</button>
				</div>
			</nav>

			<main className='max-w-3xl mx-auto px-6 pt-32 pb-20'>
				{/* Hero Section */}
				<section className='mb-20 animate-fade-in-up'>
					<div className='flex flex-col md:flex-row items-start justify-between gap-6'>
						<div>
							<h2 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 pb-1'>
								Miguel Angel Prado
							</h2>
							<p
								className={`text-xl md:text-2xl font-light mb-6 ${
									darkMode ? 'text-slate-400' : 'text-slate-600'
								}`}>
								Software Engineer | Clean Architecture & Modern Web Development
							</p>

							<div className='flex flex-wrap gap-4 text-sm mb-8'>
								<a
									href='mailto:m.apg@hotmail.es'
									className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all hover:scale-105 ${
										darkMode
											? 'border-slate-700 hover:bg-slate-800'
											: 'border-slate-200 hover:bg-white shadow-sm'
									}`}>
									<Mail size={16} className='text-blue-500' />
									<span>m.apg@hotmail.es</span>
								</a>
								<a
									href='https://linkedin.com/in/mickeprado01'
									target='_blank'
									rel='noopener noreferrer'
									className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all hover:scale-105 ${
										darkMode
											? 'border-slate-700 hover:bg-slate-800'
											: 'border-slate-200 hover:bg-white shadow-sm'
									}`}>
									{/* <Linkedin size={16} className='text-blue-700' /> */}
									<span>LinkedIn</span>
								</a>
								{/* GitHub Link added implicitly via Projects, but good to have here too if desired */}
								<a
									href='https://github.com'
									target='_blank'
									rel='noopener noreferrer'
									className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all hover:scale-105 ${
										darkMode
											? 'border-slate-700 hover:bg-slate-800'
											: 'border-slate-200 hover:bg-white shadow-sm'
									}`}>
									{/* <Github
										size={16}
										className={darkMode ? 'text-white' : 'text-black'}
									/> */}
									<span>GitHub</span>
								</a>
							</div>

							<div className='prose max-w-none'>
								<p
									className={`leading-relaxed ${
										darkMode ? 'text-slate-300' : 'text-slate-600'
									}`}>
									Full Stack Developer con más de 5 años de experiencia
									construyendo aplicaciones web y móviles escalables.
									Especializado en el ecosistema JavaScript (React, Next.js,
									Node) y .NET. Apasionado por la arquitectura limpia, la
									automatización DevOps y la entrega de productos de alta
									calidad.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Skills Section */}
				<section className='mb-20'>
					<h3 className='text-2xl font-bold mb-8 flex items-center gap-3'>
						<Terminal className='text-blue-500' />
						Stack Tecnológico
					</h3>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						<SkillCard
							title='Lenguajes'
							icon={<Code size={20} />}
							skills={skills.languages}
							darkMode={darkMode}
						/>
						<SkillCard
							title='Frameworks'
							icon={<Cpu size={20} />}
							skills={skills.frameworks}
							darkMode={darkMode}
						/>
						<SkillCard
							title='Herramientas'
							//icon={<Github size={20} />}
							skills={skills.tools}
							darkMode={darkMode}
						/>
					</div>
				</section>

				{/* Projects Section - NEW */}
				<section className='mb-20'>
					<h3 className='text-2xl font-bold mb-8 flex items-center gap-3'>
						<Folder className='text-blue-500' />
						Proyectos Destacados
					</h3>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						{projects.map((project, idx) => (
							<ProjectCard key={idx} project={project} darkMode={darkMode} />
						))}
					</div>
				</section>

				{/* Experience Section */}
				<section className='mb-20'>
					<h3 className='text-2xl font-bold mb-8 flex items-center gap-3'>
						<Briefcase className='text-blue-500' />
						Experiencia Laboral
					</h3>

					<div className='space-y-12 relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 pl-8 pb-4'>
						{experiences.map((exp, idx) => (
							<div key={idx} className='relative group'>
								{/* Timeline dot */}
								<div
									className={`absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 transition-colors ${
										darkMode
											? 'bg-slate-900 border-blue-500'
											: 'bg-white border-blue-500'
									}`}></div>

								<div className='flex flex-col sm:flex-row sm:items-center justify-between mb-2'>
									<h4 className='text-xl font-bold'>{exp.company}</h4>
									<span
										className={`text-sm font-medium px-3 py-1 rounded-full w-fit ${
											darkMode
												? 'bg-slate-800 text-slate-300'
												: 'bg-slate-100 text-slate-600'
										}`}>
										{exp.period}
									</span>
								</div>
								<h5 className='text-lg text-blue-500 font-medium mb-3'>
									{exp.role}
								</h5>
								<p
									className={`mb-4 leading-relaxed ${
										darkMode ? 'text-slate-400' : 'text-slate-600'
									}`}>
									{exp.description}
								</p>
								<div className='flex flex-wrap gap-2'>
									{exp.tags.map((tag, i) => (
										<span
											key={i}
											className={`text-xs px-2 py-1 rounded border transition-colors ${
												darkMode
													? 'border-slate-700 bg-slate-800/50 text-slate-300'
													: 'border-slate-200 bg-slate-50 text-slate-600'
											}`}>
											{tag}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Education Section */}
				<section className='mb-20'>
					<h3 className='text-2xl font-bold mb-8 flex items-center gap-3'>
						<GraduationCap className='text-blue-500' />
						Educación
					</h3>

					<div className='grid gap-6'>
						{education.map((edu, idx) => (
							<div
								key={idx}
								className={`p-6 rounded-xl border transition-all hover:shadow-lg ${
									darkMode
										? 'bg-slate-800/30 border-slate-700'
										: 'bg-white border-slate-100 shadow-sm'
								}`}>
								<div className='flex flex-col sm:flex-row justify-between sm:items-start mb-2'>
									<div>
										<h4 className='text-lg font-bold'>{edu.degree}</h4>
										<p className='text-blue-500'>{edu.school}</p>
									</div>
									<span
										className={`text-sm mt-2 sm:mt-0 ${
											darkMode ? 'text-slate-400' : 'text-slate-500'
										}`}>
										{edu.period}
									</span>
								</div>
								<p
									className={`text-sm mt-3 ${
										darkMode ? 'text-slate-400' : 'text-slate-600'
									}`}>
									{edu.detail}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* Footer */}
				<footer
					className={`mt-20 pt-8 border-t text-center text-sm ${
						darkMode
							? 'border-slate-800 text-slate-500'
							: 'border-slate-200 text-slate-400'
					}`}>
					<p>
						© {new Date().getFullYear()} Miguel Angel Prado García. Built with
						React & Tailwind.
					</p>
				</footer>
			</main>

			{/* Floating Action Button for PDF */}
			<a
				href='#'
				onClick={(e) => {
					e.preventDefault();
					alert(
						'Aquí iría el enlace a tu archivo PDF real (ej. /cv.pdf) una vez subido a GitHub.'
					);
				}}
				className='fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 z-50 flex items-center gap-2 group'
				title='Descargar CV'>
				<Download size={24} />
				<span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap'>
					Descargar CV
				</span>
			</a>
		</div>
	);
}
