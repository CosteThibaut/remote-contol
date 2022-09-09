import sendToAPI from "../providers/api/sendToAPI";
import apiActions from "../providers/api/apiActions";

const useSetChannel = () => {
    return (channel) => {
        sendToAPI({ action: apiActions.CHANNEL, options: { num: channel } })
    }
}

export default useSetChannel