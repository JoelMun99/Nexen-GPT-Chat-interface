import { Layout } from './components/Layout/Layout';
import { ChatContainer } from './components/Chat/ChatContainer';
import { ChatProvider } from './context/ChatContext';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <ChatProvider>
        <Layout>
          <ChatContainer />
        </Layout>
      </ChatProvider>
    </UserProvider>
  );
}

export default App;