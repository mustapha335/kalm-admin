import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import Avatar from "./avatar-img.jpeg";
import "./userList.scss";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "username",
    headerName: "Username",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    editable: true,
  },
  {
    field: "transaction",
    headerName: "Transaction",
    width: 150,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    username: "Jon Snow",
    avatar: { Avatar },
    email: "JonSnow@gmail.com",
    status: "active",
    transaction: "$120.0",
  },
  {
    id: 2,
    username: "Jon Snow",
    avatar: { Avatar },
    email: "JonSnow@gmail.com",
    status: "active",
    transaction: "$120.0",
  },
  {
    id: 3,
    username: "Jon Snow",
    avatar: { Avatar },
    email: "JonSnow@gmail.com",
    status: "active",
    transaction: "$120.0",
  },
  {
    id: 4,
    username: "Jon Snow",
    avatar: { Avatar },
    email: "JonSnow@gmail.com",
    status: "active",
    transaction: "$120.0",
  },
  {
    id: 5,
    username: "Jon Snow",
    avatar: { Avatar },
    email: "JonSnow@gmail.com",
    status: "active",
    transaction: "$120.0",
  },
  {
    id: 6,
    username: "Jon Snow",
    avatar: { Avatar },
    email: "JonSnow@gmail.com",
    status: "active",
    transaction: "$120.0",
  },
  {
    id: 7,
    username: "Jon Snow",
    avatar: { Avatar },
    email: "JonSnow@gmail.com",
    status: "active",
    transaction: "$120.0",
  },
  {
    id: 8,
    username: "Jon Snow",
    avatar: { Avatar },
    email: "JonSnow@gmail.com",
    status: "active",
    transaction: "$120.0",
  },
  {
    id: 9,
    username: "Jon Snow",
    avatar: { Avatar },
    email: "JonSnow@gmail.com",
    status: "active",
    transaction: "$120.0",
  },
  {
    id: 10,
    username: "Jon Snow",
    avatar: { Avatar },
    email: "JonSnow@gmail.com",
    status: "active",
    transaction: "$120.0",
  },
];

const UserList = () => {
  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
