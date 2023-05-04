
import img from "../../resources/img/404.png"
import { Link } from 'react-router-dom';
const Page404 = () => {
    return (
        <div  style={{width: '100%', height: '100%'}}>
            <img className={'not_found'} src={img} alt="404" />
            <Link className={'not_found_back'}style={{display: 'block', textAlign: 'center', fontWeight: 'bold', fontSize: 24, marginTop: 30}}
            to="/">Back to the main page</Link>
        </div>
    )
}

export default Page404;