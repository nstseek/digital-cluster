import React from 'react';

const InstrumentClusterPosition = React.createContext<{ x?: number; y?: number }>({ x: 0, y: 0 });

export default InstrumentClusterPosition;
