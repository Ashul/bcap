import React, { Component ,Fragment} from 'react';
import Modal from 'react-modal';
// import GlobalConfig from '../../../config/globalConfig';
// import axios from 'axios';
//import Modal from 'react-bootstrap/Modal'
import {Contactlist} from '../DashboardServices/DashboardServices';
import { connect } from "react-redux";
import Loader from '../../../components/loader';
import { MDBDataTable, MDBBtn } from "mdbreact";
import './EnquiryForm.css';
import  Download  from '../Download';

Modal.setAppElement('body')
class EnquiryFrom extends Component{
    state = {
     loading: true,
     data1: { },
    //  open: false,
    //  rowdata:{},
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
        label: 'subject',
        field: 'subject'
      },
      {
        label: 'User Message',
        field: 'userMsg'
      },
     
    ],
      rows: [],
    };
  
  

async componentDidMount(props){
    let rows = [];
    const { Contactlist } = this.props;
    const response = await Contactlist()
    response.data.forEach(item => rows.push({
          name: item.name,
          email: item.email,
      subject: item.subject,
      userMsg: item.message,
        }));
  this.setState({
        loading: false,
         data1: response,
         rows
     });
  }
// viewItem = (id, rowdata) => {
//     //console.log(rowdata.name)
//     this.setState ({
//       open: true,
//       rowdata: rowdata
//     })
//   }
//  deleteItem =  async function(id) {
//   // e.preventDefault();
//    await axios.delete(`${GlobalConfig.API_ROOT}/contact/${id}`)
//    .then(res => console.log(res.data));
//   }
//  // deleteItem = async id =>{
//  //   await axios.delete(`${GlobalConfig.API_ROOT}/contact/${id}`)
//  // }

    render(){
        const {data1, loading ,open, rowdata} = this.state
        //const [modalIsOpen, setModelIsOpen] = useState(false)
        if (loading) {
          return <Loader/>
      }
      return (
        <Fragment>
                        <h3>Enquiry Form</h3>

            <h1 className="h3 mb-0 text-gray-800">{data1.message}</h1>
            {!loading &&
            (<div className="tableMb">
            <Download data={{ columns: this.state.columns, rows: this.state.rows }} />
                <MDBDataTable striped bordered hover
                  data={{ columns: this.state.columns, rows: this.state.rows }} />
            
              </div>)}
                {/* {loading && <MDBDataTable striped bordered hover
                data={{columns: this.state.columns, rows: this.state.rows }}/>} */}
                {/* <Modal  size="sm" isOpen={open} portalClassName="modalsize">
                  <h1> {rowdata.name}</h1>
                  <hr/>
                  <p>Subject : {rowdata.subject}</p>
                  <p>Message : {rowdata.message}</p>
                  <p>Email : {rowdata.email}</p>
                  <button className="btn btn-primary" onClick={() => {
                  this.setState({open:false})}}>Close</button>
                </Modal> */}
            </Fragment>
        );
    }
}

const mapDispatchToProps = {
  Contactlist
}

export default connect(null, mapDispatchToProps)(EnquiryFrom);
