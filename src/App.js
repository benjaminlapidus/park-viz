import './App.css';
import Dashboard from'./dashboard/Dashboard.js'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

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
          <Dashboard />
      </ThemeProvider>
    );
  }


export default App;