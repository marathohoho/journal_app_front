export default {
  /** palette was configured on the Material UI design page */
    palette: {
        primary: {
          light: '#8bf6ff',
          main: '#4fc3f7',
          dark: '#0093c4',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ffb04c',
          main: '#f57f17',
          dark: '#bc5100',
          contrastText: '#fff',
        }
    },
    spreadForStyles : {
      buttonHeader: {
        display: 'frex',
        justifyContent: 'space-between',
      },
      form: {
        textAlign : 'center'
      },
      formTitle: {
        margin: '80px auto 10px auto',
        textAlign: 'center'
      },
      TextField: {
        margin: '15px auto 10px auto'
      },
      buttonForm : {
        marginTop: '30px',
        marginBottom: '15px',
        position: 'relative'
      },
      loader : {
        position: 'absolute'
      },
      generalError: {
        color: 'red', 
        fontSize : '0.9rem',
        marginTop: '10'
      }
    },
    
}