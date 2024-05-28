// mock json file for mock database request 
import jsondata from './mock_transactions.json';

// mock function for data fetch (database request simulation)
const mockAsyncFetch = (ms) => {
  return new Promise(
    resolve => setTimeout(
      () => resolve(jsondata)   // mocked JSON file data
      , ms
    )
  );
}

export const fetchMockedData = async () => {
  try {
    const mockedData = await mockAsyncFetch(500) ;
    return mockedData ; 
  }
  catch (error) {
    console.error (error) ; 
  }
}
