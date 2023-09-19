import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react' 
import App from './App.jsx'

const colors = {
    brand: {
      900: '#481A5D',
      800: '#4B1575',
      700: '#732AAC',
    },
}
  
const theme = extendTheme({ colors });

let root = document.getElementById('root')
ReactDOM.createRoot(root).render(
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
)
