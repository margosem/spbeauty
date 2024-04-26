import styled from "styled-components";

const Input = styled.input`
    border-radius: 24px;
    right: 16px;
    border: solid #E2E8F0 1px ;
    background: #F8FAFC);
    color: #0F172A;
    &:hover {
        border-radius: 24px;
        border: solid #E2E8F0 1px;
        border: none;
        opacity: 0.8;
        background: #F8FAFC;
    }
    &:active {
        border-radius: 24px;
        border: solid #E2E8F0 1px;
        opacity: 0.8;
        background: #F8FAFC;
    
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div>{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input className='caption-rg p-2' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;