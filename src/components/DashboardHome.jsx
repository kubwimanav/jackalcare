import React from 'react'
import { TiFolderDelete } from "react-icons/ti";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import "../styles/DashboardHome.css";
function DashboardHome() {
  return (
    <div className="dashboard-home">
      <div className="dashboard-cards">
        <div className="card">
          <div className="card-header">
            <p>Total Appointments</p>
            <TiFolderDelete style={{ color: "blue" }} />
          </div>
          <p>24</p>
          <p className="card-pragraph2">8 upcoming this month</p>
        </div>

        <div className="card">
          <div className="card-header">
            <p>Total Appointments</p>
            <TiFolderDelete style={{ color: "blue" }} />
          </div>
          <p>24</p>
          <p className="card-pragraph2">8 upcoming this month</p>
        </div>

        <div className="card">
          <div className="card-header">
            <p>Total Appointments</p>
            <TiFolderDelete style={{ color: "blue" }} />
          </div>
          <p>24</p>
          <p className="card-pragraph2">8 upcoming this month</p>
        </div>
      </div>

      <div className="dashboard-buttons">
        <button className="button-home1">
          <IoIosAdd />
          <p>Book Appointment</p>
        </button>

        <button className="button-home2">
          <IoIosAdd />
          <p>View Reports</p>
        </button>
        <button className="button-home3">
          <IoIosAdd />
          <p>Contact Support</p>
        </button>
      </div>

      <div className="activity-cards">
        <p>Recenty Activity</p>
        <div className="activity-card1">
          <MdOutlineSportsKabaddi className="activity-card1-icon1" />
          <div className="activity-paragraph">
            <p>Prescription Renewed</p>
            <p className="activity-paragraph-p">
              Dr. Michael Brown - 2 days ago
            </p>
          </div>
        </div>
        <div className="activity-card1">
          <MdOutlineSportsKabaddi className="activity-card1-icon2" />
          <div className="activity-paragraph">
            <p>Prescription Renewed</p>
            <p className="activity-paragraph-p">
              Dr. Michael Brown - 2 days ago
            </p>
          </div>
        </div>
        <div className="activity-card1">
          <MdOutlineSportsKabaddi className="activity-card1-icon3" />
          <div className="activity-paragraph">
            <p>Prescription Renewed</p>
            <p className="activity-paragraph-p">
              Dr. Michael Brown - 2 days ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome