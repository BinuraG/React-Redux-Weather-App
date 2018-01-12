import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

const Chart = function(props) {

    return (
        <div>
            <Sparklines height={120} width={180} data={props.data} margin={5}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>  
            <div>{average(props.data)} {props.units}</div>
        </div>
    );
};


function average(data) {
    return Math.round(_.sum(data)/data.length);
}

export default Chart;