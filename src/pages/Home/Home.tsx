import { IonContent, IonHeader } from "@ionic/react";

/* Components and Layouts */
import Navbar from "../../components/Navbar";
import DisplayCards from "../../layouts/DisplayCards";

const Home: React.FC = () => {
    return (
        <>
            <IonHeader>
                <Navbar />
            </IonHeader>
            <IonContent>
                <DisplayCards />
            </IonContent>
        </>
    );
};

export default Home;
