import './App.css';
import Navigation from'./dashboard/Navigation/Navigation'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

localStorage.setItem('firstTime', true)
const theme = createMuiTheme({
  typography: {
    fontFamily: [
    'Lato',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

function App() {
  return (
      <ThemeProvider theme={theme}>
          <Navigation />
      </ThemeProvider>
    );
  }


export default App;