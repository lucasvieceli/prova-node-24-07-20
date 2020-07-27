import * as moment from 'moment-timezone';


export const setTimesone = () => {
    moment.tz.setDefault('America/Sao_Paulo');
}
export const getDate = (date?, toDate = true): any => {
    setTimesone()
    if(date && date.toString().match(/\d+/g)[0].length == date.length){
        date = parseInt(date);
    }

    const  value = (date) ? moment(date) : moment();

    if(toDate){
        return value.toDate();
    }

    return value;
}
