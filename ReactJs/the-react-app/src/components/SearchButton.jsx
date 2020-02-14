import React from 'react'
import './SearchButton.css'

const SearchButton = React.forwardRef(

    (props, ref) =>{

        console.log("ref",ref)
        const  getText = () =>{
            if(props.title){
                return props.title;
            }else if(props.children){
                return props.children;
            }else{
                return "Search"
            }
        }
        return(
        <button ref={ ref} {...props} className="search" >
            {getText()}</button>
        )
    }
) 
export default SearchButton;