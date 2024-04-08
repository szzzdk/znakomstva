import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const Topbar = () => {
  const [selected, setSelected] = useState("US");
  return (
    <div className="flex items-center justify-center mb-4">
      <p className="uppercase text-sm mr-5">знакомства по всему миру</p>
      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        selectedSize={12}
        optionsSize={12}
        
        
      />
    </div>
  );
};

export default Topbar;
