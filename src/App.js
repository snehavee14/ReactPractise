import React from 'react';
import './App.css';
import Classcounter from './components/Classcounter'
import HookCounter from './components/HookCounter'
import HookCounterFour from './components/HookCounterFour'
import HookCounterThree from './components/HookCounterThree'
import HookCountertwo from './components/HookCountertwo'
import HookCounterOne from './components/HookCounterOne'
import HookMouse from './components/HookMouse'
import IntervalHookCounter from './components/IntervalHookCounter'
import DataFetching from './components/DataFetching'
import ComponentC from './components/ComponentC'
import Counterone from './components/Counterone'
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import FocusInput from './components/FocusInput';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <Classcounter></Classcounter> */}
      {/* <HookCounter></HookCounter> */}
      <HookCounterOne></HookCounterOne>
      <HookCountertwo></HookCountertwo>
      <HookCounterThree></HookCounterThree>
      <HookCounterFour></HookCounterFour>
      <HookMouse></HookMouse>
      <IntervalHookCounter></IntervalHookCounter>
      <DataFetching></DataFetching>
      <UserContext.Provider value="Sneha">
        <ChannelContext.Provider value="Channel">
          <ComponentC></ComponentC>
        </ChannelContext.Provider>
      </UserContext.Provider>
      <Counterone></Counterone>
      <DataFetchingOne></DataFetchingOne>
      <DataFetchingTwo></DataFetchingTwo>
      <FocusInput></FocusInput>
    </div>
  );
}

export default App;
