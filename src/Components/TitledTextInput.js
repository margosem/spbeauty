import styled from "styled-components";

const Input = styled.input`
    border-radius: 24px;
    right: 16px;
    border: solid #E2E8F0 1px;
    background: #F8FAFC;
    color: #0F172A;
    padding: 8px 16px;
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

const Title = styled.div`
    color: #94A3B8;
    font-size: caption-rg;
`;

function TitledTextInput({title, def}) {
    const TitleComponent = title === undefined ? 
        (<div></div>) : 
        (<Title>{title}</Title>);
    return (
        <div className='d-flex flex-column gap-2'> {/* уменьшено расстояние между заголовком и селектом */}
            {TitleComponent}
            <Input className='text-rg' defaultValue={def}></Input>
        </div>
    );
}

export default TitledTextInput;
