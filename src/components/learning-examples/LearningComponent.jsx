import FristComponent, { FifthComponent } from "./FirstComponent";
import FourthComponent from "./FourthComponent";
import LearningJavaScript from "./LearningJavaScript";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";

export default function LearningComponent(){
    return(
        <>
            <FristComponent   />
            <SecondComponent  />
            <ThirdComponent   />
            <FourthComponent  />
            <FifthComponent   />
            <LearningJavaScript/>
        </>
    );
}