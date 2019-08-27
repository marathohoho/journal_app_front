export default {
  /** palette was configured on the Material UI design page */
    palette: {
        primary: {
          light: '#0093c4',
          main: '#0093c4',
          dark: '#ffff',
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
        display: 'flex',
        justifyContent: 'space-between',
      },
      closeIcon : {
        alignSelf: 'center',
        paddingRight: '10px'
      },
      form: {
        textAlign : 'center',
        alignContent: 'center',
        padding: '0px 0px 0px 0px'
      },
      formTitle: {
        margin: '80px auto 10px auto',
        textAlign: 'center'
      },
      TextField: {
        margin: '15px auto 10px auto'
      },
      buttonForm : {
        marginTop: '55px',
        marginBottom: '0px',
        position: 'relative',
        textAlign : 'center'
        // right: '-18.5%',
        // top: '-18.5%'
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
        alignContent: 'center',
        marginTop : '70px'
        
      },
      paper: {
        maxWidth: 700,
        width: '100%',
        margin : '0px auto 30px auto',
        background : 'white',
      
      },
      buttons : {
        margin: '10px auto 10px auto',
        padding: '10px auto 10px auto'
      },
      editedTag: {
        color: 'grey',
        margin: '0px 0px',
        padding: '0px 0px 0px 10px',
        width: '200px',
        zIndex : ''
      },
      noteArea: {
        maxHeight: '300px',
        padding: '0px',
        wordWrap: 'break-word',
        width: '100%'
      },
      titleArea: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px'
      },
      noteFooter : {
        display : 'flex',
        flexDirection: 'column',
        width : 'full',
        justifyContent : 'center'
         
      },
      pleaseLoginText : {
        margin : '350px auto 200px auto',
        textAlign : 'center',
        color: 'white',
        fontSize : '20px'
      },
      gridList : {
        cols : '4',
      },
    }
    
}