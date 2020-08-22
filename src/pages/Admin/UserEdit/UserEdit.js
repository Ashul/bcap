import React, { Component ,Fragment} from 'react';
import GlobalConfig from '../../../config/globalConfig';
import axios from 'axios';
import './UserEdit.css'


const UserEdit = (props) =>{
return (
    <>
    <h1 className="h1">Edit User</h1>
    <hr />
    <div id="editUser">
    <form onSubmit={props.handleFormSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" defaultValue={props.eachrowData.name}
          onChange={props.handleChange}/>
        </div>
        <div className="form-group">
          <label>Father Name</label>
          <input type="text" name="name" defaultValue={props.eachrowData.father_name}
           onChange={props.handleChange}/>
        </div>
        <div className="form-group">
          <label>Gender</label>
          <input type="text" name="name" defaultValue={props.eachrowData.gender_name}
            onChange={props.handleChange}/>
        </div>
        <div className="form-group">
          <label>Message</label>
          <input type="text" name="name" defaultValue={props.eachrowData.message}
           onChange={props.handleChange}/>
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" name="name" defaultValue={props.eachrowData.phone}
          onChange={props.handleChange}/>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="text" name="name" defaultValue={props.eachrowData.email}
           onChange={props.handleChange}/>
        </div>
        <div className="form-group">
          <label>District</label>
          <input type="text" name="name" defaultValue={props.eachrowData.district_name}
           onChange={props.handleChange}/>
        </div>
    </form>
    <div className="marginBottom">
      <button className="btn marginaround btn-primary" onClick={props.handleFormSubmit}>Upadate </button>
      <button className="btn marginaround btn-primary" onClick={props.onCancel}>Cancel</button>
      </div>
      </div>
    </>
   )
}


// const handleFormSubmit=(e)=>{
//      e.preventDefault();
//      alert('save')
//   }
//
//
// const onCancel=(e)=>{
//     e.preventDefault();
//     alert('onCancel')
// }
export default UserEdit
