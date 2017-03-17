import React from 'react'
import Appbar from "muicss/lib/react/appbar";
import "./AppBar.css";

const AppBar = ({ appName }) => (
  <Appbar>
    <table width="100%">
      <tbody>
        <tr>
          <td className="mui--appbar-height fa-3x">
            {appName}
          </td>
          <td className="mui--appbar-height">
            <i className="fa fa-bars fa-3x" />
          </td>
        </tr>
      </tbody>
    </table>

  </Appbar>
);

export default AppBar