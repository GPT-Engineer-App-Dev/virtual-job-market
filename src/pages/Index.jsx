import { useState } from "react";
import { Container, VStack, Text, Button, HStack, Box, Heading, StackDivider } from "@chakra-ui/react";

const jobs = [
  { id: 1, title: "Frontend Developer", category: "Engineering" },
  { id: 2, title: "Product Manager", category: "Product" },
  { id: 3, title: "UX Designer", category: "Design" },
  { id: 4, title: "Backend Developer", category: "Engineering" },
  { id: 5, title: "UI Designer", category: "Design" },
];

const Index = () => {
  const [filter, setFilter] = useState("All");

  const filteredJobs = filter === "All" ? jobs : jobs.filter(job => job.category === filter);

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} divider={<StackDivider borderColor="gray.200" />}>
        <Heading as="h1" size="xl">Remote Tech Jobs</Heading>
        <HStack spacing={4}>
          <Button colorScheme="blue" onClick={() => setFilter("All")}>All</Button>
          <Button colorScheme="blue" onClick={() => setFilter("Product")}>Product</Button>
          <Button colorScheme="blue" onClick={() => setFilter("Design")}>Design</Button>
          <Button colorScheme="blue" onClick={() => setFilter("Engineering")}>Engineering</Button>
        </HStack>
        <Box w="100%">
          {filteredJobs.map(job => (
            <Box key={job.id} p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" mb={4}>
              <Text fontSize="xl">{job.title}</Text>
              <Text>{job.category}</Text>
            </Box>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;