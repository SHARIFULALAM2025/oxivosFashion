import React from 'react';
import feedback from "@/app/navigation/FeedBack.json";

const FeedBack = () => {
    const allFeedBack = feedback
    const oddRow = allFeedBack.filter((item) => item.id % 2 === 0);
    const EvenRow=allFeedBack.filter((item)=>item.id %2 !==0)
    return (
        <div>

        </div>
    );
};

export default FeedBack;