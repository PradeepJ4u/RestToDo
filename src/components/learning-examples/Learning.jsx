import MyFirstComponent from './MyFirstComponent'
import MySecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import ForthComponent from './ForthComponent'
import {FifthComponent} from './ThirdComponent'
import LearningJavaScript from './LearningJavaScript'

export default function LearningComponent (){
    return(
      <div className="LearningComponent">
        <MyFirstComponent></MyFirstComponent>
        <MySecondComponent></MySecondComponent>
        <ThirdComponent></ThirdComponent>
        <ForthComponent></ForthComponent>
        <FifthComponent></FifthComponent>
        <LearningJavaScript />
      </div>
    )
  }