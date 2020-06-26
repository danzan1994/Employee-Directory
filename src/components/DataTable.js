import React from "react";
import DataBody from "./DataBody";
import "../styles/DataTable.css";

function DataTable({ headings, users, handleSort }) {
  return (
    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {/* ADD A LINE OF CODE TO LOOP THROUGH HEADINGS WITH .map METHOD
                DESTRUCTURE INPUT ARGUMENT TO EXTRACT NAME and WIDTH */}
            {/* THE FOLLOWING RETURN STATEMENT SHOULD BE INSIDE
                OF .MAP CALLBACK BODY */}
              return (
                <th
                  className="col"
                  // ADD KEY AND ASSIGN IT WITH NAME PASSED IN
                  // ADD STYLE FOR WIDTH WITH WIDTH PASSED IN
                  // ADD ONCLICK EVENT TO CALL CALLBACK PASSED IN
                >
                  {/* ADD HEADING NAME PASSED IN HERE */}
                  <span className="pointer"></span>
                </th>
              );
            {/* })} */}
          </tr>
        </thead>
        {/* ADD CODE TO CALL COMPONENT DATABODY PASSING USERS AS INPUT ARGUMENT */}
      </table>
    </div>
  );
}

export default DataTable;
