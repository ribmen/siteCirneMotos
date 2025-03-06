import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react';
import { ptBR } from '@clerk/localizations';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Não existe chave publicável');
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl={'/'} localization={ptBR} appearance={{
      elements: {
        footerAction: { display: "none"},
      }
      
    }}>
      <App />
    </ClerkProvider>
  </StrictMode>,
)
