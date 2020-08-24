export const initializeMap = (mapRef) => {
  const H = window.H;
  if (!mapRef.current) return;

  const platform = new H.service.Platform({
    apikey: process.env.REACT_APP_HERE_API_KEY,
  });
  const defaultLayers = platform.createDefaultLayers();
  const map = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
    center: { lat: 45.5, lng: -73.56 }, //Montréal
    zoom: 12,
    pixelRatio: window.devicePixelRatio || 1,
  });
  // enable interactive map
  const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  // enable default ui elements like zoom and change map type
  const ui = H.ui.UI.createDefault(map, defaultLayers);

  window.addEventListener('resize', () => map.getViewPort().resize());
  
  return map;
  // This will act as a cleanup to run once this hook runs again.
  // This includes when the component un-mounts
  //return () => {
  //hMap.dispose();
  //};
};

// Add new marker to map
const addMarker = (map, coords) => {
  const H = window.H;
  const marker = new H.map.Marker(coords);
  map.addObject(marker);
};

// if geolocation activated, watch user position and add a pin to map
// args : H property of window and map object as initalized before
export const updateUserPosition = (map) => {
  const H = window.H;
  if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition((position) => {
      const userCoords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      addMarker(map, userCoords);
      map.setCenter(userCoords);
    });
  }
};

export const onTapAddMarker = (map, e) => {
  const { viewportX, viewportY } = e.currentPointer; // API's map event property
  const coords = map.screenToGeo(viewportX, viewportY);
  addMarker(map, { lat: coords.lat, lng: coords.lng });
};

export { addMarker };
