import React from "react";


function MoviesData(props) {

    const { movies } = props

    if (!movies || movies.length === 0) return <p>Нет данных.</p>

    return (
        <div className="verst">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Movie</th>
                        <th>Genre</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map((movie) =>
                            <tr key={movie.id}>
                                <td>{movie.id}</td>
                                <td>{movie.title}</td>
                                <td>{movie.category}</td>
                                <td>{movie.rating}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
      </div>
    )
}

export default MoviesData