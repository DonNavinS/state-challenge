# state-challenge

This challenge involved replacing the existing React Context API technology with teh Redux technology to allow components to access the global state. Many of the files
involved did not need to be changed, such as the actions and reducers files since Redux and Context API both use these two file types. However, instead of creating 
the store in a GlobalState file, it was created in the App.js file using the createStore() method that is part of the redux package. This global store was then passed
as a prop to the Provider component (from the react-redux package), which contained all the application's components as children, allowing them all access to the store.
I also included the Redux DevTools Extension when creating the store to allow me to check the state of the application when it was loaded in Chrome. 

In every component that needed access to the global store, I replaced the useStoreContext() method with the useSelector() and useDispatch() methods that come with
react-redux. useSelector() was used to initialize the state within that component, and useDispatch() was used to dispatch an action that would be used to determine
which reducer would be executed in the component. 
