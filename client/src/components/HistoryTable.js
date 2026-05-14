function HistoryTable() {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Date</th>
          <th>Water</th>
          <th>Calories</th>
          <th>Exercise</th>
          <th>Sleep</th>
          <th>Weight</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>2026-05-13</td>
          <td>3L</td>
          <td>2200</td>
          <td>45</td>
          <td>8</td>
          <td>72</td>

          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default HistoryTable;