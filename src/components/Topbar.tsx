import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import '../styles.scss'

const Topbar = () => {
  const [selected, setSelected] = useState("US");

  return (
    <div className="flex items-center justify-center mb-4 bg-bgTopbarColor">
      <p className="uppercase text-sm mr-5 text-white">знакомства по всему миру</p>
      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        selectedSize={12}
        optionsSize={12}
        selectButtonClassName="menu-flags-button"
      
      />
    </div>
  );
};

export default Topbar;
