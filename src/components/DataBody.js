import React from "react";
import "../styles/DataBody.css";

function DataBody({ users }) {
  function formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }

  return (
    <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ login, name, picture, phone, email, dob }) => {
          return (
            <tr key={login.uuid}>
              <td data-th="Image" className="align-middle">
                <img
                  // ADD ATTRIBUTE SRC FOR IMAGE
                  alt={"profile image for " + name.first + " " + name.last}
                  className="img-responsive"
                />
              </td>
              <td data-th="Name" className="name-cell align-middle">
                {/* ADD FIRST NAME AND LAST NAME HERE */}
              </td>
              <td data-th="Phone" className="align-middle">
                {/* ADD PHONE # HERE */}
                {phone}
              </td>
              <td data-th="Email" className="align-middle">
                <a href={"mailto:" + email} target="__blank">
                  {/* ADD EMAIL HERE */}
                </a>
              </td>
              <td data-th="DOB" className="align-middle">
                {/* ADD DOB DATE HERE - USING FORMATDATE FUNC */}
              </td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );
}

export default DataBody;
