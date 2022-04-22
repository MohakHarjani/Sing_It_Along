
import React, { useState, useRef } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { Songs } from './Songs';
import { ShowSong } from './ShowSong';
import { Artists } from './Artists';
import { ShowArtist } from './ShowArtist';
import { validate } from './../utils/validateInput';
import { AddSong } from './AddSong';
import { AddArtist } from './AddArtist';
import { Playlist } from './Playlist';
//====================================================================================================================
export const DashBoard = ({ msg, isAdmin, user }) => {
  console.log('IS ADMIN IN DASHBOARD', isAdmin)
  const [songInput, setSongInput] = useState('');
  const [artistInput, setArtistInput] = useState('')
  const inputSong = useRef('')
  const inputArtist = useRef('')
  function runSong() {
    let val = validate(inputSong.current.value)
    console.log('input song is', val);
    setSongInput(val)
  }
  function runArtist() {
    let val = validate(inputArtist.current.value)
    setArtistInput(val)
  }
  const inputStyle = {
    width: '400px'

  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let remove = {};
  if (isAdmin === 'false') {
    remove = { display: "none" }
  }
  return (<>
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#"> SING IT ALONG </a>
      <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div style={{ display: 'flex' }}>
        <input style={inputStyle} ref={inputSong} className="form-control form-control-dark " type="text" placeholder="Search [By Song]" aria-label="Search" />
        <button className='btn btn-success' onClick={runSong} style={{ borderRadius: '0px' }}>
          <NavLink to='/search/song' style={{ color: 'white' }}>Search</NavLink>
        </button>
      </div>
      <div style={{ display: 'flex' }}>
        <input style={inputStyle} ref={inputArtist} className="form-control form-control-dark " type="text" placeholder="Search [By Artist]" aria-label="Search" />
        <button className='btn btn-success' onClick={runArtist} style={{ borderRadius: '0px' }}>
          <NavLink to='/search/artist' style={{ color: 'white' }}>Search</NavLink>
        </button>
      </div>
      <div className="navbar-nav"></div>
    </header>
    {/* =========================================================================================================================================== */}

    <div className="container-fluid">
      <div className="row">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/songs" style={{ fontSize: '25px' }}>
                  <span data-feather="home"></span>
                  Songs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/artists" style={{ fontSize: '25px' }}>
                  <span data-feather="file"></span>
                  Artists
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/playlist" style={{ fontSize: '25px' }} >
                  <span data-feather="file"></span>
                  Your Playlist
                </NavLink>
              </li>
              <li className="nav-item" style={remove} >
                <NavLink className="nav-link" to="/addSong" style={{ fontSize: '25px' }}>
                  <span data-feather="file"></span>
                  Add Song
                </NavLink>
              </li>
              <li className="nav-item" style={remove}>
                <NavLink className="nav-link" to="/addArtist" style={{ fontSize: '25px' }}>
                  <span data-feather="file"></span>
                  Add Artist
                </NavLink>
              </li>

            </ul>
          </div>
        </nav>
        {/* ====================================================================================================================================== */}

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2" style={{ color: 'magenta', textDecoration: 'underline' }}>{msg}</h1>

          </div>

          <Switch>
            <Route exact path='/' render={() => { return <Songs isAdmin={isAdmin} username={user.username} /> }} />
            <Route exact path='/songs' render={() => { return <Songs isAdmin={isAdmin} username={user.username} /> }} />
            <Route path='/artists' exact render={() => { return <Artists isAdmin={isAdmin} username={user.username} /> }} />
            <Route path='/search/song' exact render={() => { return <ShowSong songName={songInput} isAdmin={isAdmin} username={user.username} /> }} />
            <Route path='/search/artist' exact render={() => { return <ShowArtist artistName={artistInput} isAdmin={isAdmin} username={user.username} /> }} />
            <Route path='/playlist' exact render={() => { return <Playlist username={user.username} /> }} />
            <Route path='/addSong' exact component={AddSong} />
            <Route path='/addArtist' exact component={AddArtist} />
          </Switch>

        </main>
        {/* ====================================================================================================================================== */}
      </div>
    </div>
  </>
  );
}

