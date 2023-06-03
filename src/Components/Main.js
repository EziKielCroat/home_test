import { useRef } from 'react';
import './Main.css';

const gravatar = require('gravatar');

function Main() {
  const mainRef = useRef(null);

  const truncate = (word, n) => {
    if (word.length >= n) {
      let wordShorted = word.slice(0, n) + '...';
      return wordShorted;
    }
    return word;
  };

  const generateRandomEmail = () => {
    const domain = ['example.com', 'test.com', 'domain.com'];
    const randomString = Math.random().toString(36).substr(2, 10);
  
    const randomDomain = domain[Math.floor(Math.random() * domain.length)];
    const email = `${randomString}@${randomDomain}`;
  
    return email;
  }

  return (
    <main className="Main" ref={mainRef}>
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
      <div className="transactions">
        <div className="transaction" id="1">
          <div className="credentials">
            <img src={gravatar.url(generateRandomEmail(), {d: 'identicon'})} alt="pfp" className="p_img" />
            <div>
              <p className="truncate">{truncate("1682aSxgj3HeD1R18DWc6BPpSQMzHhvPr5jXJgJSLPr58Aeh", 20)}</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="transaction-details">
            <p>sent <div className="monetary-amount-div"><span className="monetary-amount">  1.03 DOT </span></div> to <span>{truncate("bc1q6l08rtj6j907r2een0jqs6l7qnruwyxfshmf8a", 20)}</span></p>
            <div className="tooltip"><span className="tooltiptext">5.39$</span></div>
          </div>
        </div>
        <div className="transaction" id="2">
          <div className="credentials">
          <img src={gravatar.url(generateRandomEmail(), {d: 'identicon'})} alt="pfp" className="p_img" />
            <div>
              <p className="truncate">{truncate("1682aSxgj3HeD1R18DWc6BPpSQMzHhvPr5jXJgJSLPr58Aeh", 20)}</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="transaction-details">
            <p>sent <div className="monetary-amount-div"><span className="monetary-amount">  1.03 DOT </span></div> to <span>{truncate("bc1q6l08rtj6j907r2een0jqs6l7qnruwyxfshmf8a", 20)}</span></p>
            <div className="tooltip"><span className="tooltiptext">5.39$</span></div>
          </div>
        </div>
        <div className="transaction" id="3">
          <div className="credentials">
          <img src={gravatar.url(generateRandomEmail(), {d: 'identicon'})} alt="pfp" className="p_img" />
            <div>
              <p className="truncate">{truncate("1682aSxgj3HeD1R18DWc6BPpSQMzHhvPr5jXJgJSLPr58Aeh", 20)}</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="transaction-details">
            <p>sent <div className="monetary-amount-div"><span className="monetary-amount">  1.03 DOT </span></div> to <span>{truncate("bc1q6l08rtj6j907r2een0jqs6l7qnruwyxfshmf8a", 20)}</span></p>
            <div className="tooltip"><span className="tooltiptext">5.39$</span></div>
          </div>
        </div>
      </div>
      <p>Work In Progress.</p>
    </main>
  );
}

export default Main;
