import React from 'react';

let currentPage = 1; // Initialize current page as a regular variable

const Cont = () => {
  const itemsPerPage = 4;
  const items = [
    'Item 1',
    'Item 2',
    'Item 9',
    'Item 10',
    'Item 9',
    'Item 10',
    'Item 11',
    'Item 12',
    'Item 9',
    'Item 10',
    'Item 11',
    'Item 12',
    'Item 11',
    'Item 12',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10',
    'Item 11',
    'Item 12',
    // Add more items here
  ];

  const paginate = pageNumber => {
    currentPage = pageNumber;
    forceUpdate(); // Trigger a re-render
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // A function to force re-render
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <nav>
        <ul className="pagination">
          {Array.from({ length: Math.ceil(items.length / itemsPerPage) }).map((_, index) => (
            <li key={index}>
              <button onClick={() => paginate(index + 1)}>{index + 1}</button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Cont;
