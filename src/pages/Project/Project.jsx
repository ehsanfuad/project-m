import React, { useEffect, useState } from "react";
import ProjectHeader from "../../components/ProjectHeader/ProjectHeader";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Card from "../../components/Card/Card";
import ShowState from "../../components/ShowState/ShowState";
import InfoColumn from "../../components/InfoColumn/InfoColumn";
import { project } from "../../data/data";
import TrueFalse from "../../components/TrueFalse/TrueFalse";
import TableInfo from "../../components/TableInfo/TableInfo";
import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  Modal,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import ShowImage from "../../components/ShowImage/ShowImage";
import ShowComponent from "../../components/ShowComponent/ShowComponent";
import { useLocation, useParams } from "react-router-dom";
import { MdClose } from "react-icons/md";
import CirclePhase from "../../components/CirclePhase/CirclePhase";

function Project() {
  const params = useParams();
  const projectId = params.id;

  let currentProject = project.find((item) => item.id == projectId);

  const firstColNum = currentProject.columnInfo.length / 2;
  const secondColNum = currentProject.columnInfo.length;
  const firstCol = currentProject.columnInfo.slice(0, firstColNum);
  const secondCol = currentProject.columnInfo.slice(firstColNum, secondColNum);
  const [active, setActive] = useState({
    ...currentProject.tableInfo[0],
    index: 0,
  });
  //dialog
  const [open, setOpen] = useState(false);
  //show more static info (column info)
  const [openMoreStaticInfo, setOpenMoreStaticInfo] = useState(false);
  //fulll page dialog
  const [openPhase, setOpenPhase] = useState(false);
  //current report
  const [currentReport, setCurrentReport] = useState(currentProject.reports[0]);
  //open tooltip
  const [openTooltip, setOpenTooltip] = useState(false);
  const handleClickReport = (report) => {
    setOpenPhase(true);
    setCurrentReport(report);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getCurrentState = (states) => {
    let current;
    states.map((item, index) => {
      if (item.state) {
        current = item;
      }
    });
    return current;
  };
  console.log(currentReport);
  return (
    <div className="bg-zinc-300  min-h-screen p-3 flex flex-col items-center gap-5">
      <ProjectHeader title="استانداردها، کاربردها و نقشه راه ارتباطات رادیویی" />
      <div className="flex flex-row w-full items-center justify-center gap-5">
        <Card>
          <div className="flex flex-row items-center w-96 gap-2">
            <p className="font-iransansMedium text-sm">وضعیت پروژه</p>
            <ShowState state={currentProject.state} />
          </div>
        </Card>
        <Card>
          <div className="flex flex-row items-center w-96">
            <p className="font-iransansMedium text-sm w-1/4">روند پیشرفت</p>
            <ProgressBar percentage={currentProject.progress} />
          </div>
        </Card>
      </div>
      <div className="flex flex-row w-full h-fit items-center justify-center">
        <Card>
          <div className="flex flex-row gap-5">
            <div className="w-96 mx-1.5">
              <InfoColumn info={firstCol} />
              <div
                onClick={() => setOpenMoreStaticInfo(true)}
                className="text-lime-600 text-sm underline underline-offset-4 pt-2 cursor-pointer"
              >
                مشاهده بیشتر...
              </div>
            </div>
            <div className="w-96 mx-1.5">
              <div className="flex flex-col gap-2">
                {currentProject.reports.map((report, index) => (
                  <div
                    onClick={() => handleClickReport(report)}
                    className="flex flex-row gap-2 items-center border rounded px-2 py-5 bg-gradient-to-r from-lime-100 to-lime-300 cursor-pointer"
                  >
                    <div className="text-xs w-35">
                      {`${report.name} پروژه در مرحله:`}
                    </div>
                    {/* <div className="text-lime-100 bg-lime-900 px-2 rounded-md">
                      {getCurrentState(report.states).name}
                    </div> */}
                    {report.states.map((item, index) => (
                      <Tooltip
                        arrow
                        // open={}
                        placement="top"
                        title={item.name}
                      >
                        <div className="flex gap-2">
                          <CirclePhase state={item.state} />
                        </div>
                      </Tooltip>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="flex flex-row items-start justify-center gap-5 relative">
        <Card>
          <div className="w-96">
            <TableInfo
              active={active}
              setActive={setActive}
              tableInfo={currentProject.tableInfo}
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
      <Modal
        open={openMoreStaticInfo}
        onClose={() => setOpenMoreStaticInfo(false)}
      >
        <ShowComponent
          componentToShow={
            <Card>
              <div className="flex flex-row gap-5">
                <div className="w-96">
                  <InfoColumn info={firstCol} />
                </div>
                <div className="w-96">
                  <InfoColumn info={secondCol} />
                </div>
              </div>
            </Card>
          }
          setOpenMoreStaticInfo={setOpenMoreStaticInfo}
        />
      </Modal>
      <Dialog fullScreen open={openPhase} onClose={() => setOpenPhase(false)}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setOpenPhase(false)}
              aria-label="close"
            >
              <MdClose />
            </IconButton>
            <div className="text-lg">{`${currentReport.name} پروژه`}</div>
            <div className="w-9"></div>
          </Toolbar>
        </AppBar>
        <div className="w-full flex flex-col justify-center px-10">
          {/* dialog content */}
          <div className="w-full flex gap-4 justify-between">
            <div className="flex items-center mt-2 w-1/3 border px-3 py-5 rounded bg-lime-100 gap-2">
              وضعیت فاز: <ShowState state={currentReport.start} />
            </div>
            <div className="flex items-center mt-2 w-1/3 border px-3 py-5 rounded bg-lime-100 gap-2">
              مرحله:
              <div className="text-lime-100 bg-lime-900 px-2 rounded-md">
                {getCurrentState(currentReport.states).name}
              </div>
              <div className="text-lime-100 bg-lime-900 px-2 rounded-md">
                {getCurrentState(currentReport.states).date}
              </div>
            </div>
            <div className="flex items-center mt-2 w-1/3 border px-3 py-5 rounded bg-lime-100 gap-2">
              <div className="w-3/6"> درصد پیشرفت فاز</div>
              <ProgressBar percentage={currentReport.progress} />
            </div>
          </div>
          <div>
            {/* az inja */}
            <div className="flex flex-row items-start justify-center gap-5 relative p-5 bg-gray-200">
              <Card>
                <div className="w-96">
                  <TableInfo
                    active={active}
                    setActive={setActive}
                    tableInfo={currentReport.states}
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
        </div>
      </Dialog>
    </div>
  );
}

export default Project;
