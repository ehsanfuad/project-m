import React from "react";
import ProjectHeader from "../../components/ProjectHeader/ProjectHeader";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

function Project() {
  return (
    <div className="bg-zinc-100 w-screen h-screen p-3 flex flex-col items-center gap-5">
      <ProjectHeader title="استانداردها، کاربردها و نقشه راه ارتباطات رادیویی" />
      <div className="w-1/2 rounded-md shadow-md shadow-lime-200 bg-white p-3">
        <div className="flex flex-row">
          <p className="font-iransans text-sm">روند پیشرفت</p>
          <ProgressBar percentage={10} />
        </div>
      </div>
      <div className="w-1/3 rounded-md bg-white">project state</div>
    </div>
  );
}

export default Project;
