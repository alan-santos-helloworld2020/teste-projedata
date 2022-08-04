import './style.css'
import reactLogo from "../assets/react.svg";

export default function Home(){
    return(
           <div className="row">
            <div className="col s12 center">
                <img 
                src={reactLogo}
                id="imgHome"
                className="center"                
                />
            </div>
           </div>
    
    )
}