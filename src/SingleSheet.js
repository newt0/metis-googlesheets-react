import React from "react";
import PropTypes from "prop-types";
import { withGoogleSheets } from "react-db-google-sheets";

const SingleSheet = (props) => (
  <div>
    <table className="table">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>image</th>
        </tr>
      </thead>
      <tbody>
        {props.db.samplesheet.map((data) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>
              <img
                src={data.image}
                alt={data.name}
                style={{ maxWidth: "300px", maxHeight: "300px" }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <button className="btn btn-primary" onClick={props.refetch}>
      Refresh
    </button>
  </div>
);

SingleSheet.propTypes = {
  db: PropTypes.shape({
    samplesheet: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default withGoogleSheets("samplesheet")(SingleSheet);
