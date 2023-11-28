import React from 'react';

const IconInput = ({ icon: IconComponent, ...props }) => {
  return (
    <div style={{ position: 'relative' }}>
      <input
      className='p-1 text-gray-900 rounded px-9'
        type="text"
        placeholder='Search...'
        {...props}
      />
      <IconComponent
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          color:'#2564cf'
        }}
      />
    </div>
  );
};

export default IconInput;
