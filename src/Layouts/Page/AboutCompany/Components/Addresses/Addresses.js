import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div style={{border: '1px solid rgba(100, 116, 139, 0.12)', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <div>
                <div className='title' style={{marginBottom: '24px'}}>Адреса заведений</div>
                <div className='d-inline-flex flex-column gap-3'>
                    <ListElement style={{padding: '8px 0'}}>Санкт-Петербург, Невский пр-т. 28</ListElement>
                    <ListElement style={{padding: '8px 0'}}>Санкт-Петербург, Казанская ул, 7</ListElement>
                </div>
            </div>
            <PrimaryButton>Добавить филиал</PrimaryButton>
        </div>
    );
}

export default Addresses;