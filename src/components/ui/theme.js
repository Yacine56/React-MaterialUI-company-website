import {createMuiTheme} from '@material-ui/core/styles'

const arcBlue="#0B5589"
const arcOrange="#FFBA60"
const arcGrey="#868686"


export default createMuiTheme({
       palette:{
           common:{
               blue:`${arcBlue}`,
               orange:`${arcOrange}`
           },
          primary:{
              main:`${arcBlue}`
            },
          secondary:{
              main:`${arcOrange}`
          },
         
       },
       typography:{
        tab:{
            fontFamily:"Raleway",
            fontWeight:"700",
            fontSize:"1rem",        
        },
        button:{
            fontFamily:"pacifico",
            fontSize:"1rem",
            textTransform:"none",
            color:"white"
        },
        h4:{
            color:`${arcBlue}`,
            fontFamily:"Raleway"
            ,fontWeight:700,
            fontSize:"2.5rem"
            
        },
        h5:{
            color:`${arcBlue}`,
            fontFamily:"Raleway"
            ,fontWeight:700,
            fontSize:"2rem"
            
        },
        subtitle1:{
            color:`${arcGrey}`,
            fontWeight:300,
            fontFamily:"Roboto",
            fontSize:"1.2rem"
        },
       
    }  

})