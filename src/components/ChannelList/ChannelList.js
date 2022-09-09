import { Grid } from 'antd-mobile'
import "./ChannelList.css"
import availableChannels from "../../providers/data/availableChannels"


const ChannelList = ({ selectedItem, setSelectedChannel }) => {

    const getChannelClassName = (channelIndex) => "channel" + (selectedItem === channelIndex ? " selected" : "")

    return (
        <div>
            <Grid columns={2} gap={15} className="channels">
                {availableChannels.map((channel, index) => (
                    <Grid.Item
                        key={channel.name}
                        className={getChannelClassName(index)}
                        onClick={() => setSelectedChannel(index)}
                    >
                        <img src={channel.url} alt={channel.name} className="channel-image" />
                        <h3>{channel.name}</h3>
                    </Grid.Item>
                ))}

            </Grid>
        </div>
    );
}

export default ChannelList;
