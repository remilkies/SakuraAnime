import { useState } from 'react'
import './App.css'

import sakuraButton from "./assets/SakuraAnime/sakuraButton.png";
import sakuraSpin from "./assets/SakuraAnime/sakuraSpin.svg";

import Image from 'react-bootstrap/Image';



function Button({ children, onClick, className }) { //so you can use these things when you use the button component, like <Button onClick={handleClick} className="myButton">Click Me</Button> 
  
    const [isSpinning, setIsSpinning] = useState(false);
  
    return (
      <div className={`buttonContainer ${className || ""}`}>
        <button
        onClick={onClick}
          onMouseEnter={() => setIsSpinning(true)}
          onMouseLeave={() => setIsSpinning(false)}
        >
          <Image
            src={isSpinning ? sakuraSpin : sakuraButton}
            className="sakuraButton"
            alt="Flower Button"
          />
        </button>
  
        <p className='navLabel'>{children}</p>
      </div>
    );
  }

export default Button;