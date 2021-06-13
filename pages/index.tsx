import { ChakraProvider } from '@chakra-ui/react';
import RoutingDecision from '../components/RoutingDecision';

export default function Home() {
  return (
    <div>
      <ChakraProvider>
        <RoutingDecision />
      </ChakraProvider>
    </div>
  );
}
