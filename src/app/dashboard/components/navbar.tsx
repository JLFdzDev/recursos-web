import { NavbarLink } from './navbar-link'

const DASHBOARD_LINKS = [
	{
		label: 'Home',
		href: '/dashboard'
	},
	{
		label: 'Resources',
		href: '/dashboard/resources'
	},
	{
		label: 'Tags',
		href: '/dashboard/tags'
	}
]

export const Navbar = () => {
	return (
		<nav className="flex justify-between items-center py-4 px-6 text-light border-b border-secondary">
			<a href="https://github.com/JLFdzDev" target="_blank" rel="noreferrer noopener" className="text-xl font-bold">JLFdezDev</a>
			<ul className="flex">
				{DASHBOARD_LINKS.map(({ label, href }) => (
					<li key={label}>
						<NavbarLink label={label} href={href} />
					</li>
				))}
			</ul>
		</nav>
	)
}
