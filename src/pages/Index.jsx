import { Container, Box, VStack, Heading, Text, SimpleGrid, Image, Button } from "@chakra-ui/react";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    image: "/images/smartphone.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    price: "$999",
    image: "/images/laptop.jpg",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stay connected on the go",
    price: "$199",
    image: "/images/smartwatch.jpg",
  },
  {
    id: 4,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: "$299",
    image: "/images/headphones.jpg",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Electronics Store
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover the latest in electronic devices
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {products.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                  {product.name}
                </Heading>
                <Text mb={4}>{product.description}</Text>
                <Text fontWeight="bold" mb={4}>
                  {product.price}
                </Text>
                <Button colorScheme="teal" variant="solid">
                  Add to Cart
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;