import sendToAPI from "../providers/api/sendToAPI";
import apiActions from "../providers/api/apiActions";

const useToggleFullScreen = () => {
    return () => {
        sendToAPI({ action: apiActions.FULLSCREEN })
    }
}

export default useToggleFullScreen