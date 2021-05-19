import React from 'react'
import MenuItem from './MenuItem'
import style from './style/Menu.module.scss';


const Menu: React.FC = () => {
	console.log(style);

	return (
		<div className={style.menu}>
			<nav>
				<ul className={style.menu__body}>
					<MenuItem href="" nameItemMenu="Main" />
					<MenuItem href="" nameItemMenu="Message" />
					<MenuItem href="" nameItemMenu="Frient" />
					<MenuItem href="" nameItemMenu="Photo" />
				</ul>
			</nav>
		</div>
	)
}

export default Menu;