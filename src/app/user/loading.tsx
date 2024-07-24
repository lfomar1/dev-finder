import { Box, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box padding="6" boxShadow="lg">
      <SkeletonCircle size="20" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="4" />
    </Box>
  );
};

export default Loading;
