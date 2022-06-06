import { ChildComponent } from "./ChildComponent"

export const ParentComponent = () =>
{
    const greetParent = (childParemeter) =>
    {
        alert(`hello parent ${childParemeter}`)
    }

    return <ChildComponent greetHandler={greetParent}/>
}