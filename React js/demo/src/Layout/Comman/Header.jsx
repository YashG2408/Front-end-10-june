import React from 'react'
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';

function Header() {
  return (
    
    <div>
         <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            // onClick={() => setShowBasic(!showBasic)}
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <MDBCollapse navbar show>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink href='/'>Home </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/Feauters'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/Pricing'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
                 <MDBNavbarItem>
                <MDBNavbarLink href='/Life'>Life Cycle</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem style={{display:"flex",flexDirection:"row"}}>
                <MDBNavbarLink href='/About'>About  </MDBNavbarLink>
                {/* <MDBNavbarLink href='/About/About1'>About 1  </MDBNavbarLink>
                <MDBNavbarLink href='/About/About2'>About 2  </MDBNavbarLink> */}

              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '400px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Router Topic</h1>
              <h4 className='mb-3'>Path change</h4>
              <MDBBtn tag="a" outline size="lg">
                Call to action
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header