import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import ContentComponent from "./components/Content";
import ImageComponent from "./components/images/Img";
import Logo1 from '../assets/icon-1.png';
import Logo2 from '../assets/icon-2.png';
import Logo3 from '../assets/icon-3.png';
import { InputComponent } from './components/input/Input';

export default function App(){

    function clickMe(){
        alert('Hi You');
    }

    const mychange = event => {
        console.log(event.target.value)
    }

    return (
        <>
            {/* goi component ra su dung */}
            {/* nested component */}
            <HeaderComponent/> 
            {/* h4 jsx cua component ContentComponent */}
            <ContentComponent>
                {/* h4 : props children cua compoent ContentComponent */}
                <h4> Content</h4>
                {/* props children: tat ca noi dung nam trong the mo va the dong cua 1 component */}

                {/* anh logo 1 */}
                <ImageComponent
                    w={100}
                    h={100}
                    source={Logo1}
                />
                <ImageComponent
                    w={200}
                    h={200}
                    source={Logo2}
                />
                <ImageComponent
                    w={300}
                    h={300}
                    source={Logo3}
                />
                <InputComponent
                    type="text" name="user"
                    change={mychange}
                />
                <InputComponent type="password" name="pass" />
                <br/>
                <button
                    onClick={clickMe}
                > click me </button>
            </ContentComponent>
            <FooterComponent/>
        </>
    ) 
}