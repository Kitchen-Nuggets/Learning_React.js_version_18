import { ChildComponent } from "./ChildComponent"

export const ParentComponent = () =>
{
    //remove 'childParameter' parameter in function greetParent if trying to use the other button from ChildComponent, 
    //then remove backtick symbol (`) and use qoutation marks, then remove ${childParemeter}
    const greetParent = (childParemeter) =>
    {
        alert(`hello parent ${childParemeter}`)
    }

    return <ChildComponent greetHandler={greetParent}/>
}