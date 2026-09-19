import { App } from '@/app';
import '@/assets/css/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const root = document.getElementById('root');

createRoot(root!).render(
	<StrictMode>
		<Router>
			<Routes>
				<Route path='/' element={<App />} />
			</Routes>
		</Router>
	</StrictMode>,
);
