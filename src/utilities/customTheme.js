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
        textAlign : 'center',
        alignContent: 'center',
        padding: '0px 300px 0px 300px'
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
    spreadForStylesForNote : {
      root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
        
      },
      paper: {
        margin: 'auto',
        maxWidth: 1200,
        width: '100%',
        margin : '100px auto 100px auto'
      },
      image: {
        width: 128,
        height: 128,
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
      buttons : {
        margin: '10px auto 10px auto',
        padding: '10px auto 10px auto'
      },
      editedTag: {
        color: 'grey',
        margin: '0px 0px',
        padding: '0px 0px 0px 10px',
        width: '200px'
      },
      noteArea: {
        maxHeight: '300px',
        padding: '30px'
      },
      titleArea: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 0 10px 30px'
      },
      noteFooter : {
        display : 'flex',
        flexDirection: 'column',
        width : 'full',
        justifyContent : 'center'
         
      }
    }
    
}