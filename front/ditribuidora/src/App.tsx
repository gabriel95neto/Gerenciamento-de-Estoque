import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { AuthProvider } from './app/contexts/AuthContext';
import Router from './router';
import { Toaster } from 'react-hot-toast';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
