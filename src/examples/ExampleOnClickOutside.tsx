import React, { useRef, useState } from 'react';
import useOnClickOutside from '../hooks/useOnClickOutside';

const ExampleOnClickOutside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  // Close the modal when clicking outside of it
  useOnClickOutside(ref, () => setIsOpen(false));

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Toggle Modal</button>
      {isOpen && (
        <div ref={ref} style={{ border: '1px solid black', padding: '20px', marginTop: '10px' }}>
          <p>Click outside of this box to close the modal</p>
        </div>
      )}
    </div>
  );
};

export default ExampleOnClickOutside;
