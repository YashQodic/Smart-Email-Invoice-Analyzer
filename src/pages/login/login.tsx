import { IonButton, IonIcon, IonImg, IonPage, IonText } from "@ionic/react";
import "../../common.css";
import "./login.css"
import introImg from "../../assets/images/loginTransparentSvg.svg"
import { logoGoogle } from "ionicons/icons";
import { useEffect, useState } from "react";
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
const Login: React.FC = () => {
    const [accessToken, setAccessToken] = useState<any>(null);
    const [startLogin, setStartLogin] = useState("");
    useEffect(() => {
        GoogleAuth.initialize();
    }, []);
    const signIn = async () => {
        try {
            const result = await GoogleAuth.signIn();
            setStartLogin("startLogin");
            console.log('Google Sign-In success:', result);
            setAccessToken(result.email);
        } catch (err:any) {
            console.error('Google Sign-In error:', err);
            setStartLogin(JSON.stringify(err, null, 2));
        }
    };
    return (
        <>
            <IonPage className="login-container login-background-color">
                <div className="text-white">
                    {accessToken}
                    {startLogin}
                </div>
                <div className="login-item login-background-color">
                    <div className="login-logo-container">
                        <IonImg src={introImg} className="login-logo" />
                    </div>
                    <div className="login-subtitle">
                        <IonText className="login-subtitle">Let’s scan your Gmail for invoices.</IonText>
                    </div>
                    <div className="login-button-container">
                        <IonButton expand="block" className="login-button"  onClick={signIn} >
                            <IonIcon icon={logoGoogle} size="medium" slot="start" ></IonIcon>
                            Google Login
                        </IonButton>
                    </div>
                </div>
            </IonPage>
        </>
    )
}

export default Login;
