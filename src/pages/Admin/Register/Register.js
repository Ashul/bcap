import React, { Component ,Fragment} from 'react';
import {Registrationform} from '../DashboardServices/DashboardServices';
// import GlobalConfig from '../../../config/globalConfig';
// import axios from 'axios';
import { connect } from "react-redux";
import Loader from '../../../components/loader';
import { MDBDataTable, MDBBtn } from "mdbreact";
// import UserEdit from '../UserEdit/UserEdit';
import './Register.css';
import  Download  from '../Download';


class RegisterUser extends Component{
    state = {
        loading: true,
        editBox: false,
        id:'',
        data1: { },
     columns:[
      
      {
        label: 'name',
        field: 'name'
      },
      {
        label: 'email',
        field: 'email'
      },
      {
        label: 'phone',
        field: 'mobile'
       },
       {
        label: 'Amount Required',
        field: 'amountReq'
       },
       {
        label: 'Required For',
        field: 'reqFor'
      },
      // {
      //   label: 'edit',
      //   field: 'edit'
      // },
    ],
      rows: [],
    };
async componentDidMount(props){
     let rows = [];
    const { Registrationform} = this.props;
    const response = await Registrationform()
      response.data.forEach(item => rows.push({
          name: item.name,
          email: item.email,
          mobile: item.mobile,
        amountReq: item.amountReq,
          reqFor: item.reqFor,
          // edit: <MDBBtn color="primary" onClick={() => this.detailsItem(item.id,item)}> Edit</MDBBtn>
        }));
    this.setState({
        loading: false,
         data1: response,
         rows
     });
   }


// detailsItem = (id) => {
//   const url = `${GlobalConfig.API_ROOT}/registration_form/${id}`;
//   //const formData = new FormDta()
//     //console.log('url..'+url)
//   return axios.get(url)
//   .then((response) => {
//       const detailsObj = response.data;
//       this.setState({
//         eachrowData: detailsObj,
//         editBox: true,
//         loading:false,
//       });
//     }).catch((e) => {
//         console.log(e)
//   });
// }

//  handleFormSubmit =(e) =>{
//     e.preventDefault();
//     const url = `${GlobalConfig.API_ROOT}/registration_form/6`;
//     console.log(url)
//     return axios.post(url)
//     .then((response) => {
//      const detailsObj =  response.data;
//         console.log(detailsObj)
//         this.setState({
//           eachrowData: detailsObj,
//           editBox: false,
//           loading:true,

//         });
//       }).catch((e) => {
//           console.log(e)
//     });
//   }
// onCancel =() =>{
//   this.setState({
//     editBox: false,
//     loading:true
//   });
// }
// handleChange = (e) =>{
//   //console.log(e.target.value)
// }
    render(){
      const { data1, loading, editBox, eachrowData } = this.state
      if (loading) {
        return <Loader/>
      }
        return (
            <Fragment>
              <h3>Applied Online</h3>
                {!loading && <h1 className="h3 mb-0 text-gray-800">{data1.message}</h1>}
            {!loading &&
              (<div className="tableMb">
               <Download data={{ columns: this.state.columns, rows: this.state.rows }} />

                <MDBDataTable striped bordered hover
                  data={{ columns: this.state.columns, rows: this.state.rows }} />
            
              </div>)}
                {/* {editBox && <UserEdit  eachrowData={eachrowData.data }
                 onCancel={this.onCancel} handleFormSubmit={this.handleFormSubmit}
                 handleChange ={this.handleChange}/>} */}
            </Fragment>
        );
    }

}

const mapDispatchToProps = {
  Registrationform
}

export default connect(null, mapDispatchToProps)(RegisterUser);
