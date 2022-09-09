import { Slider, Toast } from "antd-mobile";
import { SoundOutline, SoundMuteOutline } from 'antd-mobile-icons'
import { Grid } from "antd-mobile/es/components/grid/grid";
import { useState } from "react";
import ActionButton from "../ActionButton/ActionButton";
import "./ControlSettings.css"
import { PlayCircleOutlined, FullscreenOutlined } from '@ant-design/icons'
import useSetSoundLevel from './../../hooks/useSetSoundLevel';
import useTogglePlayPause from './../../hooks/useTogglePlayPause';
import useToggleFullScreen from './../../hooks/useToggleFullScreen';

const ControlSettings = () => {
    const [soundLevel, setSoundLevel] = useState(50);
    const changeSoundLevelAPI = useSetSoundLevel()
    const tooglePlayPauseAPI = useTogglePlayPause()
    const toogleFullScreenAPI = useToggleFullScreen()


    const updateSound = (value) => {
        Toast.show(`Sound：${value}%`)
        setSoundLevel(value)
        changeSoundLevelAPI(value)
    }
    const buttonIconSize = 70
    return (
        <div className="settings-container">
            <h3>Sound :</h3>
            <Slider
                defaultValue={soundLevel}
                onAfterChange={updateSound}
                icon={soundLevel === 0 ? <SoundMuteOutline /> : <SoundOutline />}
                className="slider"
            />
            <Grid columns={2} gap={15} className="buttonsContainer">
                <Grid.Item>
                    <ActionButton onClick={tooglePlayPauseAPI}>
                        <PlayCircleOutlined style={{ fontSize: buttonIconSize }} />
                    </ActionButton>
                </Grid.Item>
                <Grid.Item>
                    <ActionButton onClick={toogleFullScreenAPI}>
                        <FullscreenOutlined style={{ fontSize: buttonIconSize }} />
                    </ActionButton>
                </Grid.Item>
            </Grid>
        </div >
    );
}

export default ControlSettings;
