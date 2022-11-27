import { useState} from "react";
import ContentMenu2 from "./Content/Content";
import Button from "./Button";

function Menu2(props) {
    const [open, setOpen] = useState(false);
    return (
        <div className="mobile">
            <p>aaaaaaaaaaaaaaaaaaaaa</p>
            <Button onClick={()=> {
               setOpen(!open)
               document.querySelector(".mobile").classList.toggle('fixed');
            }} state={open}/>
            <div className={open===true?"menu-open":"menu-close"}>
                <ContentMenu2 api={props.api}/>
            </div>
        </div>
    );
  }
  
  export default Menu2;
  