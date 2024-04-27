import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
    outline: none;
    border-radius: 0px;
    background-color: none;
    color: #0F172A;
    font-size: 15px;
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row align-items-center align-self-stretch gap-2'>
            <Option className='flex-grow-1 caption-rg'>{props.children}</Option>
            <div className='pe-1'>
                <IconOnlyButton icon={<EditIcon/>}/>
                </div>
                <div className='padding-right-icon'>
                <IconOnlyButton icon={<RemoveIcon/>}/>
                </div>
        </div>
    );
}

export default ListElement;