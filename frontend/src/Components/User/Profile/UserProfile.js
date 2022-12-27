import React, { useEffect, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const UserProfile = () => {
    const auth = localStorage.getItem('user');

    // const [profile, setProfile] = useState('')
    
    // const params = useParams();
    // useEffect(()=>{
    //   getUserDetail();
    // })

    // const getUserDetail = async() => {
    //     const {data} = await axios.get(`http://localhost:5000/users/userDetails/${params.id}`,)
    //     console.log(data)
    // }
  return (    
    <div>
      <div className="vh-100" style={{ backgroundColor: '#eee' }}>
        <MDBContainer className="container py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="12" xl="4">
              <MDBCard style={{ borderRadius: '15px' }}>
                <MDBCardBody className="text-center">
                  <div className="mt-3 mb-4">
                    <MDBCardImage
                      src={JSON.parse(auth).avatar}
                      className="rounded-circle"
                      fluid
                      style={{ width: '100px' }}
                    />
                  </div>
                  <MDBTypography tag="h4">{JSON.parse(auth).firstName} {JSON.parse(auth).lastName}</MDBTypography>
                  <MDBCardText className="text-muted mb-4">
                     
                    <a href="#!">{JSON.parse(auth).email}</a>
                    <span className="mx-2">|</span>{' '}
                    <a>Id : {JSON.parse(auth)._id}</a> 
                  </MDBCardText>
                  <div className="mb-4 pb-2">
                    <MDBBtn outline floating>
                      <MDBIcon fab icon="facebook" size="lg" />
                    </MDBBtn>
                    <MDBBtn outline floating className="mx-1">
                      <MDBIcon fab icon="twitter" size="lg" />
                    </MDBBtn>
                    <MDBBtn outline floating>
                      <MDBIcon fab icon="skype" size="lg" />
                    </MDBBtn>
                  </div>
                  <MDBBtn rounded size="lg">
                    Message now
                  </MDBBtn>
                  <div className="d-flex justify-content-between text-center mt-5 mb-2">
                    <div>
                      <MDBCardText className="mb-1 h5">8471</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Wallets Balance
                      </MDBCardText>
                    </div>
                    <div className="px-3">
                      <MDBCardText className="mb-1 h5">8512</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Followers
                      </MDBCardText>
                    </div>
                    <div>
                      <MDBCardText className="mb-1 h5">4751</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Total Transactions
                      </MDBCardText>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  )
}

export default UserProfile
