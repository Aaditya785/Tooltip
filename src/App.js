import Tooltip from "./components/tooltip";
import "./styles.css";



export default function App() {
  return (
    <div className="App">
      
      <Tooltip text="I am a tooltip" position="top" background="222831">
        <div>Top</div>
      </Tooltip>

      <Tooltip text="I am a tooltip" position="left" background="00adb5">
        <div>Left</div>
      </Tooltip>

      <Tooltip text="I am a tooltip" position="right" background="0e0ee5">
        <div>Right</div>
      </Tooltip>

      <Tooltip text="I am a tooltip" position="bottom" background="393e46">
        <div>Bottom</div>
      </Tooltip>
      
    </div>
  );
}
