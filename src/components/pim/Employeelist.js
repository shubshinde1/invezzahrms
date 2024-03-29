import React from "react";
import { Link } from "react-router-dom";
import Menutabs from "./Menutabs";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { IoEye } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { FaFilterCircleXmark } from "react-icons/fa6";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { makeStyles } from "@mui/styles";
import { createGlobalStyle } from "styled-components";
import classNames from "classnames";
import { motion } from "framer-motion";

import Tooltip from "@mui/material/Tooltip";

const useStyles = makeStyles({
  root: {
    "& .MuiInputLabel-root": {
      fontFamily: "euclid",
      fontSize: 14,
      paddingTop: -2.5,
      fontWeight: "bold",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "black",
      fontWeight: "bold",
      fontSize: 15,
    },
    "& .MuiInputBase-root": {
      backgroundColor: "#f0f9ff",
      border: "0 none",
      borderRadius: 7,
      height: 50,
      width: "100%",
      overflow: "hidden",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "gray",
    },
    "& .Muilplaceholder": {
      fontFamily: "euclid",
      fontSize: 10,
    },
    "& .MuiOutlinedInput-input": {
      fontFamily: "euclid-medium",
      fontSize: 14,
    },
    "& ::placeholder": {
      fontSize: 12,
    },
    display: "block",
    width: "100%",
  },
});

const GlobalStyles = createGlobalStyle`
.MuiPaper-root{
  border-radius:10px;
} 
.MuiList-root {
  height: 215px;
} 
.MuiMenuItem-root {
    font-family: Euclid;
    font-size: 14px;
    font-weight: bold;
    margin: auto 8px;
    border-radius: 7px;
    margin-top:5px;
  }
  .MuiMenuItem-root:hover {
    background-color:#e0f2fe;
    padding-left: 15px;
  }
  .MuiMenuItem-root:hover {
    transition-duration: 0.2s;
  }

  ::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
    
}
`;

const columns = [
  { id: "empid", label: "Employee ID", minWidth: 120 },
  { id: "ename", label: "Employee Name", minWidth: 120 },
  { id: "designation", label: "Designation", minWidth: 120 },
  { id: "jdate", label: "Joining Date", minWidth: 120 },
  { id: "status", label: "Status", minWidth: 120 },
  { id: "mark", label: "Mark" },
  { id: "actions", label: "Actions", minWidth: 80 },
];

function createData(empid, ename, designation, mark, jdate, status) {
  return { empid, ename, designation, mark, jdate, status };
}

