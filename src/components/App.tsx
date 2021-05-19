import React from 'react';
import './App.scss';
import Content from './Content/Content';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import style from './style/App.module.scss';

const App: React.FC = () => {
	return (
		<div className="App">
			<Header />
			<div className={style.wrapper}>
				<Menu />
				<Content />
			</div>
		</div>
	);
}

export default App;
