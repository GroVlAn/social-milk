import React from 'react'
import style from './style/MenuItem.module.scss';

const MenuItem: React.FC<{ href: string, nameItemMenu: string }> = props => {
	return (
		<li className={style.item}>
			<a href={props.href}>{props.nameItemMenu}</a>
		</li>
	)
}

export default MenuItem;