import style from './index.module.css';
import phone from '../../../asset/phone.png';


const SectionTwo = () => {
    return (
        <>
            <div className={style.thirdHeroSection}>
                <img src={phone} alt="phone image"/>
                <div>
                    <h2>How to design your site footer like <br/>we did</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br/>
                        sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. <br/>
                        Pellentesque placerat vestibulum lorem sed porta. Nullam mattis <br/>
                        tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam <br/>
                        quis massa pulvinar, aliquam quam vitae, tempus sem. Donec <br/>elementum pulvinar odio.</p>
                    <button
                        style={{color: "#ffffff", background: "#4caf4f", border: "none", borderRadius: "5px", padding: "15px 30px"}}>Learn
                        More
                    </button>
                </div>
            </div>
        </>
    );


}

export default SectionTwo;