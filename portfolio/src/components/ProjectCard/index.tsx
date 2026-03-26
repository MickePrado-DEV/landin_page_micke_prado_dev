import React from 'react';
import { Folder, ExternalLink, Star, GitFork } from 'lucide-react';

interface Project {
	name: string;
	description: string;
	link: string;
	tech: string[];
	stars?: number;
	forks?: number;
}

interface ProjectCardProps {
	project: Project;
	darkMode: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
	project,
	darkMode,
}) => {
	return (
		<a
			href={project.link}
			target='_blank'
			rel='noopener noreferrer'
			className={`flex flex-col p-6 rounded-xl border transition-all hover:-translate-y-1 group ${
				darkMode
					? 'bg-slate-800/50 border-slate-700 hover:border-blue-500'
					: 'bg-white border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200'
			}`}>
			<div className='flex justify-between items-start mb-4'>
				<Folder
					className='text-blue-500 group-hover:text-blue-400 transition-colors'
					size={24}
				/>

				{project.link !== '#' && (
					<ExternalLink
						size={18}
						className={
							darkMode
								? 'text-slate-400 hover:text-white'
								: 'text-slate-400 hover:text-black'
						}
					/>
				)}
			</div>

			<h4 className='font-bold text-lg mb-2 group-hover:text-blue-500 transition-colors'>
				{project.name}
			</h4>

			<p
				className={`text-sm mb-4 grow ${
					darkMode ? 'text-slate-400' : 'text-slate-600'
				}`}>
				{project.description}
			</p>

			{(project.stars || project.forks) && (
				<div className='flex items-center gap-4 text-xs mb-4 text-slate-500'>
					{project.stars && project.stars > 0 && (
						<div className='flex items-center gap-1'>
							<Star size={12} />
							<span>{project.stars}</span>
						</div>
					)}

					{project.forks && project.forks > 0 ? (
						<div className='flex items-center gap-1'>
							<GitFork size={12} />
							<span>{project.forks}</span>
						</div>
					) : (
						<></>
					)}
				</div>
			)}

			<div className='flex flex-wrap gap-2 mt-auto'>
				{project.tech.map((tech, index) => (
					<span
						key={index}
						className={`text-xs px-2 py-1 rounded-full ${
							darkMode
								? 'bg-slate-700 text-blue-300'
								: 'bg-blue-50 text-blue-700'
						}`}>
						{tech}
					</span>
				))}
			</div>
		</a>
	);
};
