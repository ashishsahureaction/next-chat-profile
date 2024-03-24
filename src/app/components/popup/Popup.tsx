import React from 'react'
import RatingCard from './RatingCard';

type Props = {}

const Popup = (props: Props) => {
  async function handleRating (rating:number)  {
    "use server"
   console.log(`User rated the page: ${rating}`);
    return null  };


    return (
      <div>
        <RatingCard handleRating={handleRating} />
       
        
      </div>
    );};
export default Popup;
