import React from "react";
import BackButton from "../../components/BackButton/BackButton";
import { Divider } from "@mui/material";
function ProjectHeader({ title }) {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex flex-row justify-between items-center">
        <p></p>
        <p className="font-iransansBlack text-2xl pr-20">{title}</p>
        <BackButton title="بازگشت" backUrl="/projects" />
      </div>
      <Divider sx={{ borderBottomWidth: 3, borderColor: "black" }} />
    </div>
  );
}

export default ProjectHeader;
