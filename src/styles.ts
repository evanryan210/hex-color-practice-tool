import { mergeStyles } from "@fluentui/merge-styles";

export const container = mergeStyles({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '20px',
})
export const buttonContainer = mergeStyles({
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto'
})
export const button = mergeStyles({
    width: '100px',
    height: '50px'
})
export const colorBoxText = mergeStyles({
    color:'white',
    textAlign: 'center', 
    fontSize: '40px', 
    textShadow: '2px 2px black' 
})
export const colorBox = mergeStyles({
    width: '25%', aspectRatio: '1/1', border: '5px solid black', display: 'flex', justifyContent:'center', alignItems: 'center' 
})