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
  height:215px;
  border-radius:10px;
} 
.MuiMenuItem-root {
    font-family: Euclid;
    font-size: 14px;
    font-weight: bold;
    margin: auto 8px;
    border-radius: 7px;
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
  { id: "from", label: "From", minWidth: 120 },
  { id: "to", label: "To", minWidth: 120 },
  { id: "reason", label: "Reason", minWidth: 120 },
  { id: "noofleaves", label: "No Of Leaves", minWidth: 120 },
];

function createData(from, to, reason, noofleaves) {
  return { from, to, reason, noofleaves };
}

// Function to calculate the number of days between two dates
function calculateDaysBetweenDates(fromDate, toDate) {
  const from = new Date(fromDate);
  const to = new Date(toDate);
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  return Math.round(Math.abs((from - to) / oneDay)) + 1; // Adding 1 to include both start and end dates
}

const rows = [
  {
    from: "05/15/2021",
    to: "05/16/2021",
    reason: "Vacation",
    noofleaves: calculateDaysBetweenDates("05/15/2021", "05/15/2021"), // 1 day
  },
  {
    from: "06/01/2021",
    to: "06/02/2021",
    reason: "Sick Leave",
    noofleaves: calculateDaysBetweenDates("06/01/2021", "06/02/2021"), // 3 days
  },
  {
    from: "07/10/2021",
    to: "07/11/2021",
    reason: "Family Emergency",
    noofleaves: calculateDaysBetweenDates("07/10/2021", "07/11/2021"), // 3 days
  },
  {
    from: "08/05/2021",
    to: "08/05/2021",
    reason: "Personal Time",
    noofleaves: calculateDaysBetweenDates("08/05/2021", "08/05/2021"), // 2 days
  },
  {
    from: "09/01/2021",
    to: "09/01/211",
    reason: "Workshop",
    noofleaves: calculateDaysBetweenDates("09/01/2021", "09/1/2021"), // 2 days
  },
];

export default function Attendance({ from, to, reason, noofleaves }) {
  const classes = useStyles();

  console.log(noofleaves);

  const totalLeaves = rows.reduce((total, row) => total + row.noofleaves, 0);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [filters, setFilters] = React.useState({
    // empid: "",
    // ename: "",
    // status: "",
    // designation: "",
    from: "",
    to: "",
    reason: "",
    noofleaves: "",
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
      from: "",
      to: "",
      reason: "",
      noofleaves: "",
    });
  };

  // const designations = Array.from(new Set(rows.map((row) => row.designation)));
  // const statuses = Array.from(new Set(rows.map((row) => row.status)));

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

  const handlePreview = (from, to, reason, noofleaves) => {
    console.log("Row Data:", { from, to, reason, noofleaves });
  };

  console.log(rows.noofleaves);

  return (
    <div>
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
              id="from"
              name="from"
              label="From Date"
              value={filters.from}
              onChange={handleChangeFilter}
              variant="outlined"
              margin="dense"
            />
            <TextField
              className={classNames(
                "col-span-12 sm:col-span-6 xl:col-span-2 py-1",
                classes.root
              )}
              id="to"
              name="to"
              label="To Date"
              value={filters.to}
              onChange={handleChangeFilter}
              variant="outlined"
              margin="dense"
            />
            {/* <FormControl
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
                <MenuItem></MenuItem>
              </Select>
            </FormControl> */}
            {/* <FormControl
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
                <MenuItem></MenuItem>
              </Select>
            </FormControl> */}

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
                      key={row.from}
                    >
                      {columns.map((column) => (
                        <TableCell key={column.id} align="left">
                          {column.id !== "actions" ? (
                            row[column.id]
                          ) : (
                            <div className="flex items-center gap-2"></div>
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <div className="px-2 py-4 font-bold bg-sky-50 flex">
              <h2 className=" w-4/6">Total Leaves Of Month</h2>
              <h5 className="ml-36">{totalLeaves}</h5>
            </div>
          </TableContainer>
        </Paper>
      </motion.div>
    </div>
  );
}
