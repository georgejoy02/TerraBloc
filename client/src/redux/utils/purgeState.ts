import storage from 'redux-persist/lib/storage';

const purgePersistedState = async () => {
    try {
        await storage.removeItem('root');
    } catch (error) {
        console.error('Error purging persisted state:', error);
    }
};
export default purgePersistedState;