import { IonButton,  IonIcon, IonImg, IonPage, IonText } from "@ionic/react";
import "../../common.css";
import "./login.css"
import introImg from "../../assets/images/loginTransparentSvg.svg"
import logo from "../../assets/images/logo.png"
import { arrowForwardCircle} from "ionicons/icons"
const Login:React.FC = () => {
    return (
        <IonPage className="login-container login-background-color">
            <div className="login-logo-container">
                <IonImg src={logo} className="login-logo"/>
            </div>
            <div className="login-item login-background-color">
                <div className="login-logo-container">
                    <IonImg src={introImg} className="login-logo"/>
                </div>
                <div className="login-subtitle">
                    <IonText className="login-subtitle">Let’s scan your Gmail for invoices.</IonText>
                </div>
                <div className="login-button-container">
                    <IonButton expand="block" className="login-button">
                        Get Started
                        <IonIcon icon={arrowForwardCircle} slot="end" color="white" size="medium"></IonIcon>
                    </IonButton>
                </div>
            </div>
        </IonPage>

    )
}

export default Login;