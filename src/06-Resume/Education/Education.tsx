import React from 'react';
import {UniversalBlock, UniversalBlockType} from "../Components/UniversalBlock/UniversalBlock";

type EducationType = {
    education: UniversalBlockType
}

export const Education: React.FC<EducationType> = (
    {education}
) => {
    const {resumeItemData, LeftData, RightData} = education
    return (
        <>
            <UniversalBlock LeftData={LeftData} RightData={RightData}/>
        </>
    );
};
