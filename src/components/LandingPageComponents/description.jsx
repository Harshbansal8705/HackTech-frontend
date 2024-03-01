import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (

    <Card className="Card" >
      {/* <CardMedia
        sx={{ height: 100 }}
        image="/disturbed_student.jpg"
        title="green iguana"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          Our Motive
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt a totam nesciunt facere! Blanditiis sapiente autem inventore voluptatum minima modi aliquam, quas corrupti sed aut optio quam sit asperiores reiciendis architecto explicabo sequi commodi necessitatibus at. Molestiae consequatur enim temporibus numquam delectus excepturi repellendus autem cumque. Magni velit sunt, blanditiis, et asperiores dolorum iusto repellat, sint veritatis esse sequi eum. Suscipit eius aperiam vitae neque aliquid officiis doloremque rerum, molestiae beatae modi. Eos expedita a amet voluptas aliquid id magni, excepturi non dignissimos in deleniti veritatis commodi culpa magnam! Quod qui maiores sapiente neque quo nobis perspiciatis saepe? Optio libero nisi asperiores. Impedit accusantium natus nam odit eum eligendi porro voluptatibus aliquid unde inventore nihil, molestias quae ullam deleniti quas laboriosam repellat ratione voluptates quisquam quibusdam dicta. Minus ea sed esse sunt officiis pariatur vero eos recusandae hic quo quia libero fugiat nam nesciunt beatae rerum veniam voluptas, ab unde ullam. Quidem porro sint mollitia, qui quaerat ratione molestiae a dignissimos aspernatur quos! Ab autem non quam, maiores fugiat perferendis suscipit nemo ipsam quasi, error a consequatur possimus doloribus nesciunt sed? Dolores temporibus incidunt, porro obcaecati quas facere beatae maiores inventore cumque minus amet est, provident quis enim eos sed alias vitae quae consequuntur   
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
    
  );
}