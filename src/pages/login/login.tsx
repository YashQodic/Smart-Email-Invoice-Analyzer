import { IonButton, IonIcon, IonImg, IonModal, IonPage, IonText } from "@ionic/react";
import "../../common.css";
import "./login.css"
import introImg from "../../assets/images/loginTransparentSvg.svg"
import logo from "../../assets/images/logo.png"
import { arrowForwardCircle } from "ionicons/icons"
import { useState } from "react";
const Login: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <IonPage className="login-container login-background-color">
                <div className="login-item login-background-color">
                    <div className="login-logo-container">
                        <IonImg src={introImg} className="login-logo" />
                    </div>
                    <div className="login-subtitle">
                        <IonText className="login-subtitle">Let’s scan your Gmail for invoices.</IonText>
                    </div>
                    <div className="login-button-container">
                        <IonButton onClick={() => {
                            setShowModal(true)
                        }} expand="block" className="login-button">
                            Get Started
                            <IonIcon icon={arrowForwardCircle} slot="end" color="white" size="medium"></IonIcon>
                        </IonButton>
                    </div>
                </div>
            </IonPage>
            <IonModal
                isOpen={showModal}
                onDidDismiss={() => setShowModal(false)}
                breakpoints={[0, 0.5, 0.8]}
                initialBreakpoint={0.3}
                handleBehavior="cycle"
            >
                <div style={{ padding: 20 }}>
                    <h2 className="login-modal-title">Login</h2>
                </div>
            </IonModal>
        </>
    )
}

export default Login;
