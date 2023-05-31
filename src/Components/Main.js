import React, { useRef } from 'react';
import logo from '../Untitled.png';
import './Main.css';

function Main() {
  const mainRef = useRef(null);

  const handleMouseEnter = () => {
    mainRef.current.classList.add('hovered');
  };

  const handleMouseLeave = () => {
    mainRef.current.classList.remove('hovered');
  };

  const truncate = (word) => {
    if (word.length >= 13) {
      let wordShorted = word.slice(0, 13) + '...';
      return wordShorted;
    }
    return word;
  };

  return (
    <main className="Main" ref={mainRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h2>See what's going on Polkadot</h2>

      {/* Display this window only if the user is not logged in */}
      <div className="get-started">
        <h3>Get started with Polkadot!</h3>
        <p>Explore the unique opportunities of the digital currency Polkadot</p>
        <button onClick={() => { console.log('create-account.') }} className="create-account-button">
          Create account
        </button>
      </div>

      <h2>See transactions on Polkadot chain.</h2>
      <div className="transaction">
        <div className="credentials">
          <img src={logo} alt="pfp" className="p_img" />
          <div>
            <p>{truncate('1682aSxgj3HeD1R18DWc6BPpSQMzHhvPr5jXJgJSLPr58Aeh')}</p>
            <span>1 hour ago</span>
          </div>
        </div>
        <div className="transaction-details">
          <p>sent <div className="monetary-amount-div"><span className="monetary-amount">  1.03 DOT </span></div> to <span>{truncate('bc1q6l08rtj6j907r2een0jqs6l7qnruwyxfshmf8a')}</span></p>
          <div className="tooltip"><span className="tooltiptext">Tooltip text</span></div>
        </div>
      </div>

      <p>Work In Progress.</p>
    </main>
  );
}

export default Main;
