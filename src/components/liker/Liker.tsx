import { Button } from "@components/index";
import { FunctionComponent, useState } from "react";

export const Liker: FunctionComponent = () => {
    const [isLiked, setIsLiked] = useState<boolean>(false);
  
    const toggleLike = () => setIsLiked(prevIsLiked => !prevIsLiked);
    
    let likeBtnText: 'Like' | 'Dislike' = isLiked ? 'Dislike' : 'Like';
  
    return (
      <div className="liker">
        <Button text={likeBtnText} onClick={toggleLike} />
      </div>
    );
  };
  