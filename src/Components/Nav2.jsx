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
import ShowPictures from './ShowPictures';
import FormPage from './SignUp';
import ShowPicturesByCategory from './ShowPicturesByCategory';
import Menneger from './Menneger';
import OnePictureOnClik from './OnePictureOnClik';
import { isMenneger, loadOneUser } from '../Redax/Users/UserAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ShowUsers from './ShowUsers';
import bless from './buyBlessFromMenneger';
import {
    MDBNavbarBrand, MDBNavItem, MDBNavLink, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import eCommercePage from './ShopingBasket';
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import TheGamePicture from './TheGamePicture';
import { Fragment } from "react";
import { MDBBtn } from "mdbreact";
import NewGame from './NewGame';
import Oops from './Oops';
import MyGames from './MyGames';
export default function Nav2() {
    const dispatch = useDispatch();
    const M = useSelector((store) => { return store.users.isMenneger });
    const U = useSelector((store) => { return store.users.user });
    return (
        <BrowserRouter>
            <div>

                <header style={{ direction: 'rtl', fontWeight: 'bold', fontSize: '20px', color: '#4b24da',backgroundColor: "#f1f1f1" }}>
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
                                        <MDBNavbarLink > <NavLink to='/Pictures' >צפה במשחקים המוכנים</NavLink></MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink > <NavLink to='/NewGame' >משחקים חדשים </NavLink></MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink ><NavLink to='/kategory' >צפה במשחקים לפי קטגוריות</NavLink></MDBNavbarLink>
                                    </MDBNavbarItem>



                                    {(U.userPassword != "") &&
                                        <MDBNavbarItem>
                                            <MDBNavbarLink>  <NavLink to='/MyGames' >המשחקים שלי</NavLink></MDBNavbarLink>
                                        </MDBNavbarItem>
                                    }
                                    {(M == 1) &&
                                        <MDBNavbarItem>
                                            <MDBNavbarLink>  <NavLink to='/users' >רשימת החברים</NavLink></MDBNavbarLink>
                                        </MDBNavbarItem>}
                                </MDBNavbarNav>

                                <MDBNavbarItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            <MDBIcon icon="user" />
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                            <NavLink to='/sign_in'><MDBDropdownItem>התחבר</MDBDropdownItem></NavLink>
                                            <NavLink to='/menneger' > <MDBDropdownItem >היכנס כמנהל</MDBDropdownItem></NavLink>
                                            {(M == 1) &&
                                                <button onClick={() => { (dispatch(isMenneger(0))), alert("מצב מנהל כבוי") }}> <MDBDropdownItem>צא ממצב מנהל</MDBDropdownItem></button>
                                            }
                                            <NavLink to='/sign'><MDBDropdownItem>הרשם עכשיו</MDBDropdownItem></NavLink>
                                            {(U.userPassword != "") &&
                                                //  <NavLink > <MDBDropdownItem onClick={()=>upUser(U.nameUser,U.userPassword)}>עדכן פרטיך אצלנו</MDBDropdownItem></NavLink>
                                                <MDBDropdownItem ><NavLink to={`/sign/${U.userName}/${U.userPassword}`}>עדכן פרטיך אצלנו</NavLink></MDBDropdownItem>

                                            }
                                            {(U.userPassword != "" && (M == 0)) &&
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
                        style={{ backgroundImage: "url('https://bakes.co.il/wp-content/uploads/2019/03/%D7%98%D7%A4%D7%98-%D7%A0%D7%A7%D7%95%D7%93%D7%95%D7%AA-%D7%A6%D7%91%D7%A2%D7%95%D7%A0%D7%99.jpg')", height: 400 }}
                    >
                        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                                <div className='text-white'>
                                    <h1 className='mb-3'>DOT. נקודה</h1>
                                    {(U.userPassword == "") ?
                                        <div>
                                            <h4 className='mb-3'>עדיין לא חבר אצלנו?</h4>
                                            <NavLink className='btn btn-outline-light btn-lg' to='sign' role='button'>
                                                הירשם עכשיו
                                            </NavLink></div>
                                        :
                                        <h4 className='mb-3'>ברוך הבא {U.userName+" "}  {" "+U.userLastName}</h4>

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
                    <Route path="/Pictures" exact component={ShowPictures} store={store} />
                    <Route path="/sign" exact component={FormPage} store={store} />
                    <Route path="/sign_in" exact component={SignIn} store={store} />
                    <Route path='/kategory' exact component={ShowPicturesByCategory} />
                    <Route path="/MyGames" exact component={MyGames} store={store} />

                    <Route path="/users" exact component={ShowUsers} store={store} />
                    <Route path="/menneger" exact component={Menneger} store={store} />
                    <Route path="/onePicture/:codePicture" component={OnePictureOnClik} ></Route>
                    <Route  path="/Pictures/:codeCategory" exact component={ShowPictures} store={store}></Route>
                    <Route path="/sign/:nameUser/:passUser" exact component={FormPage} store={store} />
                    <Route path='/bless' exact component={bless} />

                    {/* <Route path='/signUppdate' exact component={FormPage} /> */}
                    <Route path="/game/:x" exact component={TheGamePicture} store={store} />
                    <Route path="/NewGame" exact component={NewGame} store={store} />
                    <Route path="/oops" exact component={Oops} store={store} />


                    {/* <Redirect from="/" to="/home" exact /> */}
                    {/* <Route component={PageNotFound}  ></Route> */}
                </Switch>
            </div>
        </BrowserRouter>
    );
}