
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import {QueryClient, QueryClientProvider} from 'react-query';
import App from './App';

const client = new QueryClient();
const container = document.getElementById('root');

const root = createRoot(container!);

root.render(<QueryClientProvider client={client}>
  <App/>
</QueryClientProvider>);
