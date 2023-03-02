import { useState } from "react";
import { TooltipWrapper, TooltipTarget, CenterContainer, TooltipBox } from "./styled";

export default function Tooltip({  text, position, background, children  }) // children == <div> element 
{
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TooltipWrapper>  {/* <div> */}
      
      <TooltipTarget onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} > {/* <button> */}
        {children} 
      </TooltipTarget> 

      {(isHovered) && (
        <CenterContainer position={position}> {/*<div>*/}
          <TooltipBox background={background} position={position}>
            {text}
          </TooltipBox> {/* <span> */}
        </CenterContainer>  
      )}

    </TooltipWrapper>
  );
}