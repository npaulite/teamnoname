import React from "react";

export default function test() {
  return (
    <div>
      <div className="col-lg-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Basic Table</h4>
            <p className="card-description">
              Add class <code>.table</code>
            </p>
            <div className="table-responsive">
              <table className="table-striped">
                <thead>
                  <tr>
                    <th>Profile</th>
                    <th>VatNo.</th>
                    <th>Created</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jacob</td>
                    <td>53275531</td>
                    <td>12 May 2017</td>
                    <td>
                      <label className="badge badge-danger">Pending</label>
                    </td>
                  </tr>
                  <tr>
                    <td>Messsy</td>
                    <td>53275532</td>
                    <td>15 May 2017</td>
                    <td>
                      <label className="badge badge-warning">In progress</label>
                    </td>
                  </tr>
                  <tr>
                    <td>John</td>
                    <td>53275533</td>
                    <td>14 May 2017</td>
                    <td>
                      <label className="badge badge-info">Fixed</label>
                    </td>
                  </tr>
                  <tr>
                    <td>Peter</td>
                    <td>53275534</td>
                    <td>16 May 2017</td>
                    <td>
                      <label className="badge badge-success">Completed</label>
                    </td>
                  </tr>
                  <tr>
                    <td>Dave</td>
                    <td>53275535</td>
                    <td>20 May 2017</td>
                    <td>
                      <label className="badge badge-warning">In progress</label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
