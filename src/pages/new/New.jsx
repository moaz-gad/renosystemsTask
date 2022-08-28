import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useNavigate } from "react-router-dom"
import { useState } from "react";


const New = () => {
  
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [group, setGroup] = useState("");
  const navigate = useNavigate()
  
   const handleSubmit = (e) => {
    e.preventDefault();
    const users = { name, username, email,group };
    fetch("http://localhost:8000/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(users),
    }).then(() => {
         navigate("/users")
    });
  };

   return (
     <div className="new">
       <Sidebar />
       <div className="newContainer">
         <Navbar />
         <div className="container">
           <div className="title">Add New User</div>
           <div className="content">
            <div className="formInput">
             </div>
             <form onSubmit={handleSubmit}>
               <div className="user-details">
                 <div className="input-box">
                   <span className="details">Full Name</span>
                   <input
                     type="text"
                     placeholder="Enter full name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     required
                   />
                 </div>
                 <div className="input-box">
                   <span className="details">User Name</span>
                   <input
                     type="text"
                     placeholder="Enter username"
                     required
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                   />
                 </div>
                 <div className="input-box">
                   <span className="details">Email Address</span>
                   <input
                     type="text"
                     placeholder="Enter user email address"
                     required
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                   />
                 </div>
                 <div className="input-box">
                   <span className="details">User Group</span>
                   <select
                     value={group}
                     onChange={(e) => setGroup(e.target.value)}
                   >
                     <option value="Head office">"Head office"</option>
                     <option value="mangers">"mangers"</option>
                     <option value="office">"office"</option>
                   </select>
                 </div>

                 <div className="input-box">
                   <span className="details">Assign Profile</span>
                   <input type="text" placeholder="Choose Profile" />
                 </div>
               </div>
               <div className="button">
                 <input type="submit" value="Add user" />
               </div>
             </form>
           </div>
         </div>
       </div>
     </div>
   )
};

export default New;