const rows = [
  {
    empid: "EMP001",
    ename: "John Doe",
    designation: "Software Engineer",
    jdate: "01/01/2022",
    status: "Active",
    mark: Math.floor(Math.random() * 2), // Randomly generates either 0 or 1
  },
  {
    empid: "EMP002",
    ename: "Jane Smith",
    designation: "Project Manager",
    jdate: "05/15/2021",
    status: "Inactive",
    mark: Math.floor(Math.random() * 2), // Randomly generates either 0 or 1
  },
  {
    empid: "EMP003",
    ename: "Alice Johnson",
    designation: "Data Analyst",
    jdate: "03/20/2023",
    status: "Inactive",
    mark: Math.floor(Math.random() * 2), // Randomly generates either 0 or 1
  },
  {
    empid: "EMP004",
    ename: "Michael Brown",
    designation: "Software Developer",
    jdate: "11/10/2021",
    status: "Active",
    mark: Math.floor(Math.random() * 2), // Randomly generates either 0 or 1
  },
  {
    empid: "EMP005",
    ename: "Emma Garcia",
    designation: "Business Analyst",
    jdate: "07/08/2022",
    status: "Active",
    mark: Math.floor(Math.random() * 2), // Randomly generates either 0 or 1
  },
  {
    empid: "EMP006",
    ename: "William Martinez",
    designation: "Quality Assurance",
    jdate: "09/25/2023",
    status: "Active",
    mark: Math.floor(Math.random() * 2), // Randomly generates either 0 or 1
  },
  {
    empid: "EMP007",
    ename: "Olivia Anderson",
    designation: "UI/UX Designer",
    jdate: "04/05/2021",
    status: "Inactive",
    mark: Math.floor(Math.random() * 2), // Randomly generates either 0 or 1
  },
  {
    empid: "EMP008",
    ename: "James Wilson",
    designation: "System Administrator",
    jdate: "02/14/2022",
    status: "Active",
    mark: Math.floor(Math.random() * 2), // Randomly generates either 0 or 1
  },
  {
    empid: "EMP009",
    ename: "Ella Taylor",
    designation: "Network Engineer",
    jdate: "06/30/2023",
    status: "Active",
    mark: Math.floor(Math.random() * 2), // Randomly generates either 0 or 1
  },
  {
    empid: "EMP010",
    ename: "Noah Thomas",
    designation: "Database Administrator",
    jdate: "08/17/2021",
    status: "Inactive",
    mark: Math.floor(Math.random() * 2), // Randomly generates either 0 or 1
  },
  {
    empid: "EMP011",
    ename: "Isabella Hernandez",
    designation: "Cybersecurity Analyst",
    jdate: "10/29/2022",
    status: "Inactive",
    mark: Math.floor(Math.random() * 2), // Randomly generates either 0 or 1
  },
  {
    empid: "EMP012",
    ename: "Liam Lopez",
    designation: "DevOps Engineer",
    jdate: "12/12/2023",
    status: "Inactive",
    mark: Math.floor(Math.random() * 2), // Randomly generates either 0 or 1
  },
  {
    empid: "EMP013",
    ename: "Sophia Scott",
    designation: "Software Tester",
    jdate: "03/18/2021",
    status: "Inactive",
    mark: Math.floor(Math.random() * 2), // Randomly generates either 0 or 1
  },
  {
    empid: "EMP014",
    ename: "Mason Green",
    designation: "Product Owner",
    jdate: "07/22/2022",
    status: "Active",
    mark: Math.floor(Math.random() * 2), // Randomly generates either 0 or 1
  },
  {
    empid: "EMP015",
    ename: "Ava Adams",
    designation: "Scrum Master",
    jdate: "11/05/2023",
    status: "Inactive",
    mark: Math.floor(Math.random() * 2), // Randomly generates either 0 or 1
  },
  {
    empid: "EMP016",
    ename: "Harper Baker",
    designation: "Technical Writer",
    jdate: "05/14/2021",
    status: "Active",
    mark: Math.floor(Math.random() * 2), // Randomly generates either 0 or 1
  },
  {
    empid: "EMP017",
    ename: "Evelyn Rivera",
    designation: "Business Intelligence Analyst",
    jdate: "01/29/2022",
    status: "Active",
    mark: Math.floor(Math.random() * 2), // Randomly generates either 0 or 1
  },
  {
    empid: "EMP018",
    ename: "Alexander Reed",
    designation: "Frontend Developer",
    jdate: "09/10/2023",
    status: "Active",
    mark: Math.floor(Math.random() * 2), // Randomly generates either 0 or 1
  },
  {
    empid: "EMP019",
    ename: "Charlotte Perez",
    designation: "Backend Developer",
    jdate: "06/07/2021",
    status: "Inactive",
    mark: Math.floor(Math.random() * 2), // Randomly generates either 0 or 1
  },
  {
    empid: "EMP020",
    ename: "Ryan Roberts",
    designation: "Full Stack Developer",
    jdate: "04/02/2022",
    status: "Active",
    mark: Math.floor(Math.random() * 2), // Randomly generates either 0 or 1
  },
];

