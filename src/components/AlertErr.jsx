import React from "react";
import { CloseIcon, WarningIcon } from "./Icons";
export default function AlertErr({ title, duration }) {
  const [open, setOpen] = React.useState(duration);
  React.useEffect(() => {
    const dem = setInterval(() => {
      if (open > 0) setOpen((open) => open - 1);
    }, 1000);
    return () => {
      clearInterval(dem);
    };
  }, [open]);

  const handleClose = () => {
    setOpen(0);
  };
  if (open > 0)
    return (
      <div className="fixed bottom-5 right-5 p-4 min-w-[400px] bg-[#379ad3] rounded-lg flex items-center">
        <WarningIcon />
        <p className="ml-2 text-white">{title}</p>
        <p
          className="absolute right-3 cursor-pointer rounded-full hover:bg-[#0c4e74] hover:opacity-75 text-white"
          onClick={handleClose}
        >
          <CloseIcon />
        </p>
      </div>
    );
  return "";
}
