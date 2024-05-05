import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean
}
type Recipe = {
    idMeal: string
    strMeal: string
    strCategory: string
    strMealThumb: string
    strSource: string
    strYoutube: string
    strInstructions: string
    strArea: string
}
type RecipeListsProps = {
    recipes: Recipe[]
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
    })
}))

const RecipeLists: React.FC<RecipeListsProps> = ({ recipes }) => {
    const [expanded, setExpanded] = React.useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <div className="list-container">
            {recipes.map((recipe) => (
                <Card
                    key={recipe.idMeal}
                    sx={{ maxWidth: 345 }}
                    style={{ width: '100%' }}
                >
                    <CardHeader
                        avatar={
                            <Avatar
                                sx={{ bgcolor: red[500] }}
                                aria-label="recipe"
                            >
                                {recipe.strArea.charAt(0)}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={recipe.strMeal}
                        subheader={new Date().toDateString()}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={recipe.strMealThumb}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {recipe.strArea}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                Method: {recipe.strInstructions}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            ))}
        </div>
    )
}
export default RecipeLists
