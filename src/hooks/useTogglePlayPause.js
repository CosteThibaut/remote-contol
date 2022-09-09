import sendToAPI from "../providers/api/sendToAPI";
import apiActions from "../providers/api/apiActions";

const useTogglePlayPause = () => {
    return () => {
        sendToAPI({ action: apiActions.PLAY })
    }
}

export default useTogglePlayPause