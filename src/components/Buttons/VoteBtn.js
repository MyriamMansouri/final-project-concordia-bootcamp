import React from "react";

const VoteBtn = React.forwardRef(({children}, ref) => (
  <button ref={ref}>{children}</button>
));

export default VoteBtn;
