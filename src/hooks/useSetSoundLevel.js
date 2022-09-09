import sendToAPI from "../providers/api/sendToAPI";
import apiActions from "../providers/api/apiActions";

const useSetSoundLevel = () => {
    return (level) => {
        sendToAPI({ action: apiActions.SOUND, options: { level: level } })
    }
}

export default useSetSoundLevel