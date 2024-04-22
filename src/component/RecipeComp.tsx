import React from 'react'
import SearchIcon from '@mui/icons-material/Search'

const RecipeComp: React.FC = () => {
    return (
        <div>
            <div className="nav-container">
                <a>Home</a>
                <a>About</a>
                <a>Contact</a>
            </div>
            <div className="image-container">
                <img
                    src="/src/assets/pexels-ella-olsson-572949-1640774.jpg"
                    alt="food-img"
                />
                <div className="searchbar-container">
                    <h3>What would you like to cook?</h3>
                    <div className="input-container">
                        <input
                            className="input-field"
                            type="text"
                            placeholder="Search recipes...."
                        />
                        <SearchIcon />
                    </div>
                </div>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere aliquam fugit, quia dolorum cupiditate tenetur
                    similique, soluta doloremque et vel animi pariatur. Deleniti
                    maxime dolore, ab accusantium sapiente eum velit!
                </p>
            </div>
        </div>
    )
}

export default RecipeComp
