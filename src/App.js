import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';



export default function MediaCard() {
	return (
		<div>
		<h3>Tarjeta 1</h3>
			<Card sx={{ maxWidth: 345, m: 3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be nev o lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
			</Card>
			<h3>Tarjeta 2</h3>
			<Box sx={{ width: 300, m: 3 }}>
				<Card>
					<CardMedia
						component="img"
						height="140"
						image="http://www.placekitten.com/150"
						alt="hermoso gato"
					/>
					<CardContent>
						<Typography variant="h6">Our Changing Planet</Typography>
						<Typography gutterBottom color="text.secondary" variant="body1">
							by Kurt Wagner
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Lizards are a widespread group of squamate reptiles, with over
							6,000 species, ranging across all continents except Antarctica
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small">Share</Button>
						<Button size="small">Learn More</Button>
						<IconButton aria-label="add to favorites">
							<FavoriteIcon />
						</IconButton>
						<IconButton aria-label="share">
							<ShareIcon />
						</IconButton>
					</CardActions>
				</Card>
			</Box>
<h3>Tarjeta 3</h3>
			<Box>
				<Card sx={{ width: 300, m: 3 }}>
					<CardContent sx={{ display: "flex" }}>
						<CardMedia
							component="img"
							height="200"
							image="http://www.placekitten.com/200"
							alt="hermoso gato"
						/>
						<CardActions sx={{ display: "flex", flexDirection: "column" }}>
							<IconButton aria-label="add to favorites">
								<FavoriteIcon />
							</IconButton>
							<IconButton aria-label="Bookmark">
								<BookmarkIcon />
							</IconButton>
							<IconButton aria-label="share">
								<ShareIcon />
							</IconButton>
						</CardActions>
					</CardContent>
				</Card>
			</Box>
			<h3>Tarjeta 4</h3>
			<Box sx={{ width: 350, m: 3 }}>
				<Card>
					<CardMedia
						component="img"
						height="140"
						image="http://www.placekitten.com/300"
						alt="hermoso gato"
					/>
					<CardContent>
						<Typography variant="h6" gutterBottom>Cafe Badilico</Typography>

						 <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
				size="small"
        value= {4.5}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55}}/>}
      />
      <Box sx={{ ml: 2, size:"small"}} gutterBottom>4.5(413)</Box>
    </Box>
						<Typography variant="h8" color="text.primary" sx={{ mb:2}} >$ . Italian, Cafe</Typography>
						<Typography variant="body2" color="text.secondary">
							Smaill plates, salad & sandwichet an intimate setting with 12 indoor seats plus patio seating.
						</Typography>
						<Divider variant="middle" sx={{mb:2, mt:2}}  />
						<Typography variant="h8"color="text.primary" gutterBottom>Tonight´s availlability</Typography>
					</CardContent>

					<CardActions sx={{display: "flex", flexDirection: "column"}}>
           
					   
						 <Box>
						 <Stack direction="row" spacing={1}>
            <Chip label="5:30PM" />
            <Chip color="primary" label="7:30PM" />
            <Chip label="8:00PM" />
            <Chip label="9:00PM" />
           </Stack>
						 </Box>

            <Box sx={{ mt: 3, ml: 1, mb: 1}}>
                 <Button>Reserve</Button>
            </Box>
					</CardActions>


				</Card>
			</Box>
		</div>
	);
}
