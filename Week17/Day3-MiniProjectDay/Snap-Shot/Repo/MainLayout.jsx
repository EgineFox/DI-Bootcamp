import { Outlet } from 'react-router-dom';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import SearchPanel from '../components/SearchPanel';
import ErrorBoundary from '../components/ErrorBoundary';

export default function MainLayout() {
    return (
        <div>
            <header>
                <ErrorBoundary>
                <Logo /> 
                </ErrorBoundary>
                <ErrorBoundary>
                <Menu />
                </ErrorBoundary>
                <ErrorBoundary>
                <SearchPanel />
                </ErrorBoundary>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}