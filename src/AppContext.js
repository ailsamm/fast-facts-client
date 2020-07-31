import React from 'react';

const AppContext = React.createContext({
    episodes: [],
    onAddNewEpisode: () => {},
    onDeleteEpisode: () => {},
});

export default AppContext;
