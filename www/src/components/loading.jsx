import React from "react";
import { Riple } from 'react-loading-indicators';

export const Loading = () => {
    return(
        <div className="position-absolute" style={{marginTop: "40vh", width: "100%"}}>
            <Riple color="#ff1111" size="large" text="" textColor="" />
        </div>
    )
}