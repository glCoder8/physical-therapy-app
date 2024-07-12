import React from "react";

const Filters = ({ clinic, provider, onClinicChange, onProviderChange }) => {
  return (
    <div className="filter-container">
      <label>
        Clinic:
        <select value={clinic} onChange={onClinicChange}>
          <option value="">All</option>
          <option value="Clinic 792">Clinic 792</option>
          <option value="Clinic 1011">Clinic 1011</option>
        </select>
      </label>
      <label>
        Provider:
        <select value={provider} onChange={onProviderChange}>
          <option value="">All</option>
          <option value="Provider 4435">Provider 4435</option>
          <option value="Provider 6543">Provider 6543</option>
          <option value="Provider 3931">Provider 3931</option>
          <option value="Provider 6900">Provider 6900</option>
          <option value="Provider 2806">Provider 2806</option>
          <option value="Provider 1539">Provider 1539</option>
          <option value="Provider 4561">Provider 4561</option>
        </select>
      </label>
    </div>
  );
};

export default Filters;
