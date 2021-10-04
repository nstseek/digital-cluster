import React from 'react';

const GaugeSize = React.createContext<{ height?: number; width?: number }>({ height: 0, width: 0 });

export default GaugeSize;
