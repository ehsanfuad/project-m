import React from "react";
import DataTable from "../../components/DataTable";
import { projects } from "../../data/data";

function Proj() {
  const columns = [
    { field: "id", headerName: "شماره", width: 90 },
    {
      field: "img",
      headerName: "عکس",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "title",
      type: "string",
      headerName: "عنوان",
      width: 250,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 150,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 200,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 150,
      type: "boolean",
    },
  ];
  return <DataTable slug="products" columns={columns} rows={projects} />;
}

export default Proj;
