<div className="card">
            <header className="card-header">
            <h2> {data.name} </h2>

            </header>
            <main className="card-main">
            <h3>  {data.species}</h3>

            </main>
            <footer>
            {/* <button onClick={event => findCharacters(data.characters)}> View Characters </button> */}
            <Link to='/movies/moose' className='btn'>  
            <button onClick={event => findCharacters(data.characters)}> View Characters </button>            
             </Link>

            </footer>
        </div>