import React from 'react';

interface SkillCardProps {
	title: string;
	icon?: React.ReactNode;
	skills: string[];
	darkMode: boolean;
}

export const SkillCard: React.FC<SkillCardProps> = ({
	title,
	icon,
	skills,
	darkMode,
}) => {
	return (
		<div
			className={`p-6 rounded-xl border transition-all hover:-translate-y-1 ${
				darkMode
					? 'bg-slate-800/50 border-slate-700 hover:border-blue-500/50'
					: 'bg-white border-slate-100 shadow-sm hover:shadow-md'
			}`}>
			<div className='flex items-center gap-3 mb-4 text-blue-500'>
				{icon}
				<h4 className='font-bold text-lg text-current'>{title}</h4>
			</div>

			<ul className='space-y-2'>
				{skills.map((skill, idx) => (
					<li
						key={idx}
						className={`flex items-center gap-2 text-sm ${
							darkMode ? 'text-slate-300' : 'text-slate-600'
						}`}>
						<span className='w-1.5 h-1.5 rounded-full bg-blue-400' />
						{skill}
					</li>
				))}
			</ul>
		</div>
	);
};
