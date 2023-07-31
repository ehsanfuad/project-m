import React, { useState } from "react";
import ProjectHeader from "../../components/ProjectHeader/ProjectHeader";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Card from "../../components/Card/Card";
import ShowState from "../../components/ShowState/ShowState";
import InfoColumn from "../../components/InfoColumn/InfoColumn";
import { project } from "../../data/data";
import TrueFalse from "../../components/TrueFalse/TrueFalse";
import TableInfo from "../../components/TableInfo/TableInfo";
import { Button, Modal } from "@mui/material";
import ShowImage from "../../components/ShowImage/ShowImage";

function Project() {
  const firstColNum = project.columnInfo.length / 2;
  const secondColNum = project.columnInfo.length;
  const firstCol = project.columnInfo.slice(0, firstColNum);
  const secondCol = project.columnInfo.slice(firstColNum, secondColNum);
  const [active, setActive] = useState({ ...project.tableInfo[0], index: 0 });
  //dialog
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="bg-zinc-300  min-h-screen p-3 flex flex-col items-center gap-5">
      <ProjectHeader title="استانداردها، کاربردها و نقشه راه ارتباطات رادیویی" />
      {/* <div className="flex flex-row flex-initial justify-center gap-5">
        <div>right</div>
        <div> */}
      <div className="flex flex-row w-full items-center justify-center gap-5">
        <Card>
          <div className="flex flex-row items-center w-96 gap-2">
            <p className="font-iransansMedium text-sm">وضعیت پروژه</p>
            <ShowState state={project.state} />
          </div>
        </Card>
        <Card>
          <div className="flex flex-row items-center w-96">
            <p className="font-iransansMedium text-sm w-1/4">روند پیشرفت</p>
            <ProgressBar percentage={project.progress} />
          </div>
        </Card>
      </div>
      <div className="flex flex-row w-full items-center justify-center gap-5">
        <Card>
          <div className="w-96">
            <InfoColumn info={firstCol} />
          </div>
        </Card>
        <Card>
          <div className="w-96">
            <InfoColumn info={secondCol} />
          </div>
        </Card>
      </div>
      <div className="flex flex-row items-start justify-center gap-5 relative">
        <Card>
          <div className="w-96">
            <TableInfo
              active={active}
              setActive={setActive}
              tableInfo={project.tableInfo}
              handleClose={handleClose}
              handleOpen={handleOpen}
              open={open}
            />
          </div>
        </Card>
        <div className="sticky top-10 ">
          <Card>
            <div className="w-96 p-4">
              <div className="flex gap-3 flex-col w-full">
                <div className="w-full flex justify-center rounded">
                  {active.name}
                </div>
                <div className="text-sm">{active.comment}</div>
                <Button
                  variant="contained"
                  onClick={() => handleOpen()}
                >{`فایل ${active.name}`}</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
    //</div>
    //</div>
  );
}

export default Project;
