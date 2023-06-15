import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MenuOptions from "./MenuOptions";
import styles from "./CustomerTable.module.css";

const CustomerDetails = [
  {
    SrNo: "1",
    ID: "#1234",
    CustomerName: "Ashish",
    Address: "SusGaon,Pune",
    Contact: "8087071888",
    Action: <MoreHorizIcon />,
  },
  { SrNo: "2", ID: "#1234", CustomerName: "Yash", Address: "Nashik", Contact: "8087071888", Action: <MoreHorizIcon /> },
  {
    SrNo: "3",
    ID: "#1234",
    CustomerName: "Komal",
    Address: "Yerwada,Pune",
    Contact: "8087071888",
    Action: <MoreHorizIcon />,
  },
  {
    SrNo: "4",
    ID: "#1234",
    CustomerName: "Yash",
    Address: "Nashik",
    Contact: "8087071888",
    Action: <MoreHorizIcon />,
  },
  {
    SrNo: "5",
    ID: "#1234",
    CustomerName: "Ashish",
    Address: "SusGaon,Pune",
    Contact: "8087071888",
    Action: <MoreHorizIcon />,
  },
  {
    SrNo: "6",
    ID: "#1234",
    CustomerName: "Ashish",
    Address: "SusGaon,Pune",
    Contact: "8087071888",
    Action: <MoreHorizIcon />,
  },
  {
    SrNo: "7",
    ID: "#1234",
    CustomerName: "Ashish",
    Address: "SusGaon,Pune",
    Contact: "8087071888",
    Action: <MoreHorizIcon />,
  },
  {
    SrNo: "8",
    ID: "#1234",
    CustomerName: "Ashish",
    Address: "SusGaon,Pune",
    Contact: "8087071888",
    Action: <MoreHorizIcon />,
  },
  {
    SrNo: "9",
    ID: "#1234",
    CustomerName: "Ashish",
    Address: "SusGaon,Pune",
    Contact: "8087071888",
    Action: <MoreHorizIcon />,
  },
  {
    SrNo: "10",
    ID: "#1234",
    CustomerName: "Ashish",
    Address: "SusGaon,Pune",
    Contact: "8087071888",
    Action: <MoreHorizIcon />,
  },
  {
    SrNo: "11",
    ID: "#1234",
    CustomerName: "Ashish",
    Address: "SusGaon,Pune",
    Contact: "8087071888",
    Action: <MoreHorizIcon />,
  },
];
const CustomerTable = () => {
  const Headers = ["SrNo", "ID", "CustomerName", "Address", "Contact", "Action"];
  return (
    <Table component={Paper}>
      <TableHead>
        <TableRow>
          {Headers.map((header, index) => (
            <TableCell className={styles.header} key={index}>
              {header}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {CustomerDetails.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.SrNo}</TableCell>
            <TableCell>{row.ID}</TableCell>
            <TableCell>{row.CustomerName}</TableCell>
            <TableCell>{row.Address}</TableCell>
            <TableCell>{row.Contact}</TableCell>
            <TableCell>
              <MenuOptions Action={row.Action} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomerTable;
