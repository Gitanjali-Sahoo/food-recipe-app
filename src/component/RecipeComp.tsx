import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import RecipeLists from './RecipeLists'


type FoodRecipes = {
    idMeal: string
    strMeal: string
    strCategory: string
    strArea: string
    strInstructions: string
    strMealThumb: string
    strTags: string
    strYoutube: string
    strSource: string
}

const RecipeComp: React.FC = () => {
    const [recipes, setRecipes] = useState<FoodRecipes[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://www.themealdb.com/api/json/v1/1/search.php?s='
                )
                const data = await response.json()
                setRecipes(data.meals || [])
                setLoading(false)
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message)
                } else {
                    setError('An unknown error occurred')
                }
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

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
                <RecipeLists recipes={recipes}/>
                {/* <p>All the recipes</p>

                <div>
                    {recipes.map((recipe) => (
                        <Card key={recipe.idMeal} sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={recipe.strMealThumb}
                                title={recipe.strCategory}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {recipe.strMeal}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {recipe.strCategory}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">{recipe.strSource}</Button>
                                <Button size="small">
                                    {recipe.strYoutube}
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </div> */}
            </div>
        </div>
    )
}

export default RecipeComp
