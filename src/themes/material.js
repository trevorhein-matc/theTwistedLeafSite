import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

export const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  
  color: {
    primary: {
      light: 'hsl(208, 13%, 35%)',
      main: 'hsl(208, 13%, 25%)',
      dark: 'hsl(208, 13%, 15%)',
      contrastText: '#ffffff'
    },
    text: {
      primary: 'hsl(208, 13%, 15%)',
      secondary: 'hsl(208, 13%, 45%)',
      disabled: 'hsl(208, 13%, 75%)',
      hint: 'hsl(208, 13%, 75%)'
    },
    link: {
      primary: 'hsl(219, 58%, 53%)'
    }
  }
});