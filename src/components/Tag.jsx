//import React from 'react';
import PropTypes from 'prop-types';
// text-gray-800 for captions
function Tag({ icon: Icon, title }) {
  return (
    <div className='flex items-center bg-transparent text-gray-100 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 m-1'>
      <Icon className='text-xl' />
      <span className='ml-2 font-[Anzo3]'>{title}</span>
    </div>
  );
}
Tag.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
};
export default Tag;