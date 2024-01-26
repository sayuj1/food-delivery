import React from 'react';
export default function CategorySection({ categories, setCategories }) {
  const handleClick = e => {
    let newState = [...categories];
    let ind = newState.findIndex(
      cat => cat.title === e.target.getAttribute('name')
    );
    newState[ind].selected = !newState[ind].selected;
    setCategories(newState);
  };
  return (
    <div className='grid grid-cols-3 lg:grid-cols-6 gap-4 mb-4'>
      {categories.map(category => (
        <div
          key={`${category.title}-${category.id}`}
          name={category.title}
          onClick={handleClick}
          className={
            category.selected
              ? `rounded-xl shadow-md flex flex-col items-center p-2 cursor-pointer hover:bg-[#F8F9FF] border-2 border-blue-700 text-blue-700 bg-blue-100`
              : `rounded-xl shadow-md flex flex-col items-center p-2 cursor-pointer hover:bg-[#F8F9FF]`
          }
        >
          <div
            className='w-full h-15 object-cover rounded-xl mb-2 flex justify-center'
            name={category.title}
          >
            <img
              src={category.image}
              className='h-12 w-12'
              name={category.title}
              alt=''
            />
          </div>

          <div className='text-sm text-gray-700' name={category.title}>
            {category.title}
          </div>
        </div>
      ))}
    </div>
  );
}
