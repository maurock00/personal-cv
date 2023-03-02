import { Table } from "reactstrap";
import React from "react";
import * as Constants from "../Constants";
import { MdPhoneIphone, MdEmail, MdPlace } from "react-icons/md";

function ProfileDetails() {
  return (
    <Table borderless className="custom-table">
      <tbody>
        <tr>
          <td className="td-right">
            <h4>
              <MdPhoneIphone />
            </h4>
          </td>
          <td className="td-left">{Constants.PhoneNumber}</td>
        </tr>
        <tr>
          <td className="td-right">
            <h4>
              <MdEmail />
            </h4>
          </td>
          <td className="td-left">{Constants.EmailAddress}</td>
        </tr>
        <tr>
          <td className="td-right">
            <h4>
              <MdPlace />
            </h4>
          </td>
          <td className="td-left">{Constants.Home}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ProfileDetails;
