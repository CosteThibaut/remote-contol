import { FloatingPanel, NavBar } from 'antd-mobile'
import { useRef, useState } from 'react';
import ChannelList from '../ChannelList/ChannelList';
import ControlSettings from '../ControlSettings/ControlSettings';
import DetailFooter from '../DetailFooter/DetailFooter';
import availableChannels from "../../providers/data/availableChannels"

import "./App.css"
import useSetChannel from './../../hooks/useSetChannel';

const App = () => {
    const ref = useRef()
    const PANELMAXHEIGHT = window.innerHeight - 48
    const PANELMINHEIGHT = 80

    const anchors = [PANELMINHEIGHT, PANELMAXHEIGHT]

    const [selectedChannel, setSelectedChannel] = useState(0)
    const [panelHeight, setPanelHeight] = useState(PANELMINHEIGHT)
    const changeChannelAPI = useSetChannel()

    const toggleDetail = () => ref.current.setHeight(panelHeight === PANELMAXHEIGHT ? PANELMINHEIGHT : PANELMAXHEIGHT)

    const previousChannel = () => changeChannel(selectedChannel === 0 ? availableChannels.length - 1 : selectedChannel - 1)
    const nextChannel = () => changeChannel(selectedChannel === availableChannels.length - 1 ? 0 : selectedChannel + 1)

    const changeChannel = (channelNum) => {
        setSelectedChannel(channelNum)
        changeChannelAPI(availableChannels[channelNum].num)
    }

    return (
        <div className="App">
            <NavBar className="header" back={null}>
                ElectronTV
            </NavBar>

            <ChannelList selectedItem={selectedChannel} setSelectedChannel={changeChannel} />

            <FloatingPanel ref={ref} className="details" anchors={anchors} onHeightChange={(height) => setPanelHeight(height)}>
                <DetailFooter
                    openPanel={toggleDetail}
                    channelIndex={selectedChannel}
                    onLeftClick={() => previousChannel()}
                    onRightClick={() => nextChannel()}
                />
                <ControlSettings />
            </FloatingPanel>
        </div>
    );
}

export default App;
