export const reduxAction = {
    SESSION : (data) => {
        return {
            type : 'SESSION',
            data: data,
        }
    },
    ALERT : (data) => {
        return {
            type : 'ALERT',
            data : data,
        }
    }
}