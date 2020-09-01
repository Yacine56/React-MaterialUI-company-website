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
            
            fontSize:"1rem",
            textTransform:"none",
            color:"white"
        },
        h2:{
            color:`white`,
            fontFamily:"Raleway"
            ,fontWeight:700,
            fontSize:"3rem"
            ,marginBottom:"0.5em"
            
        },
        h3:{
            color:`${arcBlue}`,
            fontFamily:"Raleway"
            ,fontWeight:700,
         
            
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
        subtitle2:{
            color:`white`,
            fontWeight:400,
            fontFamily:"Roboto",
            fontSize:"1.5rem"
            ,marginBottom:"0.2em"
        },
       
    },
    overrides:{
        MuiInputLabel:{
            root:{
                
                color:arcBlue,
                fontSize:"1rem"
            }
        },
        MuiInput:{
            underline:{
                "&:before":{
                    borderBottom:`2px solid ${arcBlue}`,
                    color:arcOrange
                },
                "&:after":{
                    borderBottom:`3px solid ${arcOrange}`
                }
            }
        }
    }  

})