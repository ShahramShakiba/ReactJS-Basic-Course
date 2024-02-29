import { useEffect, useRef, useState } from 'react';
import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';

export default function App() {
  const modal = useRef();
  const selectedPlace = useRef();
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState([]);

  // Get user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const sortedPlaces = sortPlacesByDistance(
          AVAILABLE_PLACES,
          position.coords.latitude,
          position.coords.longitude
        );

        setAvailablePlaces(sortedPlaces);
      },
      (error) => {
        console.error('Error getting location: ', error);
        // Set a default location if the geolocation fails
        let defaultPosition = {
          coords: {
            latitude: 36.7651,
            longitude: 45.7218,
          },
        };

        let sortedPlaces = sortPlacesByDistance(
          AVAILABLE_PLACES,
          defaultPosition.coords.latitude,
          defaultPosition.coords.longitude
        );

        setAvailablePlaces(sortedPlaces);
      }
    );
  }, []);

  const handleStartRemovePlace = (id) => {
    modal.current.open();
    selectedPlace.current = id;
  };

  const handleStopRemovePlace = () => {
    modal.current.close();
  };

  const handleSelectPlace = (id) => {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const storedIDs = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    if (storedIDs.indexOf(id) === -1) {
      localStorage.setItem(
        'selectedPlaces',
        JSON.stringify([id, ...storedIDs])
      );
    }
  };

  const handleRemovePlace = () => {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    modal.current.close();
  };

  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>

      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />

        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting places by distance..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

/* Side Effects
Side Effects are "tasks" that don't impact the current component render cycle

* useEffect() - do not return a value, instead ...
* useEffect( 
  () => {},  // function to run when dependencies change
  []     // array of values/dependencies that cause re-run 
 )          (if we define it and empty: the function will execute only once )
            (if we omit the second parameter ([]) then it will execute every time)

? the code inside this function won't execute right away | this function will be executed by React after every component execution | 
*/

/* indexOf(id) === -1
* /// it means this ID is not part of storedIDs yet
if (storedIDs.indexOf(id) === -1) {
      localStorage.setItem(
        'selectedPlaces',
        JSON.stringify([id, ...storedIDs])
      );
    }
*/