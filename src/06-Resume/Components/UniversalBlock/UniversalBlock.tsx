import React from 'react';
import css from "./UniversalBlock.module.scss"
import {TreeTitle} from "../TreeTitle/TreeTitle";
import {ResumeItem, ResumeItemType} from "../ResumeItem/ResumeItem";

import jsonState from "../../../state/state.json"

export type UniversalBlockType = {

    LeftData: LeftDataType
    RightData: RightDataType

}

type LeftDataType = {
    leftDescription: string
    leftTitle: string
}
type RightDataType = {
    rightDescription: string
    rightTitle: string
}

export const UniversalBlock: React.FC<UniversalBlockType> = (
    {LeftData, RightData}
) => {
    const {leftTitle, leftDescription} = LeftData
    const {rightTitle, rightDescription} = RightData
    // const {itemHeader, rate, years, itemDescription} = resumeItemData
    return (
        <div className={css.mainResume}>
            <div className={css.content}>
                <div className={css.columnTree}>
                    <TreeTitle description={leftDescription} title={leftTitle}/>
                    <div className={css.tree}>
                        <ResumeItem itemHeader={itemHeader} rate={rate} years={years} itemDescription={itemDescription}/>
                        <ResumeItem itemHeader={itemHeader} rate={rate} years={years} itemDescription={itemDescription}/>
                        <ResumeItem itemHeader={itemHeader} rate={rate} years={years} itemDescription={itemDescription}/>
                    </div>
                </div>
                <div className={css.columnTree}>
                    <TreeTitle description={rightDescription} title={rightTitle}/>
                    <div className={css.tree}>
                        <ResumeItem itemHeader={itemHeader} rate={rate} years={years} itemDescription={itemDescription}/>
                        <ResumeItem itemHeader={itemHeader} rate={rate} years={years} itemDescription={itemDescription}/>
                        <ResumeItem itemHeader={itemHeader} rate={rate} years={years} itemDescription={itemDescription}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
