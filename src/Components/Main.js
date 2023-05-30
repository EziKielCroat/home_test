import './Main.css';
import { useRef } from 'react';
function Main() {

    const mainRef = useRef(null);

    const handleMouseEnter = () => {
      mainRef.current.classList.add('hovered');
    };
  
    const handleMouseLeave = () => {
      mainRef.current.classList.remove('hovered');
    };

  return (
    <main className="Main" ref={mainRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h2>See what's going on Polkadot</h2>

      {/*ovaj prozor samo pokazat ako korisnik nije ulogiran */}
      <div className="get-started">
        <h3>Get started with Polkadot!</h3>

        <p>Explore the unique opportunities of the digital currency Polkadot</p>
        <button onClick={() => { console.log("create-account.") }} className="create-account-button">Create account</button>
      </div> 

      <h2>See transactions on Polkadot chain.</h2>
      <p>TBD.</p>
      <p>ako neskuzin kako prikazat sve transakcije(da dobro izgleda), mogu probat prikazat samo transakcije korisnika prijavljene na platformu.</p>
      <p>Qui qui ea facilis quia. In corrupti quia et nihil. Itaque velit a est. Nesciunt asperiores culpa dolores saepe accusantium et laboriosam minima.</p>
      <p>Qui qui ea facilis quia. In corrupti quia et nihil. Itaque velit a est. Nesciunt asperiores culpa dolores saepe accusantium et laboriosam minima.</p>
      <p>Qui qui ea facilis quia. In corrupti quia et nihil. Itaque velit a est. Nesciunt asperiores culpa dolores saepe accusantium et laboriosam minima.</p>
      <p>Qui qui ea facilis quia. In corrupti quia et nihil. Itaque velit a est. Nesciunt asperiores culpa dolores saepe accusantium et laboriosam minima.</p>
      <p>Qui qui ea facilis quia. In corrupti quia et nihil. Itaque velit a est. Nesciunt asperiores culpa dolores saepe accusantium et laboriosam minima.</p>
      <p>Qui qui ea facilis quia. In corrupti quia et nihil. Itaque velit a est. Nesciunt asperiores culpa dolores saepe accusantium et laboriosam minima.</p>
      <p>Qui qui ea facilis quia. In corrupti quia et nihil. Itaque velit a est. Nesciunt asperiores culpa dolores saepe accusantium et laboriosam minima.</p>
      <p>Qui qui ea facilis quia. In corrupti quia et nihil. Itaque velit a est. Nesciunt asperiores culpa dolores saepe accusantium et laboriosam minima.</p>
      <p>Qui qui ea facilis quia. In corrupti quia et nihil. Itaque velit a est. Nesciunt asperiores culpa dolores saepe accusantium et laboriosam minima.</p>
      <p>Qui qui ea facilis quia. In corrupti quia et nihil. Itaque velit a est. Nesciunt asperiores culpa dolores saepe accusantium et laboriosam minima.</p>
    </main>
  );
}

export default Main;
