//ACTION CREATOR

// prevent typo bugs , because if toggle_message is a string, 
//if you had a typo, it won't give u an error 
export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE';


export function toggleMessage() {
    return {
        type: 'TOGGLE_MESSAGE',
    }
}

