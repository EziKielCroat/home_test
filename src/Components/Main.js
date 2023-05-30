
import './Main.css';

function Main() {

    return(
        <main className="Main">
            <h2>See what's going on Polkadot</h2>

            {/*ovaj prozor samo pokazat ako korisnik nije ulogiran */}
            <div className="get-started">
                <h3>Get started with Polkadot!</h3>

                <p>Explore the unique opportunities of the digital currency Polkadot</p>
                <button onClick={() =>{console.log("create-account.")}} className="create-account-button">Create account</button>
            </div>
        </main>
    )
}

export default Main