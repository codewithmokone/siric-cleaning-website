import { Button } from '@mui/material'
import React, { Children } from 'react'

const ButtonComponent = ({children,theme}) => {
    if(theme === 'link'){
        return (
            <Button sx={{backgroundColor:'#0098C8'}}>
              {children}
            </Button>
        )
    }else{
        return (
            <Button sx={{backgroundColor:'#0098C8',color:'#FFFFFF',paddingLeft:4,paddingRight:4}}>
              {children}
            </Button>
        )
    }
}

export default ButtonComponent
