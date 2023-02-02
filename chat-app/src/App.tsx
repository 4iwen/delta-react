import './App.css';
import 'sendbird-uikit/dist/index.css';
import {App as SendbirdApp} from 'sendbird-uikit';

const APP_ID = 'E5225E4F-8898-4B26-AE4D-AADD82F8A353';

function App() {
    return (
        <div className="App">
            <SendbirdApp appId={APP_ID} userId="user-5"/>
        </div>
    )
}

export default App;