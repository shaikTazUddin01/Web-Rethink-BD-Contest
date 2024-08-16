
import CardDesign from './cart/CardDesign';
import img from '../../../assets/rightToInFo.jpg'

const RightInfo = () => {
    const items=['Designated Officer & Appellate Authority','Application and appeal forms','Self Expressible Information/Progress','Laws/Rules/Workplan/Reports']
    return (
        <div>
            <CardDesign name={'Right to Information'} image={img} items={items}></CardDesign>
        </div>
    );
};

export default RightInfo;