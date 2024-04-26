import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth;
    const Button = styled.div`
        width: 217px;
        border-radius: 24px;
        border: solid #64748B 1px;
        background: #FFF;
        min-width: ${minWidth};
        color: #64748B;
        &:hover {
            width: 217px;
            border-radius: 24px;
            border: none;
            opacity: 0.8;
            background: #FFF;
        }
        &:active {
            width: 217px;
            border-radius: 24px;
            border: none;
            opacity: 0.6;
            background: #FFF);
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;