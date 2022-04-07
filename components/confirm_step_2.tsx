import { coreContext } from "context/core_context";
import { Observer } from "mobx-react-lite";
import React, { useContext } from "react";

const ConfirmStep2 = () => {
  const context = useContext(coreContext);

  return (
    <Observer>
      {() => (
        <div></div>
      )}
    </Observer>
  );
};

export default ConfirmStep2;
