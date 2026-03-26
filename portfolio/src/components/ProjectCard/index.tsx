import React, { useState } from 'react';
import {
	Github,
	ExternalLink,
	ChevronDown,
	ChevronUp,
	Layers,
	Code2,
	ImageOff,
} from 'lucide-react';

interface Project {
	name: string;
	slug: string;
	description: string;
	repoUrl: string;
	demoUrl?: string;
	technologies: string[];
	images: string[];
	featured?: boolean;
}

interface ProjectCardProps {
	project: Project;
	darkMode: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
	project,
	darkMode,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [imageError, setImageError] = useState(false);

	// 1. Construimos la base dinámica de Vite (ej: /landin_page_micke_prado_dev/)
	const baseUrl = import.meta.env.BASE_URL.endsWith('/')
		? import.meta.env.BASE_URL
		: `${import.meta.env.BASE_URL}/`;

	// 2. Ruta final combinando Base + Carpeta Assets + Slug + Nombre de imagen
	const mainImage = `${baseUrl}assets/${project.slug}/${project.images[0]}`;

	return (
		<div
			className={`group flex flex-col rounded-3xl overflow-hidden border transition-all duration-500 ${
				darkMode
					? 'bg-slate-900/80 border-slate-800 hover:border-blue-500/50 backdrop-blur-sm'
					: 'bg-white border-slate-200 shadow-sm hover:shadow-xl'
			}`}>
			{/* --- SECCIÓN DE IMAGEN --- */}
			<div className='relative h-52 overflow-hidden bg-slate-800 flex items-center justify-center'>
				{!imageError ? (
					<img
						src={mainImage}
						alt={project.name}
						className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
						onError={() => {
							console.error('No se pudo cargar la imagen en:', mainImage);
							setImageError(true);
						}}
					/>
				) : (
					<div className='flex flex-col items-center text-slate-500 gap-2'>
						<ImageOff size={40} />
						<span className='text-[10px] uppercase font-bold text-center px-4'>
							Imagen no encontrada en public/assets/{project.slug}/
						</span>
					</div>
				)}

				{/* Overlay de Links (Aparece al hacer Hover) */}
				<div className='absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]'>
					<a
						href={project.repoUrl}
						target='_blank'
						rel='noreferrer'
						className='p-3 bg-white text-slate-900 rounded-full hover:bg-blue-500 hover:text-white transition-all transform hover:scale-110 shadow-lg'
						title='Ver Código'>
						<Github size={22} />
					</a>
					{project.demoUrl && project.demoUrl !== '#' && (
						<a
							href={project.demoUrl}
							target='_blank'
							rel='noreferrer'
							className='p-3 bg-white text-slate-900 rounded-full hover:bg-emerald-500 hover:text-white transition-all transform hover:scale-110 shadow-lg'
							title='Ver Demo'>
							<ExternalLink size={22} />
						</a>
					)}
				</div>
			</div>

			{/* --- CUERPO DE LA CARD --- */}
			<div className='p-6 flex flex-col grow'>
				<div className='flex items-center gap-2 mb-3'>
					<Code2 size={18} className='text-blue-500' />
					<h4
						className={`text-xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-800'}`}>
						{project.name}
					</h4>
				</div>

				<p
					className={`text-sm leading-relaxed mb-4 transition-all duration-300 ${
						darkMode ? 'text-slate-400' : 'text-slate-600'
					} ${!isExpanded ? 'line-clamp-2' : ''}`}>
					{project.description}
				</p>

				{/* --- CONTENIDO EXPANDIBLE (MOSTRAR MÁS) --- */}
				<div
					className={`grid transition-all duration-500 ease-in-out ${
						isExpanded
							? 'grid-rows-[1fr] opacity-100'
							: 'grid-rows-[0fr] opacity-0'
					}`}>
					<div className='overflow-hidden'>
						<div className='pt-2 pb-4'>
							<h5 className='text-[10px] uppercase tracking-widest font-bold text-blue-500 mb-3'>
								Tecnologías
							</h5>
							<div className='flex flex-wrap gap-2 mb-6'>
								{project.technologies.map((tech) => (
									<span
										key={tech}
										className={`px-2.5 py-1 text-[11px] rounded-lg font-medium border ${
											darkMode
												? 'bg-blue-500/5 text-blue-300 border-blue-500/20'
												: 'bg-blue-50 text-blue-600 border-blue-100'
										}`}>
										{tech}
									</span>
								))}
							</div>

							{/* Galería de capturas adicionales */}
							{project.images.length > 1 && (
								<div>
									<p className='text-[10px] font-bold text-slate-500 uppercase mb-3 flex items-center gap-1'>
										<Layers size={12} /> Galería de capturas
									</p>
									<div className='grid grid-cols-3 gap-2'>
										{project.images.slice(1).map((img, idx) => (
											<div
												key={idx}
												className='rounded-lg h-16 bg-slate-800 overflow-hidden border border-slate-700/20 shadow-sm'>
												<img
													src={`${baseUrl}assets/${project.slug}/${img}`}
													alt='Preview'
													className='w-full h-full object-cover hover:scale-110 transition-transform duration-500'
													onError={(e) =>
														(e.currentTarget.style.display = 'none')
													}
												/>
											</div>
										))}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>

				{/* --- BOTÓN MOSTRAR MÁS / MENOS --- */}
				<button
					onClick={() => setIsExpanded(!isExpanded)}
					className={`mt-auto pt-4 flex items-center justify-between w-full text-xs font-bold uppercase tracking-widest transition-colors ${
						darkMode
							? 'text-slate-500 hover:text-blue-400'
							: 'text-slate-400 hover:text-blue-600'
					}`}>
					<span>{isExpanded ? 'Ver menos' : 'Detalles del proyecto'}</span>
					{isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
				</button>
			</div>
		</div>
	);
};
