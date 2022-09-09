import { StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons'
import availableChannels from "../../providers/data/availableChannels"
import "./DetailFooter.css"
import RoundedButton from './../RoundedButton/RoundedButton';

const DetailFooter = ({ openPanel, channelIndex, onLeftClick, onRightClick }) => {
    const channel = availableChannels[channelIndex]
    return (
        <div className="container">
            <RoundedButton className="arrowButton" onClick={onLeftClick}>
                <StepBackwardOutlined style={{ fontSize: 24 }} />
            </RoundedButton>

            <div className="center" onClick={() => openPanel()}>
                <img src={channel.url} alt={channel.name} className="selected-channel-image" />
            </div>
            <RoundedButton className="arrowButton " onClick={onRightClick} >
                <StepForwardOutlined style={{ fontSize: 24 }} />
            </RoundedButton>
        </div>
    );
}

export default DetailFooter;
