import { Box, Skeleton, SkeletonText } from '@chakra-ui/react';

export default function GameCardSkeleton() {
  return (
    <Box borderRadius={8} overflow="hidden" bg="gray.700">
      <Skeleton height="200px" />
      <Box p={4}>
        <SkeletonText mt={2} noOfLines={2} gap={4} />
      </Box>
    </Box>
  );
}
