import styled from "styled-components";

const Select = styled.select`
    background: url("data:image/svg+xml,<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12.6668 6L8.00016 10.6667L3.3335 6' stroke='%230F172A' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/></svg>") no-repeat;
    background-position: calc(100% - 0.75rem) center !important;
    -moz-appearance:none !important;
    -webkit-appearance: none !important; 
    appearance: none !important;
    outline: none;
    border-radius: 24px;
    border: solid #E2E8F0 1px;
    background-color: #F8FAFC;
    color: #0F172A;
    padding: 8px 16px ;
    font-size: 15px; /* Измененный размер шрифта */
    height: 36px;
    &:hover {
        background-color: #F8FAFC;
    }
`;

function TitledSelector({title, options}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div style={{color: '#94A3B8', fontSize: 'caption-rg'}}>{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Select className='py-2'>
                {options.map(optionName => {
                    return (
                        <option key={optionName}>{optionName}</option>
                    );
                })}
            </Select>
        </div>
    );
}

export default TitledSelector;
