import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '144px' : props.minWidth; 
    const Button = styled.div`
    width: 217px;
    border-radius: 24px;
    background: #3B82F6;
    min-width: ${minWidth};
    color: #FFF;
    &:hover {
        width: 217px;
        border-radius: 24px;
        opacity: 0.8;
        background: #3B82F6;
    }
    &:active {
        width: 217px;
        border-radius: 24px;
        opacity: 0.6;
        background: #0F172A);
    }
    `;
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;