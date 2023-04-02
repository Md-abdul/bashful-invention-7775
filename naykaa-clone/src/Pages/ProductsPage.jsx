
import React from 'react'
import { Link } from 'react-router-dom';
import { Card,Image, CardHeader, Button,ButtonGroup, CardBody, Divider,CardFooter,Stack,Heading,Text,Grid,GridItem  } from '@chakra-ui/react'
import Brands from './Brands';
 function ProductsPage(props) {

    const {id,brand,price,image_link,rating,name} = props;
    
    const handelclick = () => {

    }

  return (
    <div>
        {/* <div style={{border:'1px solid'}}>
            
            <img src={image_link} alt="products" />
            <h3>Price: ₹ {price}</h3>
            <h3>Brand:{brand}</h3>
            <h4>Rating: ★ {rating}</h4>
            <Link to={`/Brands/${id}`}>more </Link>
        </div> */}


   

          <Card maxW='sm' mt={10}>
    <CardBody>
    <Image
      src={image_link}
      borderRadius='lg'
      boxSize='350px'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'> {name}</Heading>
      <Text>
        {}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      $ {price}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {rating} ★★★★★
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
          </Card>
    

    </div>
  )
}

export default ProductsPage;

