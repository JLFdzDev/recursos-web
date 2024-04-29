import { Github } from '@/components/icons'
import { NavbarLink } from './navbar-link'

const DASHBOARD_LINKS = [
	{
		label: 'Resources',
		href: '/dashboard/resources',
	},
	{
		label: 'Tags',
		href: '/dashboard/tags',
	},
]

export const Navbar = () => {
	return (
		<nav className="flex justify-between items-center py-4 px-6 text-light border-b border-secondary">
			<div className="flex gap-4 items-center">
				<a
					href="https://github.com/JLFdzDev/recursos-web"
					target="_blank"
					rel="noreferrer noopener"
					className="text-xl font-bold"
				>
					<Github />
				</a>
				<a
					href="https://github.com/JLFdzDev"
					target="_blank"
					rel="noreferrer noopener"
					className="text-xl font-bold"
				>
					JLFdezDev
				</a>
			</div>
			<ul className="flex">
				<li>
					<NavbarLink label="Home" href="/" target="_blank" />
				</li>
				{DASHBOARD_LINKS.map(({ label, href }) => (
					<li key={label}>
						<NavbarLink label={label} href={href} />
					</li>
				))}
			</ul>
		</nav>
	)
}