export default function StickyHeadTable({
  empid,
  ename,
  designation,
  jdate,
  status,
}) {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [filters, setFilters] = React.useState({
    empid: "",
    ename: "",
    status: "",
    designation: "",
  });

  const handleChangeFilter = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      empid: "",
      ename: "",
      status: "",
      designation: "",
    });
  };

  const designations = Array.from(new Set(rows.map((row) => row.designation)));
  const statuses = Array.from(new Set(rows.map((row) => row.status)));

  const filteredRows = React.useMemo(() => {
    return rows.filter((row) => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true; // If filter value is empty, return true
        if (key === "designation") {
          // For designation, check if the row value contains the filter value
          return row[key].toLowerCase().includes(value.toLowerCase());
        } else if (key === "status") {
          // For status, check if the row value matches the filter value
          return row[key].toLowerCase() === value.toLowerCase();
        } else {
          // For other fields, check if the row value starts with the filter value
          return row[key].toLowerCase().startsWith(value.toLowerCase());
        }
      });
    });
  }, [filters]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handlePreview = (empid, ename, designation, jdate, status) => {
    console.log("Row Data:", { empid, ename, designation, jdate, status });
  };

  return (
    <div>
      <Menutabs />
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper
          sx={{ overflow: "hidden" }}
          className="md:w-[100%] w-[calc(100vw-0.8rem)] h-[90%] top-24"
        >
          <div className="m-2 gap-2 flex-col items-center grid grid-cols-12 ">
            <TextField
              className={classNames(
                "col-span-12 sm:col-span-6 xl:col-span-2 text-xs",
                classes.root
              )}
              id="empid"
              name="empid"
              label="Employee ID"
              value={filters.empid}
              onChange={handleChangeFilter}
              variant="outlined"
              margin="dense"
            />

            <TextField
              className={classNames(
                "col-span-12 sm:col-span-6 xl:col-span-2 py-1",
                classes.root
              )}
              id="ename"
              name="ename"
              label="Employee Name"
              value={filters.ename}
              onChange={handleChangeFilter}
              variant="outlined"
              margin="dense"
            />
            <FormControl
              variant="outlined"
              margin="dense"
              className={classNames(
                "col-span-12 sm:col-span-6 xl:col-span-2",
                classes.root
              )}
            >
              <InputLabel id="status-label" className="w-52 ">
                Status
              </InputLabel>
              <Select
                labelId="status-label"
                id="status"
                name="status"
                value={filters.status}
                onChange={handleChangeFilter}
                label="Status"
                IconComponent={(props) => (
                  <span>
                    <ArrowDropDownRoundedIcon
                      {...props}
                      sx={{
                        fontSize: 40,
                        // backgroundColor: "#CBCBCB",
                        borderRadius: 2,
                      }}
                    />
                  </span>
                )}
              >
                <GlobalStyles />
                <MenuItem value="">All</MenuItem>
                {statuses.map((statuse) => (
                  <MenuItem key={statuse} value={statuse.toLowerCase()}>
                    {statuse}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              variant="outlined"
              margin="dense"
              className={classNames(
                "col-span-12 sm:col-span-6 xl:col-span-2",
                classes.root
              )}
            >
              <InputLabel id="designation-label" className="w-52">
                Designation
              </InputLabel>
              <Select
                labelId="designation-label"
                id="designation"
                name="designation"
                value={filters.designation}
                onChange={handleChangeFilter}
                label="Designation"
                IconComponent={(props) => (
                  <span>
                    <ArrowDropDownRoundedIcon
                      {...props}
                      sx={{
                        fontSize: 40,
                        // backgroundColor: "#CBCBCB",
                        borderRadius: 2,
                      }}
                    />
                  </span>
                )}
              >
                <GlobalStyles />
                <MenuItem value="">All</MenuItem>
                {designations.map((designation) => (
                  <MenuItem
                    key={designation}
                    value={designation.toLowerCase()}
                    className="bg-sky-50 "
                  >
                    {designation}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <div className="col-span-12 md:col-span-4 flex items-center justify-between ">
              <button
                className="bg-sky-50 md:mt-1 px-4 rounded-md w-fit"
                onClick={handleClearFilters}
              >
                <FaFilterCircleXmark
                  variant="outlined"
                  className="h-11 cursor-pointer text-xl"
                />
              </button>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={filteredRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                style={{ paddingRight: "5px" }}
                className="scrollbar-hide"
              />
            </div>
          </div>
          <TableContainer
            sx={{ maxHeight: 530 }}
            className="m-2 pr-4 scrollbar-hide"
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead className="">
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align="left"
                      style={{
                        minWidth: column.minWidth,
                        backgroundColor: "#f0f9ff",
                        fontWeight: "Bold",
                        fontFamily: "Euclid",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.empid}
                    >
                      {columns.map((column) => (
                        <TableCell key={column.id} align="left">
                          {column.id !== "actions" ? (
                            column.id === "mark" ? (
                              <Tooltip
                                title={row.mark ? "Present" : "Absent"}
                                placement="top"
                                arrow
                              >
                                <div
                                  className={`rounded-full px-1.5 py-0.5 w-fit flex justify-center text-white text-[.7rem] euclid-bold font-bold cursor-pointer ${
                                    row.mark ? "bg-green-500" : "bg-red-500"
                                  }`}
                                >
                                  {row.mark ? "P" : "A"}
                                </div>
                              </Tooltip>
                            ) : (
                              row[column.id]
                            )
                          ) : (
                            <div className="flex items-center gap-2">
                              <Tooltip
                                title={"Edit " + row.ename}
                                placement="top"
                                arrow
                              >
                                <Link
                                  className="hover:bg-[#dbd6fc] rounded-md p-2"
                                  to={{
                                    pathname: `/pim/edit/${
                                      row.empid
                                    }/${encodeURIComponent(
                                      row.ename
                                    )}/${encodeURIComponent(
                                      row.designation
                                    )}/${encodeURIComponent(
                                      row.jdate
                                    )}/${encodeURIComponent(row.status)}`,
                                  }}
                                >
                                  <FaUserEdit className="text-xl" />
                                </Link>
                              </Tooltip>
                              {" | "}
                              <Tooltip
                                title={"View " + row.ename}
                                placement="top"
                                arrow
                              >
                                <Link
                                  className="hover:bg-[#dbd6fc] rounded-md p-2"
                                  to={{
                                    pathname: `/pim/view/${
                                      row.empid
                                    }/${encodeURIComponent(
                                      row.ename
                                    )}/${encodeURIComponent(
                                      row.designation
                                    )}/${encodeURIComponent(
                                      row.jdate
                                    )}/${encodeURIComponent(row.status)}`,
                                  }}
                                >
                                  <IoEye className="text-xl" />
                                </Link>
                              </Tooltip>
                            </div>
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </motion.div>
    </div>
  );
}
