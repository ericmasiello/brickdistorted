import React from 'react';

function Nav() {
  return (
    <nav className="breadcrumb-area bg-dark bg-img1 overlay mb-30">
      <div className="container d-flex flex-column text-center">
        <h1 className="text-white my-auto pt-120">Grid 02</h1>
        <ol className="breadcrumb bg-dark mx-auto justify-content-center">
          <li className="breadcrumb-item"><a href="../index.html">Home</a> </li>
          <li aria-current="page" className="breadcrumb-item active">Portfolio</li>
        </ol>
      </div>
    </nav>
  );
}

export default Nav;
