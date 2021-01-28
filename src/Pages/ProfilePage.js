import React from 'react'
import Sidebar from "../Components/Sidebar";

const ProfilePage = () => {
    return (
      <div>
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">this is profile page</div>
        </div>
      </div>
    );
}

export default ProfilePage
