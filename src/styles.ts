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