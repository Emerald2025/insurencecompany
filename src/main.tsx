import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { App } from './app'
import './index.css'
import { Toaster } from 'sonner'
import { StateContextProvider } from './contexts'
import { config } from './wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const queryClient = new QueryClient(); // ✅ Correct usage

root.render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider
        activeChain="arbitrum-sepolia"
        clientId={import.meta.env.VITE_THIRDWEB_CLIENT_ID}
      >
        <Router>
          <StateContextProvider>
            <App />
          </StateContextProvider>
        </Router>
        <Toaster richColors />
      </ThirdwebProvider>
    </QueryClientProvider>
  </WagmiProvider>
)
