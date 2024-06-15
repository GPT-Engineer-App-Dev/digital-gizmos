import { Container, Box, VStack, Heading, Text, SimpleGrid, Image, Button, Input, Checkbox, CheckboxGroup, Stack, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from "@chakra-ui/react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: 699,
    category: "Electronics",
    brand: "Brand A",
    image: "/images/smartphone.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    price: 999,
    category: "Electronics",
    brand: "Brand B",
    image: "/images/laptop.jpg",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stay connected on the go",
    price: 199,
    category: "Wearables",
    brand: "Brand A",
    image: "/images/smartwatch.jpg",
  },
  {
    id: 4,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: 299,
    category: "Accessories",
    brand: "Brand C",
    image: "/images/headphones.jpg",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
  };

  const handleBrandChange = (brands) => {
    setSelectedBrands(brands);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchQuery = product.name.toLowerCase().includes(searchQuery);
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearchQuery && matchesCategory && matchesBrand && matchesPrice;
  });

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Electronics Store
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover the latest in electronic devices
        </Text>
        <Input
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearchChange}
          mb={8}
        />
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Filter by Category
          </Heading>
          <CheckboxGroup onChange={handleCategoryChange}>
            <Stack spacing={2} direction="row">
              <Checkbox value="Electronics">Electronics</Checkbox>
              <Checkbox value="Wearables">Wearables</Checkbox>
              <Checkbox value="Accessories">Accessories</Checkbox>
            </Stack>
          </CheckboxGroup>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Filter by Brand
          </Heading>
          <CheckboxGroup onChange={handleBrandChange}>
            <Stack spacing={2} direction="row">
              <Checkbox value="Brand A">Brand A</Checkbox>
              <Checkbox value="Brand B">Brand B</Checkbox>
              <Checkbox value="Brand C">Brand C</Checkbox>
            </Stack>
          </CheckboxGroup>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Filter by Price
          </Heading>
          <RangeSlider
            aria-label={['min', 'max']}
            defaultValue={[0, 1000]}
            min={0}
            max={1000}
            step={10}
            onChangeEnd={handlePriceChange}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          <Text mt={2}>Price Range: ${priceRange[0]} - ${priceRange[1]}</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                  {product.name}
                </Heading>
                <Text mb={4}>{product.description}</Text>
                <Text fontWeight="bold" mb={4}>
                  ${product.price}
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