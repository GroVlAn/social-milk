import React from 'react';
import style from './style/Header.module.scss';

const Header: React.FC = () => {
	return (
		<div className={style.header}>
			<div>
				Logo #
				<span>Social Milk</span>
			</div>
		</div >
	);
}

export default Header;