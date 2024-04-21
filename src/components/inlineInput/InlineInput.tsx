import Input from "../ui/Input";
import "./inlineInput.css";

const InlineInput: React.FC = () => {
  return (
    <>
      <h1>#1</h1>
      <div className="input-controler">
        <Input placeholder="Your text" label="Enter your value:" />
      </div>
    </>
  );
};

export default InlineInput;
