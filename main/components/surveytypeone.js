import React from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import {json} from '../surveys/questionone.js'

const MySurvey =  (prop)=>{
    return(
        <Survey.Survey
        showCompletedPage = {false}
        onComplete={data=>console.log(data.valuesHash)}
        json={json}
        />
    )
}
export default MySurvey;