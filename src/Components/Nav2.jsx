import React from 'react';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon
} from 'mdb-react-ui-kit';
import { Component } from 'react';
import SignIn from './SignIn';
import Main from './Main';
import FormPage from './SignUp';

import { isMenneger, loadOneUser } from '../Redax/Users/UserAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ShowUsers from './ShowUsers';
import {
    MDBNavbarBrand, MDBNavItem, MDBNavLink, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { Fragment } from "react";
import { MDBBtn } from "mdbreact";



import V1 from './V1';
import V2 from './V2';
import V3 from './V3';
import V4 from './V4';
import ChartsPage from './graf';
import MemberDetails from './MemberDetails';
import AdditionalContentExample from './Notification';
import UpdateKoronaDetails from './UpdateKoronaDetails';

export default function Nav2() {
    const dispatch = useDispatch();
    const M = useSelector((store) => { return store.users.isMenneger });
    const U = useSelector((store) => { return store.users.user });
    return (
        <BrowserRouter>
            <div>

                <header style={{ direction: 'rtl', fontWeight: 'bold', fontSize: '20px', color: '#4b24da'}}>
                    <MDBNavbar expand='lg' light bgColor='white' sticky > 
                        <MDBContainer fluid>
                            <MDBNavbarToggler
                                aria-controls='navbarExample01'
                                aria-expanded='false'
                                aria-label='Toggle navigation'
                            >

                            </MDBNavbarToggler>
                            <div className='collapse navbar-collapse' id='navbarExample01'>
                                <MDBNavbarNav right className='mb-2 mb-lg-0'>
                                    <MDBNavbarItem active>
                                        <MDBNavbarLink aria-current='page' >
                                        
                                        <NavLink aria-current='page' to='/'> <MDBIcon fab  icon="connectdevelop" style={{ fontSize:"40px"}} />  </NavLink>

                                        </MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink > <NavLink aria-current='page' to='/'>  דף הביית </NavLink></MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink > <NavLink to='/v1' >חיסון ראשון</NavLink></MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink > <NavLink to='/v2' >חיסון שני</NavLink></MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink > <NavLink to='/V3' >חיסון שלישי</NavLink></MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink > <NavLink to='/V4' >חיסון רביעי</NavLink></MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink ><NavLink to='/users' >כל הלקוחות</NavLink></MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink ><NavLink to='/graf' >גרף</NavLink></MDBNavbarLink>
                                    </MDBNavbarItem>


                                    {(U.memberID != "") &&
                                        <MDBNavbarItem>
                                            <MDBNavbarLink ><NavLink to={`/MemberDetails/${U.memberID}`}>  החיסונים שלי</NavLink></MDBNavbarLink>
                                        </MDBNavbarItem>
                                    }
                                   
                                </MDBNavbarNav>

                                <MDBNavbarItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            <MDBIcon icon="user" />
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                        {(U.memberID == "" ) &&
                                        <>
                                            <NavLink to='/sign_in'><MDBDropdownItem>התחבר</MDBDropdownItem></NavLink>
                                           
                                            <NavLink to='/sign'><MDBDropdownItem>הרשם עכשיו</MDBDropdownItem></NavLink></>}
                                            {(U.memberID != "") &&
                                                <MDBDropdownItem ><NavLink to={`/sign/${U.memberID}`}>עדכן פרטיך אצלנו</NavLink></MDBDropdownItem>

                                            }
                                            {(U.memberID != "" ) &&
                                                <MDBNavbarItem>
                                                    <MDBDropdownItem onClick={() => { (globalThis.location.href = 'http://localhost:3000/') }} >התנתק</MDBDropdownItem>
                                                </MDBNavbarItem>}
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavbarItem>


                            </div>
                        </MDBContainer>
                    </MDBNavbar>

                    <div
                        className='p-5 text-center bg-image'
                        style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFAQx_Wt21kAnF4toZrIYtswqTLCOlN8ByhA&usqp=CAU')", height: 400 }}
                    >
                        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                                <div className='text-white'>
                                    <h1 className='mb-3'>8200 HEALTH SERVICE</h1>
                                    {(U.memberID == "") ?
                                        <div>
                                            <h4 className='mb-3'>עדיין לא חבר אצלנו?</h4>
                                            <NavLink className='btn btn-outline-light btn-lg' to='sign' role='button'>
                                                הירשם עכשיו
                                            </NavLink></div>
                                        :
                                        <h4 className='mb-3'>ברוך הבא {U.memberName+" "}  {" "+U.memberLastName}</h4>

                                    }
                                </div>
                            </div>
                        </div>

                    </div> 
               
                    
                    </header>
                {/* 
      <p className='mt-4'>Scroll down</p>
      <p>Scroll down</p>
      <p>Scroll down</p> */}
 



                <Switch>
                    <Route path='/home' exact component={Main} />
                    <Route path="/sign" exact component={FormPage} store={store} />
                    <Route path="/sign_in" exact component={SignIn} store={store} />
                    <Route path='/n/:cnt' exact component={AdditionalContentExample} />

                    <Route path="/users" exact component={ShowUsers} store={store} />
                    {/* <Route path="/menneger" exact component={Menneger} store={store} /> */}
                    <Route path="/sign/:id" exact component={FormPage} store={store} />
                    {/* <Route path='/bless' exact component={bless} /> */}

                    <Route path="/UpdateKoronaDetails/:id" exact component={UpdateKoronaDetails} store={store} />
                    <Route path="/graf" exact component={ChartsPage} store={store} />
                    <Route path="/v1" exact component={V1} store={store} />
                    <Route path="/v2" exact component={V2} store={store} />
                    <Route path="/v3" exact component={V3} store={store} />
                    <Route path="/v4" exact component={V4} store={store} />
                    <Route path="/MemberDetails/:id" exact component={MemberDetails} store={store} />



                    {/* <Route component={PageNotFound}  ></Route> */}
                </Switch>
            </div>
        </BrowserRouter>
    );
}