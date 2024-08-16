import img from '../../../assets/infocom.png'
import CardDesign from './cart/CardDesign';


const Innocation = () => {
    const items=['Innovation Team','Innovation Idea','Innovation work plan/publication','piloting project']
    return (
        <div>
            <CardDesign name='Innovation Activites' image={img} items={items}></CardDesign>
        </div>
    );
};

export default Innocation;